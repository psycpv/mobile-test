import { useMemo } from 'react'
import styled from 'styled-components'

import { BN_ZERO, formatAmount, toBN } from 'utils/numbers'
import { OrderType } from 'types/trade'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { getTokenWithFallbackChainId } from 'utils/token'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useActiveMarket, useLimitPrice, useOrderType } from 'state/trade/hooks'
import useTradePage, { useLockedValues, useNotionalValue } from 'hooks/useTradePage'

import InfoItem from 'components/InfoItem'
import { Column } from 'components/Column'

const Wrapper = styled(Column)`
  gap: 12px;
  margin-top: 8px;
`

export default function TradeOverview() {
  const { chainId } = useActiveWeb3React()
  const market = useActiveMarket()
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)
  const limitPrice = useLimitPrice()
  const orderType = useOrderType()

  const { price: markPrice, formattedAmounts } = useTradePage()

  const price = useMemo(
    () => (orderType === OrderType.MARKET ? markPrice : limitPrice),
    [orderType, markPrice, limitPrice]
  )

  const quantityAsset = useMemo(
    () => (toBN(formattedAmounts[1]).isNaN() ? BN_ZERO : toBN(formattedAmounts[1])),
    [formattedAmounts]
  )
  const notionalValue = useNotionalValue(quantityAsset.toString(), price)
  const { cva, lf } = useLockedValues(notionalValue)
  const tradingFee = useMemo(
    () => (market?.tradingFee ? toBN(notionalValue).times(market.tradingFee).toString() : '0'),
    [notionalValue, market]
  )

  return (
    <>
      <Wrapper>
        <InfoItem
          label="Maintenance Margin (CVA)"
          amount={`${!toBN(cva).isNaN() && !toBN(lf).isNaN() ? formatAmount(toBN(cva).plus(lf)) : '0'} ${
            collateralCurrency?.symbol
          }`}
        />
        <InfoItem
          label="Platform Fee"
          amount={`${!toBN(tradingFee).isNaN() ? `${formatAmount(toBN(tradingFee).div(2), 3, true)}` : '0'} ${
            collateralCurrency?.symbol
          }`}
          // tooltip="Platform Fee"
        />
      </Wrapper>
    </>
  )
}
