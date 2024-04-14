import React from 'react'
import styled, { useTheme } from 'styled-components'
import MainButton from 'components/Button/MainButton'
import { useIsMobile } from 'lib/hooks/useWindowSize'
import { useSetIsInstalledPWA } from 'state/user/hooks'
import { toast } from 'react-toastify'

const Container = styled.div<{ isMobile: boolean }>`
  background: ${({ theme }) => theme.pwaBgPink};
  width: 100%;
  height: 135px;
  font-size: 16px;
`

const BgImageContainer = styled.div`
  background: url(/static/images/menu/pwa-bg.png) no-repeat;
  padding: 20px;
`

const Label = styled.div`
  color: white;
  padding-bottom: 20px;
  line-height: 22px;
`

const ActionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`

export default function PwaInstallCard() {
  const { pink, darkPink, brilliantLavender } = useTheme()
  const isMobile = useIsMobile()
  const setIsInstalledPWA = useSetIsInstalledPWA()
  function handleInstall() {
    window.deferredprompt
      .prompt()
      .then(() => window.deferredprompt.userChoice)
      .then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          toast.success('PWA native installation succesful')
          setIsInstalledPWA(true)
        } else {
          toast.error('User opted out by cancelling native installation')
        }
      })
      .catch((err: any) => {
        alert('Error occurred in the installing process: ' + err)
      })
  }

  return (
    <Container isMobile={isMobile}>
      <BgImageContainer>
        <Label>Get our PWA with one click for a faster and smoother experience</Label>
        <ActionContainer>
          <MainButton
            bgColor={pink}
            borderColor={darkPink}
            hoverColor={brilliantLavender}
            height={35}
            width={80}
            simpleMode
            style={{
              textAlign: 'right',
            }}
            onClick={handleInstall}
          >
            Install
          </MainButton>
        </ActionContainer>
      </BgImageContainer>
    </Container>
  )
}
