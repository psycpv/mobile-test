import { Card } from 'components/Card'
import { Column, FlexColumn } from 'components/Column'
import { ThemedText } from 'components/Text'
import { Row, WrapRow } from 'components/Row'
import Copy from '../../Icons/Copy'
import Share from 'components/Icons/Share'
import { ThemedSummaryBox } from 'components/ProfitAndLossCard/SummaryBox'
import { ThemedTables } from 'components/Table'
import { ThemedButton } from 'components/Button'
import { useState } from 'react'
import { ThemedInput } from 'components/Input'
import InputSearch from 'components/Icons/InputSearch'
import styled, { useTheme } from 'styled-components'
import AnimationLoader from 'components/Animation/AnimationLoader'

export const MyCodeCard = () => {
  const [hasActiveCode, setHasActiveCode] = useState(false)
  const [hasReferralCode, setHasReferralCode] = useState(true)

  if (Math.random() > 0) {
    return (
      <Card paddingY="24px" paddingX="40px" borderRadius="8px">
        <FlexColumn>
          {Math.random() > 1 ? <ActiveMyReferralCodeSection /> : <NotActiveMyReferralCodeSection />}
          <SummariesSection />
          <MyRewardsSection />
        </FlexColumn>
      </Card>
    )
  } else {
    return (
      <Card paddingY="42px" borderRadius="8px" background="/static/images/card/cardBackground2.svg">
        <FlexColumn gap="24px" align="center">
          <ThemedText.H3 textAlign="center" width="100%">
            Create Your referral code and start earning!
          </ThemedText.H3>
          <WrapRow width="100%" maxWidth="554px" gap="24px">
            <ThemedInput.WithRightIcon width="100%" smWidth="70%" placeholder="Enter Code" icon={<InputSearch />} />
            <ThemedButton.Pink width="100%" minWidth="max-content">
              Create Code
            </ThemedButton.Pink>
          </WrapRow>
        </FlexColumn>
      </Card>
    )
  }
}

const ActiveMyReferralCodeSection = () => {
  return (
    <WrapRow gap="12px" marginBottom="36px">
      <ThemedText.P2 width="fit-content">My Referral Code:</ThemedText.P2>
      <Row gap="8px" width="fit-content">
        <ThemedText.P1 color="blue6">238707283</ThemedText.P1>
        <Copy width="14px" height="14px" smWidth="21px" smHeight="21px" cursor="pointer" />
        <Share width="14px" height="14px" smWidth="20px" smHeight="22px" cursor="pointer" />
      </Row>
    </WrapRow>
  )
}

const NotActiveMyReferralCodeSection = () => {
  const theme = useTheme()

  return (
    <WrapRow columnGap="40px" rowGap="24px" width="100%" marginBottom="36px">
      <Column>
        <WrapRow columnGap="12px" rowGap="2px">
          <ThemedText.P2 width="fit-content">My Referral Code:</ThemedText.P2>
          <Row gap="8px" width="fit-content">
            <ThemedText.P1 color={theme.gray3}>238707283</ThemedText.P1>
            <Copy color={theme.gray3} width="14px" height="14px" smWidth="21px" smHeight="21px" />
            <Share color={theme.gray3} width="14px" height="14px" smWidth="22px" smHeight="22px" />
          </Row>
        </WrapRow>
        <ThemedText.P5 width="fit-content" color={theme.orange}>
          You need to lock 22 VIBE to activate your code
        </ThemedText.P5>
      </Column>
      <FlexColumn>
        <ThemedButton.Primary marginLeft="auto" minWidth="max-content">
          Activate Code
        </ThemedButton.Primary>
      </FlexColumn>
    </WrapRow>
  )
}

const SummariesSection = () => {
  return (
    <WrapRow gap="24px" marginBottom="24px">
      <FlexColumn minWidth="250px">
        <ThemedSummaryBox.Large
          title="Accounts Joined"
          value="12"
          background="/static/images/card/innerCardBackground1.svg"
        />
      </FlexColumn>
      <FlexColumn minWidth="250px">
        <ThemedSummaryBox.Large
          title="Volume Generated"
          value="$322,730"
          background="/static/images/card/innerCardBackground2.svg"
        />
      </FlexColumn>
      <FlexColumn minWidth="250px">
        <ThemedSummaryBox.Large
          title="Rewards Earned"
          value="730 BASED"
          background="/static/images/card/innerCardBackground3.svg"
        />
      </FlexColumn>
    </WrapRow>
  )
}

const MyRewardsSection = () => {
  return (
    <FlexColumn>
      {Math.random() > 0.5 ? (
        <>
          <Row width="100%" marginBottom="16px">
            <ThemedText.P2 marginRight="auto">My Rewards</ThemedText.P2>
            <ThemedButton.Primary>Claim All</ThemedButton.Primary>
          </Row>

          <ThemedTables.MyRewards
            data={[
              {
                date: '12-12-2021',
                volumeGenerated: '$322,730',
                myReward: '730 POINTS',
                currentValue: '322,730 USDT',
              },
              {
                date: '12-12-2021',
                volumeGenerated: '$322,730',
                myReward: '730 POINTS',
                currentValue: '322,730 USDT',
              },
              {
                date: '12-12-2021',
                volumeGenerated: '$322,730',
                myReward: '730 POINTS',
                currentValue: '322,730 USDT',
              },
              {
                date: '12-12-2021',
                volumeGenerated: '$322,730',
                myReward: '730 POINTS',
                currentValue: '322,730 USDT',
              },
            ]}
          />
        </>
      ) : (
        <NoRewards />
      )}
    </FlexColumn>
  )
}

const NoRewardsWrapper = styled(Column)`
  width: 100%;
  padding: 40px 0;
  align-items: center;
  justify-content: center;
`

export const NoRewards = () => {
  return (
    <NoRewardsWrapper>
      <AnimationLoader
        name="_100sleeping"
        style={{
          width: 120,
        }}
      />
      <ThemedText.P5 color="coolGrey">You have no rewards</ThemedText.P5>
    </NoRewardsWrapper>
  )
}
