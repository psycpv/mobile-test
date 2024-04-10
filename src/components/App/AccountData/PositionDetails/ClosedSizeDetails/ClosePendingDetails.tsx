import { useMemo } from 'react'
import styled, { useTheme } from 'styled-components'

import { OrderType } from 'types/trade'
import { Quote, QuoteStatus } from 'types/quote'

import { formatAmount, toBN } from 'utils/numbers'

import { useMarket } from 'hooks/useMarkets'
import { useQuoteLeverage, useQuoteUpnlAndPnl } from 'hooks/useQuotes'
import { useMarketData } from 'state/hedger/hooks'

import { PnlValue } from 'components/App/UserPanel/Common'
import { DataWrap, Label, Row, Value } from 'components/App/AccountData/PositionDetails/styles'

const Wrapper = styled(DataWrap)`
  padding-top: 0px;
  @keyframes blinking {
    from {
      background: ${({ theme }) => theme.bg5};
    }

    to {
      background: #bec7da;
    }
  }
  animation: blinking 1.2s linear infinite;
`

const PositionPnl = styled(PnlValue)`
  font-weight: 500;
  font-size: 16px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 12px;
  `};
`

export default function ClosePendingDetails({ quote }: { quote: Quote | null }) {
  const theme = useTheme()
  const { orderType, quoteStatus, quantityToClose, requestedCloseLimitPrice, openedPrice } = quote || {}
  const { symbol, asset, name, pricePrecision } = useMarket(quote?.marketId) || {}
  const leverage = useQuoteLeverage(quote || ({} as Quote))

  const marketData = useMarketData(name)
  const [, limitPnl] = useQuoteUpnlAndPnl(
    quote || ({} as Quote),
    marketData?.markPrice || 0,
    quantityToClose,
    requestedCloseLimitPrice
  )
  const [, marketPnl] = useQuoteUpnlAndPnl(
    quote || ({} as Quote),
    marketData?.markPrice || 0,
    quantityToClose,
    marketData?.markPrice || 0
  )

  function getPnlData(value: string) {
    const valueBN = toBN(value)
    if (!quantityToClose || !openedPrice) return [`$${formatAmount(value)}`, '0', theme.text1]
    const valuePercent = valueBN.div(quantityToClose).div(openedPrice).times(leverage).times(100).toFixed(2)

    if (valueBN.isGreaterThan(0)) return [`+ $${formatAmount(valueBN)}`, valuePercent, theme.blue]
    else if (valueBN.isLessThan(0))
      return [`- $${formatAmount(Math.abs(valueBN.toNumber()))}`, valuePercent, theme.pink]
    return [`$${formatAmount(valueBN)}`, valuePercent, theme.text1]
  }

  const [limitValue, limitValuePercent, limitValueColor] = getPnlData(limitPnl)
  const [marketValue, marketValuePercent, marketValueColor] = getPnlData(marketPnl)

  return useMemo(() => {
    if (quoteStatus === QuoteStatus.CLOSE_PENDING || quoteStatus === QuoteStatus.CANCEL_CLOSE_PENDING) {
      return (
        <Wrapper>
          <Row>
            <Label>Requested close size:</Label>
            <Value>{`${formatAmount(quantityToClose, 6, true)} ${symbol}`}</Value>
          </Row>
          <Row>
            <Label>Requested close price:</Label>
            <Value>
              {orderType === OrderType.LIMIT
                ? `${formatAmount(requestedCloseLimitPrice, 6, true)} ${asset}`
                : 'Market Price'}
            </Value>
          </Row>
          <Row>
            <Label>Estimated PNL:</Label>
            {orderType === OrderType.LIMIT ? (
              <PositionPnl color={limitValueColor}>{`${limitValue} (${Math.abs(
                Number(limitValuePercent)
              )}%)`}</PositionPnl>
            ) : (
              <PositionPnl color={marketValueColor}>{`${marketValue} (${Math.abs(
                Number(marketValuePercent)
              )}%)`}</PositionPnl>
            )}
          </Row>
        </Wrapper>
      )
    }
    return <></>
  }, [
    asset,
    limitValue,
    limitValueColor,
    limitValuePercent,
    marketValue,
    marketValueColor,
    marketValuePercent,
    orderType,
    quantityToClose,
    quoteStatus,
    requestedCloseLimitPrice,
    symbol,
  ])
}
