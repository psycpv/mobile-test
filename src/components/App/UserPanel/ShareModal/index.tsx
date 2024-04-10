import MainButton from 'components/Button/MainButton'
import CustomCheckbox from 'components/CheckBox/CustomCheckBox'
import Column from 'components/Column'
import { Modal } from 'components/Modal'
import { Row, RowBetween, RowFixed } from 'components/Row'
import useQuote from 'hooks/useQuote'
import html2canvas from 'html2canvas'
import { useEffect, useMemo, useRef, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { Quote, QuoteStatus } from 'types/quote'
import { ShareInfo } from './ShareInfo'
import { ShareInfoData } from 'types/position'
import { ThemedText } from 'components/Text'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Download as DownloadIcon, TwitterX as TwitterIcon } from 'components/Icons'
import { useMarket } from 'hooks/useMarkets'
import { formatAmount } from 'utils/numbers'
import { useIsMobile } from 'lib/hooks/useWindowSize'
import { Close as CloseIcon } from 'components/Icons'
import { LoadingSpinner2 } from 'components/LoadingSpinner'

const Text = styled(ThemedText.Main)`
  white-space: nowrap;
`

const ModalWrapper = styled(Modal)`
  overflow: hidden;
  max-height: none;
`

const ShareInfoOverlay = styled(ShareInfo)`
  width: 750px;
  height: 400px;
`

const ShareCard = styled.div`
  position: relative;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    width: 350px;
    height: 186px;
  `}

  width: 750px;
  height: 400px;
  overflow: hidden;
`

const ButtonIcon = styled.div`
  display: flex;
  margin-left: 8px;
  margin-top: 2px;
`
const Spacer = styled.div`
  flex-grow: 1;
`

const StyledButton = styled(MainButton)`
  & > * {
    box-shadow: none;
  }
`

const MobileWrapper = styled(Column)`
  padding: 16px;
`

const Loading = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content; center;
  background: ${({ theme }) => theme.color3};
  width: 100%;
  height: 100%;
  z-index: 2;

  & > * {
    margin: auto;
  }
`
const Close = styled.div`
  border: none;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  position: absolute;
  z-index: 100;
  top: 10px;
  right: 10px;
  background: ${({ theme }) => theme.color3};
  border-radius: 50%;
`

const GIF_BASE_PATH = '/static/images/sharecard/'
const ALL_IMAGES = [
  GIF_BASE_PATH + 'share_win.gif',
  GIF_BASE_PATH + 'share_win.png',
  GIF_BASE_PATH + 'share_lose.gif',
  GIF_BASE_PATH + 'share_lose.png',
]

export default function ShareModal({
  modalOpen,
  toggleModal,
  quote,
}: {
  modalOpen: boolean
  toggleModal: () => void
  quote: Quote
}) {
  const { value, pnlValue, upnlPercent, symbol, pnlPercent, leverage, quoteOpenPrice, quoteMarketPrice } =
    useQuote(quote)
  const market = useMarket(quote.marketId)

  const [showPercentage, setShowPercentage] = useState(true)
  const [showGif, setShowGif] = useState(false)
  const [gifContent, setGifContent] = useState('')
  const percent = isHistory(quote.quoteStatus) ? pnlPercent : upnlPercent
  const quoteValue = isHistory(quote.quoteStatus) ? pnlValue : value
  const theme = useTheme()
  const [downloading, setDownloading] = useState(false)
  const [tweeting, setTweeting] = useState(false)
  const [isLoading, setLoading] = useState(true)

  const shareInfoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const imagePromises = ALL_IMAGES.map((src) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image()
        img.src = src
        img.onload = () => resolve()
        img.onerror = () => reject()
      })
    })

    Promise.all(imagePromises).then(() => {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    })
  }, [])

  useEffect(() => {
    const extension = showGif ? '.gif' : '.png'
    const suffix = quoteValue.startsWith('-') ? 'lose' : 'win'
    const path = `${GIF_BASE_PATH}share_${suffix}${extension}`
    setGifContent(path)
  }, [showGif, quoteValue])

  const captureImage = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (shareInfoRef.current) {
        html2canvas(shareInfoRef.current, {
          backgroundColor: 'transparent',
          onclone: (document: Document, element: Element) => {
            const div = element as HTMLDivElement
            div.style.scale = '1'
          },
        })
          .then(async (canvas) => {
            const dataURL = canvas.toDataURL()
            resolve(dataURL.slice(22))
          })
          .catch((error) => {
            reject(new Error('Error capturing image: ' + error))
          })
      } else {
        reject(new Error('shareInfoRef.current is not available.'))
      }
    })
  }

  const positionData = useMemo<ShareInfoData>(
    () => ({
      type: quote.positionType,
      referralCode: '234563433',
      value: quoteValue,
      percent,
      symbol: symbol ? symbol : '',
      leverage,
      openPrice: quoteOpenPrice,
      lastPrice:
        quote.avgClosedPrice != '0'
          ? formatAmount(quote.avgClosedPrice, market !== undefined ? market.pricePrecision : 2, true)
          : quoteMarketPrice,
      openPriceTime: quote.createTimestamp * 1000,
      lastPriceTime: quote.avgClosedPrice != '0' ? quote.statusModifyTimestamp * 1000 : new Date().getTime(),
    }),
    [quote, symbol, quoteOpenPrice, quoteMarketPrice, percent, quoteValue, market]
  )

  const processDownload = async (gifUrl: string) => {
    const response = await fetch(gifUrl)
    const blob = await response.blob()
    const contentType = response.headers.get('content-type')
    let extension
    if (contentType === 'image/gif') {
      extension = 'gif'
    } else if (contentType === 'image/png') {
      extension = 'png'
    } else {
      extension = ''
    }

    const downloadUrl = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = 'share_card.' + extension
    link.click()

    URL.revokeObjectURL(downloadUrl)
  }

  const processTweet = async (gifUrl: string) => {
    const encodedGifUrl = encodeURIComponent(gifUrl)
    const shareUrl = encodeURIComponent(
      `${window.location.origin}/api/twitter-redirect?platform=twitter&image_url=${encodedGifUrl}`
    )
    const shareText = `I'm vibin' on Vibe 😎`
    window.open(
      `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`,
      'twitterPopup',
      'width=600,height=400'
    )
  }

  const generateGif = async (overlayImage: string) => {
    const response = await axios.post('/api/generate-gif', { overlayImage, gifFile: gifContent })

    return response.data
  }

  const downloadShareCard = async () => {
    if (tweeting || downloading) return

    setDownloading(true)
    try {
      const overlayImage = await captureImage()

      const newGif = await generateGif(overlayImage)

      if (newGif.url) {
        await processDownload(newGif.url)

        toast.success('Share gif downloaded')
      }
    } catch (error) {
      console.error('Error posting tweet:', error)
    }
    setDownloading(false)
  }

  const tweetShareCard = async () => {
    if (tweeting || downloading) return

    setTweeting(true)

    try {
      const overlayImage = await captureImage()

      const newGif = await generateGif(overlayImage)

      if (newGif.url) {
        processTweet(newGif.url)
      }
      console.log('Tweet posted successfully!')
    } catch (error) {
      console.error('Error posting tweet:', error)
    }
    setTweeting(false)
  }
  const mobileVersion = useIsMobile()

  return (
    <ModalWrapper
      isOpen={quote ? modalOpen : false}
      onBackgroundClick={() => toggleModal()}
      onEscapeKeydown={() => toggleModal()}
      width="750px"
    >
      <Column>
        <ShareCard>
          {isLoading && (
            <Loading>
              <LoadingSpinner2 />
            </Loading>
          )}
          <Close onClick={() => toggleModal()}>
            <CloseIcon size={12} />
          </Close>
          <img src={gifContent} alt="happy" width="100%" />
          <ShareInfoOverlay positionData={positionData} refContent={shareInfoRef} showPercentage={showPercentage} />
        </ShareCard>
        {!mobileVersion ? (
          <RowBetween padding="12px 20px 20px 20px" gap="20px">
            <Column>
              <Text color="#A0A0A0">Display Values:</Text>
              <Row marginTop="5px" gap="20px">
                <CustomCheckbox
                  checked={showPercentage}
                  onClick={async () => setShowPercentage(true)}
                  label="Percentage"
                />
                <CustomCheckbox
                  checked={!showPercentage}
                  onClick={async () => setShowPercentage(false)}
                  label="USD Value"
                />
              </Row>
            </Column>
            <Column>
              <Text color="#A0A0A0">Type:</Text>
              <Row marginTop="5px" gap="20px">
                <CustomCheckbox checked={showGif} onClick={async () => setShowGif((value) => !value)} label="GIF" />
              </Row>
            </Column>
            <Spacer />
            <RowFixed gap="5px" marginTop={24}>
              {!showGif && (
                <StyledButton
                  width={148}
                  height={38}
                  customText={tweeting ? 'Sharing on...' : 'Share on'}
                  onClick={tweetShareCard}
                  simpleMode={true}
                  shadowHeight={1}
                  // icon={BASED_LOGO}
                >
                  <ButtonIcon>
                    <TwitterIcon size={18} />
                  </ButtonIcon>
                </StyledButton>
              )}

              <StyledButton
                width={148}
                height={38}
                customText={downloading ? 'Downloading...' : 'Download'}
                bgColor={theme.color4}
                hoverColor={theme.color5}
                borderColor={theme.yankeesBlue}
                textColor={theme.white}
                onClick={downloadShareCard}
                simpleMode={true}
                shadowHeight={1}
                // icon={BASED_LOGO}
              >
                <ButtonIcon>
                  <DownloadIcon size={18} />
                </ButtonIcon>
              </StyledButton>
            </RowFixed>
          </RowBetween>
        ) : (
          <MobileWrapper>
            <Column>
              <Text width={60} color="#A0A0A0">
                Display Values:
              </Text>

              <Row marginTop="2px" gap="20px">
                <CustomCheckbox
                  checked={showPercentage}
                  onClick={async () => setShowPercentage(true)}
                  label="Percentage"
                />
                <CustomCheckbox
                  checked={!showPercentage}
                  onClick={async () => setShowPercentage(false)}
                  label="USD Value"
                />
              </Row>
            </Column>
            <Column>
              <Text marginTop="5px" width={60} color="#A0A0A0">
                Type:
              </Text>
              <Row marginTop="2px" gap="20px">
                <CustomCheckbox checked={showGif} onClick={async () => setShowGif((value) => !value)} label="GIF" />
              </Row>
            </Column>
            <RowBetween justify="center" gap="5px" marginTop={'20px'}>
              {!showGif && (
                <StyledButton
                  width={148}
                  height={38}
                  customText={tweeting ? 'Sharing on...' : 'Share on'}
                  onClick={tweetShareCard}
                  simpleMode={true}
                  shadowHeight={1}
                >
                  <ButtonIcon>
                    <TwitterIcon size={18} />
                  </ButtonIcon>
                </StyledButton>
              )}

              <StyledButton
                width={148}
                height={38}
                customText={downloading ? 'Downloading...' : 'Download'}
                bgColor={theme.color4}
                hoverColor={theme.color5}
                borderColor={theme.yankeesBlue}
                textColor={theme.white}
                onClick={downloadShareCard}
                simpleMode={true}
                shadowHeight={1}
              >
                <ButtonIcon>
                  <DownloadIcon size={18} />
                </ButtonIcon>
              </StyledButton>
            </RowBetween>
          </MobileWrapper>
        )}
      </Column>
    </ModalWrapper>
  )
}

function isHistory(quoteStatus: QuoteStatus) {
  return (
    quoteStatus === QuoteStatus.CANCELED ||
    quoteStatus === QuoteStatus.CLOSED ||
    quoteStatus === QuoteStatus.EXPIRED ||
    quoteStatus === QuoteStatus.LIQUIDATED
  )
}
