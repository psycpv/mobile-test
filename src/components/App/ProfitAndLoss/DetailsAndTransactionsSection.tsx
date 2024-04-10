import styled, { useTheme } from 'styled-components'
import React, { useMemo, useState } from 'react'
import { FlexRow, Row, WrapRow } from 'components/Row'
import { ThemedText } from 'components/Text'
import { FlexColumn } from 'components/Column'
import { ThemedTables } from 'components/Table'
import { MyBarChart } from 'components/App/Chart/MyBarChart'
import { useChartWrapper } from 'hooks/useChartWrapper'
import { MyPieChart } from 'components/App/Chart/MyPieChart'
import { InnerCard } from 'components/Card'
import { SummaryInfo } from 'components/SummaryInfo'
import { useDailyCumulativePnlDataContext } from 'context/DailyCumulativePnlDataContext'
import { useDailyFundingDataContext } from 'context/DailyFundingDataContext'
import { CustomTooltip } from 'components/App/Chart/CustomTooltip'
import useSymbolDistributionInData from 'hooks/useSymbolDistributionInData'
import { formatAmount, formatPrice } from 'utils/numbers'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { getTokenWithFallbackChainId } from 'utils/token'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { Tabs } from 'components/Tabs'

const DetailsAndTransactionsSectionWrapper = styled(FlexColumn)`
  width: 100%;
`

const DetailsSectionWrapper = styled(FlexColumn)``

const TransactionsSectionWrapper = styled(WrapRow)``

const DetailsSection = () => {
  const { dailyCumulativePnlDataForRange } = useDailyCumulativePnlDataContext()
  const visibleItemCount = 20

  const [pageIndex, setPageIndex] = useState(0)

  const dailyCumulativePnlDataForRangeVisible = useMemo(() => {
    if (dailyCumulativePnlDataForRange === null) return null
    const startIndex = pageIndex * visibleItemCount
    return [...dailyCumulativePnlDataForRange].reverse().slice(startIndex, startIndex + visibleItemCount)
  }, [dailyCumulativePnlDataForRange, pageIndex])

  return (
    <DetailsSectionWrapper>
      {dailyCumulativePnlDataForRange !== null && dailyCumulativePnlDataForRangeVisible !== null && (
        <ThemedTables.PnlDetails
          data={dailyCumulativePnlDataForRangeVisible}
          paginationProps={{
            onPageChange({ selected }) {
              setPageIndex(selected)
            },
            pageCount: Math.ceil(dailyCumulativePnlDataForRange.length / visibleItemCount),
          }}
        />
      )}
    </DetailsSectionWrapper>
  )
}

const DailyFundingFeeSectionWrapper = styled(FlexColumn)`
  align-self: stretch;
  justify-content: flex-start;
`

const DailyFundingFeeSection = () => {
  const { chartWidth, chartWrapperRef } = useChartWrapper()
  const { dailyFeeDataForRange } = useDailyFundingDataContext()
  return (
    <DailyFundingFeeSectionWrapper ref={chartWrapperRef}>
      <FlexRow maxHeight="1.35rem" marginBottom={'24px'} justify={'space-between'}>
        <ThemedText.White>Daily Funding Fee</ThemedText.White>
      </FlexRow>
      <MyBarChart
        data={dailyFeeDataForRange}
        tooltipContent={<CustomTooltip.FeeBarChart />}
        leftDataKey="fundingFeeNet"
        width={chartWidth}
        height={300}
      />
    </DailyFundingFeeSectionWrapper>
  )
}

const ReceivedFundingFeeAllocationSectionWrapper = styled(FlexColumn)``

const ReceivedFundingFeeAllocationSection = () => {
  const { chartWidth, chartWrapperRef } = useChartWrapper()
  const { processedFeeDataItemsForRange, totalFundingFeeReceived } = useDailyFundingDataContext()
  const data = useSymbolDistributionInData({
    data: processedFeeDataItemsForRange,
    totalValue: totalFundingFeeReceived,
    dataKey: 'fundingReceived',
  })
  return (
    <ReceivedFundingFeeAllocationSectionWrapper ref={chartWrapperRef}>
      <ThemedText.White marginBottom={'24px'}>Received Funding Fee Allocation</ThemedText.White>
      <MyPieChart width={chartWidth} height={'auto'} data={data} />
    </ReceivedFundingFeeAllocationSectionWrapper>
  )
}

const PaidFundingFeeAllocationSectionWrapper = styled(FlexColumn)``

const PaidFundingFeeAllocationSection = () => {
  const { chartWidth, chartWrapperRef } = useChartWrapper()
  const { processedFeeDataItemsForRange, totalFundingFeePaid } = useDailyFundingDataContext()
  const data = useSymbolDistributionInData({
    data: processedFeeDataItemsForRange,
    totalValue: totalFundingFeePaid,
    dataKey: 'fundingPaid',
  })
  return (
    <PaidFundingFeeAllocationSectionWrapper ref={chartWrapperRef}>
      <ThemedText.White marginBottom={'24px'}>Paid Funding Fee Allocation</ThemedText.White>
      <MyPieChart width={chartWidth} height={'auto'} data={data} />
    </PaidFundingFeeAllocationSectionWrapper>
  )
}

const TransactionFeeAllocationSectionWrapper = styled(FlexColumn)``

const TransactionFeeAllocationSection = () => {
  const { chartWidth, chartWrapperRef } = useChartWrapper()
  const { processedFeeDataItemsForRange, totalPlatformFeePaid } = useDailyFundingDataContext()
  const data = useSymbolDistributionInData({
    data: processedFeeDataItemsForRange,
    totalValue: totalPlatformFeePaid,
    dataKey: 'platformFeePaid',
  })
  return (
    <TransactionFeeAllocationSectionWrapper ref={chartWrapperRef}>
      <ThemedText.White marginBottom={'24px'}>Transaction Fee Allocation</ThemedText.White>
      <MyPieChart width={chartWidth} height={'auto'} data={data} />
    </TransactionFeeAllocationSectionWrapper>
  )
}

const SummaryBoxesSectionWrapper = styled(FlexRow)``

const SummaryBoxesSection = () => {
  const { chainId } = useActiveWeb3React()
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)

  const { totalPlatformFeePaid, totalFundingFee } = useDailyFundingDataContext()

  return (
    <SummaryBoxesSectionWrapper gap={'24px'}>
      <InnerCard borderRadius="6px">
        <SummaryInfo
          title={'Total Funding Fee'}
          value={
            (totalFundingFee !== null ? formatAmount(formatPrice(totalFundingFee)) : '...') +
            ' ' +
            collateralCurrency?.symbol
          }
        />
      </InnerCard>
      <InnerCard borderRadius="6px">
        <SummaryInfo
          title={'Total Transaction Fee'}
          value={
            (totalPlatformFeePaid !== null ? formatAmount(formatPrice(totalPlatformFeePaid)) : '...') +
            ' ' +
            collateralCurrency?.symbol
          }
        />
      </InnerCard>
    </SummaryBoxesSectionWrapper>
  )
}

const TransactionsSection = () => {
  return (
    <TransactionsSectionWrapper columnGap={'100px'} rowGap={'30px'} align={'stretch'}>
      <Row>
        <SummaryBoxesSection />
      </Row>
      <FlexColumn minWidth={'350px'} gap={'24px'}>
        <DailyFundingFeeSection />
        <PaidFundingFeeAllocationSection />
      </FlexColumn>
      <FlexColumn minWidth={'350px'} gap={'24px'}>
        <ReceivedFundingFeeAllocationSection />
        <TransactionFeeAllocationSection />
      </FlexColumn>
    </TransactionsSectionWrapper>
  )
}

export const DetailsAndTransactionsSection = () => {
  const [activeTab, setActiveTab] = useState('Details')
  const theme = useTheme()

  return (
    <DetailsAndTransactionsSectionWrapper gap={'24px'}>
      <Tabs
        styles={[
          {
            color: theme.pink1,
          },
          {
            color: theme.blue6,
          },
        ]}
        options={['Details', 'Transactions']}
        value={activeTab}
        onChange={setActiveTab}
      />
      {activeTab === 'Details' ? <DetailsSection /> : <TransactionsSection />}
    </DetailsAndTransactionsSectionWrapper>
  )
}
