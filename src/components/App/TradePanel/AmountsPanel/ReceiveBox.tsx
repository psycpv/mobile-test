import { useMemo } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import USDC_ICON from '/public/static/images/tokens/USDC.svg'

import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'
import useDebounce from 'lib/hooks/useDebounce'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

import { toBN } from 'utils/numbers'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { DEFAULT_PRECISION } from 'constants/misc'
import { getTokenWithFallbackChainId } from 'utils/token'
import { ErrorState, InputField } from 'types/trade'

import { useLeverage } from 'state/user/hooks'
import { useActiveMarket, useSetTypedValue } from 'state/trade/hooks'
import useTradePage from 'hooks/useTradePage'

import { Row } from 'components/Row'
import Column from 'components/Column'
import { NumericalInput } from 'components/Input'

const ReceiveLabelBox = styled(Column)`
  padding: 5px 0px 5px 13px;
  font-weight: 400;
  font-size: 13px;
  min-width: 120px;
  gap: 2px;
  color: ${({ theme }) => theme.coolGrey};
  background: ${({ theme }) => theme.color3};
  border-radius: 6px 0px 0px 6px;
  justify-content: center;
`

const ReceiveValueBox = styled(Column)`
  gap: 2px;
  width: 100%;
  background: ${({ theme }) => theme.color3};
  border-radius: 0px 6px 6px 0px;
  padding: 5px 13px 5px 13px;
  color: ${({ theme }) => theme.coolGrey};
`

const CurrencySymbol = styled(Row)`
  font-size: 16px;
  font-weight: 500;
  width: unset;
  gap: 3px;
  color: ${({ theme }) => theme.almostWhite};
`

const ReceiveLabel = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.almostWhite};
`

const PositionDescription = styled.div`
  flex: 1;
  font-size: 12px;
  margin-left: 5px;
  color: ${({ theme }) => theme.coolGrey};
`

export default function ReceiveBox() {
  return (
    <>
      <Row gap="2px">
        <ReceiveLabelBox>
          <ReceiveLabel>Position Size</ReceiveLabel>
          <ReceiveLabel>Position Value</ReceiveLabel>
        </ReceiveLabelBox>
        <ValuesBox />
      </Row>
    </>
  )
}

function ValuesBox() {
  const { chainId } = useActiveWeb3React()

  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)
  const market = useActiveMarket()
  const setTypedValue = useSetTypedValue()

  const { state, formattedAmounts } = useTradePage()
  const userLeverage = useLeverage()
  const debouncedLeverage = useDebounce(userLeverage, 10) as number

  const marketLogo = useCurrencyLogo(market?.symbol)

  const [outputTicker, quantityPrecision] = useMemo(
    () => (market ? [market.symbol, market.quantityPrecision] : ['', DEFAULT_PRECISION]),
    [market]
  )
  return (
    <ReceiveValueBox>
      <ReceiveLabel>
        <NumericalInput
          value={formattedAmounts[1]}
          onUserInput={(value: string) => setTypedValue(value, InputField.QUANTITY)}
          precision={quantityPrecision}
        />
        <CurrencySymbol>
          <Image src={marketLogo} width={18} height={18} alt={`icon`} />
          {outputTicker}
        </CurrencySymbol>
      </ReceiveLabel>
      <ReceiveLabel>
        {state !== ErrorState.VALID || toBN(formattedAmounts[0]).isNaN() || toBN(debouncedLeverage).isNaN() ? (
          <div>--</div>
        ) : (
          <>
            <div>{toBN(formattedAmounts[0]).times(debouncedLeverage).toFormat(2)}</div>
            <PositionDescription>
              {toBN(formattedAmounts[0]).isNaN() ? '0' : toBN(formattedAmounts[0]).toFormat(2)} x {debouncedLeverage}
            </PositionDescription>
          </>
        )}
        <CurrencySymbol>
          <Image src={USDC_ICON} width={18} height={18} alt={`icon`} />
          {collateralCurrency.symbol}
        </CurrencySymbol>
      </ReceiveLabel>
    </ReceiveValueBox>
  )
}
