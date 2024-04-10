import { useEffect, useState } from 'react'
import styled from 'styled-components'

import DEPOSIT_ICON from '/public/static/images/etc/Deposit.svg'
import CREATE_ACCOUNT_ICON from '/public/static/images/etc/CreateAccount.svg'

import { Account as AccountType, BalanceInfosType } from 'types/user'
import { ApiState } from 'types/api'

import { AppThunkDispatch, useAppDispatch } from 'state'
import { updateAccount } from 'state/user/actions'
import {
  useActiveAccountAddress,
  useGetBalanceInfo,
  useIsHideAccountBalances,
  useSetBalanceInfo,
  useSetHideZeroBalanceAccounts,
} from 'state/user/hooks'
import {
  useCreateAccountModalToggle,
  useDepositModalToggle,
  useModalOpen,
  useToggleRecentTransactionsModal,
} from 'state/application/hooks'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { ApplicationModal } from 'state/application/reducer'
import { useHedgerInfo } from 'state/hedger/hooks'
import { getBalanceInfo } from 'state/user/thunks'

import Column from 'components/Column'
import { Card } from 'components/Card'
import Account from './Account'
import CreateAccountModal from 'components/ReviewModal/CreateAccountModal'
import { AddressLink, MinimizedAccountDetails } from 'components/AccountDetails'
import { useMultiAccountContract } from 'hooks/useContract'
import { RowBetween, RowCenter } from 'components/Row'
import DepositModal from 'components/ReviewModal/DepositModal'
import Checkbox from 'components/CheckBox/CheckBoxWithLabel'
import { getTokenWithFallbackChainId } from 'utils/token'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { useUserAccounts } from 'hooks/useAccounts'
import SolidButton from 'components/Button/SolidButton'

const ContentContainer = styled(Column)`
  gap: 12px;
  border-radius: 8px;
  position: absolute;
  top: 60px;
  right: 10px;
  width: clamp(200px, 360px, 99%);
  padding-bottom: 5px;
  border: 1px solid ${({ theme }) => theme.coolGrey};
  background: ${({ theme }) => theme.color2};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    max-height: 485px;
  `};
`

const DropdownContent = styled(Card)<{ isOpen: boolean }>`
  gap: 12px;
  padding: 0px 10px;
  margin-top: -4px;
  border: none;
  z-index: 1;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  background: ${({ theme }) => theme.color2};
  overflow: scroll;
`

const Title = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.almostWhite};
`

const TradeButtonsWrapper = styled(RowCenter)`
  padding: 0px 10px 0px 10px;
  gap: 6px;
`

const HideAccountsWrapper = styled.div`
  padding: 2px 22px 0px 22px;
`

export default function AccountsModal() {
  const { chainId, account } = useActiveWeb3React()
  const showCreateAccountModal = useModalOpen(ApplicationModal.CREATE_ACCOUNT)
  const showDepositModal = useModalOpen(ApplicationModal.DEPOSIT)
  const toggleDepositModal = useDepositModalToggle()
  const toggleCreateAccountModal = useCreateAccountModalToggle()
  const hideAccounts = useIsHideAccountBalances()
  const setHideAccounts = useSetHideZeroBalanceAccounts()
  const toggleRecentTxsModal = useToggleRecentTransactionsModal()
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)

  return (
    <ContentContainer>
      <RowBetween padding={'10px 9px 0px 9px'}>
        <Title>Wallet and Accounts</Title>
        {chainId && account && (
          <RowCenter width={'unset'}>
            <AddressLink onClick={toggleRecentTxsModal}>View recent transactions</AddressLink>
          </RowCenter>
        )}
      </RowBetween>
      <MinimizedAccountDetails />
      <TradeButtonsWrapper>
        <SolidButton
          onClick={toggleDepositModal}
          customText={`Deposit ${collateralCurrency.symbol}`}
          icon={DEPOSIT_ICON}
          iconSize={14}
          iconTop={'12px'}
        />
        <SolidButton
          onClick={toggleCreateAccountModal}
          customText={`Create Account`}
          icon={CREATE_ACCOUNT_ICON}
          iconSize={14}
          iconRight={'12px'}
          iconTop={'11px'}
        />
      </TradeButtonsWrapper>
      <HideAccountsWrapper>
        <Checkbox
          checked={hideAccounts}
          onChange={() => setHideAccounts(!hideAccounts)}
          label={'Hide accounts with 0 Account Balance'}
        />
      </HideAccountsWrapper>
      <DropdownItems />
      {showCreateAccountModal && <CreateAccountModal />}
      {showDepositModal && <DepositModal />}
    </ContentContainer>
  )
}

function DropdownItems() {
  const dispatch = useAppDispatch()
  const { accounts } = useUserAccounts()
  const activeAccountAddress = useActiveAccountAddress()
  const { balanceInfo, balanceInfoStatus } = useBalanceInfos()

  const onClick = (account: AccountType) => {
    dispatch(updateAccount(account))
  }
  return (
    <DropdownContent isOpen={true}>
      <div>
        {accounts.map((account, index) => {
          return (
            <Account
              account={account}
              key={index}
              active={activeAccountAddress ? activeAccountAddress === account.accountAddress : false}
              balanceInfo={balanceInfo[account.accountAddress.toLowerCase()]}
              balanceInfoStatus={balanceInfoStatus}
              onClick={() => onClick(account)}
            />
          )
        })}
      </div>
    </DropdownContent>
  )
}

function useBalanceInfos() {
  const balanceInfoState = useGetBalanceInfo()
  const [balanceInfo, setBalanceInfo] = useState<BalanceInfosType>(balanceInfoState ?? {})
  const [balanceInfoStatus, setBalanceInfoStatus] = useState<ApiState>(ApiState.OK)
  const setBalanceInfoInState = useSetBalanceInfo()

  const hedger = useHedgerInfo()
  const { baseUrl } = hedger || {}
  const { account } = useActiveWeb3React()
  const multiAccountContract = useMultiAccountContract()
  const dispatch: AppThunkDispatch = useAppDispatch()

  useEffect(() => {
    if (Object.values(balanceInfo).length === 0) setBalanceInfoStatus(ApiState.LOADING)
    dispatch(getBalanceInfo({ account, baseUrl, multiAccountAddress: multiAccountContract?.address }))
      .unwrap()
      .then((res) => {
        setBalanceInfo(res)
        setBalanceInfoInState(res)
        setBalanceInfoStatus(ApiState.OK)
      })
      .catch(() => {
        setBalanceInfo({})
        setBalanceInfoStatus(ApiState.ERROR)
      })
  }, [account, balanceInfo, baseUrl, dispatch, multiAccountContract?.address, setBalanceInfoInState])

  return { balanceInfo, balanceInfoStatus }
}
