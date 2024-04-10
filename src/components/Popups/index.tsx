import { useActivePopups, useRemovePopup } from 'state/application/hooks'

import { useEffect } from 'react'
import { PopupList } from 'state/application/reducer'
import { useNotificationAdderCallback } from 'state/notifications/hooks'
import { NotificationDetails, NotificationType } from 'state/notifications/types'
import { useActiveAccountAddress } from 'state/user/hooks'
import { ToastContainer, toaster } from './toaster'

export default function Popups() {
  const activePopups = useActivePopups()
  const removePopup = useRemovePopup()
  useCreateNotificationFromTx(activePopups)
  useEffect(() => {
    activePopups.forEach((popup) => {
      let selectedToaster
      if ('txn' in popup.content) {
        if (popup.content.txn.success) {
          selectedToaster = toaster.info
        } else {
          selectedToaster = toaster.error
        }
      } else if ('failedSwitchNetwork' in popup.content) {
        selectedToaster = toaster.info
      } else {
        if (popup.content.notificationType === NotificationType.SUCCESS) {
          selectedToaster = toaster.success
        } else {
          selectedToaster = toaster.info
        }
      }
      selectedToaster(popup.content, { autoClose: popup.removeAfterMs })
      removePopup(popup.key)
    })
  }, [activePopups])

  return <ToastContainer position="top-center" autoClose={7000} />
}

function useCreateNotificationFromTx(activePopups: PopupList) {
  const notificationAdder = useNotificationAdderCallback()
  const activeAccount = useActiveAccountAddress()

  useEffect(() => {
    activePopups.forEach((popup) => {
      if ('txn' in popup.content) {
        const info = popup.content.txn.info
        if (info && 'transferType' in info && popup.content.txn.success) {
          const currentTimestamp = Math.floor(Date.now() / 1000)

          notificationAdder(
            {
              quoteId: '0',
              notificationType: NotificationType.TRANSFER_COLLATERAL,
              showInModal: true,
              createTime: currentTimestamp.toString(),
              modifyTime: currentTimestamp.toString(),
              transferAmount: info.amount,
              transferType: info.transferType,
              counterpartyAddress: activeAccount,
            } as unknown as NotificationDetails,
            'unread'
          )
        }
      }
    })
  }, [activeAccount, activePopups, notificationAdder])
}
