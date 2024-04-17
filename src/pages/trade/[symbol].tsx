import React, { SetStateAction, useEffect } from 'react'
import { StepType, useTour } from '@reactour/tour'
import styled, { useTheme } from 'styled-components'

import { useIsSideBarVisible } from 'state/application/hooks'

import Column from 'components/Column'
import Chart from 'components/App/Chart'
import UserPanel from 'components/App/UserPanel'
import MarketBar from 'components/App/MarketBar'
import TradePanel from 'components/App/TradePanel'
import AccountOverview from 'components/App/AccountData'
import { UpdaterRoot } from 'components/EmptyComponent'
import WhitelistUpdater from 'components/App/Whitelist/updater'
import { Step } from 'components/Tour/Step'
import { Debugger } from 'components/Debugger/debugger'
import Hotkeys from 'components/Hotkeys'
import { useRouter } from 'next/router'
import Handshake from 'components/Icons/Handshake'
import Image from 'next/image'
import RABBY_ICON_URL from '/public/static/images/wallets/rabby.svg'
import { Wallet } from 'components/Icons'
import { ExternalLink } from 'components/Link'
import { useIsMobile } from 'lib/hooks/useWindowSize'
import { useIsInstalledPWA } from 'state/user/hooks'

export const Container = styled(Column)`
  background: ${({ theme }) => theme.color1};
`

export const ItemsRow = styled.div<{ gap?: string; padding?: string; margin?: string; isVisible?: boolean }>`
  display: flex;
  gap: ${({ gap, isVisible }) => (isVisible ? gap ?? '8px' : '0')};
  margin: ${({ margin }) => margin ?? '4px 0px'};
  padding: ${({ padding }) => padding ?? '0px 8px'};

  & > * {
    &:nth-child(2) {
      flex: 1;
    }
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: column;
  }
  `};
`

export const LeftColumn = styled(Column)<{ gap?: string }>`
  overflow-y: scroll;
  background: ${({ theme }) => theme.color1};
  gap: ${({ gap }) => gap ?? '8px'};
  flex: 2;

  & > * {
    width: 100%;
  }
`

const ImageWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding: 0px 4px;
`

const SideBarComponentsWrapper = styled.div<{ isVisible?: boolean }>`
  max-width: ${({ isVisible }) => (isVisible ? '400px' : '0')};
  transform: translateX(${({ isVisible }) => (isVisible ? '' : '100%')});
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: max-width 0.5s ease, transform 0.5s ease;
  overflow: ${({ isVisible }) => (isVisible ? 'scroll' : 'hidden')};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    max-width: unset;
  }
  `};
`

const Link = styled(ExternalLink)`
  color: ${({ theme }) => theme.almostWhite};
  text-decoration: underline;
`

export default function Symbol() {
  const isMobile = useIsMobile()
  const { setIsOpen, setSteps } = useTour()
  const isSideBarVisible = useIsSideBarVisible()
  const isInstalledPWA = useIsInstalledPWA()
  const theme = useTheme()

  const router = useRouter()
  useEffect(() => {
    const symbol = router.query?.symbol
    localStorage.setItem('LAST_TRADE_SYMBOL', typeof symbol === 'string' ? symbol : 'BTCUSDT')
  }, [router])

  useEffect(() => {
    if (!setSteps) {
      return
    }

    if (localStorage.getItem('wagmi.wallet')) {
      localStorage.setItem('tour-part1', 'done')
      localStorage.setItem('tour-part2', 'done')
      localStorage.setItem('tour-part3', 'done')
      localStorage.setItem('tour-part4', 'done')
      return
    }

    if (localStorage.getItem('tour-part1') === 'done') {
      return
    }

    localStorage.setItem('tour-part1', 'done')

    const steps: SetStateAction<StepType[]> = [
      {
        selector: '.tour-step-1',
        content: (
          <Step
            title={'Welcome to Vibe Trading!'}
            content={'Follow this short walkthrough to get things setup quickly.'}
            icon={<Handshake size={20} />}
          />
        ),
        position: 'center',
      },
      {
        selector: '.tour-step-2',
        content: (
          <Step
            title="Step 1: Connect Wallet"
            content={
              <div>
                For the best experience we HIGHLY recommend you use{' '}
                <ImageWrapper>
                  <Image width={24} src={RABBY_ICON_URL} alt={'rabby icon'} />
                </ImageWrapper>
                <Link href={'https://rabby.io/'} target="_blank" rel="noreferrer">
                  Rabby Wallet
                </Link>
              </div>
            }
            icon={<Wallet size={18} color={theme.almostWhite} />}
          />
        ),
      },
    ]

    if (isMobile && !isInstalledPWA)
      steps.push({
        selector: '.tour-step-6',
        content: <Step title="Setup PWA" content="Get our PWA with one click for a faster and smoother experience" />,
        position: 'center',
        highlightedSelectors: [],
      })

    setSteps(steps)
    setIsOpen(true)
  }, [isInstalledPWA, isMobile, setIsOpen, setSteps, theme.almostWhite])

  return (
    <Container>
      <Hotkeys />
      <UpdaterRoot />
      <WhitelistUpdater />
      <ItemsRow isVisible={isSideBarVisible}>
        <LeftColumn>
          <MarketBar />
          <Chart />
        </LeftColumn>
        <SideBarComponentsWrapper isVisible={isSideBarVisible}>
          <TradePanel />
        </SideBarComponentsWrapper>
      </ItemsRow>
      <ItemsRow isVisible={isSideBarVisible}>
        <LeftColumn>
          <UserPanel />
        </LeftColumn>
        <SideBarComponentsWrapper isVisible={isSideBarVisible}>
          <AccountOverview />
        </SideBarComponentsWrapper>
      </ItemsRow>
      <Debugger />
    </Container>
  )
}
