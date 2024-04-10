import { useEffect, useMemo } from 'react'

import { DEFAULT_PRECISION, MAX_LEVERAGE_VALUE } from 'constants/misc'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { RoundMode, formatPrice, toBN } from 'utils/numbers'
import { getTokenWithFallbackChainId } from 'utils/token'
import { ErrorState, InputField } from 'types/trade'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useActiveMarket, useSetTypedValue } from 'state/trade/hooks'

import InfoItem from 'components/InfoItem'
import { useLeverage, useSetLeverageCallback } from 'state/user/hooks'
import useTradePage from 'hooks/useTradePage'

export default function MinPositionInfo() {
  const { chainId } = useActiveWeb3React()
  const setTypedValue = useSetTypedValue()
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)
  const leverage = useLeverage()
  useCheckLeverage()

  const { state, price } = useTradePage()

  const market = useActiveMarket()

  const [pricePrecision, quantityPrecision, minAcceptableQuoteValue] = useMemo(
    () =>
      market
        ? [market.pricePrecision, market.quantityPrecision, market.minAcceptableQuoteValue, market.maxLeverage]
        : [DEFAULT_PRECISION, DEFAULT_PRECISION, 10],
    [market]
  )

  const minPositionAmount = useMemo(() => {
    if (state === ErrorState.INVALID_PRICE || state === ErrorState.OUT_OF_RANGE_PRICE) {
      return '-'
    }

    const quantity = toBN(minAcceptableQuoteValue)
      .times(leverage)
      .div(price)
      .toFixed(quantityPrecision, RoundMode.ROUND_UP)

    const value = toBN(quantity)
      .times(toBN(price).div(leverage))
      .times(leverage)
      .toFixed(pricePrecision, RoundMode.ROUND_UP)

    const minAmount = toBN(quantity).times(toBN(price).div(leverage)).toFixed(pricePrecision, RoundMode.ROUND_UP)

    if (toBN(value).isNaN()) return '-'

    return minAmount
  }, [minAcceptableQuoteValue, , price, pricePrecision, quantityPrecision, leverage, state])

  return (
    <InfoItem
      label={'Minimum amount:'}
      balanceExact={formatPrice(minPositionAmount, pricePrecision, false, RoundMode.ROUND_UP)}
      amount={`${minPositionAmount} ${collateralCurrency?.symbol}`}
      onClick={(value) => setTypedValue(value, InputField.PRICE)}
    />
  )
}

function useCheckLeverage() {
  const market = useActiveMarket()
  const userLeverage = useLeverage()
  const setLeverageCallback = useSetLeverageCallback()
  const maxLeverage = useMemo(() => (market ? market.maxLeverage : MAX_LEVERAGE_VALUE), [market])

  useEffect(() => {
    if (userLeverage > maxLeverage) {
      setLeverageCallback(5)
    }
  }, [market, maxLeverage]) // eslint-disable-line react-hooks/exhaustive-deps
}
