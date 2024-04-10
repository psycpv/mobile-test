import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { mix } from 'polished'

import { APP_NAME, MAX_LEVERAGE_VALUE, MIN_LEVERAGE_VALUE } from 'constants/misc'
import { toBN } from 'utils/numbers'

import { useLeverage, useSetLeverageCallback } from 'state/user/hooks'
import { useActiveMarket, useGetLockedPercentages } from 'state/trade/hooks'
import { useIsMobile } from 'lib/hooks/useWindowSize'
import useDebounce from 'lib/hooks/useDebounce'

import { Row, RowCenter } from 'components/Row'
import InputWithSuffix from 'components/InputWithSuffix'
import CustomSlider from 'components/CustomSlider'
import SolidButton from 'components/Button/SolidButton'

const LeverageBoxWrapper = styled(Row)`
  font-weight: 400;
  font-size: 12px;
  padding: 8px 0px;
  gap: 30px;
  border-radius: 6px;
  color: ${({ theme }) => theme.almostWhite};
`

const Separator = styled(RowCenter)`
  width: 75%;
  margin: 30px auto;
  height: 1px;
  background: ${({ theme }) => theme.color4};
`

export default function LeverageSlider({ onDismiss }: { onDismiss: () => void }) {
  const userLeverage = useLeverage()
  const isMobile = useIsMobile()
  const setLeverageCallback = useSetLeverageCallback()

  const [leverage, setLeverage] = useState(userLeverage)
  const debouncedLeverage = useDebounce(leverage, 10) as number
  const lockedParamsLeverage = useDebounce(leverage, 300) as number
  const [customLeverage, setCustomLeverage] = useState<string | number>(leverage)
  const [leverageFocus, setLeverageFocus] = useState(false)
  const getLockedPercentages = useGetLockedPercentages(lockedParamsLeverage)
  const market = useActiveMarket()

  const maxLeverage = useMemo(() => (market ? market.maxLeverage : MAX_LEVERAGE_VALUE), [market])
  const mixedColor = mix(leverage / maxLeverage, '#E23FBE', '#738EEC')

  useEffect(() => {
    const controller = new AbortController()
    if (market && lockedParamsLeverage)
      getLockedPercentages({ signal: controller.signal, headers: [['App-Name', APP_NAME]] })
    return () => {
      controller.abort()
    }
  }, [market, lockedParamsLeverage, getLockedPercentages])

  const handleClick = useCallback(() => {
    setLeverageCallback(debouncedLeverage)
    setCustomLeverage(debouncedLeverage)
    onDismiss()
  }, [debouncedLeverage, onDismiss, setLeverageCallback])

  useEffect(() => {
    if (customLeverage) {
      setCustomLeverage(debouncedLeverage)
    }
  }, [debouncedLeverage, customLeverage])

  const handleCustomLeverage = useCallback(
    (value) => {
      if (!value) {
        setCustomLeverage('')
        setLeverage(1)
      }
      if (value >= MIN_LEVERAGE_VALUE && value <= maxLeverage) {
        setLeverage(parseInt(value))
        setCustomLeverage(parseInt(value))
      }
    },
    [maxLeverage]
  )

  return (
    <React.Fragment>
      <LeverageBoxWrapper>
        <CustomSlider value={leverage} maxLeverage={maxLeverage} onChange={setLeverage} mixedColor={mixedColor} />
        <InputWithSuffix
          value={!customLeverage || toBN(customLeverage).lt(0) ? '' : customLeverage.toString()}
          onChange={(e) => handleCustomLeverage(e)}
          placeholder={'1'}
          suffix={'x'}
          shouldFocus={leverageFocus}
          setShouldFocus={setLeverageFocus}
        />
      </LeverageBoxWrapper>
      <Separator />

      <SolidButton
        customText={'Confirm'}
        height={isMobile ? 38 : 48}
        fontSize={isMobile ? '14px' : '18px'}
        onClick={handleClick}
      />
    </React.Fragment>
  )
}
