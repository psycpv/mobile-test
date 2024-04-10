import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { useHotkeys } from 'react-hotkeys-hook'

import { useAppSelector } from 'state'
import { getConnection } from 'connection/utils'
import { V3_CHAIN_IDS } from 'constants/chains'
import { WEB_SETTING } from 'config'

import useOnOutsideClick from 'lib/hooks/useOnOutsideClick'
import { useIsMobile } from 'lib/hooks/useWindowSize'
import { useCloseWithEscape } from 'lib/hooks/useCloseWithEscape'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { ApplicationModal } from 'state/application/reducer'
import { useAccountPartyAStat, useActiveAccount } from 'state/user/hooks'
import { useCreateAccountModalToggle, useModalOpen, useToggleWalletModal } from 'state/application/hooks'
import { AllAccountsUpdater } from 'state/user/allAccountsUpdater'

import { useAccountsLength, useUserAccounts } from 'hooks/useAccounts'

import AnimatedButton from 'components/Button/MainButton'
import { ChevronDown } from 'components/Icons'
import { Row, RowEnd, RowStart } from 'components/Row'
import AccountsModal from './AccountsModal'
import CreateAccountModal from 'components/ReviewModal/CreateAccountModal'
import AccountUpnl from 'components/App/AccountData/AccountUpnl'
import Badge from './Badge'
import SwitchNetworkButton from './SwitchNetworkButton'

const InnerContentWrapper = styled(Row)`
  padding: 11px 8px 10px 12px;
  height: 40px;
  font-size: 12px;
  border-radius: 6px;
  color: ${({ theme }) => theme.almostWhite};
  background: ${({ theme }) => theme.color3};
`

const UserStatus = styled(RowStart)`
  width: auto;
  overflow: hidden;
  gap: 4px;
`

const NameWrapper = styled.div<{ nameLength: number }>`
  overflow: hidden;
  padding: 8px 0;
  font-size: 13px;
  font-weight: 400;
  text-wrap: nowrap;
  text-transform: uppercase;
`

const Button = styled.div<{ error?: boolean }>`
  width: 204px;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  color: ${({ theme }) => theme.border1};
  background: ${({ theme }) => theme.gradLight};
  padding: 8px 0px;

  ${({ error, theme }) =>
    error &&
    `
    font-weight: 600;
    color: #2d2ae1;
    border-left: 1px solid ${theme.red1};
    background: #efdee6;
  `}
`

const ChooseAccountButton = styled(Button)`
  font-size: 16px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.almostWhite};
`

const UpnlText = styled(RowEnd)`
  width: auto;
  gap: 2px;
  font-size: 14px;
  color: ${({ theme }) => theme.coolGrey};
  margin-left: 12px;
  margin-right: 12px;
  white-space: nowrap;
  flex-grow: 1;
  flex-shrink: 0;
`

const CreateAccountWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 226px;
  height: 40px;
  border-radius: 6px;
  justify-content: space-between;
  color: ${({ theme }) => theme.almostWhite};
  background: ${({ theme }) => theme.color4};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    max-width: 154px;
  `};
`

const Chevron = styled(ChevronDown)<{ open: boolean }>`
  flex-shrink: 0;
  transform: rotate(${({ open }) => (open ? '0deg' : '-90deg')});
  transition: 0.1s;
`

export default function MultiAccount() {
  const { accounts } = useUserAccounts()
  const { account, connector, chainId } = useActiveWeb3React()
  const connectionType = getConnection(connector).type
  const isMobile = useIsMobile()

  const activeAccount = useActiveAccount()
  const toggleWalletModal = useToggleWalletModal()
  const showCreateAccountModal = useModalOpen(ApplicationModal.CREATE_ACCOUNT)
  const showDepositModal = useModalOpen(ApplicationModal.DEPOSIT)
  const showWithdrawModal = useModalOpen(ApplicationModal.WITHDRAW)
  const showWalletModal = useModalOpen(ApplicationModal.WALLET)
  const showRecentTxsModal = useModalOpen(ApplicationModal.RECENT_TRANSACTIONS)

  const { accountAddress, name } = activeAccount || {}
  const { loading: accountsLoading } = useAccountsLength()

  const { loading: statsLoading } = useAccountPartyAStat(accountAddress)
  const ref = useRef(null)
  useOnOutsideClick(ref, () => {
    if (!showCreateAccountModal && !showDepositModal && !showWithdrawModal && !showWalletModal && !showRecentTxsModal)
      setClickAccounts(false)
  })

  const [clickAccounts, setClickAccounts] = useState(false)
  const toggleCreateAccountModal = useCreateAccountModalToggle()

  useCloseWithEscape(() => setClickAccounts(false))
  useHotkeys(
    'W',
    () => {
      setClickAccounts((pre) => !pre)
    },
    { preventDefault: true }
  )

  const error = useAppSelector((state) => state.connection.errorByConnectionType[connectionType])

  const standardAccountName = (() => {
    if (name) {
      if (isMobile) return `${name.slice(0, 6)}...`
      else if (name.length > 10) return `${name.slice(0, 10)}...`
    }
    return name
  })()
  const [accountName, setAccountName] = useState(standardAccountName)

  useEffect(() => {
    standardAccountName && setAccountName(standardAccountName)
  }, [standardAccountName])

  const showCallbackError: boolean = useMemo(() => {
    if (!chainId || !account) return false
    return !V3_CHAIN_IDS.includes(chainId)
  }, [chainId, account])

  function getInnerContent() {
    return activeAccount ? (
      <InnerContentWrapper onClick={() => setClickAccounts((previousValue) => !previousValue)}>
        <UserStatus>
          <NameWrapper
            nameLength={name?.length ?? 0}
            onMouseOver={() => {
              setAccountName(name)
            }}
            onMouseLeave={() => {
              setAccountName(standardAccountName)
            }}
          >
            <div className="account-name">{accountName}</div>
          </NameWrapper>
          {WEB_SETTING.showBadge && <Badge />}
        </UserStatus>
        <UpnlText>
          {!isMobile && `Avbl:`}

          <AccountUpnl />
        </UpnlText>
        <Chevron open={clickAccounts} />
      </InnerContentWrapper>
    ) : (
      <CreateAccountWrapper onClick={() => setClickAccounts((previousValue) => !previousValue)}>
        <ChooseAccountButton>Choose Account</ChooseAccountButton>

        <RowEnd width={'10%'} marginRight={'14px'}>
          <Chevron open={clickAccounts} />
        </RowEnd>
      </CreateAccountWrapper>
    )
  }

  function getContent() {
    if (showCallbackError) {
      return <SwitchNetworkButton text={'Switch Network'} />
    }

    if (account) {
      if (accountsLoading || statsLoading) {
        return (
          <CreateAccountWrapper>
            <p style={{ padding: '8px 14px' }}>Loading...</p>
          </CreateAccountWrapper>
        )
      }
      if (accounts.length === 0) {
        return (
          <React.Fragment>
            <AnimatedButton
              onClick={toggleCreateAccountModal}
              customText={'Create Account'}
              simpleMode
              width={144}
              height={36}
            />
            {showCreateAccountModal && <CreateAccountModal />}
          </React.Fragment>
        )
      }
      return (
        <CreateAccountWrapper ref={ref}>
          {clickAccounts && (
            <div>
              <AccountsModal />
              <AllAccountsUpdater />
            </div>
          )}
          {getInnerContent()}
        </CreateAccountWrapper>
      )
    } else if (error) {
      return <SwitchNetworkButton text={'Error'} />
    } else {
      return (
        <div onClick={toggleWalletModal} className="tour-step-2">
          <AnimatedButton className="tour-step-2" customText={'Connect Wallet'} simpleMode width={144} height={36} />
        </div>
      )
    }
  }

  return <React.Fragment> {getContent()} </React.Fragment>
}
