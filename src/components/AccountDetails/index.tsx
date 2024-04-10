import { useCallback } from 'react'
import styled, { useTheme } from 'styled-components'

import { useAppDispatch } from 'state'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { getConnection, getConnectionName, getIsCoinbaseWallet, getIsMetaMaskWallet } from 'connection/utils'
import { truncateAddress } from 'utils/address'
import { clearAllTransactions } from 'state/transactions/actions'

import { Connected as ConnectedIcon } from 'components/Icons'
import Copy from 'components/Copy'
import Transaction from './Transaction'
import { RowBetween, RowEnd } from 'components/Row'

import { removeConnectedWallet } from 'state/wallet/reducer'
import { updateSelectedWallet } from 'state/user/actions'
import { isMobile } from 'utils/userAgent'
import { useToggleWalletModal } from 'state/application/hooks'

const AccountWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  position: relative;
  border-radius: 4px;
  background: ${({ theme }) => theme.color4};
  color: ${({ theme }) => theme.almostWhite};
  padding: 8px 12px;
  margin: 0px 8px;
  gap: 12px;
`

const Row = styled(RowBetween)`
  flex-flow: row nowrap;
`

const ButtonsWrapper = styled(Row)`
  width: 30%;
  gap: 5px;
  flex-direction: row-reverse;
`

const ActionButton = styled.button<{
  hide?: boolean
  disable?: boolean
}>`
  outline: none;
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding: 0px 13px;
  text-align: center;
  border-radius: 4px;
  color: ${({ theme }) => theme.almostWhite};
  border: 1px solid ${({ theme }) => theme.coolGrey};
  background: ${({ theme }) => theme.color2};

  width: 65px;
  height: 17px;

  &:hover {
    background: ${({ theme }) => theme.color3};
    cursor: pointer;
  }

  ${(props) =>
    props.disable &&
    `
    pointer-events: none;
    opacity: 0.3;
  `}
`

export const AddressLink = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 10px;
  font-size: 11px;
  white-space: nowrap;
  text-align: right;
  text-decoration-line: underline;

  color: ${({ theme }) => theme.blue};

  &:hover {
    color: ${({ theme }) => theme.darkBlue};
    cursor: pointer;
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
      margin-left:4px;
      font-size: 10px;
  `}
`

const TransactionsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  background: ${({ theme }) => theme.color3};
  color: ${({ theme }) => theme.text3};
  padding: 40px 60px;
  border-radius: 8px;

  overflow: scroll;
  gap: 5px;
`

const AllTransactions = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background: ${({ theme }) => theme.color2};
  color: ${({ theme }) => theme.text3};
  padding: 0px 12px 16px 12px;
  border-radius: 8px;

  overflow: scroll;
  gap: 4px;

  & > * {
    &:first-child {
      font-size: 0.8rem;
      margin-bottom: 8px;
      align-items: baseline;
    }
    &:not(:first-child) {
      display: flex;
      flex-direction: column;
      gap: 8px;
      max-height: 200px;
      margin-bottom: 12px;
    }
  }
`

function renderTransactions(transactions: string[]) {
  return (
    <>
      {transactions.map((hash, i) => {
        return <Transaction key={i} hash={hash} />
      })}
    </>
  )
}

interface AccountDetailsProps {
  pendingTransactions: string[]
  confirmedTransactions: string[]
}

export default function AccountDetails({ pendingTransactions, confirmedTransactions }: AccountDetailsProps) {
  const { chainId } = useActiveWeb3React()
  const dispatch = useAppDispatch()

  const clearAllTransactionsCallback = useCallback(() => {
    if (chainId) dispatch(clearAllTransactions({ chainId }))
  }, [dispatch, chainId])

  return (
    <>
      {!!pendingTransactions.length || !!confirmedTransactions.length ? (
        <AllTransactions>
          <RowEnd>
            <AddressLink onClick={clearAllTransactionsCallback}>Clear all</AddressLink>
          </RowEnd>
          <div>
            {renderTransactions(pendingTransactions)}
            {renderTransactions(confirmedTransactions)}
          </div>
        </AllTransactions>
      ) : (
        <TransactionsWrapper>
          <div>Your transactions will appear here...</div>
        </TransactionsWrapper>
      )}
    </>
  )
}

export function MinimizedAccountDetails() {
  const theme = useTheme()
  const { account, connector, ENSName } = useActiveWeb3React()
  const toggleWalletModal = useToggleWalletModal()

  const dispatch = useAppDispatch()

  const hasMetaMaskExtension = getIsMetaMaskWallet()
  const hasCoinbaseExtension = getIsCoinbaseWallet()
  const isInjectedMobileBrowser = (hasMetaMaskExtension || hasCoinbaseExtension) && isMobile

  return (
    <>
      <AccountWrapper>
        <Row color={theme.almostWhite}>
          <RowBetween>
            <Row height={20}>
              {connector && <ConnectedIcon style={{ minWidth: '7px' }} />}
              {ENSName ? ENSName : account && truncateAddress(account)}
            </Row>
            <Row>{account && <Copy toCopy={account} text={''} noFeedback />}</Row>
          </RowBetween>
          <ButtonsWrapper>
            {!isInjectedMobileBrowser && (
              <ActionButton
                onClick={() => {
                  const walletType = getConnectionName(getConnection(connector).type)
                  if (connector.deactivate) {
                    connector.deactivate()
                  } else {
                    connector.resetState()
                  }

                  dispatch(updateSelectedWallet({ wallet: undefined }))
                  dispatch(removeConnectedWallet({ account, walletType }))
                }}
              >
                Disconnect
              </ActionButton>
            )}
            <ActionButton onClick={toggleWalletModal}>Change</ActionButton>
          </ButtonsWrapper>
        </Row>
      </AccountWrapper>
    </>
  )
}
