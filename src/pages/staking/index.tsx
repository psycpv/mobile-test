import styled, { useTheme } from 'styled-components'

import LPStake from 'components/App/Staking/LPStake'
import SingleStake from 'components/App/Staking/SinglStake/SingleStake'
import Header from 'components/Banner/Header'
import { useModalOpen } from 'state/application/hooks'
import { ApplicationModal } from 'state/application/reducer'
import background from '/public/static/images/dibs/Header2.svg'
import Rewards from 'components/App/Staking/Rewards'
import React, { useState } from 'react'
import { Tab } from 'components/Tab'
import basedIcon from '/public/static/images/tokens/BASED.svg'
import USDC_ICON from '/public/static/images/tokens/USDC.svg'
import DepositModal from 'components/ReviewModal/DepositModal'
import { useIsMobile } from 'lib/hooks/useWindowSize'

const Layout = styled.div`
  justify-content: center;
  gap: 16px;
  margin-left: 12.6%;
  margin-right: 12.3%;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    margin-left: 0.9%;
    margin-right: 0.7%;
  `}
`
const TabWrapper = styled.div<{ width?: string }>`
  width: ${({ width }) => (width ? width : '')};
  margin: auto;
`

export enum StakeMode {
  STAKING = 'Staking',
  REWARDS = 'Rewards',
}

export default function StakingPage() {
  const isMobile = useIsMobile()
  const theme = useTheme()
  const showDepositModal = useModalOpen(ApplicationModal.DEPOSIT)
  const [activeSection, setActiveSection] = useState<StakeMode>(StakeMode.STAKING)

  return (
    <>
      <Header
        titlePosition={isMobile ? { left: '10px', right: '0' } : undefined}
        titleFontSize={isMobile ? '40px' : ''}
        subTitleFontSize={isMobile ? '12px' : ''}
        backgroundImg={isMobile ? undefined : background}
        animation={'stake2earn'}
        animationStyle={
          isMobile
            ? { width: '150px', marginTop: '7px' }
            : {
                width: '320px',
                marginTop: '20px',
                marginLeft: '10px',
              }
        }
        iconStyle={{ width: '118px', top: '2px', right: '5px', transform: 'scaleX(-1)' }}
        iconSize={{ width: '280px', height: '251px' }}
        title={'Stake 2 Earn'}
        subtitle={'Stake BASED to earn trading fees in USDbC'}
      />
      <Layout>
        <TabWrapper width={'100%'}>
          <Tab
            tabOptions={[StakeMode.STAKING, StakeMode.REWARDS]}
            activeOption={activeSection}
            hasBackground={false}
            activeColor={activeSection === StakeMode.STAKING ? theme.darkPink : theme.buttonBlue}
            borderColor={theme.color3}
            borderSize={'2px'}
            fontSize={isMobile ? '14px' : '24px'}
            width="50%"
            height={isMobile ? '38px' : '54px'}
            icons={{
              [StakeMode.STAKING]: basedIcon,
              [StakeMode.REWARDS]: USDC_ICON,
            }}
            onChange={(option: string) => {
              setActiveSection(option as StakeMode)
            }}
            outerBorder={false}
          />
        </TabWrapper>

        {activeSection === StakeMode.STAKING ? (
          <>
            <SingleStake></SingleStake>
            <LPStake></LPStake>
          </>
        ) : (
          <Rewards></Rewards>
        )}
        {showDepositModal && <DepositModal />}
      </Layout>
    </>
  )
}
