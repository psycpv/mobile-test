import styled from 'styled-components'
import Column, { FlexColumn } from 'components/Column'
import { ResponsiveRow } from 'components/Row'
import { BalanceCard } from 'components/BalanceCard'
import { ProfitAndLossCard } from 'components/ProfitAndLossCard'
import { RecentTransactions } from 'components/RecentTransactions'
import { OpenPositionsCard } from 'components/OpenPositionsCard'
import React, { useState } from 'react'
import { TransactionsHistoryModal } from 'components/TransactionsHistoryModal'
import { AccountHealthCard } from 'components/AccountHealthCard'
import { HeaderSection } from 'components/App/AccountOverview/HeaderSection'
import { SignUpReferralCodeCard } from 'components/App/AccountOverview/SignUpReferralCodeCard'
import { PersonalInfoCard } from 'components/App/AccountOverview/PersonalInfoCard'
import { UserReferralCodeCard } from 'components/App/AccountOverview/UserReferralCodeCard'
import { DailyCumulativePnlDataContextProvider } from 'context/DailyCumulativePnlDataContext'
import { TimeRangeFilterContextProvider } from 'context/TimeRangeFilterContext'

const Container = styled(Column)`
  background: ${({ theme }) => theme.color1};
  padding: 0 9vw;

  ${({ theme }) => theme.mediaWidth.upToLarge`
    padding: 0 9%;
  `}

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 0 4%;
  `}

    ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 0 2%;
  `}
`

const AccountOverview = () => {
  const [isRecentTransactionsModalOpen, setIsRecentTransactionsModalOpen] = useState(false)

  return (
    <Container>
      <HeaderSection />
      <ResponsiveRow align="stretch" gap="18px" marginBottom="18px">
        <FlexColumn gap="16px">
          <AccountHealthCard height="114px" orientation="vertical" />
          <OpenPositionsCard />
        </FlexColumn>
        <FlexColumn>
          <TimeRangeFilterContextProvider>
            <DailyCumulativePnlDataContextProvider>
              <ProfitAndLossCard />
            </DailyCumulativePnlDataContextProvider>
          </TimeRangeFilterContextProvider>
        </FlexColumn>
        <FlexColumn gap="16px">
          <BalanceCard />
          <RecentTransactions onMoreClick={() => setIsRecentTransactionsModalOpen(true)} />
        </FlexColumn>
      </ResponsiveRow>
      <ResponsiveRow align="stretch" gap="18px">
        <FlexColumn>
          <SignUpReferralCodeCard />
        </FlexColumn>
        <FlexColumn>
          <UserReferralCodeCard />
        </FlexColumn>
        <FlexColumn>
          <PersonalInfoCard />
        </FlexColumn>
      </ResponsiveRow>
      <TransactionsHistoryModal isOpen={isRecentTransactionsModalOpen} setIsOpen={setIsRecentTransactionsModalOpen} />
    </Container>
  )
}

export default AccountOverview
