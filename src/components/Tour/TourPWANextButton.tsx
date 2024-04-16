import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import AnimatedButton from 'components/Button/MainButton'
import useIsIOS from 'hooks/useIsIOS'
import { toast } from 'react-toastify'
import { useSetIsOpenPWAPrompt } from 'state/user/hooks'

const ButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`

// eslint-disable-next-line @typescript-eslint/ban-types
export default function TourPWANextButton({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<Boolean>> }) {
  const isIOS = useIsIOS()
  const setIsOpenPWAPrompt = useSetIsOpenPWAPrompt()
  return (
    <ButtonWrapper>
      <AnimatedButton
        onClick={() => {
          return setIsOpenPWAPrompt(true)
          if (isIOS)
            window.deferredprompt
              .prompt()
              .then(() => window.deferredprompt.userChoice)
              .then((choiceResult: any) => {
                if (choiceResult.outcome === 'accepted') {
                  toast.success('PWA native installation succesful')
                } else {
                  toast.error('User opted out by cancelling native installation')
                }
              })
              .catch((err: any) => {
                toast.success('Error occurred in the installing process: ' + err)
              })
          else setIsOpenPWAPrompt(true)

          setIsOpen(false)
        }}
        simpleMode
        customText="Install PWA"
      />
    </ButtonWrapper>
  )
}
