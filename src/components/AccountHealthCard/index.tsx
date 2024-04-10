import AccountHealth from 'components/AccountHealth'
import { Card } from 'components/Card'
import React from 'react'

export const AccountHealthCard = ({
  height,
  orientation,
}: {
  height: string
  orientation: 'horizontal' | 'vertical'
}) => {
  return (
    <Card padding="0" height={height}>
      <AccountHealth orientation={orientation} />
    </Card>
  )
}
