import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import styled, { useTheme } from 'styled-components'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useIsMobile } from 'lib/hooks/useWindowSize'
import { useMarketsStatus } from 'state/hedger/hooks'
import { ApiState } from 'types/api'
import { OrderType, PositionType } from 'types/trade'
import { Quote, QuoteStatus } from 'types/quote'
import { formatPrice, toBN } from 'utils/numbers'
import { titleCase } from 'utils/string'

import DEFAULT_TOKEN from '/public/static/images/tokens/default-token.svg'
import { useCheckQuoteIsExpired } from 'hooks/useQuotes'
import { useAccountPartyAStat, useActiveAccountAddress } from 'state/user/hooks'

import { Row, RowStart } from 'components/Row'
import { EmptyPosition, LongArrow, NotConnectedWallet, ShareIcon, ShortArrow } from 'components/Icons'
import {
  BodyWrap,
  EmptyPositionRow,
  EmptyRow,
  LeftLine,
  MarketName,
  PnlValue,
  PositionLeverageWrap,
  PositionTypeWrap,
  QuoteStatusValue,
  ShareWrapper,
  Structure,
  Wrapper,
} from './Common'
import CloseModal from './CloseModal/index'
import CancelModal from './CancelModal/index'
import Column from 'components/Column'
import PositionDetails from 'components/App/AccountData/PositionDetails'
import { PositionRowActionButton } from 'components/Button'
import AnimationLoader from 'components/Animation/AnimationLoader'
import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'
import ShareModal from 'components/App/UserPanel/ShareModal'
import useQuote from 'hooks/useQuote'

const TableStructure = styled(Structure)`
  & > * {
    width: 16%;
    &:first-child {
      width: 25%;
    }
    &:nth-last-child(2) {
      max-width: 130px;
    }
    &:nth-last-child(1) {
      max-width: 270px;
    }
  }
`

const HeaderWrap = styled(TableStructure)`
  color: ${({ theme }) => theme.coolGrey};
  margin-bottom: 12px;
  text-align: left;
  min-width: 900px;

  & > * {
    &:first-child {
      padding-left: 20px;
    }

    &:nth-last-child(1) {
      max-width: 250px;
    }
  }
`

const QuoteWrap = styled(TableStructure)<{
  canceled?: boolean
  pending?: boolean
  expired?: string
  liquidatePending?: boolean
  active?: boolean
}>`
  @keyframes blinking {
    from {
      background: #22263f;
    }

    to {
      background: #22263f;
    }
  }
  height: 50px;
  cursor: pointer;
  overflow: hidden;
  margin: 1px 0;
  min-width: 900px;
  border-radius: 10px;
  color: ${({ canceled, theme }) => (canceled ? theme.coolGrey : theme.almostWhite)};
  background: ${({ theme }) => theme.color3};
  animation: ${({ pending, liquidatePending }) =>
    pending && !liquidatePending ? 'blinking 1.2s linear infinite' : 'none'};
  border: ${({ active, theme }) => (active ? `1px solid ${theme.coolGrey}` : '')};
  &:hover {
    background: ${({ theme }) => theme.bg8};
  }
`

const TwoColumn = styled(Column)`
  font-style: normal;
  font-weight: 400;
  & > * {
    &:first-child {
      color: ${({ theme }) => theme.almostWhite};
    }
    &:nth-child(2) {
      color: ${({ theme }) => theme.blue};
    }
  }
`

const TwoColumnPnl = styled(Column)<{ color?: string }>`
  font-weight: 400;
  font-style: normal;
  color: ${({ theme }) => theme.text1};

  & > * {
    &:first-child {
      color: ${({ theme, color }) => color ?? theme.text1};
    }
  }
`

const ExpiredStatusValue = styled.div`
  color: ${({ theme }) => theme.pink};
`

const LiquidatedStatusValue = styled.div`
  color: ${({ theme }) => theme.primaryPink};
`

const HEADERS = ['Symbol', 'Position Size', 'Total Position', 'Open Price', 'Status/uPNL', 'Action']

function TableHeader({ mobileVersion }: { mobileVersion: boolean }): JSX.Element | null {
  if (mobileVersion) return null
  return (
    <HeaderWrap>
      {HEADERS.map((item, key) => (
        <div key={key}>{item}</div>
      ))}
    </HeaderWrap>
  )
}
function TableRow({
  quote,
  index,
  setQuote,
  toggleCloseModal,
  toggleCancelModal,
  toggleShareModal,
  mobileVersion,
}: {
  quote: Quote
  index: number
  setQuote: (q: Quote) => void
  toggleCloseModal: () => void
  toggleCancelModal: () => void
  toggleShareModal: () => void
  mobileVersion: boolean
}) {
  const { quoteStatus } = quote
  const activeAccountAddress = useActiveAccountAddress()
  const { liquidationStatus } = useAccountPartyAStat(activeAccountAddress)
  const { expired, expiredColor } = useCheckQuoteIsExpired(quote)

  const [buttonText, disableButton] = useMemo(() => {
    if (liquidationStatus) {
      return ['Liquidation...', true]
    } else if (quoteStatus === QuoteStatus.CLOSE_PENDING) {
      return ['Cancel Close', false]
    } else if (quoteStatus === QuoteStatus.PENDING || quoteStatus === QuoteStatus.LOCKED) {
      if (expired) return ['Unlock', false]
      return ['Cancel', false]
    } else if (quoteStatus === QuoteStatus.CANCEL_PENDING) {
      return ['Cancel', true]
    } else if (quoteStatus === QuoteStatus.CANCEL_CLOSE_PENDING || quoteStatus === QuoteStatus.CLOSED) {
      return ['Close', true]
    }

    return ['Close', false]
  }, [expired, liquidationStatus, quoteStatus])

  function onClickCloseButton(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation()
    if (disableButton) return
    if (quoteStatus === QuoteStatus.OPENED) toggleCloseModal()
    else toggleCancelModal()
    setQuote(quote)
  }
  function onClickShareButton(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation()
    setQuote(quote)
    toggleShareModal()
  }

  return mobileVersion ? (
    <PositionDetails
      key={index}
      quote={quote}
      disableButton={disableButton}
      buttonText={buttonText}
      onClickButton={onClickCloseButton}
    />
  ) : (
    <QuoteRow
      key={index}
      quote={quote}
      disableButton={disableButton}
      buttonText={buttonText}
      expired={expired}
      liquidatePending={liquidationStatus}
      expiredColor={expiredColor}
      onClickButton={onClickCloseButton}
      onShareClick={onClickShareButton}
    />
  )
}

function TableBody({
  quotes,
  setQuote,
  toggleCloseModal,
  toggleCancelModal,
  toggleShareModal,
  mobileVersion,
}: {
  quotes: Quote[]
  setQuote: (q: Quote) => void
  toggleCloseModal: () => void
  toggleCancelModal: () => void
  toggleShareModal: () => void
  mobileVersion: boolean
}): JSX.Element | null {
  const { account } = useActiveWeb3React()
  const loading = useMarketsStatus()

  return useMemo(
    () => (
      <BodyWrap>
        {!account ? (
          <EmptyRow>
            <NotConnectedWallet style={{ margin: '40px auto 16px auto' }} />
            Wallet is not connected
          </EmptyRow>
        ) : loading === ApiState.LOADING ? (
          <EmptyPositionRow>
            <AnimationLoader
              name={'_loading'}
              style={{
                width: '120px',
                height: '120px',
                margin: '0px auto',
              }}
            />
          </EmptyPositionRow>
        ) : quotes.length ? (
          quotes.map((quote, index) => (
            <TableRow
              key={index}
              quote={quote}
              index={index}
              mobileVersion={mobileVersion}
              setQuote={setQuote}
              toggleCancelModal={toggleCancelModal}
              toggleCloseModal={toggleCloseModal}
              toggleShareModal={toggleShareModal}
            />
          ))
        ) : (
          <EmptyPositionRow>
            <EmptyPosition style={{ width: 130 }} />
            You have no Open Orders!
          </EmptyPositionRow>
        )}
      </BodyWrap>
    ),
    [account, loading, quotes, setQuote, toggleCancelModal, toggleCloseModal, toggleShareModal, mobileVersion]
  )
}

function QuoteRow({
  quote,
  buttonText,
  disableButton,
  expired,
  expiredColor,
  liquidatePending,
  onClickButton,
  onShareClick,
}: {
  quote: Quote
  buttonText: string
  disableButton: boolean
  expired: boolean
  expiredColor: string | undefined
  liquidatePending: boolean
  onClickButton: (event: React.MouseEvent<HTMLDivElement>) => void
  onShareClick: (event: React.MouseEvent<HTMLDivElement>) => void
}): JSX.Element | null {
  const { quoteStatus, requestedCloseLimitPrice, quantityToClose, positionType, orderType } = quote
  const theme = useTheme()
  const router = useRouter()
  const {
    symbol,
    asset,
    setQuoteDetail,
    value,
    color,
    upnlPercent,
    activeDetail,
    leverage,
    quoteSize,
    notionalValue,
    quoteOpenPrice,
    fillAmountPercent,
    name,
  } = useQuote(quote)
  const pendingQuote =
    !expired &&
    (quoteStatus === QuoteStatus.PENDING ||
      quoteStatus === QuoteStatus.CANCEL_PENDING ||
      quoteStatus === QuoteStatus.CANCEL_CLOSE_PENDING ||
      quoteStatus === QuoteStatus.CLOSE_PENDING ||
      quoteStatus === QuoteStatus.LOCKED)

  const tokenLogo = useCurrencyLogo(symbol)

  return useMemo(
    () => (
      <>
        <QuoteWrap
          canceled={quoteStatus === QuoteStatus.CANCELED}
          onClick={() => setQuoteDetail(quote)}
          active={activeDetail}
          pending={pendingQuote}
          expired={expiredColor}
          liquidatePending={liquidatePending}
        >
          <RowStart>
            <LeftLine positionType={positionType}></LeftLine>
            <PositionTypeWrap>
              {positionType === PositionType.LONG ? (
                <LongArrow width={15} height={12} color={liquidatePending ? theme.primaryPink : theme.blue} />
              ) : (
                <ShortArrow width={15} height={12} color={liquidatePending ? theme.primaryPink : theme.pink} />
              )}
            </PositionTypeWrap>
            <MarketName onClick={() => router.push(`/trade/${name}`)}>
              <Image src={tokenLogo ?? DEFAULT_TOKEN} width={18} height={18} alt={`icon`} loading={'lazy'} />
              <Row padding="0 0 0 10px">
                {symbol} / {asset}
              </Row>
            </MarketName>
            <PositionLeverageWrap liquidatePending={liquidatePending}>{leverage}x</PositionLeverageWrap>
          </RowStart>

          {quoteStatus === QuoteStatus.CLOSE_PENDING ? (
            <TwoColumn>
              <div>
                {quoteSize} {symbol}
              </div>
              <div>{`Close Size: ${formatPrice(quantityToClose, 4)}`}</div>
            </TwoColumn>
          ) : (
            <div>
              {quoteSize} {symbol}
            </div>
          )}

          <div>{toBN(notionalValue).isEqualTo(0) ? '-' : `$${formatPrice(notionalValue, 4)}`}</div>

          {quoteStatus === QuoteStatus.CLOSE_PENDING ? (
            <TwoColumn>
              <div>{quoteOpenPrice}</div>
              <div>{`Close Price: ${
                orderType === OrderType.LIMIT ? `${formatPrice(requestedCloseLimitPrice, 4)}` : 'Market'
              }`}</div>
            </TwoColumn>
          ) : (
            <div>{quoteOpenPrice}</div>
          )}

          {fillAmountPercent === null ? (
            liquidatePending ? (
              <LiquidatedStatusValue>Liquidation...</LiquidatedStatusValue>
            ) : quoteStatus === QuoteStatus.OPENED ? (
              <PnlValue color={color}>
                {value === '-' ? value : `${value} (${Math.abs(Number(upnlPercent))}%)`}
              </PnlValue>
            ) : expired && quoteStatus === QuoteStatus.PENDING ? (
              <ExpiredStatusValue>Expired</ExpiredStatusValue>
            ) : quoteStatus === QuoteStatus.CLOSE_PENDING || quoteStatus === QuoteStatus.CANCEL_CLOSE_PENDING ? (
              <TwoColumnPnl color={expired ? theme.white : color}>
                <Row>
                  uPNL:&nbsp;
                  <PnlValue color={color}>{` ${value}`}</PnlValue>
                </Row>
                {expired ? (
                  <QuoteStatusValue liq={false} expired={true}>
                    Close EXPIRED
                  </QuoteStatusValue>
                ) : (
                  <QuoteStatusValue liq={false} expired={false}>
                    {titleCase(quoteStatus)}
                  </QuoteStatusValue>
                )}
              </TwoColumnPnl>
            ) : (
              <QuoteStatusValue liq={false} expired={false}>
                {titleCase(quoteStatus)}
              </QuoteStatusValue>
            )
          ) : (
            <TwoColumn>
              <QuoteStatusValue liq={false} expired={false}>
                {fillAmountPercent}
              </QuoteStatusValue>
            </TwoColumn>
          )}
          <div>
            <PositionRowActionButton
              expired={expired}
              liquidatePending={liquidatePending}
              disabled={disableButton}
              onClick={onClickButton}
              locked={buttonText == 'Unlock'}
            >
              {buttonText}
            </PositionRowActionButton>
          </div>
          {fillAmountPercent === null &&
            !liquidatePending &&
            (quoteStatus === QuoteStatus.OPENED ||
              quoteStatus === QuoteStatus.CLOSE_PENDING ||
              quoteStatus === QuoteStatus.CANCEL_CLOSE_PENDING) && (
              <ShareWrapper onClick={onShareClick}>
                <ShareIcon size={20} />
              </ShareWrapper>
            )}
        </QuoteWrap>
      </>
    ),
    [
      quoteStatus,
      activeDetail,
      pendingQuote,
      expiredColor,
      liquidatePending,
      positionType,
      theme.primaryPink,
      theme.blue,
      theme.pink,
      theme.white,
      tokenLogo,
      symbol,
      asset,
      leverage,
      quoteSize,
      quantityToClose,
      notionalValue,
      quoteOpenPrice,
      orderType,
      requestedCloseLimitPrice,
      fillAmountPercent,
      color,
      value,
      upnlPercent,
      expired,
      disableButton,
      onClickButton,
      buttonText,
      onShareClick,
      setQuoteDetail,
      quote,
      router,
      name,
    ]
  )
}

export default function Pendings({ quotes }: { quotes: Quote[] }) {
  const [showCloseModal, setShowCloseModal] = useState(false)
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)
  const isMobile = useIsMobile()

  const [quote, setQuote] = useState<Quote | null>(null)

  return (
    <>
      {showCloseModal && (
        <CloseModal quote={quote} modalOpen={showCloseModal} toggleModal={() => setShowCloseModal(false)} />
      )}
      {showCancelModal && (
        <CancelModal quote={quote} modalOpen={showCancelModal} toggleModal={() => setShowCancelModal(false)} />
      )}
      {quote && showShareModal && (
        <ShareModal quote={quote} modalOpen={showShareModal} toggleModal={() => setShowShareModal(false)} />
      )}

      <Wrapper>
        <TableHeader mobileVersion={isMobile} />
        <TableBody
          quotes={quotes}
          setQuote={setQuote}
          toggleCloseModal={() => setShowCloseModal(true)}
          toggleCancelModal={() => setShowCancelModal(true)}
          toggleShareModal={() => setShowShareModal(true)}
          mobileVersion={isMobile}
        />
      </Wrapper>
    </>
  )
}
