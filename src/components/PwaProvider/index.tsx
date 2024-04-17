import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useIsOpenPWAPrompt, useSetIsInstalledPWA, useSetIsOpenPWAPrompt } from 'state/user/hooks'
import styled from 'styled-components'
const PWAPrompt = dynamic(() => import('react-ios-pwa-prompt'), { ssr: false })

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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
    <PWAPrompt
      onClose={() => {
        setIsOpenPWAPrompt(false)
        localStorage.removeItem('iosPwaPrompt')
      }}
      copyTitle={
        <Title>
          <Image src="/images/192x192_App_Icon.png" alt="app icon" width={40} height={40} />
          <div>Add to Home Screen</div>
        </Title>
      }
    />
  ) : null
}
