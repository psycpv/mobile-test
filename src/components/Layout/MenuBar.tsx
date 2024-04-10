import styled from 'styled-components'
import React, { useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { useIsMobile } from 'lib/hooks/useWindowSize'
import { ApplicationModal } from 'state/application/reducer'
import { useMarkAsReadAllNotificationsCallback, useUnreadNotifications } from 'state/notifications/hooks'
import { useAdvancedSettingModalToggle, useModalOpen, useNotificationsModalToggle } from 'state/application/hooks'

import Column from 'components/Column'
import { Row, RowBetween, RowEnd } from 'components/Row'
import { Close as CloseIcon, GradientBell } from 'components/Icons'
import SettingsModal from 'components/ReviewModal/SettingsModal'
import NotificationsModal from 'components/Notifications/NotificationsModal'

export const Sidebar = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 999;
  width: 280px;
  height: 100%;
  top: 0;
  right: 0;
  padding: 20px 0px 20px 0px;
  background: ${({ theme }) => theme.color2};
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  border-left-style: solid;
  border-left-width: 1px;
  border-left-color: ${({ theme }) => theme.color4};
`

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`

const Title = styled.div`
  color: ${({ theme }) => theme.almostWhite};
  font-size: 1.5rem;
  padding-left: 20px;
`

const TopRow = styled(RowBetween)`
  margin-bottom: 20px;
`

const Close = styled.div`
  border: none;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  margin-top: -20px;
`

const MenuItem = styled(RowBetween)`
  font-size: 18px;
  padding: 10px 20px 10px 20px;
  border-bottom-color: ${({ theme }) => theme.color3};
  border-bottom-width: 2px;
  border-bottom-style: solid;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color4};
  }
`

const Label = styled.div<{ margin?: string }>`
  color: ${({ theme }) => theme.almostWhite};
  margin: ${({ margin }) => margin};
`

const MenuItemList = styled(Column)`
  border-top-color: ${({ theme }) => theme.color3};
  border-top-width: 2px;
  border-top-style: solid;
`

const SettingsRow = styled(Row)`
  font-size: 18px;

  position: absolute;
  bottom: 0px;
  padding: 10px 20px 10px 20px;
  border-top-color: ${({ theme }) => theme.color3};
  border-top-width: 2px;
  border-top-style: solid;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color4};
  }
`

const NotificationsRow = styled(Row)`
  font-size: 18px;

  position: absolute;
  bottom: 52px;
  padding: 10px 20px 10px 20px;
  border-top-color: ${({ theme }) => theme.color3};
  border-top-width: 2px;
  border-top-style: solid;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color4};
  }

  & > * {
    &:first-child {
      min-width: 30px;
    }
  }
`

const NotificationsCount = styled.div`
  width: 21px;
  height: 21px;

  padding: 1px;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  border-radius: 10px;

  background: ${({ theme }) => theme.pink};
  border: 1px solid ${({ theme }) => theme.darkPink};
  color: ${({ theme }) => theme.primaryBlackNew};
`

const menuItems: { title: string; link: string; image: any }[] = [
  { title: 'Trade', link: '/trade', image: require(`/public/static/images/menu/Trade.svg`) },
  {
    title: 'Analytics',
    link: 'https://analytics.based.markets/home',
    image: require(`/public/static/images/menu/Analytics.svg`),
  },
  { title: 'Staking', link: '/staking', image: require(`/public/static/images/menu/Staking.svg`) },
  { title: 'Trade2Earn', link: '/trade2earn', image: require(`/public/static/images/menu/Trade2Earn.svg`) },
  { title: 'Refer2Earn', link: '/refer2earn', image: require(`/public/static/images/menu/Refer2Earn.svg`) },
  { title: 'Docs', link: 'https://docs.based.markets/', image: require(`/public/static/images/menu/Docs.svg`) },
  { title: 'My Account', link: '/my-account', image: require(`/public/static/images/menu/MyAccount.svg`) },
]

export function MenuBar({ isOpen, onDismiss }: { isOpen: boolean; onDismiss: () => void }) {
  const router = useRouter()
  const showAdvancedSettingsModal = useModalOpen(ApplicationModal.ADVANCED_SETTINGS)
  const toggleAdSettingsModal = useAdvancedSettingModalToggle()
  const isMobile = useIsMobile()

  return (
    <React.Fragment>
      <Overlay isOpen={isOpen} onClick={onDismiss} />
      <Sidebar isOpen={isOpen}>
        <TopRow>
          <Title>Menu</Title>
          <Close onClick={onDismiss}>
            <CloseIcon size={12} />
          </Close>
        </TopRow>
        <MenuItemList>
          {menuItems.map(({ title, link, image }, index) => (
            <MenuItem
              onClick={() => {
                router.push(link)
                onDismiss()
              }}
              key={index}
            >
              <Label>{title}</Label>
              <Image src={image} width={'30px'} height={'30px'} alt={'info icon'} />
            </MenuItem>
          ))}

          {isMobile && <Notifications />}

          <SettingsRow
            onClick={() => {
              toggleAdSettingsModal()
            }}
          >
            <Image
              src={require(`/public/static/images/menu/Settings.svg`)}
              width={'30px'}
              height={'30px'}
              alt={'info icon'}
            />
            <Label margin={'0px 16px'}>Settings</Label>
          </SettingsRow>
        </MenuItemList>
        {showAdvancedSettingsModal && (
          <SettingsModal title={'Advanced Settings'} isOpen={true} toggleModal={toggleAdSettingsModal} />
        )}
      </Sidebar>
    </React.Fragment>
  )
}

function Notifications() {
  const readAllNotifications = useMarkAsReadAllNotificationsCallback()
  const unreadNotifications = [...useUnreadNotifications()]
  const newNotifications = useMemo(() => unreadNotifications.length !== 0, [unreadNotifications.length])

  const modalOpen = useModalOpen(ApplicationModal.NOTIFICATIONS)
  const toggleModal = useNotificationsModalToggle()

  const closeOnClick = useCallback(() => {
    if (modalOpen) readAllNotifications()
    toggleModal()
  }, [modalOpen, readAllNotifications, toggleModal])

  return (
    <React.Fragment>
      <NotificationsRow onClick={closeOnClick}>
        <GradientBell />

        <Label margin={'0px 16px'}>Notifications</Label>
        <RowEnd>{newNotifications && <NotificationsCount>{unreadNotifications.length}</NotificationsCount>}</RowEnd>
      </NotificationsRow>

      {modalOpen && <NotificationsModal isModal isOpen={modalOpen} onDismiss={closeOnClick} />}
    </React.Fragment>
  )
}
