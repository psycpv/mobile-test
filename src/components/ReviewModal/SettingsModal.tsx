import React from 'react'
import styled, { useTheme } from 'styled-components'

import { ModalHeader, Modal } from 'components/Modal'

import {
  useAccountHealthAndEffects,
  useNotification,
  useSetAccountHealthAndEffects,
  useSetNotification,
  useSetSoundEffects,
  useSoundEffects,
} from 'state/user/hooks'
import { Row, RowBetween, RowEnd, RowStart } from 'components/Row'
import CustomCheckbox from 'components/CheckBox/CustomCheckBox'
import { ChevronDown } from 'components/Icons'

const MainModal = styled(Modal)`
  display: flex;
  max-width: 448px;
  width: 300px;
  justify-content: center;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.coolGrey};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    max-height: unset;
  `};
`

const HotkeyWrapper = styled(RowStart)`
  gap: 12px;
  margin: 4.5px 0px;
  color: ${({ theme }) => theme.almostWhite};
`

const AlphabetBox = styled.div`
  min-width: 27px;
  min-height: 27px;
  border-radius: 4px;
  padding: 3px 6px;
  text-align: center;
  background: ${({ theme }) => theme.color3};
  color: ${({ theme }) => theme.almostWhite};
  border: 1px solid ${({ theme }) => theme.coolGrey};
`

const Value = styled.div<{ color?: string; margin?: string }>`
  font-size: 16px;
  white-space: nowrap;
  margin: ${({ margin }) => margin};
  color: ${({ theme, color }) => color ?? theme.almostWhite};
`

export const ChevronRight = styled(ChevronDown)`
  width: 10px;
  height: 10px;
  transform: rotate(-90deg);
`

export default function SettingsModal({
  title,
  isOpen,
  toggleModal,
}: {
  title: string
  isOpen: boolean
  toggleModal: (action: boolean) => void
}) {
  const { coolGrey, blue, almostWhite } = useTheme()
  const setSoundEffect = useSetSoundEffects()
  const soundEffect = useSoundEffects()
  const setAccountHealthAndEffects = useSetAccountHealthAndEffects()
  const showAccountHeathAndEffects = useAccountHealthAndEffects()
  const isEnabledNotification = useNotification()
  const setNotification = useSetNotification()

  function toggleNotification() {
    if (isEnabledNotification) {
      window.OneSignalDeferred.push(function (OneSignal: any) {
        OneSignal.User.PushSubscription.optOut()
        setNotification(!isEnabledNotification)
      })
    } else {
      window.OneSignalDeferred.push(function (OneSignal: any) {
        OneSignal.User.PushSubscription.optIn()
        setNotification(!isEnabledNotification)
      })
    }
  }
  return (
    <>
      <MainModal
        isOpen={isOpen}
        onBackgroundClick={() => toggleModal(false)}
        onEscapeKeydown={() => toggleModal(false)}
      >
        <ModalHeader onClose={() => toggleModal(false)} title={title} />
        <div style={{ padding: '12px 18px' }}>
          <RowBetween marginBottom={'16px'}>
            <Value color={coolGrey}>Sound Effects</Value>
            <RowEnd width={'unset'} marginRight={'10px'}>
              <CustomCheckbox
                checked={soundEffect}
                onClick={() => setSoundEffect(!soundEffect)}
                checkColor={blue}
                checkSize={18}
                fontSize={12}
                label={''}
              />
            </RowEnd>
          </RowBetween>
          <RowBetween marginBottom={'16px'}>
            <Value color={coolGrey}>Show Account Health</Value>
            <RowEnd width={'unset'} marginRight={'10px'}>
              <CustomCheckbox
                checked={showAccountHeathAndEffects}
                onClick={() => setAccountHealthAndEffects(!showAccountHeathAndEffects)}
                checkColor={blue}
                checkSize={18}
                fontSize={12}
                label={''}
              />
            </RowEnd>
          </RowBetween>
          <RowBetween marginBottom={'16px'}>
            <Value color={coolGrey}>Enable Notifications</Value>
            <RowEnd width={'unset'} marginRight={'10px'}>
              <CustomCheckbox
                checked={isEnabledNotification}
                onClick={toggleNotification}
                checkColor={blue}
                checkSize={18}
                fontSize={12}
                label={''}
              />
            </RowEnd>
          </RowBetween>
          <div>
            <Value color={coolGrey} margin={'0px 0px 8px 0px'}>
              HotKeys
            </Value>
            <Row gap={'25px'}>
              <HotkeyInfo mainKey={'M'} title={'Market'} />
              <HotkeyInfo mainKey={'L'} title={'Limit'} />
            </Row>
            <Row gap={'25px'}>
              <HotkeyInfo mainKey={'A'} title={'Amount'} />
              <HotkeyInfo mainKey={'2'} title={'Token List'} />
            </Row>
            <Row gap={'25px'}>
              <HotkeyInfo mainKey={'B'} title={'Long'} />
              <HotkeyInfo mainKey={'S'} title={'Short'} />
            </Row>
            <Row gap={'25px'}>
              <HotkeyInfo mainKey={'X'} title={'Leverage'} />
              <HotkeyInfo mainKey={'P'} title={'Price'} />
            </Row>
            <HotkeyInfo mainKey={'shift'} helperKey={<ChevronRight color={almostWhite} />} title={'Maximize chart'} />
          </div>
        </div>
      </MainModal>
    </>
  )
}

function HotkeyInfo({ title, mainKey, helperKey }: { title: string; mainKey: string; helperKey?: React.ReactNode }) {
  return (
    <HotkeyWrapper>
      <AlphabetBox>{mainKey}</AlphabetBox>
      {helperKey && (
        <React.Fragment>
          +<AlphabetBox>{helperKey}</AlphabetBox>{' '}
        </React.Fragment>
      )}
      <Value>{title}</Value>
    </HotkeyWrapper>
  )
}
