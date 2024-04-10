import { AutoColumn, Column } from 'components/Column'
import { FlexRow, Row } from 'components/Row'
import { ThemedText } from 'components/Text'
import React, { useEffect, useRef, useState } from 'react'

import useWindowSize from 'lib/hooks/useWindowSize'
import { useDailyCumulativePnlDataContext } from 'context/DailyCumulativePnlDataContext'
import { MyLineChart } from 'components/App/Chart/MyLineChart'
import styled, { useTheme } from 'styled-components'

const ColorIndicator = styled.div<{
  color: string
}>`
  width: 4px !important;
  height: 4px !important;
  border-radius: 5px;
  background-color: ${({ color }) => color};

  ${({ theme }) => theme.mobileFirstMediaWidth.fromSmall`
    width: 30px !important;
  `}
`

export const PnLChart = () => {
  const { dailyCumulativePnlDataForRange } = useDailyCumulativePnlDataContext()

  const [chartWidth, setChartWidth] = useState(0)
  const { width } = useWindowSize()
  const chartWrapperRef = useRef<HTMLDivElement>(null)

  const theme = useTheme()

  useEffect(() => {
    if (chartWrapperRef.current && dailyCumulativePnlDataForRange) {
      const wrapperWidth = chartWrapperRef.current.clientWidth
      setChartWidth(wrapperWidth)
    }
  }, [width, dailyCumulativePnlDataForRange])

  if (dailyCumulativePnlDataForRange === null) {
    return <></>
  }

  return (
    <AutoColumn gap={'16px'} marginBottom="auto">
      <Row justify={'space-between'}>
        <FlexRow marginBottom="4px" justify={'space-between'}>
          <Column>
            <ThemedText.P5 fontSize={[14, 16]}>Cumulative PnL</ThemedText.P5>
          </Column>
          <Column>
            <FlexRow gap="10px" smGap="24px">
              <Column>
                <FlexRow gap="6px" smGap="8px">
                  <ColorIndicator color={theme.blue7} />
                  <ThemedText.P7 display="inline">Profit & Loss ($)</ThemedText.P7>
                </FlexRow>
              </Column>
              <Column>
                <FlexRow gap="6px" smGap="8px">
                  <ColorIndicator color={theme.pink} />
                  <ThemedText.P7 display="inline">Profit & Loss (%)</ThemedText.P7>
                </FlexRow>
              </Column>
            </FlexRow>
          </Column>
        </FlexRow>
      </Row>
      <Row ref={chartWrapperRef}>
        <MyLineChart data={dailyCumulativePnlDataForRange} width={chartWidth} height={230} />
      </Row>
    </AutoColumn>
  )
}
