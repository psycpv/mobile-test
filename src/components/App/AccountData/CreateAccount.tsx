import { useCallback, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useTour } from '@reactour/tour'
import Image from 'next/image'

import { WEB_SETTING } from 'config'
import { truncateAddress } from 'utils/address'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

import { useAddAccountToContract } from 'callbacks/useMultiAccount'
import { useIsTermsAccepted } from 'state/user/hooks'
import { useCreateAccountModalToggle } from 'state/application/hooks'

import Column from 'components/Column'
import { Row, RowCenter, RowEnd, RowStart } from 'components/Row'
import { Client, Close as CloseIcon, DotFlashing, Wallet } from 'components/Icons'
import { Step } from 'components/Tour/Step'
import TermsAndServices from 'components/TermsAndServices'
import MainButton from 'components/Button/MainButton'
import Checkbox from 'components/CheckBox/CheckBoxWithLabel'
import { sendEvent } from 'components/Analytics'
import { Input } from 'components/App/MarketBar/InputField'
import CreateAccountIcon from 'components/Icons/CreateAccount'

const Wrapper = styled.div<{ modal?: boolean }>`
  width: 100%;
  min-height: 379px;
  background: ${({ theme }) => theme.color2};
  ${({ theme }) => theme.mediaWidth.upToLarge`
    width: 100%;
  `};
  border-radius: 8px;
`

const Title = styled(RowStart)`
  padding: 12px;
  font-weight: 500;
  font-size: 18px;
  line-height: 19px;
  color: ${({ theme }) => theme.almostWhite};
`

const ContentWrapper = styled(Column)`
  padding: 0px 12px 18px 12px;
  position: relative;
`

export const DepositButtonWrapper = styled.div`
  padding: 1px;
  height: 40px;
  margin-top: 10px;
  width: unset;
  background: ${({ theme }) => theme.border1};
`

export const DepositButton = styled(RowCenter)<{ disabled?: boolean }>`
  flex-wrap: nowrap;
  height: 100%;
  background: ${({ theme }) => theme.gradLight};

  &:focus,
  &:hover,
  &:active {
    cursor: ${({ disabled }) => !disabled && 'pointer'};
    background: ${({ theme }) => theme.hoverGradLight};
  }
`

export const DepositButtonLabel = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.text0};
`

const AccountWrapper = styled(Row)`
  height: 40px;
  margin-bottom: 16px;
  padding: 10px 12px;
  font-weight: 500;
  font-size: 14px;

  background: ${({ theme }) => theme.color3};
  color: ${({ theme }) => theme.almostWhite};
  border-radius: 6px;
`

const AccountWrapper_ = styled(Row)`
  height: 40px;
  margin-bottom: 20px;
  padding: 10px 12px;
  font-weight: 500;
  font-size: 12px;

  color: ${({ theme }) => theme.almostWhite};
  border-radius: 6px;
`

const AccountNameWrapper = styled(AccountWrapper)`
  background: ${({ theme }) => theme.color3};
  color: ${({ theme }) => theme.inactiveText};
  border-radius: 6px;
`

const AccountNameWrapper_ = styled(AccountWrapper_)`
  color: ${({ theme }) => theme.almostWhite};
  border-radius: 6px;
`

const AccountNameInput = styled(Input)`
  width: 90%;
  font-size: 14px;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      font-size: 0.6rem;
    `}
`

const ImageWrapper = styled(RowCenter)<{ onClose?: () => void }>`
  margin-bottom: ${({ onClose }) => (onClose ? '6px' : '18px')};
  margin-top: ${({ onClose }) => (onClose ? '' : '24px')};
`

const Close = styled.div`
  width: 24px;
  height: 24px;
  padding: 3px 6px;
  cursor: pointer;
  margin: 2px 12px 1px 0px;
`

const DescriptionText = styled.div`
  font-size: 11px;
  text-align: start;

  color: ${({ theme }) => theme.pink};
`

const AcceptRiskWrapper = styled.div`
  display: flex;
  height: 48px;
  padding-left: 12px;
  border-radius: 6px;
`

const Label = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.coolGrey};
  width: max-content;
`

const ContentText = styled.div`
  font-size: 18px;
`

const flashAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    display: none;
  }
`

const FlashElement = styled(RowCenter)`
  position: absolute;
  top: calc(50% - 50vh);
  left: calc(50% - 50vw);
  width: 200vw;
  height: calc(100vh + 150.5px);
  background-color: white;
  opacity: 1;
  z-index: 10000000000000;
  animation: ${flashAnimation} 0.5s;
`

export default function CreateAccount({ onClose, isModal }: { onClose?: () => void; isModal?: boolean }) {
  const { account } = useActiveWeb3React()
  const [name, setName] = useState('')
  const [showTerms, setShowTerms] = useState(false)
  const [, setTxHash] = useState('')
  const isTermsAccepted = useIsTermsAccepted()
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false)
  const { callback: addAccountToContractCallback } = useAddAccountToContract(name)
  const { setIsOpen, setSteps, setCurrentStep } = useTour()
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [riskAccepted, setRiskAccepted] = useState(false)
  const [isFlashVisible, setIsFlashVisible] = useState(false)
  const toggleCreateAccountModal = useCreateAccountModalToggle()

  useEffect(() => {
    if (!setSteps) {
      return
    }

    if (localStorage.getItem('tour-part2') === 'done') {
      return
    }

    localStorage.setItem('tour-part1', 'done')
    localStorage.setItem('tour-part2', 'done')

    setSteps([
      {
        selector: '.tour-step-3',
        content: (
          <Step
            title="Step 2: Create Account"
            subTitle="Create an account to continue."
            content="You can create multiple accounts to separate your trading funds."
            icon={<CreateAccountIcon size={16} />}
          />
        ),
      },
    ])
    setCurrentStep(0)
    setIsOpen(true)
  }, [setSteps])

  const onAddAccount = useCallback(async () => {
    if (!addAccountToContractCallback) return
    try {
      setAwaitingConfirmation(true)
      const txHash = await addAccountToContractCallback()
      console.log({ txHash })
      setTxHash(txHash)
      setAwaitingConfirmation(false)
      onClose && onClose()
    } catch (e) {
      if (e instanceof Error) {
        console.error(e)
      } else {
        console.debug(e)
      }
    }
    setAwaitingConfirmation(false)
  }, [addAccountToContractCallback, onClose])

  const onConfirmAccount = () => {
    setIsConfirmed(true)
    localStorage.setItem('risk_warning', 'true')
    sendEvent('click', { click_type: 'close_notification', click_action: 'risk_warning' })

    setIsFlashVisible(true)
    setTimeout(() => {
      setIsFlashVisible(false)
    }, 400)

    const audioElement = new Audio('/static/audio/camera-flash.mp3')
    audioElement.play()
  }

  function getActionButton() {
    if (!onClose) {
      return <MainButton onClick={toggleCreateAccountModal} simpleMode customText={'Create Account'} />
    }

    if (awaitingConfirmation) {
      return (
        <MainButton customText="Awaiting Confirmation" simpleMode>
          <DotFlashing />
        </MainButton>
      )
    }

    if (!isConfirmed) {
      return (
        <>
          <MainButton
            onClick={() => name !== '' && onConfirmAccount()}
            customText={name === '' ? 'Enter account name' : 'Create Account'}
            simpleMode
            disabled={name === '' || !riskAccepted}
          />
        </>
      )
    }

    return (
      <MainButton
        onClick={() => (WEB_SETTING.showSignModal && !isTermsAccepted ? setShowTerms(true) : onAddAccount())}
        customText={name === '' ? 'Enter account name' : !isTermsAccepted ? 'Continue' : 'Sign'}
        simpleMode
      />
    )
  }

  return (
    <Wrapper modal={onClose ? true : false} className="tour-step-3">
      {!showTerms && (
        <>
          <Row>
            {isModal && <Title>Create Account</Title>}
            <RowEnd>
              {isModal && (
                <Close onClick={onClose}>
                  {' '}
                  <CloseIcon size={12} style={{ marginRight: '12px' }} />
                </Close>
              )}
            </RowEnd>
          </Row>
          <ContentWrapper>
            <ImageWrapper onClose={onClose}>
              <Image
                src={`/static/images/etc/${isConfirmed ? 'IDcard2.svg' : 'IDcard1.svg'}`}
                alt="based-tableau"
                width={401}
                height={269}
              />
            </ImageWrapper>
            {!isConfirmed && isModal && (
              <>
                <AccountWrapper>
                  {account && truncateAddress(account)}
                  <RowEnd>
                    <Wallet />
                  </RowEnd>
                </AccountWrapper>
                <AccountNameWrapper>
                  <AccountNameInput
                    autoFocus
                    type="text"
                    placeholder={'Account Name'}
                    spellCheck="false"
                    onBlur={() => null}
                    value={name}
                    minLength={1}
                    maxLength={20}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                    rows={1}
                    cols={3}
                  />
                  <RowEnd width={'10%'}>
                    <Client />
                  </RowEnd>
                </AccountNameWrapper>
              </>
            )}
            {isConfirmed && isModal && (
              <>
                <AccountWrapper_>
                  <Column>
                    <Label>Wallet Address:</Label>
                    <ContentText>{account && truncateAddress(account)}</ContentText>
                  </Column>
                  <RowEnd>
                    <Wallet />
                  </RowEnd>
                </AccountWrapper_>
                <AccountNameWrapper_>
                  <Column>
                    <Label>Account Name:</Label>
                    <ContentText>{name}</ContentText>
                  </Column>
                  <RowEnd>
                    <Client />
                  </RowEnd>
                </AccountNameWrapper_>
              </>
            )}
            {!isConfirmed && isModal && (
              <>
                <DescriptionText>{`Your account name is stored on-chain and is visible to other users.`}</DescriptionText>
                <AcceptRiskWrapper>
                  <Checkbox
                    checked={riskAccepted}
                    onChange={() => setRiskAccepted(!riskAccepted)}
                    label={'Users interacting with this software do so at their own risk'}
                  />
                </AcceptRiskWrapper>
              </>
            )}
            {getActionButton()}
          </ContentWrapper>
        </>
      )}
      {showTerms ? <TermsAndServices onDismiss={() => setShowTerms(false)} /> : null}
      {isFlashVisible && <FlashElement></FlashElement>}
    </Wrapper>
  )
}
