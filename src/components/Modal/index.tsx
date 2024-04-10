import React from 'react'
import styled, { useTheme } from 'styled-components'
import StyledModal from 'styled-react-modal'
import { Z_INDEX } from 'theme'

import { PositionType } from 'types/trade'

import { Close as CloseIcon, ExitMediumModal, LongArrow, ShortArrow } from 'components/Icons'
import { ChevronDown } from 'components/Icons'
import { ThemedText } from 'components/Text'
import { RowBetween } from 'components/Row'

const BaseModal = StyledModal.styled`
  display: flex;
  flex-flow: column nowrap;
  background: ${({ theme }: { theme: any }) => theme.color2};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: ${Z_INDEX.modal};
  overflow: visible;
   `

export const MobileModal = styled(BaseModal)`
  width: 100vw;
  height: 100vh;
`

export const Modal = styled(BaseModal)<{
  width?: string
  closeModal?: boolean
}>`
  background: ${({ theme }) => theme.color2};
  width: ${({ width }: { width?: string }) => width ?? '404px'};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    max-height: 350px;
    width: 350px;
    overflow: scroll;
  `};
  border: 1px solid ${({ theme }) => theme.coolGrey};
  border-radius: 8px;
  ${({ closeModal }) =>
    closeModal &&
    `
  position: fixed !important;
  top: 14% !important;
  transform: translateX(0%)!important;
  overflow-y: auto !important; 
  max-height: 70vh !important;`}
`

const ModalWrapper = styled(BaseModal)<{
  size?: 'sm' | 'md'
}>`
  padding: 24px 28px 18px;
  border-radius: 8px;
  position: relative;
  max-width: ${({ size }) => (size === 'sm' ? '440px' : '600px')};
  width: 90%;
  height: fit-content;
`

const ExitMediumModalButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  transform: translate(25%, -50%);
`

export const ThemedModal = {
  Simple({
    isOpen,
    toggleModal,
    children,
    size = 'md',
  }: {
    isOpen: boolean
    toggleModal?: () => void
    children: React.ReactNode
    size?: 'sm' | 'md'
  }) {
    return (
      <ModalWrapper size={size} isOpen={isOpen} onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
        {children}
        <ExitMediumModalButtonWrapper>
          <ExitMediumModal onClick={toggleModal} />
        </ExitMediumModalButtonWrapper>
      </ModalWrapper>
    )
  },
}

export const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${Z_INDEX.modalBackdrop};
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`

const HeaderWrapper = styled(RowBetween)<{ bgColor?: string }>`
  padding: 20px 18px 0;
  padding-bottom: 0;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.almostWhite};
  background-color: ${({ theme, bgColor }) => bgColor ?? theme.color2};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 10px;
    padding-bottom: 0;
    font-size:12px;
  `};
  border-radius: 8px;
`

const Close = styled.div`
  width: 24px;
  height: 24px;
  padding: 3px 6px;
  cursor: pointer;
  margin: -10px -6px 1px 0px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 6px;
  `};
`

const ChevronLeft = styled(ChevronDown)<{
  open: boolean
}>`
  transform: rotate(90deg);
`

export const ModalHeader = ({
  title,
  positionType,
  onClose,
  onBack,
  hideClose,
  bgColor,
  closeModal = false,
}: {
  title?: string
  positionType?: PositionType
  onClose: () => void
  onBack?: () => void
  hideClose?: boolean
  bgColor?: string
  closeModal?: boolean
}) => {
  const theme = useTheme()
  return (
    <HeaderWrapper bgColor={bgColor} backgroundColor={bgColor}>
      {onBack && <ChevronLeft onClick={onBack} />}
      {title &&
        (closeModal ? (
          <ThemedText.CloseModalHeader>
            {title}
            {!positionType ? null : positionType === PositionType.LONG ? (
              <LongArrow width={17} height={13} color={theme.blue} style={{ marginLeft: '10px' }} />
            ) : (
              <ShortArrow width={17} height={13} color={theme.pink} style={{ marginLeft: '10px' }} />
            )}
          </ThemedText.CloseModalHeader>
        ) : (
          <ThemedText.MediumHeader fontSize={18}>
            {title}
            {!positionType ? null : positionType === PositionType.LONG ? (
              <LongArrow width={15} height={12} color={theme.blue} style={{ marginLeft: '10px' }} />
            ) : (
              <ShortArrow width={15} height={12} color={theme.pink} style={{ marginLeft: '10px' }} />
            )}
          </ThemedText.MediumHeader>
        ))}
      {!hideClose && (
        <Close onClick={onClose}>
          <CloseIcon size={12} />
        </Close>
      )}
    </HeaderWrapper>
  )
}
