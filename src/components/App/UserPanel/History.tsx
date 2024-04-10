import React, { useCallback, useMemo, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { useRouter } from 'next/router'
import Image from 'next/image'
import BigNumber from 'bignumber.js'
import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { PositionType } from 'types/trade'
import { Quote, QuoteStatus } from 'types/quote'
import { useMarket } from 'hooks/useMarkets'
import { formatAmount, formatPrice, toBN } from 'utils/numbers'
import { formatTimestampHistory } from 'utils/time'
import { titleCase } from 'utils/string'

import { useQuoteLeverage, useQuoteUpnlAndPnl } from 'hooks/useQuotes'
import { useHistoryOrder, useHistoryQuotes, useQuoteDetail, useSetQuoteDetailCallback } from 'state/quotes/hooks'
import { useMarketsStatus } from 'state/hedger/hooks'
import { ApiState } from 'types/api'

import { useIsMobile } from 'lib/hooks/useWindowSize'
import PositionDetails from 'components/App/AccountData/PositionDetails'
import { ChevronDown, LongArrow, NotConnectedWallet, ShareIcon, ShortArrow } from 'components/Icons'
import { Row, RowStart } from 'components/Row'
import {
  BodyWrap,
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
import ShareModal from './ShareModal'
import { QuoteOrder } from 'state/quotes/types'
import LoadingDots from 'components/Loading/Dots'

const TableStructure = styled(Structure)`
  & > * {
    width: 12%;
    &:first-child {
      width: 18%;
    }
    &:nth-last-child(3) {
      max-width: 180px;
    }
    &:nth-last-child(2) {
      max-width: 140px;
    }
    &:nth-last-child(1) {
      max-width: 25px;
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
      max-width: 50px;
    }
  }
`

const QuoteWrap = styled(TableStructure)<{
  canceled?: boolean
  active?: boolean
}>`
  height: 50px;
  cursor: pointer;
  overflow: hidden;
  margin: 1px 0;
  min-width: 900px;
  border-radius: 10px;
  color: ${({ canceled, theme }) => (canceled ? theme.coolGrey : theme.almostWhite)};
  background: ${({ theme }) => theme.color3};
  font-weight: 400;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.bg8};
  }
  border: ${({ active, theme }) => (active ? `1px solid ${theme.coolGrey}` : '')};

  & > * {
    opacity: ${({ canceled }) => (canceled ? 0.5 : 1)};

    &:last-child {
      opacity: 1;
    }
  }
`

const Sorting = styled(ChevronDown)<{ isAscending: boolean }>`
  transform: rotateX(${({ isAscending }) => (isAscending ? '180deg' : '0deg')});
  transition: 0.5s;
  margin-left: 4px;
`

const LoaderWrap = styled(LoadingDots)`
  margin: 0 auto;
`

const HEADERS = ['Position Size', 'Open Price', 'Close Price', 'Status', 'PNL']

function TableHeader({
  mobileVersion,
  handleSort,
}: {
  mobileVersion: boolean
  handleSort: (column: string, order: QuoteOrder) => void
}): JSX.Element | null {
  const { orderColumn, order } = useHistoryOrder()

  if (mobileVersion) return null
  return (
    <HeaderWrap>
      <div onClick={() => handleSort('symbol', order)} style={{ cursor: 'pointer' }}>
        Symbol
        <Sorting
          isAscending={orderColumn !== 'symbol' || order === QuoteOrder.ASCENDING}
          color={orderColumn === 'symbol' ? 'white' : undefined}
        />
      </div>
      {HEADERS.map((item, key) => (
        <div key={key}>{item}</div>
      ))}
      <div onClick={() => handleSort('timeStamp', order)} style={{ cursor: 'pointer' }}>
        End Time
        <Sorting
          isAscending={orderColumn !== 'timeStamp' || order === QuoteOrder.ASCENDING}
          color={orderColumn === 'timeStamp' ? 'white' : undefined}
        />
      </div>
      <div style={{ width: '55px', height: '100%', paddingTop: '10px' }}></div>
    </HeaderWrap>
  )
}

function TableBody({
  quotes,
  mobileVersion,
  setQuote,
  toggleShareModal,
}: {
  quotes: Quote[]
  mobileVersion: boolean
  setQuote: (q: Quote) => void
  toggleShareModal: () => void
}): JSX.Element | null {
  const { account } = useActiveWeb3React()
  const loading = useMarketsStatus()
  const { state: historyState } = useHistoryQuotes()

  return useMemo(
    () => (
      <BodyWrap>
        {!account ? (
          <EmptyRow>
            <NotConnectedWallet style={{ margin: '40px auto 16px auto' }} />
            Wallet is not connected
          </EmptyRow>
        ) : loading === ApiState.LOADING || historyState === ApiState.LOADING ? (
          <EmptyRow style={{ padding: '60px 0px' }}>
            <LoaderWrap />
          </EmptyRow>
        ) : quotes.length ? (
          quotes.map((quote, index) =>
            mobileVersion ? (
              <PositionDetails key={index} quote={quote} />
            ) : (
              <QuoteRow key={index} quote={quote} setQuote={setQuote} toggleShareModal={toggleShareModal} />
            )
          )
        ) : (
          <EmptyRow style={{ minHeight: '40vh', justifyContent: 'center' }}>No orders for this date range!</EmptyRow>
        )}
      </BodyWrap>
    ),
    [account, loading, historyState, quotes, mobileVersion, setQuote, toggleShareModal]
  )
}

function QuoteRow({
  quote,
  setQuote,
  toggleShareModal,
}: {
  quote: Quote
  setQuote: (q: Quote) => void
  toggleShareModal: () => void
}): JSX.Element | null {
  const {
    id,
    quantity,
    positionType,
    openedPrice,
    avgClosedPrice,
    statusModifyTimestamp,
    quoteStatus,
    liquidatePrice,
    liquidateAmount,
    closedAmount,
  } = quote
  const router = useRouter()
  const theme = useTheme()
  const { name, symbol, asset } = useMarket(quote.marketId) || {}
  const tokenLogo = useCurrencyLogo(symbol)
  const [, pnl] = useQuoteUpnlAndPnl(quote, 0)

  const onClickShareButton = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation()
      if (quote.quoteStatus === QuoteStatus.CLOSED || quote.quoteStatus === QuoteStatus.LIQUIDATED) {
        setQuote(quote)
        toggleShareModal()
      }
    },
    [quote, setQuote, toggleShareModal]
  )

  const [value, color] = useMemo(() => {
    const pnlBN = toBN(pnl)
    if (pnlBN.isGreaterThan(0)) return [`+ $${toBN(formatAmount(pnlBN)).toFixed(4)}`, theme.blue]
    else if (pnlBN.isLessThan(0)) return [`- $${toBN(formatAmount(Math.abs(pnlBN.toNumber()))).toFixed(4)}`, theme.pink]
    return [`${toBN(formatAmount(pnlBN)).toFixed(4)}`, theme.blue]
  }, [pnl, theme.blue, theme.pink])

  const leverage = useQuoteLeverage(quote)
  const upnlPercent = useMemo(() => {
    return toBN(pnl).div(quantity).div(openedPrice).times(leverage).times(100).toFixed(2)
  }, [leverage, pnl, openedPrice, quantity])

  const quoteDetail = useQuoteDetail()
  const setQuoteDetail = useSetQuoteDetailCallback()

  const activeDetail = id === quoteDetail?.id
  const canceledOrExpired = quoteStatus === QuoteStatus.CANCELED || quoteStatus === QuoteStatus.EXPIRED

  const averagePrice = toBN(liquidatePrice)
    .times(liquidateAmount)
    .plus(toBN(avgClosedPrice).times(closedAmount))
    .div(quantity)

  function formatPriceSymbol(price: BigNumber.Value) {
    return price === '0' ? '-' : '$' + formatPrice(price, 4)
  }

  return useMemo(
    () => (
      <>
        <QuoteWrap canceled={canceledOrExpired} onClick={() => setQuoteDetail(quote)} active={activeDetail}>
          <RowStart>
            <LeftLine positionType={positionType}></LeftLine>
            <PositionTypeWrap>
              {positionType === PositionType.LONG ? (
                <LongArrow width={16} height={12} color={theme.blue} />
              ) : (
                <ShortArrow width={16} height={12} color={theme.pink} />
              )}
            </PositionTypeWrap>
            <MarketName onClick={() => router.push(`/trade/${name}`)}>
              <Image src={tokenLogo} width={18} height={18} alt={`icon`} loading={'lazy'} />
              <Row padding="0 0 0 10px">
                {symbol} / {asset}
              </Row>
            </MarketName>
            <PositionLeverageWrap>{leverage}x</PositionLeverageWrap>
          </RowStart>
          <div>
            {formatPrice(quantity, 6, true)} {symbol}
          </div>
          <div>{formatPriceSymbol(openedPrice)}</div>
          <div>
            {quoteStatus === QuoteStatus.LIQUIDATED
              ? formatPriceSymbol(averagePrice)
              : formatPriceSymbol(avgClosedPrice)}
          </div>
          <QuoteStatusValue liq={quoteStatus === QuoteStatus.LIQUIDATED} expired={quoteStatus === QuoteStatus.EXPIRED}>
            {titleCase(quoteStatus)}
          </QuoteStatusValue>
          {canceledOrExpired ? (
            <div>-</div>
          ) : (
            <PnlValue color={color}>{`${value} (${Math.abs(Number(upnlPercent))}%)`}</PnlValue>
          )}

          <div>{formatTimestampHistory(statusModifyTimestamp * 1000)}</div>
          <ShareWrapper>
            <ShareIcon size={20} onClick={onClickShareButton} />
          </ShareWrapper>
        </QuoteWrap>
      </>
    ),
    [
      canceledOrExpired,
      positionType,
      symbol,
      asset,
      leverage,
      tokenLogo,
      quantity,
      openedPrice,
      quoteStatus,
      averagePrice,
      avgClosedPrice,
      color,
      value,
      upnlPercent,
      statusModifyTimestamp,
      activeDetail,
      setQuoteDetail,
      quote,
      router,
      name,
      theme.pink,
      theme.blue,
      onClickShareButton,
    ]
  )
}

export default function History({
  quotes,
  setOrder,
}: {
  quotes: Quote[]
  setOrder: (column: string, newOrder: QuoteOrder) => void
}) {
  const [quote, setQuote] = useState<Quote | null>(null)
  const [showShareModal, setShowShareModal] = useState(false)
  const isMobile = useIsMobile()

  const handleSort = (column: string, order: QuoteOrder) => {
    const newOrder = order === QuoteOrder.ASCENDING ? QuoteOrder.DESCENDING : QuoteOrder.ASCENDING
    setOrder(column, newOrder)
  }

  return (
    <>
      {quote && showShareModal && (
        <ShareModal quote={quote} modalOpen={showShareModal} toggleModal={() => setShowShareModal(false)} />
      )}
      <Wrapper>
        <TableHeader mobileVersion={isMobile} handleSort={handleSort} />
        <TableBody
          quotes={quotes}
          mobileVersion={isMobile}
          toggleShareModal={() => setShowShareModal(true)}
          setQuote={setQuote}
        />
      </Wrapper>
    </>
  )
}
