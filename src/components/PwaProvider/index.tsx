import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import { useIsOpenPWAPrompt, useSetIsInstalledPWA, useSetIsOpenPWAPrompt } from 'state/user/hooks'
const PWAPrompt = dynamic(() => import('react-ios-pwa-prompt'), { ssr: false })

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
    />
  ) : null
}
