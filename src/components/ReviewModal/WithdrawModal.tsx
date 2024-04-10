import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { toast } from 'react-toastify'
import BigNumber from 'bignumber.js'

import { formatAmount, formatPrice, toBN } from 'utils/numbers'
import { getTokenWithFallbackChainId } from 'utils/token'
import { TransferTab } from 'types/transfer'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { getRemainingTime } from 'utils/time'

import { ApplicationModal } from 'state/application/reducer'
import { useModalOpen, useWithdrawModalToggle } from 'state/application/hooks'
import { useIsHavePendingTransaction } from 'state/transactions/hooks'
import { useAccountPartyAStat, useActiveAccountAddress } from 'state/user/hooks'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import useAccountData from 'hooks/useAccountData'

import { Modal } from 'components/Modal'
import { Option } from 'components/Tab'
import { Close as CloseIcon, DotFlashing } from 'components/Icons'
import AnimatedButton from 'components/Button/MainButton'
import { CustomInputBox2 } from 'components/InputBox'
import { useTransferCollateral } from 'callbacks/useTransferCollateral'
import { Row, RowBetween, RowStart } from 'components/Row'
import { WithdrawBarModalContent } from './WithdrawBarModal'
import InfoItem from 'components/InfoItem'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  width: 100%;
  padding: 0.8rem;
  gap: 0.8rem;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 0.5rem;
  `};
`

const WithdrawInfo = styled(RowStart)`
  font-size: 10px;
  justify-content: center;
  color: ${({ theme }) => theme.red};
`

const LabelsRow = styled(Row)`
  flex-direction: column;
  gap: 16px;
  padding-bottom: 8px;

  & > * {
    &:nth-child(3) {
      width: 100%;
    }
  }
`

const Close = styled.div`
  width: 24px;
  height: 24px;
  padding: 3px 6px;
  cursor: pointer;
  margin: 2px 2px 1px 0px;
`

export default function WithdrawModal() {
  const theme = useTheme()
  const { chainId } = useActiveWeb3React()
  const activeAccountAddress = useActiveAccountAddress()
  const [typedAmount, setTypedAmount] = useState('')
  const { availableForOrder } = useAccountData()
  const showWithdrawModal = useModalOpen(ApplicationModal.WITHDRAW)
  const toggleWithdrawModal = useWithdrawModalToggle()

  const {
    allocatedBalance: subAccountAllocatedBalance,
    accountBalance,
    withdrawCooldown,
    cooldownMA,
  } = useAccountPartyAStat(activeAccountAddress)

  const [cooldownForWithdraw, setCooldownForWithdraw] = useState('')
  const [renderCount, setRenderCount] = useState(0)
  const [cooldown, setCooldown] = useState('')
  useEffect(() => {
    setCooldownForWithdraw(withdrawCooldown)
    setCooldown(cooldownMA)
  }, [])

  const { diff, hours, seconds, minutes } = getRemainingTime(
    toBN(cooldownForWithdraw).plus(cooldown).times(1000).toNumber()
  )
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRenderCount((prevCount) => prevCount + 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const [amountForDeallocate, insufficientBalance] = useMemo(() => {
    const deallocateAmount = BigNumber.min(availableForOrder, subAccountAllocatedBalance)
    const insufficientBalance = deallocateAmount.isLessThan(typedAmount)
    if (deallocateAmount.isLessThan(0)) return ['0', insufficientBalance]
    return [deallocateAmount.toString(), insufficientBalance]
  }, [availableForOrder, subAccountAllocatedBalance, typedAmount])

  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)

  const onChange = (value: string) => {
    setTypedAmount(value)
  }

  return (
    <Modal isOpen={showWithdrawModal} onBackgroundClick={toggleWithdrawModal} onEscapeKeydown={toggleWithdrawModal}>
      <Wrapper>
        <RowBetween>
          <RowStart>
            <Option active={true}>{TransferTab.WITHDRAW}</Option>
          </RowStart>
          <Close onClick={toggleWithdrawModal}>
            <CloseIcon size={12} />
          </Close>
        </RowBetween>
        <LabelsRow>
          <InfoItem
            label={'Pending Withdrawal'}
            amount={formatAmount(accountBalance.toString(), 4, true)}
            ticker={`${collateralCurrency?.symbol}`}
            fontSize={'13px'}
            labelColor={theme.almostWhite}
          />
          <InfoItem
            label={'Time Remaining'}
            amount={
              diff > 0 && toBN(accountBalance).isGreaterThan(0)
                ? `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds
                    .toString()
                    .padStart(2, '0')}`
                : '-'
            }
            valueColor={theme.pink}
            labelColor={theme.almostWhite}
            fontSize={'13px'}
          />
          <WithdrawBarModalContent />

          <CustomInputBox2
            title={'Amount'}
            value={typedAmount}
            onChange={onChange}
            max={true}
            maxColor={theme.blue}
            symbol={collateralCurrency?.symbol}
            precision={collateralCurrency.decimals}
            balanceTitle={`Available:`}
            balanceDisplay={!toBN(amountForDeallocate).isNaN() ? formatAmount(amountForDeallocate, 4, true) : '0.00'}
            balanceExact={
              !toBN(amountForDeallocate).isNaN()
                ? formatPrice(amountForDeallocate, collateralCurrency.decimals)
                : '0.00'
            }
          />
        </LabelsRow>
        <ActionButton amount={typedAmount} isInsufficient={insufficientBalance} />
        <WithdrawInfo>Submitting a new withdrawal resets the cool down to 12 hours!</WithdrawInfo>
      </Wrapper>
    </Modal>
  )
}

function ActionButton({ amount, isInsufficient }: { amount: string; isInsufficient: boolean }) {
  const isPendingTxs = useIsHavePendingTransaction()
  const toggleWithdrawModal = useWithdrawModalToggle()
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false)
  const { callback: transferBalanceCallback, error: transferBalanceError } = useTransferCollateral(
    amount,
    TransferTab.DEALLOCATE
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
      toggleWithdrawModal()
    } catch (e) {
      setAwaitingConfirmation(false)
      if (e instanceof Error) {
        console.error(e)
      } else {
        console.error(e)
      }
    }
  }, [toggleWithdrawModal, transferBalanceCallback, transferBalanceError])
  if (awaitingConfirmation) {
    return (
      <AnimatedButton disabled>
        Awaiting Confirmation <DotFlashing />
      </AnimatedButton>
    )
  }

  if (isPendingTxs) {
    return (
      <AnimatedButton disabled>
        Transacting <DotFlashing />
      </AnimatedButton>
    )
  }

  if (isInsufficient) return <AnimatedButton disabled>Insufficient Balance</AnimatedButton>

  const text = 'Withdraw'

  return (
    <AnimatedButton onClick={handleAction} simpleMode>
      {text}
    </AnimatedButton>
  )
}
