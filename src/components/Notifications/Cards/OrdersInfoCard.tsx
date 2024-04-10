import React from 'react'

import { Account } from 'types/user'
import { NotificationDetails } from 'state/notifications/types'

import BaseItem from 'components/Notifications/Cards/BaseCard'

export default function OrderExpiredCard({
  notification,
  account,
}: {
  notification: NotificationDetails
  account: Account
}): JSX.Element {
  const { modifyTime } = notification

  return (
    <BaseItem
      title={'1,000 fUSDT Withdraw'}
      text={'Withdraw Successfully.'}
      icon={'/static/images/etc/WithdrawFUSDT.svg'}
      timestamp={modifyTime}
      accountName={account.name}
    />
  )
}

export function OrderAcceptedCard({
  notification,
  account,
}: {
  notification: NotificationDetails
  account: Account
}): JSX.Element {
  const { modifyTime } = notification

  return (
    <BaseItem
      title={'1,000 fUSDT Withdraw'}
      text={'Withdraw Successfully.'}
      icon={'/static/images/etc/WithdrawFUSDT.svg'}
      timestamp={modifyTime}
      accountName={account.name}
    />
  )
}
