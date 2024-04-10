import styled from 'styled-components'
import { WrapFlexInnerCard } from 'components/Card'
import { SummaryInfo } from 'components/SummaryInfo'
import { useMemo } from 'react'
import { formatAmount, formatPrice } from 'utils/numbers'
import { getTokenWithFallbackChainId } from 'utils/token'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import useDailyCumulativePnlData from 'hooks/useDailyCumulativePnlData'

const SummarySectionWrapper = styled(WrapFlexInnerCard)`
  padding: 1.5rem;
  border-radius: 4px;
  justify-content: space-between;
`

export const SummarySection = () => {
  const { chainId } = useActiveWeb3React()
  const { getCumulativePnlForLastNDays } = useDailyCumulativePnlData()
  const ninetyDaysCumulativePnl = useMemo(() => getCumulativePnlForLastNDays(90), [getCumulativePnlForLastNDays])
  const thirtyDaysCumulativePnl = useMemo(() => getCumulativePnlForLastNDays(30), [getCumulativePnlForLastNDays])
  const sevenDaysCumulativePnl = useMemo(() => getCumulativePnlForLastNDays(7), [getCumulativePnlForLastNDays])
  const todayCumulativePnl = useMemo(() => getCumulativePnlForLastNDays(1), [getCumulativePnlForLastNDays])

  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)

  return (
    <SummarySectionWrapper columnGap="1rem" rowGap="1rem">
      <SummaryInfo
        minWidth="135px"
        title="Today"
        value={
          (todayCumulativePnl ? formatAmount(formatPrice(todayCumulativePnl.cumulativePnl)) : '...') +
          ' ' +
          collateralCurrency?.symbol
        }
        percentage={todayCumulativePnl?.cumulativePnlPercent.toFixed(2)}
      />
      <SummaryInfo
        minWidth="135px"
        title="7D"
        value={
          (sevenDaysCumulativePnl ? formatAmount(formatPrice(sevenDaysCumulativePnl.cumulativePnl)) : '...') +
          ' ' +
          collateralCurrency?.symbol
        }
        percentage={sevenDaysCumulativePnl?.cumulativePnlPercent.toFixed(2)}
      />
      <SummaryInfo
        minWidth="135px"
        title="30D"
        value={
          (thirtyDaysCumulativePnl ? formatAmount(formatPrice(thirtyDaysCumulativePnl.cumulativePnl)) : '...') +
          ' ' +
          collateralCurrency?.symbol
        }
        percentage={thirtyDaysCumulativePnl?.cumulativePnlPercent.toFixed(2)}
      />
      <SummaryInfo
        minWidth="135px"
        title="90D"
        value={
          (ninetyDaysCumulativePnl ? formatAmount(formatPrice(ninetyDaysCumulativePnl.cumulativePnl)) : '...') +
          ' ' +
          collateralCurrency?.symbol
        }
        percentage={ninetyDaysCumulativePnl?.cumulativePnlPercent.toFixed(2)}
      />
    </SummarySectionWrapper>
  )
}
