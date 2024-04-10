import { Card, InnerCard } from 'components/Card'
import { ThemedText } from 'components/Text'
import { Column, FlexColumn } from 'components/Column'
import { ThemedInput } from 'components/Input'
import InputSearch from 'components/Icons/InputSearch'
import { ThemedButton } from 'components/Button'
import { Row, WrapRow } from 'components/Row'
import styled, { useTheme } from 'styled-components'
import { useState } from 'react'
import Copy from '../../Icons/Copy'
import Share from 'components/Icons/Share'
import { ThemedSummaryBox } from 'components/ProfitAndLossCard/SummaryBox'
import { ThemedTables } from 'components/Table'
import { NoRewards } from 'components/App/Refer2Earn/MyCodeCard'

const InfoCardWrapper = styled(InnerCard)<{
  background: string
}>`
  background: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 6px;
  padding: 18px 14px 18px 20px;
  flex: 1;
  min-width: 310px;
  background-color: ${({ theme }) => theme.color3};
  transition: all 0.5s ease-in-out;

  ${({ theme }) => theme.mobileFirstMediaWidth.fromSmall`
    padding: 18px 30px 28px 40px;
  `}
  &.move-1 {
    background-position: -40px -120px;

    &:hover {
      background-position: -20px -50px;
    }
  }

  &.move-2 {
    background-position: 160px -100px;

    &:hover {
      background-position: 130px -200px;
    }
  }
`

const InfoCard = ({
  title,
  subTitle,
  text,
  background,
  backgroundAnimationName,
}: {
  title: string
  subTitle: string
  text: string
  background: string
  backgroundAnimationName: string
}) => {
  return (
    <InfoCardWrapper background={background} className={backgroundAnimationName}>
      <ThemedText.PageTitle fontSize="48px" fontWeight="400">
        {title}
      </ThemedText.PageTitle>
      <ThemedText.White fontSize="22px" fontWeight="400">
        {subTitle}
      </ThemedText.White>
      <ThemedText.White fontSize="16px" fontWeight="400">
        {text}
      </ThemedText.White>
    </InfoCardWrapper>
  )
}

export const RakebacksCard = () => {
  const [hasSignUpReferralCode, setHasSignUpReferralCode] = useState(false)
  const [hasActiveCode, setHasActiveCode] = useState(false)

  if (Math.random() > 0) {
    return (
      <Card paddingY="24px" paddingX="40px" borderRadius="8px">
        <FlexColumn>{Math.random() > 0 ? <ActiveRakebackCodeSection /> : <NoActiveRakebackCodeSection />}</FlexColumn>
      </Card>
    )
  } else {
    return (
      <Card paddingY="42px" borderRadius="8px" background="/static/images/card/cardBackground1.svg">
        <FlexColumn gap="24px" align="center">
          <ThemedText.P4 textAlign="center" fontSize="18px" fontWeight="400" width="clamp(100px, 100%, 500px)">
            Maximize your trading benefits by registering with your referrer&apos;s code! Enjoy exclusive rakebacks
            including
          </ThemedText.P4>
          <WrapRow gap="24px" maxWidth="1000px">
            <InfoCard
              title="11%"
              subTitle="Back on trading fees"
              text="Save a portion of fees on every trade you make."
              background="/static/images/card/blub1.svg"
              backgroundAnimationName="move-1"
            />
            <InfoCard
              title="22%"
              subTitle="Back from liquidation penalties"
              text="get a good portion back if trades don’t go as planned."
              background="/static/images/card/blub2.svg"
              backgroundAnimationName="move-2"
            />
          </WrapRow>
          <WrapRow width="100%" maxWidth="554px" gap="24px">
            <ThemedInput.WithRightIcon width="100%" smWidth="70%" placeholder="Enter Code" icon={<InputSearch />} />
            <ThemedButton.Pink width="100%" minWidth="max-content">
              Register Code
            </ThemedButton.Pink>
          </WrapRow>
        </FlexColumn>
      </Card>
    )
  }
}

const ActiveRakebackCodeSection = () => {
  return (
    <>
      <WrapRow gap="12px" marginBottom="36px">
        <ThemedText.P2 width="fit-content">Sign-Up Referral Code:</ThemedText.P2>
        <Row gap="8px" width="fit-content">
          <ThemedText.P1 color="blue6">238707283</ThemedText.P1>
          <Copy width="14px" height="14px" smWidth="21px" smHeight="21px" cursor="pointer" />
          <Share width="14px" height="14px" smWidth="22px" smHeight="22px" cursor="pointer" />
        </Row>
      </WrapRow>
      <SummariesSection />
      {Math.random() > 0 ? <MyRewardsSection /> : <NoRewards />}
    </>
  )
}

const NoActiveRakebackCodeSection = () => {
  const theme = useTheme()

  return (
    <FlexColumn>
      <WrapRow columnGap="30px" rowGap="24px" width="100%" marginBottom="36px">
        <Column>
          <WrapRow columnGap="12px" rowGap="2px">
            <ThemedText.P2 width="fit-content">Sign-Up Referral Code:</ThemedText.P2>
            <Row gap="8px" width="fit-content">
              <ThemedText.P1 color={theme.gray3}>238707283</ThemedText.P1>
              <Copy color={theme.gray3} width="14px" height="14px" smWidth="21px" smHeight="21px" />
              <Share color={theme.gray3} width="14px" height="14px" smWidth="22px" smHeight="22px" />
            </Row>
          </WrapRow>
          <ThemedText.P5 width="fit-content" color={theme.orange}>
            You need to lock 11 VIBE to activate your code
          </ThemedText.P5>
        </Column>
        <FlexColumn>
          <ThemedButton.Primary marginLeft="auto" minWidth="max-content">
            Activate Rakeback
          </ThemedButton.Primary>
        </FlexColumn>
      </WrapRow>
      <NoRewards />
    </FlexColumn>
  )
}

const SummariesSection = () => {
  return (
    <WrapRow gap="24px" marginBottom="24px">
      <Column width="clamp(320px, 100%, 420px)">
        <ThemedSummaryBox.Large
          title="Rewards Earned"
          value="730 VIBE"
          background="/static/images/card/innerCardBackground2.svg"
        />
      </Column>
    </WrapRow>
  )
}

const MyRewardsSection = () => {
  return (
    <FlexColumn>
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
    </FlexColumn>
  )
}
