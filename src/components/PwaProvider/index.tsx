import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useIsOpenPWAPrompt, useSetIsInstalledPWA, useSetIsOpenPWAPrompt } from 'state/user/hooks'
import styled from 'styled-components'
const PWAPrompt = dynamic(() => import('react-ios-pwa-prompt'), { ssr: false })

const PWAPromptContainer = styled.div`
  & > {
    .iOSPWA-description-copy,
    .iOSPWA-title,
    .iOSPWA-step1-copy,
    .iOSPWA-step2-copy,
    .iOSPWA-step2-icon {
      color: #131313 !important;
    }

    @media (prefers-color-scheme: dark) {
      .iOSPWA-description-copy,
      .iOSPWA-title,
      .iOSPWA-step1-copy,
      .iOSPWA-step2-copy,
      .iOSPWA-step2-icon {
        color: #fcfcfc !important;
      }
      .iOSPWA-container {
        background-color: #1d1d1d !important;
      }
    }
  }
`

const Title = styled.div`
  display: flex;
  align-items: center;
  & > div {
    padding-left: 8px;
  }
`

function handleBeforeInstallPromptEvent(event: any) {
  event.preventDefault()
  window.deferredprompt = event
}
export default function PwaProvider() {
  const setIsInstalledPWA = useSetIsInstalledPWA()
  const setIsOpenPWAPrompt = useSetIsOpenPWAPrompt()
  const isOpenPWAPrompt = useIsOpenPWAPrompt()
  useEffect(() => {
    // @ts-ignore: Property 'standalone' does not exist on type 'Navigator'.
    const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches
    setIsInstalledPWA(isStandalone)
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPromptEvent)

    return function () {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPromptEvent)
    }
  }, [setIsInstalledPWA])

  return isOpenPWAPrompt ? (
    <PWAPromptContainer>
      <PWAPrompt
        onClose={() => {
          setIsOpenPWAPrompt(false)
          localStorage.removeItem('iosPwaPrompt')
        }}
        copyTitle={
          <Title>
            <Image src="/images/192x192_App_Icon.png" alt="app icon" width={40} height={40} />
            <div>Install Vibe Trading App</div>
          </Title>
        }
      />
    </PWAPromptContainer>
  ) : null
}
