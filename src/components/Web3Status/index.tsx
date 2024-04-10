import React, { useRef } from 'react'

import { useModalOpen } from 'state/application/hooks'
import { ApplicationModal } from 'state/application/reducer'

import WalletModal from 'components/WalletModal'
import MultiAccount from 'components/Web3Status/MultiAccount'
import RecentTransactionsModal from 'components/ReviewModal/RecentTransactionModal'

export default function Web3Status() {
  const ref = useRef<HTMLDivElement>(null)
  const RecentTxsModalOpen = useModalOpen(ApplicationModal.RECENT_TRANSACTIONS)

  return (
    <span ref={ref}>
      <MultiAccount />
      <WalletModal />

      {RecentTxsModalOpen && <RecentTransactionsModal />}
    </span>
  )
}
