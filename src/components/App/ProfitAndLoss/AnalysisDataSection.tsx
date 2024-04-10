import styled from 'styled-components'
import { ThemedText } from 'components/Text'
import { WrapRow } from 'components/Row'
import { FlexColumn } from 'components/Column'
import { getTokenWithFallbackChainId } from 'utils/token'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useDailyCumulativePnlDataContext } from 'context/DailyCumulativePnlDataContext'
import { formatAmount, formatPrice } from 'utils/numbers'
import { useMemo } from 'react'
import { useTimeRangeFilterContext } from 'context/TimeRangeFilterContext'

const AnalysisDataSectionWrapper = styled.div`
  width: 100%;
  margin-bottom: 12px;
`

const AnalysisDataSectionTitle = styled(ThemedText.White)`
  margin-bottom: 12px !important;
`

const InfoRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <WrapRow justify="space-between">
      <ThemedText.CoolGray minWidth={'125px'} fontSize={'14px'}>
        {label}
      </ThemedText.CoolGray>
      <ThemedText.White minWidth={'125px'} textAlign={'right'}>
        {value}
      </ThemedText.White>
    </WrapRow>
  )
}

const AnalysisDataList = () => {
  const { chainId } = useActiveWeb3React()
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)
  const { cumulativePnlDataForRange, dailyCumulativePnlDataForRange } = useDailyCumulativePnlDataContext()
  const { filterRangeDaysCount } = useTimeRangeFilterContext()
  const winningDays = useMemo(
    () => dailyCumulativePnlDataForRange?.filter((d) => d.pnl > 0).length,
    [dailyCumulativePnlDataForRange]
  )
  const winRate = useMemo(() => {
    if (winningDays === undefined || filterRangeDaysCount === 0) return '-'
    return ((winningDays * 100) / filterRangeDaysCount).toFixed(2) + '%'
  }, [winningDays, filterRangeDaysCount])

  return (
    <WrapRow columnGap="100px" rowGap="6px">
      <FlexColumn minWidth={'250px'} gap="6px">
        <InfoRow
          label="Total Profit:"
          value={`${
            cumulativePnlDataForRange ? formatAmount(formatPrice(cumulativePnlDataForRange.cumulativeProfit)) : '...'
          } ${collateralCurrency?.symbol}`}
        />
        <InfoRow
          label="Total Loss:"
          value={`${
            cumulativePnlDataForRange ? formatAmount(formatPrice(cumulativePnlDataForRange.cumulativeLoss)) : '...'
          } ${collateralCurrency?.symbol}`}
        />
        <InfoRow
          label="Net Profit/Loss:"
          value={`${
            cumulativePnlDataForRange
              ? formatAmount(
                  formatPrice(cumulativePnlDataForRange.cumulativeProfit + cumulativePnlDataForRange.cumulativeLoss)
                )
              : '...'
          } ${collateralCurrency?.symbol}`}
        />
        <InfoRow label="Win Rate:" value={winRate} />
        <InfoRow
          label="Profit/Loss Ratio:"
          value={
            cumulativePnlDataForRange
              ? filterRangeDaysCount
                ? cumulativePnlDataForRange?.cumulativeLoss
                  ? formatAmount(
                      formatPrice(
                        Math.abs(cumulativePnlDataForRange.cumulativeProfit / cumulativePnlDataForRange.cumulativeLoss)
                      )
                    )
                  : '1'
                : '-'
              : '...'
          }
        />
      </FlexColumn>
      <FlexColumn minWidth={'250px'} gap="6px">
        <InfoRow label="Winning Days:" value={`${winningDays ?? '...'} Days`} />
        <InfoRow
          label="Losing Days:"
          value={`${dailyCumulativePnlDataForRange?.filter((d) => d.pnl < 0).length ?? '...'} Days`}
        />
        <InfoRow
          label="Breakeven Days:"
          value={`${dailyCumulativePnlDataForRange?.filter((d) => d.pnl === 0).length ?? '...'} Days`}
        />
        <InfoRow
          label="Average Profit:"
          value={`${
            cumulativePnlDataForRange
              ? filterRangeDaysCount
                ? formatAmount(formatPrice(cumulativePnlDataForRange.cumulativeProfit / filterRangeDaysCount))
                : '-'
              : '...'
          } ${collateralCurrency?.symbol}`}
        />
        <InfoRow
          label="Average Loss:"
          value={`${
            cumulativePnlDataForRange
              ? filterRangeDaysCount
                ? formatAmount(formatPrice(cumulativePnlDataForRange.cumulativeLoss / filterRangeDaysCount))
                : '-'
              : '...'
          } ${collateralCurrency?.symbol}`}
        />
      </FlexColumn>
    </WrapRow>
  )
}

export const AnalysisDataSection = () => {
  return (
    <AnalysisDataSectionWrapper>
      <AnalysisDataSectionTitle>Analysis</AnalysisDataSectionTitle>
      <AnalysisDataList />
    </AnalysisDataSectionWrapper>
  )
}
