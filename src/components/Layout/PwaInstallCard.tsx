import React from 'react'
import styled, { useTheme } from 'styled-components'
import MainButton from 'components/Button/MainButton'
import { useIsMobile } from 'lib/hooks/useWindowSize'
import { useSetIsInstalledPWA } from 'state/user/hooks'
import { toast } from 'react-toastify'

const Wrapper = styled.div<{ isMobile: boolean }>`
  background: ${({ theme }) => theme.pwaBgPink};
  width: 100%;
  height: 135px;
  padding: 20px;
  font-size: 16px;
`

const BgImage = styled.div`
  background: url(/static/images/menu/pwa-bg.png);
  width: 162px;
  height: 135px;
  position: absolute;
  top: 0;
  left: 0;
`

const Desc = styled.div`
  color: white;
  padding-bottom: 20px;
  line-height: 22px;
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
    <Wrapper isMobile={isMobile}>
      <BgImage />
      <Desc>Get our PWA with one click for a faster and smoother experience</Desc>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
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
      </div>
    </Wrapper>
  )
}
