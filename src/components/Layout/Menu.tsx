import React, { useState, useRef, useCallback } from 'react'
import styled from 'styled-components'

import useOnOutsideClick from 'lib/hooks/useOnOutsideClick'

import { NavToggle } from 'components/Icons'
import { RowEnd } from 'components/Row'
import NavButton from 'components/Button/NavButton'
import { MenuBar } from './MenuBar'
import { useCloseWithEscape } from 'lib/hooks/useCloseWithEscape'
import { ApplicationModal } from 'state/application/reducer'
import { useModalOpen } from 'state/application/hooks'

const Container = styled(RowEnd)`
  flex-flow: row nowrap;
  width: unset;
  padding-bottom: 4px;
`

export default function Menu() {
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const showAdvancedSettingsModal = useModalOpen(ApplicationModal.ADVANCED_SETTINGS)
  const showNotificationsModal = useModalOpen(ApplicationModal.NOTIFICATIONS)

  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])
  useCloseWithEscape(() => setIsOpen(false), false)
  useOnOutsideClick(ref, () => {
    if (!showAdvancedSettingsModal && !showNotificationsModal) setIsOpen(false)
  })

  return (
    <Container ref={ref}>
      <NavButton onClick={() => toggle()} simpleMode width={40} height={36}>
        <NavToggle width={24} height={10} />
      </NavButton>
      {isOpen && (
        <MenuBar
          isOpen={isOpen}
          onDismiss={() => {
            setIsOpen(false)
          }}
        />
      )}
    </Container>
  )
}
