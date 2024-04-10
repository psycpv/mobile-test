import Column from 'components/Column'
import { Row, RowBetween, RowFixed } from 'components/Row'
import Image from 'next/image'
import QRCode from 'qrcode'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { ShareInfoData } from 'types/position'
import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'
import { formatTimestamp } from 'utils/time'
import { ThemedText } from 'components/Text'

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

const Text = styled(ThemedText.Main)`
  white-space: nowrap;
`

const PositionDataWrapper = styled.div<{ scale: number }>`
  position: absolute;
  top: 0px;
  left: 0px;
  scale: ${({ scale }) => scale};
  transform-origin: left top;
`

const VibeImage = styled.div`
  position: absolute;
  top: 20px;
  left: 60px;
  width: 320px;
  height: 130px;
  z-index: 10;
`

const QRImage = styled(Column)`
  position: absolute;
  top: 260px;
  left: 300px;
  width: 100px;
  height: 80px;
  z-index: 10;
  align-items: end;
`
const QRWrapper = styled.div`
  min-width: 50px;
  min-height: 50px;
`

const PositionData = styled.div`
  position: absolute;
  background: #191233;
  width: 420px;
  height: 260px;
  left: 15px;
  top: 112px;
  border-radius: 10px;
  border-style: solid;
  border-width: 4px;
  border-color: white;
  display: flex;
  flex-direction: column;
  padding: 30px;
  padding-top: 40px;
`

export function ShareInfo({
  positionData,
  className,
  refContent,
  showPercentage,
}: {
  positionData: ShareInfoData | undefined
  refContent: any
  className?: string
  showPercentage: boolean
}) {
  const [qrImageUrl, setQRImageUrl] = useState('')
  const logo = useCurrencyLogo(positionData?.symbol)

  const formatValue = (value: string | undefined) => {
    if (!value) return ''
    const trimmed = value.replace(/\s/g, '')
    return trimmed.startsWith('-') || trimmed.startsWith('+') ? trimmed : `+${trimmed}`
  }

  useEffect(() => {
    if (positionData) {
      QRCode.toCanvas(positionData.referralCode, {
        margin: 0,
        color: {
          dark: '#fff',
          light: '#000',
        },
      })
        .then((canvas) => {
          const ctx = canvas.getContext('2d')
          if (ctx !== null) {
            // Create a linear gradient
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
            gradient.addColorStop(0, '#faa0d7')
            gradient.addColorStop(1, '#81bef1')

            // Apply the gradient as a fill style on the QR code canvas
            ctx.globalCompositeOperation = 'multiply'
            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Get the pixel data of the canvas
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
            const data = imageData.data

            // Make black pixels transparent
            for (let i = 0; i < data.length; i += 4) {
              const red = data[i]
              const green = data[i + 1]
              const blue = data[i + 2]
              const alpha = data[i + 3]

              // Check if the pixel is black (assuming RGB values are equal)
              if (red === 0 && green === 0 && blue === 0) {
                // Set the alpha channel to 0 (transparent)
                data[i + 3] = 0
              }
            }

            // Put the modified pixel data back to the canvas
            ctx.putImageData(imageData, 0, 0)
          }
          return canvas.toDataURL()
        })
        .then((qrImageUrl) => setQRImageUrl(qrImageUrl))
    }
  }, [positionData])

  const parentRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const scaleChildDiv = () => {
      if (parentRef.current && refContent.current) {
        const parentWidth = parentRef.current.offsetWidth
        const childWidth = refContent.current.offsetWidth
        const scale = parentWidth / childWidth
        setScale(scale)
      }
    }

    scaleChildDiv()
    window.addEventListener('resize', scaleChildDiv)

    return () => {
      window.removeEventListener('resize', scaleChildDiv)
    }
  }, [])

  return (
    <Wrapper ref={parentRef}>
      <PositionDataWrapper ref={refContent} className={className} scale={scale}>
        <VibeImage>
          <img src="/static/images/other/share-card-vibe.png" width={320} height={130} />
        </VibeImage>
        {qrImageUrl !== '' && (
          <QRImage>
            <QRWrapper>
              <Image src={qrImageUrl} width={50} height={50} alt={'qr-image'} />
            </QRWrapper>
            <Text marginTop={1} fontSize={11} color="white">
              Referral code:
            </Text>
            <Text fontSize={11} color="#81BEF1">
              {positionData?.referralCode}
            </Text>
          </QRImage>
        )}
        {positionData && (
          <PositionData>
            <RowBetween height={30}>
              <RowFixed gap="5px">
                <img src={logo} width={26} height={26} />
                <Text fontSize={22} color="white">
                  {positionData.symbol}/USDT
                </Text>
              </RowFixed>
              <RowFixed gap="5px">
                <Text fontSize={18} color="white">
                  {positionData.leverage}x
                </Text>
                <Text fontSize={18} color="#1595E5">
                  {positionData.type}
                </Text>
              </RowFixed>
            </RowBetween>
            <Row gap="3px" height={50}>
              <Text fontSize={36} color={positionData.percent.startsWith('-') ? '#E65D5D' : '#15E58E'}>
                {formatValue(showPercentage ? positionData.percent + '%' : positionData.value)}
              </Text>
              {!showPercentage && (
                <Text fontSize={24} color={positionData.percent.startsWith('-') ? '#E65D5D' : '#15E58E'}>
                  ({formatValue(positionData.percent)})%
                </Text>
              )}
            </Row>
            <Row marginTop={'22px'} height={22}>
              <Text width={90} fontSize={16} color="white">
                Open Price:
              </Text>
              <Text fontSize={16} color="#81BEF1">
                {positionData.openPrice}
              </Text>
            </Row>
            <Text fontSize={10} color="#A0A0A0" height={14}>
              {formatTimestamp(positionData.openPriceTime, 'DD/MM/YYYY HH:mm')}
            </Text>
            <Row height={22}>
              <Text width={90} fontSize={16} color="white">
                Last Price:
              </Text>
              <Text fontSize={16} color="#81BEF1">
                ${positionData.lastPrice}
              </Text>
            </Row>
            <Text fontSize={10} color="#A0A0A0" height={14}>
              {formatTimestamp(positionData.lastPriceTime, 'DD/MM/YYYY HH:mm')}
            </Text>
          </PositionData>
        )}
      </PositionDataWrapper>
    </Wrapper>
  )
}
