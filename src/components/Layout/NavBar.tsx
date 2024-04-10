import React from 'react'
import styled from 'styled-components'
import { Z_INDEX } from 'theme'
import { NextRouter, useRouter } from 'next/router'

import { ApplicationModal } from 'state/application/reducer'

import { useIsMobile } from 'lib/hooks/useWindowSize'
import { useInjectedAddress } from 'lib/hooks/useInjectedAddress'
import { useModalOpen, useToggleSideBar, useWithdrawBarModalToggle } from 'state/application/hooks'

import { Row } from 'components/Row'
import Web3Status from 'components/Web3Status'
import NavLogo from './NavLogo'
import WithdrawCooldown from 'components/App/AccountData/WithdrawCooldown'
import Notifications from 'components/Notifications'
import Warning from './Warning'
import Column from 'components/Column'
import Menu from './Menu'
import WithdrawBarModal from 'components/ReviewModal/WithdrawBarModal'
import NavButton from 'components/Button/NavButton'
import SideBarToggle from 'components/Icons/SideBarToggle'
import CheckLocation from 'components/LocationAndConnectivityChecker'

const Wrapper = styled(Row)`
  gap: 5px;
  font-size: 16px;
  flex-wrap: nowrap;
  padding: 8px;
  position: relative;
  z-index: ${Z_INDEX.fixed};
  ${({ theme }) => theme.mediaWidth.upToSmall`
    background-color: ${({ theme }) => theme.color2};
    padding: 0px 1.25rem;
  `};
`

const BackgroundWrapper = styled(Wrapper)`
  padding: 0;
  height: 72px;
  overflow: hidden;
  position: absolute;
`

const MobileWrapper = styled(Wrapper)`
  justify-content: flex-end;
  font-size: 12px;
  flex-wrap: wrap;
  padding: 16px 16px 8px 16px;
  background-color: ${({ theme }) => theme.color2};

  & > * {
    &:first-child {
      margin-right: auto;
    }
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
  padding: 16px 12px 8px 12px;
  & > * {

    &:nth-child(3) {
      width: 100%;
      order: 2;
      margin-top: 10px;
    }
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(4),
    &:nth-child(5) {
      order: 1;
    }
  }
  `};
`

export const NavbarContentWrap = styled.div`
  list-style: none;
  margin: auto;
  margin-left: 15px;
  margin-right: 15px;
  cursor: pointer;
  padding: 10px 0;
  position: relative;

  &:hover {
    display: block;

    & > ul {
      display: block;
    }
  }
`

export const SubNavbarContentWrap = styled.ul`
  display: none;
  padding: 12px 0 12px 0;
  background: ${({ theme }) => theme.bg2};
  list-style: none;
  position: absolute;
  top: 50px;
  margin-top: -14px;
  left: 50%;
  transform: translateX(-50%);

  & > li > div {
    padding: 0.45rem 1rem;
    min-width: 150px;
  }
`

const Items = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  gap: 12px;
  flex: 1;

  ${({ theme }) => theme.mediaWidth.upToSmall`
      gap: 5px;
  `};
`

const CooldownWrapper = styled(Column)<{ width?: string }>`
  height: 40px;
  ${({ width }) => width && `width: ${width};`}
  & > * {
    width: 100%;
    cursor: pointer;
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
    z-index: -1;
  `}
`

const BannerWrapper = styled.div`
  padding: 0px 8px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: unset;
  `}
`

export default function NavBar() {
  const router = useRouter()
  const showWithdrawBarModal = useModalOpen(ApplicationModal.WITHDRAW_BAR)
  const toggleWithdrawBarModal = useWithdrawBarModalToggle()
  const toggleSideBar = useToggleSideBar()

  const hasInjected = useInjectedAddress()

  function getMobileContent() {
    return (
      <React.Fragment>
        <BackgroundWrapper />
        <MobileWrapper>
          <NavLogo />
          <Web3Status />
          <CooldownWrapper onClick={() => toggleWithdrawBarModal()}>
            <WithdrawCooldown formatedAmount={false} />
          </CooldownWrapper>

          <Menu />
        </MobileWrapper>
        <BannerWrapper>
          <CheckLocation />
        </BannerWrapper>

        {showWithdrawBarModal && <WithdrawBarModal />}
      </React.Fragment>
    )
  }

  function getDefaultContent(router: NextRouter) {
    return (
      <React.Fragment>
        <Wrapper>
          <NavLogo />
          <Items>
            <CooldownWrapper width={'220px'} onClick={() => toggleWithdrawBarModal()}>
              <WithdrawCooldown formatedAmount={true} />
            </CooldownWrapper>
            <Web3Status />
            <Notifications />
            {/* <Web3Network /> */}
            <Menu />
            <NavButton
              height={36}
              width={40}
              disabled={!router.pathname.includes('/trade/')}
              simpleMode={true}
              onClick={toggleSideBar}
            >
              <SideBarToggle width={24} height={10} />
            </NavButton>
          </Items>
        </Wrapper>
        <BannerWrapper>
          <CheckLocation />
          {hasInjected && (
            <Warning message={`❌ You are in "READ-ONLY" mode. Please do not confirm any transactions! ❌ `} />
          )}
        </BannerWrapper>
        {showWithdrawBarModal && <WithdrawBarModal />}
      </React.Fragment>
    )
  }

  const isMobile = useIsMobile()
  return isMobile ? getMobileContent() : getDefaultContent(router)
}
