import React, { useCallback, useMemo, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { toast } from 'react-toastify'
import { Token } from '@sushiswap/core-sdk'

import { MULTI_ACCOUNT_ADDRESS } from 'constants/addresses'
import { FALLBACK_CHAIN_ID } from 'constants/chains'
import { formatAmount, formatPrice, toBN } from 'utils/numbers'
import { getTokenWithFallbackChainId } from 'utils/token'
import { COLLATERAL_TOKEN } from 'constants/tokens'

import { TransferTab } from 'types/transfer'
import { useDepositModalToggle, useModalOpen } from 'state/application/hooks'
import { ApplicationModal } from 'state/application/reducer'
import { useIsHavePendingTransaction } from 'state/transactions/hooks'
import { useAccountPartyAStat, useActiveAccountAddress } from 'state/user/hooks'

import { ApprovalState, useApproveCallback } from 'lib/hooks/useApproveCallback'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

import { Modal } from 'components/Modal'
import InfoItem from 'components/InfoItem'
import { Option } from 'components/Tab'
import { Close as CloseIcon, DotFlashing } from 'components/Icons'
import { CustomInputBox2 } from 'components/InputBox'
import { useTransferCollateral } from 'callbacks/useTransferCollateral'
import { Row, RowBetween, RowStart } from 'components/Row'
import AnimatedButton from 'components/Button/MainButton'
import AnimationLoader from 'components/Animation/AnimationLoader'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  width: 100%;
  padding: 1rem;
  gap: 0.8rem;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 0.5rem;
  `};
`

const LabelsRow = styled(Row)`
  flex-direction: column;
  gap: 16px;

  & > * {
    &:first-child {
      width: 100%;
    }
  }
`

const ImageWrapper = styled.div`
  pointer-events: none;
  margin: 0 auto;
  margin-top: -10px;
  margin-bottom: 20px;
  width: 300px;
  height: 220px;
`

const Close = styled.div`
  width: 24px;
  height: 24px;
  padding: 3px 6px;
  cursor: pointer;
  margin: 2px 2px 1px 0px;
`

export default function DepositModal() {
  const theme = useTheme()
  const { chainId, account } = useActiveWeb3React()
  const activeAccountAddress = useActiveAccountAddress()
  const [typedAmount, setTypedAmount] = useState('')

  const showDepositModal = useModalOpen(ApplicationModal.DEPOSIT)
  const toggleDepositModal = useDepositModalToggle()

  const { accountBalanceLimit, allocatedBalance: subAccountAllocatedBalance } =
    useAccountPartyAStat(activeAccountAddress)

  const { collateralBalance } = useAccountPartyAStat(account)

  const allowedDepositAmount = useMemo(() => {
    const amount = toBN(accountBalanceLimit).minus(subAccountAllocatedBalance)
    return amount.gt(0) ? amount.toString() : '0'
  }, [accountBalanceLimit, subAccountAllocatedBalance])

  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)

  function getTabs() {
    return (
      <RowStart>
        <Option active={true}>Deposit USDC</Option>
      </RowStart>
    )
  }

  const onChange = (value: string) => {
    setTypedAmount(value)
  }

  function getLabel() {
    // removeTrailingZeros
    return (
      <LabelsRow>
        <CustomInputBox2
          title={`Deposit Amount`}
          value={typedAmount}
          onChange={onChange}
          max={true}
          maxColor={theme.blue}
          symbol={collateralCurrency?.symbol}
          precision={collateralCurrency.decimals}
          balanceTitle={`Available:`}
          balanceExact={collateralBalance ? formatAmount(collateralBalance.toString()) : '0.00'}
          balanceDisplay={collateralBalance ? formatAmount(formatPrice(collateralBalance.toString()), 6, true) : '0.00'}
        />
        <InfoItem
          label={'Allocated Balance'}
          amount={formatAmount(subAccountAllocatedBalance.toString(), 4, true)}
          ticker={`${collateralCurrency?.symbol}`}
          fontSize={'13px'}
          labelColor={theme.almostWhite}
        />
        <InfoItem
          label={'Max Allowable Deposit'}
          balanceExact={formatPrice(allowedDepositAmount, collateralCurrency?.decimals)}
          amount={formatAmount(allowedDepositAmount.toString(), 4, true)}
          ticker={`${collateralCurrency?.symbol}`}
          valueColor={theme.blue}
          labelColor={theme.almostWhite}
          onClick={onChange}
          fontSize={'13px'}
        />
      </LabelsRow>
    )
  }

  return (
    <Modal isOpen={showDepositModal} onBackgroundClick={toggleDepositModal} onEscapeKeydown={toggleDepositModal}>
      <Wrapper>
        <RowBetween>
          {getTabs()}
          <Close onClick={toggleDepositModal}>
            <CloseIcon size={12} />
          </Close>
        </RowBetween>

        <ImageWrapper>
          <AnimationLoader name={'_deposit_collateral'} />
        </ImageWrapper>

        {getLabel()}

        <ActionButton
          typedAmount={typedAmount}
          collateralCurrency={collateralCurrency}
          collateralBalance={collateralBalance}
          allowedDepositAmount={allowedDepositAmount}
        />
      </Wrapper>
    </Modal>
  )
}

function ActionButton({
  collateralCurrency,
  typedAmount,
  collateralBalance,
  allowedDepositAmount,
}: {
  collateralCurrency: Token
  typedAmount: string
  collateralBalance: string
  allowedDepositAmount: string
}) {
  const { chainId } = useActiveWeb3React()

  const toggleDepositModal = useDepositModalToggle()

  const isPendingTxs = useIsHavePendingTransaction()
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false)
  const spender = useMemo(() => MULTI_ACCOUNT_ADDRESS[chainId ?? FALLBACK_CHAIN_ID], [chainId])

  const [approvalState, approveCallback] = useApproveCallback(collateralCurrency, typedAmount ?? '0', spender)

  const [showApprove, showApproveLoader] = useMemo(() => {
    const show = collateralCurrency && approvalState !== ApprovalState.APPROVED && !!typedAmount
    return [show, show && approvalState === ApprovalState.PENDING]
  }, [collateralCurrency, approvalState, typedAmount])

  const insufficientBalance = useMemo(() => {
    return toBN(collateralBalance).isLessThan(typedAmount)
  }, [collateralBalance, typedAmount])

  const { callback: transferBalanceCallback, error: transferBalanceError } = useTransferCollateral(
    typedAmount,
    TransferTab.DEPOSIT
  )

  const handleApprove = async () => {
    try {
      setAwaitingConfirmation(true)
      await approveCallback()
      setAwaitingConfirmation(false)
    } catch (err) {
      console.error(err)
      setAwaitingConfirmation(false)
    }
  }

  const handleAction = useCallback(async () => {
    if (!transferBalanceCallback) {
      toast.error(transferBalanceError)
      return
    }

    try {
      setAwaitingConfirmation(true)
      await transferBalanceCallback()
      setAwaitingConfirmation(false)
      toggleDepositModal()
    } catch (e) {
      setAwaitingConfirmation(false)
      if (e instanceof Error) {
        console.error(e)
      } else {
        console.error(e)
      }
    }
  }, [toggleDepositModal, transferBalanceCallback, transferBalanceError])

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

  if (toBN(allowedDepositAmount).isLessThan(typedAmount))
    return <AnimatedButton disabled>Amount exceeds deposit limit</AnimatedButton>

  if (insufficientBalance)
    return (
      <AnimatedButton disabled exclamationMark>
        Insufficient Balance
      </AnimatedButton>
    )

  if (showApproveLoader) {
    return (
      <AnimatedButton disabled>
        Approving <DotFlashing />
      </AnimatedButton>
    )
  }

  if (showApprove) {
    return (
      <AnimatedButton onClick={handleApprove} simpleMode>
        Approve Collateral
      </AnimatedButton>
    )
  }

  return (
    <AnimatedButton onClick={handleAction} simpleMode>
      Deposit and allocate
    </AnimatedButton>
  )
}
