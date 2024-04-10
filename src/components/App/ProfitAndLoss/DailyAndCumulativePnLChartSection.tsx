import styled, { useTheme } from 'styled-components'
import { FlexRow, WrapRow } from 'components/Row'
import { Column, FlexColumn } from 'components/Column'
import { ThemedText } from 'components/Text'
import React from 'react'
import { MyBarChart } from 'components/App/Chart/MyBarChart'
import { useChartWrapper } from 'hooks/useChartWrapper'
import { MyLineChart } from 'components/App/Chart/MyLineChart'
import { useDailyCumulativePnlDataContext } from '../../../context/DailyCumulativePnlDataContext'
import { CustomTooltip } from 'components/App/Chart/CustomTooltip'

const DailyAndCumulativePnLChartSectionWrapper = styled(WrapRow)``

const DailyPnLChartWrapper = styled(FlexColumn)``

const DailyPnLChartTitle = styled(ThemedText.White)`
  margin-bottom: 12px !important;
`

const CumulativePnLChartTitle = styled(ThemedText.White)``

const DailyPnLChart = () => {
  const { chartWidth, chartWrapperRef } = useChartWrapper()
  const { dailyCumulativePnlDataForRange } = useDailyCumulativePnlDataContext()

  return (
    <DailyPnLChartWrapper ref={chartWrapperRef}>
      <DailyPnLChartTitle>Daily PnL</DailyPnLChartTitle>
      <MyBarChart
        tooltipContent={<CustomTooltip.PnlBarChart />}
        data={dailyCumulativePnlDataForRange}
        leftDataKey="pnl"
        width={chartWidth}
        height={300}
      />
    </DailyPnLChartWrapper>
  )
}

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

const CumulativePnLChart = () => {
  const { chartWidth, chartWrapperRef } = useChartWrapper()
  const theme = useTheme()

  const { dailyCumulativePnlDataForRange } = useDailyCumulativePnlDataContext()

  return (
    <FlexColumn ref={chartWrapperRef}>
      <FlexRow marginBottom={'12px'} justify={'space-between'}>
        <Column>
          <CumulativePnLChartTitle>Cumulative PnL</CumulativePnLChartTitle>
        </Column>
        <Column>
          <FlexRow gap="10px" smGap="24px">
            <Column>
              <FlexRow gap="6px" smGap="8px">
                <ColorIndicator color={theme.blue7} />
                <ThemedText.White fontSize="12px" display="inline">
                  Profit & Loss ($)
                </ThemedText.White>
              </FlexRow>
            </Column>
            <Column>
              <FlexRow gap="6px" smGap="8px">
                <ColorIndicator color={theme.pink} />
                <ThemedText.White fontSize="12px" display="inline">
                  Profit & Loss (%)
                </ThemedText.White>
              </FlexRow>
            </Column>
          </FlexRow>
        </Column>
      </FlexRow>
      <MyLineChart data={dailyCumulativePnlDataForRange} width={chartWidth} height={300} />
    </FlexColumn>
  )
}

export const DailyAndCumulativePnLChartSection = () => {
  return (
    <DailyAndCumulativePnLChartSectionWrapper columnGap="100px" rowGap="30px">
      <FlexColumn minWidth={'350px'}>
        <DailyPnLChart />
      </FlexColumn>
      <FlexColumn minWidth={'350px'}>
        <CumulativePnLChart />
      </FlexColumn>
    </DailyAndCumulativePnLChartSectionWrapper>
  )
}
