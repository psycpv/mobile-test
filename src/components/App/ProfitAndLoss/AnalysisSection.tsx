import styled from 'styled-components'
import { WrapRow } from 'components/Row'
import { AnalysisFiltersSection } from 'components/App/ProfitAndLoss/AnalysisFiltersSection'
import { AnalysisDataSection } from 'components/App/ProfitAndLoss/AnalysisDataSection'
import { DailyAndCumulativePnLChartSection } from 'components/App/ProfitAndLoss/DailyAndCumulativePnLChartSection'

const AnalysisSectionWrapper = styled(WrapRow)``

export const AnalysisSection = () => {
  return (
    <AnalysisSectionWrapper gap="24px">
      <AnalysisFiltersSection />
      <AnalysisDataSection />
      <DailyAndCumulativePnLChartSection />
    </AnalysisSectionWrapper>
  )
}
