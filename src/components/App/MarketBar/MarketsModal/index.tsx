import styled from 'styled-components'

import { Card } from 'components/Card'
import { Modal as ModalBody } from 'components/Modal'
import MarketsContent from './MarketsContent'

const InlineModal = styled(Card)<{ isOpen: boolean }>`
  padding: 16px;
  width: clamp(500px, 1050px, 99%);
  max-height: ${({ height }) => height ?? '600px'};
  height: ${({ height }) => height ?? '600px'};
  position: absolute;
  z-index: 200;
  transform: translate(-1px, 29px);
  background: ${({ theme }) => theme.color3};
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
`

const Modal = styled(ModalBody)`
  border: none;
  max-height: 450px;
  height: 450px;
  padding: 0.6rem;
  width: 95%;
  background: ${({ theme }) => theme.color3};
`

export function MarketsModal({
  isModal,
  isOpen,
  openFavorites,
  onDismiss,
}: {
  isModal?: boolean
  isOpen: boolean
  openFavorites?: boolean
  onDismiss: () => void
}) {
  return isModal ? (
    <Modal isOpen={isOpen} onBackgroundClick={onDismiss} onEscapeKeydown={onDismiss}>
      <MarketsContent openFavorites={openFavorites} onDismiss={onDismiss} />
    </Modal>
  ) : (
    <InlineModal isOpen={isOpen}>
      <MarketsContent openFavorites={openFavorites} onDismiss={onDismiss} />
    </InlineModal>
  )
}
