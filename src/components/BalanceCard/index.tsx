import { AutoColumn } from 'components/Column'
import { ThemedText } from 'components/Text'
import { Row } from 'components/Row'
import { ThemedButton } from 'components/Button'
import { Card } from 'components/Card'
import { RowData } from 'components/BalanceCard/RowData'
import useAccountBalanceStats from 'hooks/useAccountBalanceStats'
import { formatAmount, formatPrice } from 'utils/numbers'
import { getTokenWithFallbackChainId } from 'utils/token'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import DepositModal from 'components/ReviewModal/DepositModal'
import WithdrawModal from 'components/ReviewModal/WithdrawModal'
import React from 'react'
import { useDepositModalToggle, useModalOpen, useWithdrawModalToggle } from 'state/application/hooks'
import { ApplicationModal } from 'state/application/reducer'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

export const BalanceCard = () => {
  const { chainId } = useActiveWeb3React()
  const { allocatedBalance, lockedPartyAMM, availableForOrder } = useAccountBalanceStats()
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)
  const showDepositModal = useModalOpen(ApplicationModal.DEPOSIT)
  const showWithdrawModal = useModalOpen(ApplicationModal.WITHDRAW)
  const toggleDepositModal = useDepositModalToggle()
  const toggleWithdrawModal = useWithdrawModalToggle()

  return (
    <Card>
      <AutoColumn gap="16px">
        <ThemedText.P2>Balance</ThemedText.P2>
        <AutoColumn gap="8px">
          <RowData
            label={'Available for Orders:'}
            value={formatAmount(formatPrice(availableForOrder)) + ' ' + collateralCurrency?.symbol}
          />
          <RowData
            label={'Allocated Balance:'}
            value={formatAmount(formatPrice(allocatedBalance)) + ' ' + collateralCurrency?.symbol}
          />
          <RowData
            label={'Locked Margin:'}
            value={formatAmount(formatPrice(lockedPartyAMM)) + ' ' + collateralCurrency?.symbol}
          />
        </AutoColumn>
        <Row width={'100%'} gap="12px" smGap="24px">
          <ThemedButton.Primary width="100%" smWidth="100%" onClick={toggleDepositModal}>
            Deposit
          </ThemedButton.Primary>
          <ThemedButton.Secondary width="100%" smWidth="100%" onClick={toggleWithdrawModal}>
            Withdraw
          </ThemedButton.Secondary>
        </Row>
      </AutoColumn>
      {showDepositModal && <DepositModal />}
      {showWithdrawModal && <WithdrawModal />}
    </Card>
  )
}
