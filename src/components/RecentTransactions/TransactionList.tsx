import { AutoColumn } from 'components/Column'
import { Row } from 'components/Row'
import { ThemedText } from 'components/Text'
import { ThemedButton } from 'components/Button'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useMemo } from 'react'
import { getTokenWithFallbackChainId } from 'utils/token'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { BalanceHistoryData, BalanceHistoryType } from 'state/user/types'
import { HistoryItemInputs } from 'components/App/AccountData/MyAccount/BalanceHistory/BalanceItem'
import { BN_TEN, formatAmount, toBN } from 'utils/numbers'
import { COLLATERAL_DECIMALS } from 'constants/addresses'
import { formatTimestamp } from 'utils/time'
import { useWithdrawBarModalToggle } from 'state/application/hooks'
import { ExplorerDataType } from 'utils/explorers'
import { ExplorerLink } from 'components/Link'
import useWithdrawCooldownTimeRemaining from 'hooks/useWithdrawCooldownTimeRemaining'
import { useTheme } from 'styled-components'

interface TransactionListItemsProps {
  type: 'Pending Withdraw' | 'Deposit' | 'Withdraw'
  value: string
  dateTime: string
  action: 'Cancel' | 'Completed'
}

const TransactionListItems = ({
  data: { amount, timestamp, transaction, type },
  chainId,
  currency,
  isPendingWithdrawal,
}: HistoryItemInputs & { isPendingWithdrawal: boolean; chainId: number }) => {
  const isDeposit = type === BalanceHistoryType.DEPOSIT_PARTY_A
  const toggleWithdrawBarModal = useWithdrawBarModalToggle()

  const theme = useTheme()

  return (
    <ExplorerLink type={ExplorerDataType.TRANSACTION} chainId={chainId} value={transaction}>
      <AutoColumn gap="4px">
        <Row justify={'space-between'}>
          {isDeposit ? (
            <ThemedText.P6 color={theme.blue6}>DEPOSIT</ThemedText.P6>
          ) : isPendingWithdrawal ? (
            <ThemedText.P6 color={theme.pink1}>WITHDRAW REQUEST</ThemedText.P6>
          ) : (
            <ThemedText.P6 color={theme.pink1}>WITHDRAW</ThemedText.P6>
          )}
          <ThemedText.P5>
            {chainId
              ? type === BalanceHistoryType.DEALLOCATE_PARTY_A
                ? formatAmount(toBN(amount).div(BN_TEN.pow(18)).toString(), undefined, true)
                : formatAmount(toBN(amount).div(BN_TEN.pow(COLLATERAL_DECIMALS[chainId])).toString(), undefined, true)
              : '...'}{' '}
            {currency}
          </ThemedText.P5>
        </Row>
        <Row justify={'space-between'}>
          <ThemedText.P7 color={theme.coolGrey}>
            {formatTimestamp(Number(timestamp) * 1000, 'YYYY-MM-DD HH:mm')}
          </ThemedText.P7>
          {isPendingWithdrawal ? (
            <ThemedButton.Text color={'#F0A7EB'} fontSize={[14, 16]} onClick={toggleWithdrawBarModal}>
              Cancel
            </ThemedButton.Text>
          ) : (
            <ThemedText.P6 color={theme.coolGrey}>Completed</ThemedText.P6>
          )}
        </Row>
      </AutoColumn>
    </ExplorerLink>
  )
}

export const TransactionList = ({
  loading,
  balanceHistoryItems,
}: {
  loading: boolean
  balanceHistoryItems: BalanceHistoryData[] | null
}) => {
  const { chainId } = useActiveWeb3React()
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)

  const cooldownTimeRemaining = useWithdrawCooldownTimeRemaining()
  const withdrawPendingItemIndex = useMemo(() => {
    const index = balanceHistoryItems?.findIndex((b) => b.type === BalanceHistoryType.DEALLOCATE_PARTY_A)
    return cooldownTimeRemaining > 0 ? index : undefined
  }, [balanceHistoryItems, cooldownTimeRemaining])

  return (
    <AutoColumn gap="12px">
      {chainId &&
        balanceHistoryItems?.map((item, index) => (
          <TransactionListItems
            key={index}
            data={item || {}}
            chainId={chainId}
            currency={collateralCurrency?.symbol}
            loading={loading}
            isPendingWithdrawal={index === withdrawPendingItemIndex}
          />
        ))}
    </AutoColumn>
  )
}
