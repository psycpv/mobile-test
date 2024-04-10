import React, { useMemo } from 'react'
import styled, { useTheme } from 'styled-components'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import { MIN_LEVERAGE_VALUE } from 'constants/misc'

const Wrapper = styled.div`
  user-select: none;
  padding: 0 5px;
  width: 100%;
  .rc-slider-mark {
    font-size: 10px;
  }
  .rc-slider-mark-text-active:last-chid {
    color: green;
  }
`

export default function CustomSlider({
  value,
  maxLeverage,
  onChange,
  mixedColor,
}: {
  value: number
  maxLeverage: number
  onChange: any
  mixedColor: string
}) {
  const marks = useMemo(() => {
    switch (maxLeverage) {
      case 8:
        return { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8' }
      case 10:
        return { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: '10' }
      case 15:
        return { 1: '1', 3: '3', 6: '6', 9: '9', 12: '12', 15: '15' }
      case 20:
        return { 1: '1', 5: '5', 10: '10', 15: '15', 20: '20' }
      case 25:
        return { 1: '1', 5: '5', 10: '10', 15: '15', 20: '20', 25: '25' }
      case 30:
        return { 1: '1', 5: '5', 10: '10', 15: '15', 20: '20', 25: '25', 30: '30' }
      case 40:
        return { 1: '1', 10: '10', 20: '20', 30: '30', 40: '40' }
      case 50:
        return { 1: '1', 10: '10', 20: '20', 30: '30', 40: '40', 50: '50' }
      case 60:
        return { 1: '1', 10: '10', 20: '20', 30: '30', 40: '40', 50: '50', 60: '60' }
    }
  }, [maxLeverage])
  const theme = useTheme()
  return (
    <Wrapper>
      <Slider
        min={MIN_LEVERAGE_VALUE}
        max={maxLeverage}
        step={1}
        marks={marks}
        value={value}
        trackStyle={{
          backgroundColor: theme.blue,
          height: 6,
          marginTop: '-2.5px',
        }}
        dotStyle={{
          borderRadius: '10px',
          height: '11px',
          width: '11px',
          backgroundColor: theme.color3,
          borderColor: theme.color3,
        }}
        handleStyle={{
          borderColor: theme.blue,
          borderWidth: '2px',
          opacity: 1,
          height: 20,
          width: 20,
          marginTop: -10,
          borderRadius: 20,
          boxShadow: 'none',
          backgroundColor: theme.color2,
        }}
        railStyle={{
          width: 'calc(100% + 8px)',
          height: '6px',
          marginLeft: '-4px',
          marginTop: '-2.5px',
          background: theme.color3,
        }}
        activeDotStyle={{
          borderRadius: '10px',
          height: '11px',
          width: '11px',
          backgroundColor: theme.blue,
          borderColor: theme.blue,
        }}
        onChange={onChange}
      />
    </Wrapper>
  )
}
