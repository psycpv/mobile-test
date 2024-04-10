import { WrapFlexCard } from 'components/Card'
import { SummarySection } from 'components/App/ProfitAndLoss/SummarySection'
import { AnalysisSection } from 'components/App/ProfitAndLoss/AnalysisSection'
import { DetailsAndTransactionsSection } from 'components/App/ProfitAndLoss/DetailsAndTransactionsSection'

export const BodySection = () => {
  return (
    <WrapFlexCard rowGap="2.5rem">
      <SummarySection />
      <AnalysisSection />
      <DetailsAndTransactionsSection />
    </WrapFlexCard>
  )
}
