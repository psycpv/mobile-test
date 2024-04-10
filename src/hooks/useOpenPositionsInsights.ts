import { usePositionsQuotes } from 'state/quotes/hooks'
import { useMarkets } from 'state/hedger/hooks'
import { useMemo } from 'react'
import { PositionType } from 'types/trade'
import { useAppSelector } from 'state'
import { ProcessedOpenPosition, Quote, QuoteStatus } from 'types/quote'
import find from 'lodash/find'
import { formatAmount, toBN } from 'utils/numbers'
import { getQuoteLeverage, getQuoteSize, getQuoteUpnlAndPnl } from 'hooks/useQuotes'
import { useAccountPartyAStat, useActiveAccountAddress } from 'state/user/hooks'

export default function useOpenPositionsInsights() {
  const { quotes: positions } = usePositionsQuotes()
  const markets = useMarkets()
  const activeAccountAddress = useActiveAccountAddress()
  const { positionsCount } = useAccountPartyAStat(activeAccountAddress)

  const longPositionsCount = useMemo(
    () => positions.filter((p) => p.positionType === PositionType.LONG).length,
    [positions]
  )

  const prices = useAppSelector((state) => state.hedger.prices)
  const [positionsTotalValue, minUpnlQuote, maxUpnlQuote, totalUpnlPercent, totalUpnl, processedOpenPositions] =
    useMemo(() => {
      let positionsTotalValue = 0
      let maxUpnlQuote: Quote | null = null
      let minUpnlQuote: Quote | null = null
      let maxUpnl = 0
      let minUpnl = 0
      let totalUpnl = 0
      let weightedUpnlPercentSum = 0
      let quoteSizeSum = 0
      const processedOpenPositions: ProcessedOpenPosition[] = []
      if (positionsCount && positionsCount === positions.length) {
        positions.forEach((quote) => {
          const { quoteStatus, quantity, marketId } = quote
          const market = find(markets, { id: marketId })
          const marketData = prices[market?.name]

          const quoteAvailableAmount = getQuoteSize(quote, market?.quantityPrecision)
          const quoteSize =
            quoteStatus === QuoteStatus.CLOSE_PENDING || quoteStatus === QuoteStatus.CANCEL_CLOSE_PENDING
              ? formatAmount(quoteAvailableAmount, 2, true)
              : quoteStatus === QuoteStatus.PENDING ||
                quoteStatus === QuoteStatus.LOCKED ||
                quoteStatus === QuoteStatus.CANCEL_PENDING
              ? formatAmount(quantity, 2, true)
              : formatAmount(quoteAvailableAmount, 6, true)

          const positionValue = toBN(quoteAvailableAmount)
            .times(marketData?.markPrice || 0)
            .toNumber()

          const [upnlString] = getQuoteUpnlAndPnl(quote, marketData?.markPrice ?? '0', undefined, undefined)
          const upnl = Number(upnlString)
          totalUpnl += upnl
          if (upnl > maxUpnl) {
            maxUpnlQuote = quote
            maxUpnl = upnl
          }
          if (upnl < minUpnl) {
            minUpnlQuote = quote
            minUpnl = upnl
          }
          const leverage = getQuoteLeverage(quote, quoteAvailableAmount)
          const weightedUpnlPercent = toBN(upnl).div(quote.openedPrice).times(leverage).times(100)
          const upnlPercent = weightedUpnlPercent.div(quoteAvailableAmount).toNumber()
          weightedUpnlPercentSum += toBN(upnl).div(quote.openedPrice).times(leverage).times(100).toNumber()
          quoteSizeSum += Number(quoteAvailableAmount)
          positionsTotalValue += positionValue
          processedOpenPositions.push({
            ...quote,
            symbol: market ? `${market.symbol}-${market.asset}` : undefined,
            leverage,
            quoteSize,
            upnl,
            upnlPercent,
            positionValue,
          })
        })
      }
      const totalUpnlPercent = quoteSizeSum > 0 ? weightedUpnlPercentSum / quoteSizeSum : 0
      return [positionsTotalValue, minUpnlQuote, maxUpnlQuote, totalUpnlPercent, totalUpnl, processedOpenPositions]
    }, [markets, positions, positionsCount, prices])

  return {
    positionsCount,
    longPositionsCount,
    positionsTotalValue,
    minUpnlQuote,
    maxUpnlQuote,
    totalUpnlPercent,
    totalUpnl,
    processedOpenPositions,
  }
}
