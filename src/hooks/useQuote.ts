import { useEffect, useMemo } from 'react'
import { OrderType } from 'types/trade'
import { Quote, QuoteStatus } from 'types/quote'
import { formatAmount, formatPrice, toBN } from 'utils/numbers'
import { useMarket } from 'hooks/useMarkets'
import { useMarketData } from 'state/hedger/hooks'
import {
  useClosingLastMarketPrice,
  useOpeningLastMarketPrice,
  useQuoteFillAmount,
  useQuoteLeverage,
  useQuoteSize,
  useQuoteUpnlAndPnl,
} from 'hooks/useQuotes'
import { useNotionalValue } from 'hooks/useTradePage'
import { useQuoteDetail, useSetQuoteDetailCallback } from 'state/quotes/hooks'
import { useTheme } from 'styled-components'

export default function useQuote(quote: Quote) {
  const theme = useTheme()
  const { id, quoteStatus, requestedOpenPrice, openedPrice, quantity, closedAmount, quantityToClose, orderType } = quote
  const market = useMarket(quote.marketId)
  const { name, symbol, asset, pricePrecision } = market || {}
  const marketData = useMarketData(name)
  const leverage = useQuoteLeverage(quote)
  const quoteAvailableAmount = useQuoteSize(quote)
  const notionalValue = useNotionalValue(quoteAvailableAmount, marketData?.markPrice || 0)
  const openLastMarketPrice = useOpeningLastMarketPrice(quote, market)
  const closeLastMarketPrice = useClosingLastMarketPrice(quote, market)

  const quoteDetail = useQuoteDetail()
  const setQuoteDetail = useSetQuoteDetailCallback()

  const activeDetail = id === quoteDetail?.id

  // usage: we should know change of quote for position details
  useEffect(() => {
    if (activeDetail) setQuoteDetail(quote)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quote])

  const fillAmount = useQuoteFillAmount(quote)
  const fillAmountPercent = useMemo(() => {
    if (fillAmount !== null && fillAmount !== undefined) {
      const fillAmountBN = toBN(fillAmount)
      if (fillAmountBN.isEqualTo(0)) {
        return '0% Filled'
      } else if (quoteStatus === QuoteStatus.CLOSE_PENDING || quoteStatus === QuoteStatus.CANCEL_CLOSE_PENDING) {
        return `${fillAmountBN.minus(closedAmount).div(quantityToClose).times(100).toFixed(0)}% Filled`
      } else {
        return `${fillAmountBN.div(quantity).times(100).toFixed(0)}% Filled`
      }
    }
    return null
  }, [closedAmount, fillAmount, quantity, quantityToClose, quoteStatus])

  const [quoteSize, quoteMarketPrice, quoteOpenPrice] = useMemo(() => {
    if (quoteStatus === QuoteStatus.CLOSE_PENDING || quoteStatus === QuoteStatus.CANCEL_CLOSE_PENDING) {
      return [
        formatAmount(quoteAvailableAmount, pricePrecision, true),
        closeLastMarketPrice,
        `$${formatAmount(openedPrice, pricePrecision, true)}`,
      ]
    } else if (
      quoteStatus === QuoteStatus.PENDING ||
      quoteStatus === QuoteStatus.LOCKED ||
      quoteStatus === QuoteStatus.CANCEL_PENDING
    ) {
      return [
        formatAmount(quantity, 2, true),
        openLastMarketPrice,
        orderType === OrderType.LIMIT ? `$${formatAmount(requestedOpenPrice, pricePrecision, true)}` : 'Market Price',
      ]
    }
    return [
      formatAmount(quoteAvailableAmount, 6, true),
      formatPrice(marketData?.markPrice ?? '0', pricePrecision),
      `$${formatAmount(openedPrice, pricePrecision, true)}`,
    ]
  }, [
    closeLastMarketPrice,
    marketData?.markPrice,
    openLastMarketPrice,
    openedPrice,
    orderType,
    pricePrecision,
    quantity,
    quoteAvailableAmount,
    quoteStatus,
    requestedOpenPrice,
  ])

  const [upnl, pnl] = useQuoteUpnlAndPnl(quote, marketData?.markPrice ?? '0', undefined, undefined)

  const [value, color] = useMemo(() => {
    const upnlBN = toBN(upnl)
    if (!quoteMarketPrice || quoteMarketPrice === '0') return ['-', theme.blue]
    if (upnlBN.isGreaterThan(0)) return [`+ $${toBN(formatAmount(upnlBN)).toFixed(2)}`, theme.blue]
    else if (upnlBN.isLessThan(0))
      return [`- $${toBN(formatAmount(Math.abs(upnlBN.toNumber()))).toFixed(2)}`, theme.pink]
    return [`${toBN(formatAmount(upnlBN)).toFixed(2)}`, theme.blue]
  }, [quoteMarketPrice, theme.blue, theme.pink, upnl])

  const [pnlValue, pnlColor] = useMemo(() => {
    const pnlBN = toBN(pnl)
    if (!quoteMarketPrice || quoteMarketPrice === '0') return ['-', theme.blue]
    if (pnlBN.isGreaterThan(0)) return [`+ $${toBN(formatAmount(pnlBN)).toFixed(2)}`, theme.blue]
    else if (pnlBN.isLessThan(0)) return [`- $${toBN(formatAmount(Math.abs(pnlBN.toNumber()))).toFixed(2)}`, theme.pink]
    return [`${toBN(formatAmount(pnlBN)).toFixed(2)}`, theme.blue]
  }, [quoteMarketPrice, theme.blue, theme.pink, upnl])

  const upnlPercent = useMemo(() => {
    return toBN(upnl).div(quoteAvailableAmount).div(quote.openedPrice).times(leverage).times(100).toFixed(2)
  }, [leverage, upnl, quote.openedPrice, quoteAvailableAmount])

  const pnlPercent = useMemo(() => {
    return toBN(pnl).div(quantity).div(openedPrice).times(leverage).times(100).toFixed(2)
  }, [leverage, pnl, openedPrice, quantity])

  return {
    symbol,
    asset,
    quoteDetail,
    setQuoteDetail,
    value,
    color,
    upnlPercent,
    activeDetail,
    leverage,
    quoteSize,
    notionalValue,
    quoteMarketPrice,
    pricePrecision,
    quoteOpenPrice,
    fillAmountPercent,
    name,
    pnlPercent,
    pnlValue,
    pnlColor,
  }
}
