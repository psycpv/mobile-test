import { TooltipProps } from 'recharts'
import styled, { useTheme } from 'styled-components'
import { Row } from 'components/Row'
import { FlexColumn } from 'components/Column'
import { ThemedText } from 'components/Text'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { getTokenWithFallbackChainId } from 'utils/token'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { formatAmount, formatPrice } from 'utils/numbers'

const TooltipWrapper = styled.div`
  background-color: ${({ theme }) => theme.color3};
  border-radius: 6px;
  padding: 10px;
`

const ColorIndicator = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  background-color: ${({ color }) => color};
  border-radius: 100%;

  ${({ theme }) => theme.mobileFirstMediaWidth.fromSmall`
  width: 10px;
  height: 10px;
  `}
`

export const CustomTooltip = {
  LineChart: (props: TooltipProps<string, string>) => {
    const { active, payload, label } = props
    const theme = useTheme()

    const { chainId } = useActiveWeb3React()
    const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)

    const obj: undefined | any = payload?.reduce(
      (a, c) =>
        c.dataKey
          ? {
              ...a,
              [c.dataKey]: c.value,
            }
          : a,
      {}
    )

    if (active && obj) {
      return (
        <TooltipWrapper>
          <ThemedText.P7 marginBottom="10px">{label}</ThemedText.P7>
          <FlexColumn gap="4px" smGap="8px">
            <Row gap="4px" smGap="8px">
              <ThemedText.P7 color={theme.gray2}>Daily PNL:</ThemedText.P7>
              <ThemedText.P7 color={obj.pnl > 0 ? theme.blue9 : obj.pnl < 0 ? theme.pink1 : theme.white}>
                {formatAmount(formatPrice(obj.pnl))} {collateralCurrency?.symbol}
              </ThemedText.P7>
            </Row>
            <Row gap="4px" smGap="8px">
              <ColorIndicator color={theme.blue9} />
              <ThemedText.P7 color={theme.gray2}>Cumulative PNL:</ThemedText.P7>
              <ThemedText.P7
                color={obj.cumulativePnl > 0 ? theme.blue9 : obj.cumulativePnl < 0 ? theme.pink1 : theme.white}
              >
                {formatAmount(formatPrice(obj.cumulativePnl))} {collateralCurrency?.symbol}
              </ThemedText.P7>
            </Row>
            <Row gap="4px" smGap="8px">
              <ColorIndicator color={theme.pink1} />
              <ThemedText.P7 color={theme.gray2}>Cumulative PNL %:</ThemedText.P7>
              <ThemedText.P7
                color={
                  obj.cumulativePnlPercent > 0 ? theme.blue9 : obj.cumulativePnlPercent < 0 ? theme.pink1 : theme.white
                }
              >
                {obj.cumulativePnlPercent.toFixed(2)}%
              </ThemedText.P7>
            </Row>
          </FlexColumn>
        </TooltipWrapper>
      )
    }

    return null
  },

  PnlBarChart: (props: TooltipProps<string, string>) => {
    const { active, payload, label } = props
    const theme = useTheme()

    const { chainId } = useActiveWeb3React()
    const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)

    const obj: undefined | any = payload?.reduce(
      (a, c) =>
        c.dataKey
          ? {
              ...a,
              [c.dataKey]: c.value,
            }
          : a,
      {}
    )

    if (active && obj) {
      return (
        <TooltipWrapper>
          <ThemedText.White fontSize="12px" marginBottom="10px">
            {label}
          </ThemedText.White>
          <FlexColumn gap="8px">
            <Row gap="8px">
              <ThemedText.White fontSize="12px" color={theme.gray2}>
                Daily PNL:
              </ThemedText.White>
              <ThemedText.White
                fontSize="12px"
                color={obj.pnl > 0 ? theme.blue9 : obj.pnl < 0 ? theme.pink1 : theme.white}
              >
                {formatAmount(formatPrice(obj.pnl))} {collateralCurrency?.symbol}
              </ThemedText.White>
            </Row>
          </FlexColumn>
        </TooltipWrapper>
      )
    }

    return null
  },
  FeeBarChart: (props: TooltipProps<string, string>) => {
    const { active, payload, label } = props
    const theme = useTheme()

    const { chainId } = useActiveWeb3React()
    const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)

    const obj: undefined | any = payload?.reduce(
      (a, c) =>
        c.dataKey
          ? {
              ...a,
              [c.dataKey]: c.value,
            }
          : a,
      {}
    )

    if (active && obj) {
      return (
        <TooltipWrapper>
          <ThemedText.White fontSize="12px" marginBottom="10px">
            {label}
          </ThemedText.White>
          <FlexColumn gap="8px">
            <Row gap="8px">
              <ThemedText.White fontSize="12px" color={theme.gray2}>
                Funding Fee:
              </ThemedText.White>
              <ThemedText.White
                fontSize="12px"
                color={obj.fundingFeeNet > 0 ? theme.blue9 : obj.fundingFeeNett < 0 ? theme.pink1 : theme.white}
              >
                {formatAmount(formatPrice(obj.fundingFeeNet))} {collateralCurrency?.symbol}
              </ThemedText.White>
            </Row>
          </FlexColumn>
        </TooltipWrapper>
      )
    }

    return null
  },
}
