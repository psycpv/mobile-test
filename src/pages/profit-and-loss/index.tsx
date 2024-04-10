import Column from 'components/Column'
import styled from 'styled-components'
import React from 'react'
import { HeaderSection } from 'components/App/ProfitAndLoss/HeaderSection'
import { BodySection } from 'components/App/ProfitAndLoss/BodySection'
import { TimeRangeFilterContextProvider } from 'context/TimeRangeFilterContext'
import { DailyCumulativePnlDataContextProvider } from 'context/DailyCumulativePnlDataContext'
import { DailyFundingDataContextProvider } from 'context/DailyFundingDataContext'

const Container = styled(Column)`
  background: ${({ theme }) => theme.color1};
  padding: 0 9%;

  ${({ theme }) => theme.mediaWidth.upToLarge`
    padding: 0 9%;
  `}

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 0 4%;
  `}

    ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 0 2%;
  `}
`

const ProfitAndLoss = () => {
  return (
    <Container>
      <HeaderSection />
      <TimeRangeFilterContextProvider>
        <DailyCumulativePnlDataContextProvider>
          <DailyFundingDataContextProvider>
            <BodySection />
          </DailyFundingDataContextProvider>
        </DailyCumulativePnlDataContextProvider>
      </TimeRangeFilterContextProvider>
    </Container>
  )
}

export default ProfitAndLoss
