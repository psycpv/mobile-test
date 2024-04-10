import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { toast } from 'react-toastify'

import { TransferTab } from 'types/transfer'
import { COLLATERAL_TOKEN } from 'constants/tokens'

import { formatPrice, toBN } from 'utils/numbers'
import { getTokenWithFallbackChainId } from 'utils/token'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

import { ApplicationModal } from 'state/application/reducer'
import { useAccountPartyAStat, useActiveAccountAddress } from 'state/user/hooks'
import { useModalOpen, useWithdrawBarModalToggle } from 'state/application/hooks'

import { useTransferCollateral } from 'callbacks/useTransferCollateral'

import { Modal } from 'components/Modal'
import { Option } from 'components/Tab'
import { Close as CloseIcon, DotFlashing } from 'components/Icons'
import { Row, RowBetween, RowStart } from 'components/Row'
import WithdrawCooldown from 'components/App/AccountData/WithdrawCooldown'
import AnimatedButton from 'components/Button/MainButton'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  width: 100%;
  padding: 8px 12px 20px;
  gap: 0.8rem;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 0.5rem;
  `};
`

const Close = styled.div`
  width: 24px;
  height: 24px;
  padding: 3px 6px;
  cursor: pointer;
  border-radius: 4px;
  margin: 2px 2px 1px 0px;
`

const WithdrawRow = styled(Row)<{ withdrawBar?: boolean }>`
  padding-bottom: ${({ withdrawBar }) => (withdrawBar ? '16px' : '8px')};
  gap: 8px;
  align-items: stretch;
  & > * {
    &:nth-child(1) {
      flex-grow: 1;
    }
  }
`

const CancelBtn = styled.button<{ disabled?: boolean }>`
  width: 80px;
  padding: 10px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.warning};
  border: 1px solid ${({ theme }) => theme.warning};
  background-color: ${({ theme }) => theme.bgWarning};

  &:disabled {
    opacity: 50%;
    cursor: auto;
    pointer-events: none;
  }
`

const CancelWithdrawInfo = styled.div`
  color: ${({ theme }) => theme.coolGrey};
  font-size: 10px;
  font-weight: 400;
  text-align: center;
`

export default function WithdrawBarModal() {
  const showWithdrawBarModal = useModalOpen(ApplicationModal.WITHDRAW_BAR)
  const toggleWithdrawBarModal = useWithdrawBarModalToggle()
  const activeAccountAddress = useActiveAccountAddress()
  const { accountBalance } = useAccountPartyAStat(activeAccountAddress)

  useEffect(() => {
    if (toBN(accountBalance).isZero()) {
      toggleWithdrawBarModal()
    }
  }, [accountBalance, toggleWithdrawBarModal])

  return (
    <Modal
      isOpen={showWithdrawBarModal}
      onBackgroundClick={toggleWithdrawBarModal}
      onEscapeKeydown={toggleWithdrawBarModal}
    >
      <Wrapper>
        <RowBetween>
          <RowStart>
            <Option active={true}>{TransferTab.WITHDRAW}</Option>
          </RowStart>
          <Close onClick={toggleWithdrawBarModal}>
            <CloseIcon size={12} />
          </Close>
        </RowBetween>
        <WithdrawBarModalContent withdrawBar />
      </Wrapper>
    </Modal>
  )
}

export function WithdrawBarModalContent({ withdrawBar }: { withdrawBar?: boolean }) {
  const { chainId } = useActiveWeb3React()
  const activeAccountAddress = useActiveAccountAddress()
  const { accountBalance } = useAccountPartyAStat(activeAccountAddress)
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)

  if (toBN(toBN(accountBalance).toFixed(collateralCurrency?.decimals)).isGreaterThan(0)) {
    return (
      <div>
        <WithdrawRow withdrawBar={withdrawBar}>
          <WithdrawCooldown formatedAmount={false} />
          <CancelWithdraw />
        </WithdrawRow>
        <CancelWithdrawInfo>
          By canceling, the withdraw amount will be back to your allocated balance.
        </CancelWithdrawInfo>
      </div>
    )
  }
  return null
}

function CancelWithdraw() {
  const theme = useTheme()
  const { chainId } = useActiveWeb3React()
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false)
  const activeAccountAddress = useActiveAccountAddress()
  const { accountBalance, allocatedBalance, accountBalanceLimit } = useAccountPartyAStat(activeAccountAddress)
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)

  const cancelAmount = useMemo(() => {
    if (toBN(accountBalance).plus(allocatedBalance).isGreaterThan(accountBalanceLimit)) {
      const allocatableAmount = toBN(accountBalanceLimit).minus(allocatedBalance)

      if (allocatableAmount.isLessThan(0)) return '0'
      return allocatableAmount.toString()
    } else {
      return accountBalance
    }
  }, [accountBalance, accountBalanceLimit, allocatedBalance])

  const { callback: transferBalanceCallback, error: transferBalanceError } = useTransferCollateral(
    formatPrice(cancelAmount, collateralCurrency?.decimals),
    TransferTab.ALLOCATE
  )
  const handleAction = useCallback(async () => {
    if (!transferBalanceCallback) {
      toast.error(transferBalanceError)
      return
    }

    try {
      setAwaitingConfirmation(true)
      await transferBalanceCallback()
      setAwaitingConfirmation(false)
    } catch (e) {
      setAwaitingConfirmation(false)
      if (e instanceof Error) {
        console.log(e.message)
      } else {
        console.error(e)
      }
    }
  }, [transferBalanceCallback, transferBalanceError])

  if (awaitingConfirmation) {
    return (
      <AnimatedButton
        disabled
        simpleMode
        width={130}
        height={36}
        borderColor={theme.darkPink}
        bgColor={theme.pink}
        hoverColor={theme.pink}
      >
        Cancel
        <DotFlashing />
      </AnimatedButton>
    )
  }
  if (toBN(cancelAmount).isEqualTo(0)) {
    return (
      <AnimatedButton
        disabled
        simpleMode
        width={130}
        height={36}
        borderColor={theme.darkPink}
        bgColor={theme.pink}
        hoverColor={theme.pink}
      >
        Cancel
      </AnimatedButton>
    )
  }
  return (
    <AnimatedButton
      onClick={handleAction}
      simpleMode
      width={130}
      height={36}
      borderColor={theme.darkPink}
      bgColor={theme.pink}
      hoverColor={theme.pink}
    >
      Cancel
    </AnimatedButton>
  )
}
