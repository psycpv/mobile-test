import { Tabs } from 'components/Tabs'
import { MyCodeCard } from 'components/App/Refer2Earn/MyCodeCard'
import { RakebacksCard } from 'components/App/Refer2Earn/RakebacksCard'
import Column from 'components/Column'
import { useState } from 'react'
import { useTheme } from 'styled-components'

export const MyReferralCodeAndRakebackSection = () => {
  const [activeTab, setActiveTab] = useState('My Referral Code')
  const theme = useTheme()

  return (
    <Column gap="18px">
      <Tabs
        styles={[
          {
            color: theme.pink1,
          },
          {
            color: theme.blue6,
          },
        ]}
        options={['My Referral Code', 'Rakebacks & Rewards']}
        value={activeTab}
        onChange={setActiveTab}
      />
      {activeTab === 'My Referral Code' ? <MyCodeCard /> : <RakebacksCard />}
    </Column>
  )
}
