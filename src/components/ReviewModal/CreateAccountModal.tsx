import React from 'react'
import styled from 'styled-components'

import { Modal } from 'components/Modal'
import CreateAccount from 'components/App/AccountData/CreateAccount'
import { ApplicationModal } from 'state/application/reducer'
import { useCreateAccountModalToggle, useModalOpen } from 'state/application/hooks'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  width: 100%;
`

export default function CreateAccountModal() {
  const showCreateAccountModal = useModalOpen(ApplicationModal.CREATE_ACCOUNT)
  const toggleCreateAccountModal = useCreateAccountModalToggle()
  return (
    <Modal
      isOpen={showCreateAccountModal}
      onBackgroundClick={toggleCreateAccountModal}
      onEscapeKeydown={toggleCreateAccountModal}
    >
      <Wrapper>
        <CreateAccount onClose={toggleCreateAccountModal} isModal={true} />
      </Wrapper>
    </Modal>
  )
}
