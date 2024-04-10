import { useMemo, useState } from 'react'
import styled from 'styled-components'

import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

import { WEB_SETTING } from 'config'
import { formatPrice, toBN } from 'utils/numbers'
import { getTokenWithFallbackChainId } from 'utils/token'
import { calculateString, calculationPattern } from 'utils/calculationalString'

import { COLLATERAL_TOKEN } from 'constants/tokens'
import { DEFAULT_PRECISION } from 'constants/misc'

import { InputField } from 'types/trade'
import useTradePage from 'hooks/useTradePage'
import { useActiveMarket, useSetTypedValue } from 'state/trade/hooks'

import { CustomInputBox2 } from 'components/InputBox'

const CollateralInput = styled(CustomInputBox2)`
  border-radius: 6px;
  padding-bottom: 4px;
`

export default function AmountBox() {
  const { chainId } = useActiveWeb3React()

  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)

  const market = useActiveMarket()

  const [calculationMode, setCalculationMode] = useState(false)
  const [calculationLoading, setCalculationLoading] = useState(false)
  const setTypedValue = useSetTypedValue()

  const collateralCurrencyIcon = useCurrencyLogo(collateralCurrency?.symbol)

  const { formattedAmounts, balance } = useTradePage()

  const pricePrecision = useMemo(() => (market ? market.pricePrecision : DEFAULT_PRECISION), [market])

  function onChangeCollateral(value: string) {
    if (calculationPattern.test(value)) {
      setCalculationMode(true)
    } else if (calculationMode) {
      setCalculationMode(false)
    }
    setTypedValue(value, InputField.PRICE)
  }

  function onEnterPress() {
    setCalculationLoading(true)
    setCalculationMode(false)
    const result = calculateString(formattedAmounts[0], balance, pricePrecision, '1')
    setTypedValue(result, InputField.PRICE)
    setCalculationLoading(false)
  }

  return (
    <div>
      <CollateralInput
        value={formattedAmounts[0]}
        precision={pricePrecision}
        title="Amount"
        symbol={collateralCurrency?.symbol}
        symbolIcon={collateralCurrencyIcon}
        balanceTitle="Available:"
        balanceDisplay={toBN(balance).gt(0) ? formatPrice(balance, pricePrecision, true) : '0.0'}
        balanceExact={toBN(balance).gt(0) ? formatPrice(balance, pricePrecision) : '0'}
        max={true}
        calculationEnabled={WEB_SETTING.calculationalInput}
        calculationMode={calculationMode}
        calculationLoading={calculationLoading}
        onChange={onChangeCollateral}
        onEnterPress={onEnterPress}
        balanceHoverColor="white"
        hotkey={'a'}
      />
    </div>
  )
}
