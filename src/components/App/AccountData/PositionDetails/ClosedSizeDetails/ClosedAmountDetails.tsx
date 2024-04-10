import { useMemo } from 'react'
import styled, { useTheme } from 'styled-components'

import { Quote, QuoteStatus } from 'types/quote'
import { formatAmount, formatCurrency, toBN } from 'utils/numbers'

import { useMarketData } from 'state/hedger/hooks'

import { useMarket } from 'hooks/useMarkets'
import { useQuoteLeverage, useQuoteUpnlAndPnl } from 'hooks/useQuotes'

import { PnlValue } from 'components/App/UserPanel/Common'
import { DataWrap, Label, Row, Value } from 'components/App/AccountData/PositionDetails/styles'

const PositionPnl = styled(PnlValue)`
  font-weight: 500;
  font-size: 16px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 12px;
  `};
`

export default function ClosedAmountDetails({ quote }: { quote: Quote | null }) {
  const theme = useTheme()
  const { quoteStatus, closedAmount, avgClosedPrice, openedPrice } = quote || {}
  const { symbol, asset, name, pricePrecision } = useMarket(quote?.marketId) || {}
  const marketData = useMarketData(name)
  const leverage = useQuoteLeverage(quote || ({} as Quote))

  const [, pnl] = useQuoteUpnlAndPnl(quote || ({} as Quote), marketData?.markPrice || 0, closedAmount, undefined)
  const [value, color] = useMemo(() => {
    const pnlBN = toBN(pnl)
    if (pnlBN.isGreaterThan(0)) return [`+ $${formatAmount(pnlBN)}`, theme.blue]
    else if (pnlBN.isLessThan(0)) return [`- $${formatAmount(Math.abs(pnlBN.toNumber()))}`, theme.pink]
    return [`$${formatAmount(pnlBN)}`, theme.text1]
  }, [pnl, theme])
  const pnlPercent = useMemo(() => {
    if (!closedAmount || !openedPrice) return '0'
    return toBN(pnl).div(closedAmount).div(openedPrice).times(leverage).times(100).toFixed(2)
  }, [closedAmount, openedPrice, pnl, leverage])

  return useMemo(() => {
    const closedAmountBN = toBN(closedAmount ?? '0')
    if (!closedAmountBN.isEqualTo(0) && quoteStatus !== QuoteStatus.CANCELED && quoteStatus !== QuoteStatus.CLOSED)
      return (
        <DataWrap style={{ paddingTop: '0px' }}>
          <Row>
            <Label>Closed Size:</Label>
            <Value>{`${formatAmount(closedAmountBN, 6, true)} ${symbol}`}</Value>
          </Row>
          <Row>
            <Label>Closed Price:</Label>
            <Value>{`${formatCurrency(avgClosedPrice, 6, true)} ${asset}`}</Value>
          </Row>
          <Row>
            <Label>PNL:</Label>
            <PositionPnl color={color}>{`${value} (${Math.abs(Number(pnlPercent))}%)`}</PositionPnl>
          </Row>
        </DataWrap>
      )

    return <></>
  }, [asset, avgClosedPrice, closedAmount, color, pnlPercent, quoteStatus, symbol, value])
}
