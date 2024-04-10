import styled from 'styled-components'

import { PopupContent } from 'state/application/reducer'
import NotificationPopup from './NotificationPopup'
import TransactionPopup from './TransactionPopup'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`
export default function PopupItem({ content }: { content: PopupContent }) {
  return (
    <Wrapper>
      {'txn' in content && <TransactionPopup content={content} />}
      {'quoteId' in content && <NotificationPopup content={content} />}
    </Wrapper>
  )
}
