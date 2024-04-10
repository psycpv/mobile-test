import isEmpty from 'lodash/isEmpty'
import { useCallback, useEffect, useMemo } from 'react'
import useWebSocket from 'react-use-websocket'
import { JsonValue } from 'react-use-websocket/dist/lib/types'

import { L2_TXN_DISMISS_MS } from 'constants/misc'
import { AppThunkDispatch, useAppDispatch } from 'state'
import { getNotifications } from './thunks'
import { ActionStatus, NotificationDetails, NotificationResponse, NotificationType } from './types'

import useNotificationHistory from 'lib/hooks/useNotificationHistory'

import { useForceLatestBlock } from 'lib/hooks/useBlockNumber'
import { useAddPopup } from 'state/application/hooks'
import { useHedgerInfo } from 'state/hedger/hooks'
import { useActiveAccountAddress } from 'state/user/hooks'
import { useLastUpdateTimestamp, useNotificationAdderCallback, useSetNewNotificationFlag } from './hooks'

export function NotificationUpdater(): null {
  const thunkDispatch: AppThunkDispatch = useAppDispatch()
  const account = useActiveAccountAddress()
  const timestamp = useLastUpdateTimestamp()
  const { baseUrl, fetchData } = useHedgerInfo() || {}

  useNotifications(account, fetchData, baseUrl, timestamp, thunkDispatch)
  useNotificationHistory()
  useNotificationsWebSocket()

  return null
}

function useNotificationsWebSocket() {
  const notificationAdder = useNotificationAdderCallback()
  const newNotificationNotifier = useSetNewNotificationFlag()
  const addPopup = useAddPopup()
  const activeAccountAddress = useActiveAccountAddress()
  const { webSocketNotificationUrl } = useHedgerInfo() || {}
  const forceLatestBlock = useForceLatestBlock()

  const url = useMemo(() => {
    if (webSocketNotificationUrl) {
      return webSocketNotificationUrl
    }
    return null
  }, [webSocketNotificationUrl])

  const { sendJsonMessage, lastJsonMessage } = useWebSocket(url, {
    reconnectAttempts: 10,
    shouldReconnect: () => true,
    onOpen: () => {
      console.log('Notification websocket connection established.')
    },
    onClose: () => console.log('Notification websocket connection closed'),
    onError: (e) => console.log('Notification webSocket connection has error ', e),
  })

  useEffect(() => {
    // TODO: add multi account notification

    if (activeAccountAddress) {
      const json = {
        address: [activeAccountAddress],
      }
      sendJsonMessage(json as unknown as JsonValue)
    }
  }, [activeAccountAddress, sendJsonMessage])

  useEffect(() => {
    try {
      const lastMessage = lastJsonMessage as any

      if (!lastMessage || isEmpty(lastMessage)) {
        return
      }

      const notification: NotificationDetails = groupingNotification(toNotification(lastMessage))

      if (notification.notificationType !== NotificationType.OTHER) {
        notificationAdder(notification, 'unread')

        if (notification.showInModal) {
          newNotificationNotifier()
          addPopup(notification, undefined, L2_TXN_DISMISS_MS)
        }
      }

      // Force latest block, so we get up to date results (no cached)
      forceLatestBlock()
    } catch (err) {
      console.log({ err })
    }
  }, [addPopup, lastJsonMessage, newNotificationNotifier, notificationAdder])
}

function useNotifications(
  account: string | null,
  fetchData?: boolean,
  baseUrl?: string,
  timestamp?: string,
  thunkDispatch?: AppThunkDispatch
) {
  const cleanup = useCallback(() => {
    // Cancel any pending requests or timers here, if needed
  }, [])

  useEffect(() => {
    if (fetchData && account && baseUrl && timestamp && thunkDispatch) {
      // Dispatch the action to get notifications
      thunkDispatch(getNotifications({ account, baseUrl, timestamp: Number(timestamp) }))
      return cleanup
    }
  }, [account, baseUrl, timestamp, thunkDispatch, cleanup, fetchData])
}

export function toNotification(data: NotificationResponse): NotificationDetails {
  const notification: NotificationDetails = {
    id: data.id,
    quoteId: `${data.quote_id}`,
    counterpartyAddress: data.counterparty_address,
    filledAmountOpen: data.filled_amount_open,
    filledAmountClose: data.filled_amount_close,
    lastSeenAction: data.last_seen_action,
    actionStatus: data.action_status,
    failureType: data.failure_type,
    failureMessage: data.failure_message,
    errorCode: data.error_code,
    stateType: data.state_type,
    notificationType: null,
    createTime: data.create_time.toString(),
    modifyTime: data.modify_time.toString(),
    version: data.version?.toString(),
    showInModal: true,
  }
  return notification
}

export function groupingNotification(notification: NotificationDetails): NotificationDetails {
  if (notification.actionStatus === ActionStatus.FAILED) {
    notification.notificationType = NotificationType.HEDGER_ERROR
  } else if (notification.actionStatus === ActionStatus.SEEN) {
    notification.notificationType = NotificationType.SEEN_BY_HEDGER
  } else if (notification.actionStatus === ActionStatus.SUCCESS) {
    notification.notificationType = NotificationType.SUCCESS
  } else {
    notification.notificationType = NotificationType.OTHER
  }

  return notification
}
