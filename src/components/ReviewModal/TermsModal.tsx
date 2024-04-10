import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

import { useGetMessage } from 'hooks/useCheckSign'
import { useSignMessage } from 'callbacks/useSignMessage'
import { useWriteSign } from 'callbacks/useWriteSign'

import { Modal } from 'components/Modal'
import Checkbox from 'components/CheckBox/CheckBoxWithLabel'
import { Close as CloseIcon, DotFlashing } from 'components/Icons'
import { RowCenter, RowStart } from 'components/Row'
import TermButton from 'components/Button/MainButton'
import { ExternalLink } from 'components/Link'
import AnimationLoader from 'components/Animation/AnimationLoader'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  width: 100%;
  padding: 16px 12px;
  padding-bottom: 22px;
  height: 452.5px;
`

const Title = styled(RowStart)`
  padding: 0px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.almostWhite};
`

const ImageWrapper = styled(RowCenter)``

const Close = styled.div`
  position: absolute;
  right: 0px;
  width: 24px;
  height: 24px;
  padding: 3px 6px;
  cursor: pointer;
  margin: 2px 12px 1px 0px;
`

const AcceptRiskWrapper = styled.div`
  display: flex;
  height: 48px;
  margin-bottom: 16px;
  padding-left: 25px;
  background-color: ${({ theme }) => theme.color3};
  border-radius: 6px;
`

const TermsText = styled.span`
  margin-left: 4px;
  text-decoration: underline;
  color: ${({ theme }) => theme.blue};
`

export default function TermsModal({ isOpen = true, onDismiss }: { isOpen?: boolean; onDismiss: () => void }) {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false)
  const [tosLoaded, setTosLoaded] = useState(true)

  return (
    <Modal isOpen={isOpen} onBackgroundClick={onDismiss} onEscapeKeydown={onDismiss}>
      <Wrapper>
        <Title>
          Terms of Service
          <Close onClick={onDismiss}>
            {' '}
            <CloseIcon size={12} style={{ marginRight: '12px' }} />
          </Close>
        </Title>

        <ImageWrapper height={283.5}>
          <AnimationLoader name={'TOS'} />
        </ImageWrapper>
        <AcceptRiskWrapper>
          <Checkbox
            name={'user-accept-risk'}
            id={'user-accept-risk'}
            label={
              <div>
                I agree with
                <ExternalLink href="https://docs.based.markets/brand-assets/terms-of-services">
                  <TermsText>Terms of Service</TermsText>
                </ExternalLink>
              </div>
            }
            checked={isTermsAccepted}
            onChange={() => setIsTermsAccepted((prevValue) => !prevValue)}
          />
        </AcceptRiskWrapper>
        <ActionButton isTermsAccepted={isTermsAccepted} />
      </Wrapper>
    </Modal>
  )
}

function ActionButton({ isTermsAccepted }: { isTermsAccepted: boolean }) {
  const [signature, setSignature] = useState('')
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false)

  const message = useGetMessage()
  const { callback: signMessageCallback } = useSignMessage(message)
  const { callback: writeSignCallback } = useWriteSign()

  const onSignMessage = useCallback(async () => {
    if (!signMessageCallback) return
    try {
      const sign = await signMessageCallback()
      return sign
    } catch (e) {
      if (e instanceof Error) {
        console.error(e)
      } else {
        console.debug(e)
      }
      throw new Error(e.message)
    }
  }, [signMessageCallback])

  const onWriteSignCb = useCallback(
    async (sign: string) => {
      if (!writeSignCallback || !sign) return
      try {
        await writeSignCallback(sign)
      } catch (e) {
        if (e instanceof Error) {
          console.error(e)
        } else {
          console.debug(e)
        }
      }
      setAwaitingConfirmation(false)
    },
    [writeSignCallback]
  )

  const onClickButton = useCallback(async () => {
    if (isTermsAccepted) {
      setAwaitingConfirmation(true)

      if (!signature) {
        onSignMessage()
          .then((sign) => {
            if (sign) {
              setSignature(sign)
              onWriteSignCb(sign)
            }
          })
          .catch(() => {
            setAwaitingConfirmation(false)
          })
      } else {
        onWriteSignCb(signature)
      }
    }
  }, [isTermsAccepted, onSignMessage, onWriteSignCb, signature])

  return (
    <TermButton
      disabled={awaitingConfirmation || !isTermsAccepted}
      customText={'Sign'}
      onClick={onClickButton}
      simpleMode
    >
      {awaitingConfirmation && <DotFlashing />}
    </TermButton>
  )
}
