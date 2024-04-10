import { FlexColumn } from 'components/Column'
import { ThemedText } from 'components/Text'
import { ThemedButton } from 'components/Button'
import ArrowRight from 'components/Icons/ArrowRight'
import { Card } from 'components/Card'
import { SummaryMetricsInnerCard } from 'components/OpenPositionsCard/SummaryMetricsInnerCard'
import { AbsoluteOpenPositions } from 'components/OpenPositionsCard/AbsoluteOpenPositions'
import useOpenPositionsInsights from 'hooks/useOpenPositionsInsights'
import { useInjectedAddress } from 'lib/hooks/useInjectedAddress'
import List from 'components/Icons/List'
import styled, { useTheme } from 'styled-components'
import LinkWithInjectedWalletSupport from 'components/Link/LinkWithInjectedWalletSupport'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`

export const OpenPositionsCard = () => {
  const {
    positionsCount,
    longPositionsCount,
    positionsTotalValue,
    minUpnlQuote,
    maxUpnlQuote,
    totalUpnlPercent,
    totalUpnl,
  } = useOpenPositionsInsights()

  const walletAddress = useInjectedAddress()

  const theme = useTheme()

  return (
    <Card alignSelf="stretch" flex={1}>
      <FlexColumn gap={'19px'}>
        <ThemedText.P2>Open Positions</ThemedText.P2>
        {positionsCount ? (
          <Wrapper>
            <SummaryMetricsInnerCard
              positionsCount={positionsCount}
              longPositionsCount={longPositionsCount}
              positionsTotalValue={positionsTotalValue}
              totalUpnlPercent={totalUpnlPercent}
              totalUpnl={totalUpnl}
            />
            <AbsoluteOpenPositions minUpnlQuote={minUpnlQuote} maxUpnlQuote={maxUpnlQuote} />
          </Wrapper>
        ) : (
          <FlexColumn gap="16px" align="center" justifyContent="center" flex={1}>
            <List scale={2} height={20} width={20} marginTop={'60px'} />
            <ThemedText.P5 color={theme.gray1} marginBottom={'60px'}>
              No Open Position
            </ThemedText.P5>
          </FlexColumn>
        )}
        <LinkWithInjectedWalletSupport href="/open-positions">
          <ThemedButton.Primary marginLeft="auto" marginTop="auto" width="180px" disabled={!positionsCount}>
            View All <ArrowRight color={'#001426'} width={17} height={17} marginLeft={'6px'} />
          </ThemedButton.Primary>
        </LinkWithInjectedWalletSupport>
      </FlexColumn>
    </Card>
  )
}
