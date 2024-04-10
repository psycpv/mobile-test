import { FlexColumn } from 'components/Column'
import { ThemedText } from 'components/Text'
import { Row } from 'components/Row'
import { Card } from 'components/Card'
import { ThemedSummaryBox } from 'components/ProfitAndLossCard/SummaryBox'
import { ThemedButton } from 'components/Button'
import ArrowRight from 'components/Icons/ArrowRight'
import { PnLChart } from 'components/ProfitAndLossCard/PnLChart'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import React, { useMemo } from 'react'
import { formatAmount, formatPrice } from 'utils/numbers'
import { getTokenWithFallbackChainId } from 'utils/token'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { useDailyCumulativePnlDataContext } from 'context/DailyCumulativePnlDataContext'
import LinkWithInjectedWalletSupport from 'components/Link/LinkWithInjectedWalletSupport'
import { useTimeRangeFilterContext } from '../../context/TimeRangeFilterContext'
import { useTheme } from 'styled-components'

export const ProfitAndLossCard = () => {
  const { chainId } = useActiveWeb3React()

  const { getCumulativePnlForLastNDays } = useDailyCumulativePnlDataContext()
  const { getIsFilterActiveForLastNDays, setFilterRangeForLastNDays } = useTimeRangeFilterContext()

  const todayCumulativePnl = useMemo(() => getCumulativePnlForLastNDays(1), [getCumulativePnlForLastNDays])
  const thirtyDaysCumulativePnl = useMemo(() => getCumulativePnlForLastNDays(30), [getCumulativePnlForLastNDays])
  const sevenDaysCumulativePnl = useMemo(() => getCumulativePnlForLastNDays(7), [getCumulativePnlForLastNDays])

  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)
  const { dailyCumulativePnlDataForRange } = useDailyCumulativePnlDataContext()

  const theme = useTheme()

  return (
    <Card flex={1} alignSelf={'stretch'}>
      <FlexColumn gap="24px">
        <ThemedText.P2>Profit and Loss</ThemedText.P2>
        <Row gap={'16px'}>
          <ThemedSummaryBox.Simple
            title={'Today'}
            value={
              <>
                {todayCumulativePnl ? formatAmount(formatPrice(todayCumulativePnl.cumulativePnl)) : '...'}
                <br />
                {collateralCurrency?.symbol}
              </>
            }
            percentage={todayCumulativePnl?.cumulativePnlPercent.toFixed(2)}
            breakLine={true}
          />
          <ThemedSummaryBox.Simple
            title={'7D'}
            value={
              <>
                {sevenDaysCumulativePnl ? formatAmount(formatPrice(sevenDaysCumulativePnl.cumulativePnl)) : '...'}
                <br />
                {collateralCurrency?.symbol}
              </>
            }
            percentage={sevenDaysCumulativePnl?.cumulativePnlPercent.toFixed(2)}
            breakLine={true}
          />
          <ThemedSummaryBox.Simple
            title={'30D'}
            value={
              <>
                {thirtyDaysCumulativePnl ? formatAmount(formatPrice(thirtyDaysCumulativePnl.cumulativePnl)) : '...'}
                <br />
                {collateralCurrency?.symbol}
              </>
            }
            percentage={thirtyDaysCumulativePnl?.cumulativePnlPercent.toFixed(2)}
            breakLine={true}
          />
        </Row>
        <FlexColumn gap="10px">
          {dailyCumulativePnlDataForRange && (
            <Row width="100%">
              <Row gap="8px" width="100%">
                <ThemedButton.SelectText
                  isSelect={getIsFilterActiveForLastNDays(7)}
                  onClick={() => setFilterRangeForLastNDays(7)}
                >
                  <ThemedText.P5 fontSize={[16]} color={theme.blue6}>
                    7D
                  </ThemedText.P5>
                </ThemedButton.SelectText>
                <ThemedButton.SelectText
                  isSelect={getIsFilterActiveForLastNDays(30)}
                  onClick={() => setFilterRangeForLastNDays(30)}
                >
                  <ThemedText.P5 fontSize={[16]} color={theme.blue6}>
                    30D
                  </ThemedText.P5>
                </ThemedButton.SelectText>
                <ThemedButton.SelectText
                  isSelect={getIsFilterActiveForLastNDays(90)}
                  onClick={() => setFilterRangeForLastNDays(90)}
                >
                  <ThemedText.P5 fontSize={[16]} color={theme.blue6}>
                    90D
                  </ThemedText.P5>
                </ThemedButton.SelectText>
              </Row>
            </Row>
          )}
          <PnLChart />
        </FlexColumn>
        <LinkWithInjectedWalletSupport href="/profit-and-loss">
          <ThemedButton.Primary disabled={!dailyCumulativePnlDataForRange} width="180px" marginLeft={'auto'}>
            View Details <ArrowRight color={'#001426'} width={17} height={17} marginLeft={'6px'} />
          </ThemedButton.Primary>
        </LinkWithInjectedWalletSupport>
      </FlexColumn>
    </Card>
  )
}
