import { ResponsiveRow } from 'components/Row'
import { Column, FlexColumn } from 'components/Column'
import React from 'react'
import styled from 'styled-components'
import { SummaryMetricsInnerCard } from 'components/OpenPositionsCard/SummaryMetricsInnerCard'
import { OpenPositionsTableCard } from 'components/OpenPositionsTableCard'
import { OpenPositionsDistribution } from 'components/OpenPositionsDistribution'
import useOpenPositionsInsights from 'hooks/useOpenPositionsInsights'
import { AccountHealthCard } from 'components/AccountHealthCard'
import { HeaderSection } from 'components/App/OpenPositions/HeaderSection'

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

const OpenPositions = () => {
  const { positionsCount, longPositionsCount, positionsTotalValue, totalUpnlPercent, totalUpnl } =
    useOpenPositionsInsights()
  return (
    <Container>
      <HeaderSection />
      <FlexColumn gap="18px">
        <ResponsiveRow align="stretch" gap="18px">
          <FlexColumn flex={7} gap="16px">
            <SummaryMetricsInnerCard
              positionsCount={positionsCount}
              longPositionsCount={longPositionsCount}
              positionsTotalValue={positionsTotalValue}
              totalUpnlPercent={totalUpnlPercent}
              totalUpnl={totalUpnl}
              orientation="horizontal"
            />
          </FlexColumn>
          <FlexColumn flex={4} gap="16px">
            <AccountHealthCard height={'81px'} orientation="horizontal" />
          </FlexColumn>
        </ResponsiveRow>
        <ResponsiveRow align="stretch" gap="18px">
          <FlexColumn height="st" flex={7} gap="16px">
            <OpenPositionsTableCard />
          </FlexColumn>
          <FlexColumn height="auto" flex={4} gap="16px">
            <OpenPositionsDistribution />
          </FlexColumn>
        </ResponsiveRow>
      </FlexColumn>
    </Container>
  )
}

export default OpenPositions
