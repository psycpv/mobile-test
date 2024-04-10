import { Dispatch, useEffect, useMemo, useState } from 'react'
import { Quote, QuoteStatus } from 'types/quote'
import { useMarket } from 'hooks/useMarkets'
import { useQuoteLeverage, useQuoteUpnlAndPnl } from 'hooks/useQuotes'
import { formatAmount, toBN } from 'utils/numbers'
import BigNumber from 'bignumber.js'
import { PositionType } from 'types/trade'
import { titleCase } from 'utils/string'
import { formatTimestamp } from 'utils/time'
import { useActiveAccountAddress } from 'state/user/hooks'
import { ORDER_HISTORY_DATA_BY_RANGE } from 'apollo/queries'
import { SubGraphData } from 'state/quotes/types'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { getOrderHistoryApolloClient } from '../apollo/client/orderHistory'
import { toQuoteFromGraph } from '../apollo/service'

export interface ExportedQuote {
  type: string
  symbol: any
  id: string
  size: string
  leverage: string
  value: string
  openPrice: string
  closePrice: string
  status: string
  pnl: string
  endTime: string
}

function formatPrice(price: BigNumber.Value) {
  return price === '0' ? '-' : formatAmount(price, 6, true)
}

export function QuoteToExport({
  quote,
  setDataToExport,
}: {
  quote: Quote
  setDataToExport: Dispatch<ExportedQuote[]>
  dataToExport: ExportedQuote[]
}) {
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
    marketId,
  } = quote
  const { symbol } = useMarket(marketId) || {}
  const [, pnl] = useQuoteUpnlAndPnl(quote, 0)
  const [value] = useMemo(() => {
    const pnlBN = toBN(pnl)
    if (pnlBN.isGreaterThan(0)) return [`+ $${parseFloat(formatAmount(pnlBN)).toFixed(2)}`]
    else if (pnlBN.isLessThan(0)) return [`- $${parseFloat(formatAmount(Math.abs(pnlBN.toNumber()).toFixed(2)))}`]
    return [`$${parseFloat(formatAmount(pnlBN)).toFixed(2)}`]
  }, [pnl])
  const leverage = useQuoteLeverage(quote)
  const upnlPercent = useMemo(() => {
    return toBN(pnl).div(quantity).div(openedPrice).times(leverage).times(100).toFixed(2)
  }, [leverage, pnl, openedPrice, quantity])

  const averagePrice = toBN(liquidatePrice)
    .times(liquidateAmount)
    .plus(toBN(avgClosedPrice).times(closedAmount))
    .div(quantity)
  useEffect(() => {
    // @ts-ignore
    setDataToExport((prevQuotes: ExportedQuote[]) => {
      return [
        ...prevQuotes,
        {
          type: positionType === PositionType.LONG ? 'Long' : 'Short',
          symbol,
          id: 'Q' + id.toString(),
          size: formatAmount(quantity, 6, true),
          leverage: leverage + 'x',
          value: formatAmount(parseFloat(quantity) * parseFloat(openedPrice), 6, true),
          openPrice: formatPrice(openedPrice),
          closePrice: quoteStatus === QuoteStatus.LIQUIDATED ? formatPrice(averagePrice) : formatPrice(avgClosedPrice),
          status: titleCase(quoteStatus),
          pnl: quoteStatus === QuoteStatus.CANCELED ? '-' : `${value} (${Math.abs(Number(upnlPercent))}%)`,
          endTime: formatTimestamp(statusModifyTimestamp * 1000),
        } as ExportedQuote,
      ]
    })
  }, [quote])
  return null
}

export default function useExportHistory(startDate: Date | undefined, endDate: Date | undefined) {
  const account = useActiveAccountAddress()
  const { chainId } = useActiveWeb3React()
  const [loading, setLoading] = useState(false)
  const [historyQuotes, setHistoryQuotes] = useState<Quote[]>([])

  async function getHistoryQuotes() {
    const client = getOrderHistoryApolloClient(chainId as number)
    if (!client || !startDate || !endDate || !account) return []
    try {
      const {
        data: { resultEntities },
      } = await client.query({
        query: ORDER_HISTORY_DATA_BY_RANGE,
        variables: {
          address: account,
          first: 1000,
          skip: 0,
          column: 'timeStamp',
          order: 'desc',
          startDate: Math.floor(startDate.getTime() / 1000),
          endDate: Math.floor(endDate.getTime() / 1000),
        },
        fetchPolicy: 'no-cache',
      })
      if (resultEntities) {
        const quotes: Quote[] = resultEntities.map((entity: SubGraphData) => toQuoteFromGraph(entity))
        return quotes
      }
      return []
    } catch (error) {
      console.error('Error fetching history quotes:', error)
      return []
    }
  }

  useEffect(() => {
    async function fetchHistoryQuotes() {
      setLoading(true)
      const quotes = await getHistoryQuotes()
      setHistoryQuotes(quotes)
      setLoading(false)
    }

    fetchHistoryQuotes()
  }, [account, startDate, endDate, chainId])

  return { quotes: historyQuotes, loading }
}
