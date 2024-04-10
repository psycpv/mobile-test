import styled from 'styled-components'

import MarketsContent from './MarketsContent'
import { Close as CloseIcon } from 'components/Icons'
import { RowBetween } from 'components/Row'
import { Sidebar } from 'components/Layout/MenuBar'

const SlideModalSidebar = styled(Sidebar)`
  width: 400px;
  overflow: scroll;
  padding: 20px 12px 20px 12px;
  background: ${({ theme }) => theme.color3};
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
  font-size: 1.4rem;
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
  margin-right: -4px;
  margin-top: -20px;
`

export function SlideModal({ isOpen, onDismiss }: { isOpen: boolean; onDismiss: () => void }) {
  return (
    <>
      <Overlay isOpen={isOpen} onClick={onDismiss} />
      <SlideModalSidebar isOpen={isOpen}>
        <TopRow>
          <Title>Currency</Title>
          <Close onClick={onDismiss}>
            <CloseIcon size={12} />
          </Close>
        </TopRow>
        <MarketsContent slideModal onDismiss={onDismiss} />
      </SlideModalSidebar>
    </>
  )
}
