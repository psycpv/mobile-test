import React, { useMemo } from 'react'
import styled, { useTheme } from 'styled-components'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

import { useModalOpen, useToggleRecentTransactionsModal } from 'state/application/hooks'
import { ApplicationModal } from 'state/application/reducer'

import { Modal, ModalHeader } from 'components/Modal'
import AccountDetails from 'components/AccountDetails'

import { isTransactionRecent, useAllTransactions } from 'state/transactions/hooks'
import { TransactionDetails } from 'state/transactions/types'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: ${({ theme }) => theme.color2};
  box-shadow: ${({ theme }) => theme.shadow1};
  margin: 0;
  padding: 0;
  width: 100%;
  border-radius: 8px;
`

function newTransactionsFirst(a: TransactionDetails, b: TransactionDetails) {
  return b.addedTime - a.addedTime
}

export default function RecentTransactionsModal() {
  const theme = useTheme()
  const { account } = useActiveWeb3React()
  const allTransactions = useAllTransactions()
  const toggleRecentTxsModal = useToggleRecentTransactionsModal()
  const recentTxModalOpen = useModalOpen(ApplicationModal.RECENT_TRANSACTIONS)

  const sortedRecentTransactions = useMemo(() => {
    const txs = Object.values(allTransactions)
    return txs
      .filter(isTransactionRecent)
      .sort(newTransactionsFirst)
      .filter((tx) => tx.from == account)
  }, [allTransactions, account])

  const pendingTransactions = sortedRecentTransactions.filter((tx) => !tx.receipt).map((tx) => tx.hash)
  const confirmedTransactions = sortedRecentTransactions.filter((tx) => tx.receipt).map((tx) => tx.hash)

  return (
    <Modal isOpen={recentTxModalOpen} onBackgroundClick={toggleRecentTxsModal} onEscapeKeydown={toggleRecentTxsModal}>
      <Wrapper>
        <ModalHeader title={'Recent Transactions'} onClose={toggleRecentTxsModal} bgColor={theme.color2} />
        <AccountDetails pendingTransactions={pendingTransactions} confirmedTransactions={confirmedTransactions} />
      </Wrapper>
    </Modal>
  )
}
