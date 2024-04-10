import { useState } from 'react'
import styled from 'styled-components'

import { RowFixed } from 'components/Row'
import Rewards from 'components/App/Dibs/Rewards'
import Leaderboard from 'components/App/Dibs/Leaderboard'
import { useModalOpen } from 'state/application/hooks'
import { ApplicationModal } from 'state/application/reducer'
import DepositModal from 'components/ReviewModal/DepositModal'
import AnimationLoader from 'components/Animation/AnimationLoader'

const TabsWrapper = styled(RowFixed)`
  gap: 30px;
  margin: 20px 10px 10px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    gap: 20px;
    margin: 10px 10px 0px;
  `}
`

const Container = styled.div`
  margin: 30px 12% 0px;
  height: calc(100vh - 130px);
  overflow: hidden;
  position: relative;

  ${({ theme }) => theme.mediaWidth.upToLarge`
    height: calc(100vh - 130px);
    margin: 30px 10px 0px;
  `}

  ${({ theme }) => theme.mediaWidth.upToMedium`
    height: calc(100vh - 260px);
    margin: 30px 10px 0px;
  `}

  ${({ theme }) => theme.mediaWidth.upToSmall`
    height: calc(100vh - 240px);
    margin: 10px 2px 0px;
  `}
`

const Tab = styled.button<{ active?: boolean }>`
  width: 50%;
  height: 40px;
  color: ${({ theme, active }) => (active ? theme.pink : theme.coolGrey)};
  font-weight: 500;
  font-size: 20px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 14px;
  `}

  &:hover {
    cursor: ${({ active }) => (active ? 'auto' : 'pointer')};
    ${({ active, theme }) =>
      !active &&
      `
        color: ${theme.almostWhite};
      `}
  }
`

const Title = styled.div`
  background: linear-gradient(180deg, #f9a2f3 28.97%, #fff 73.54%);
  font-family: Londrina Solid;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 10px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 40px;
  `}
`

const AnimationWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin-top: -25px;
  width: 200px;
  overflow: hidden;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-top: -32px;
    width: 170px;
  `}
`

const ContentWrapper = styled.div`
  background: ${({ theme }) => theme.color2};
  border-radius: 8px;
  height: calc(100% - 126px);
  overflow: scroll;
`

export default function Dibs() {
  const showDepositModal = useModalOpen(ApplicationModal.DEPOSIT)
  const [isInMyRewardsPage, setIsInMyRewardsPage] = useState(false)

  return (
    <Container>
      <Title>Trade 2 Earn </Title>
      <TabsWrapper>
        <Tab
          active={!isInMyRewardsPage}
          onClick={() => {
            isInMyRewardsPage && setIsInMyRewardsPage(false)
          }}
        >
          Leaderboard
        </Tab>
        <Tab
          active={isInMyRewardsPage}
          onClick={() => {
            !isInMyRewardsPage && setIsInMyRewardsPage(true)
          }}
        >
          My Rewards
        </Tab>
      </TabsWrapper>

      <AnimationWrapper>
        <AnimationLoader name={'trade2earn'} />
      </AnimationWrapper>
      <ContentWrapper>{isInMyRewardsPage ? <Rewards /> : <Leaderboard />}</ContentWrapper>
      {showDepositModal && <DepositModal />}
    </Container>
  )
}
