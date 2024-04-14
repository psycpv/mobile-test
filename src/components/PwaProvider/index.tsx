import React, { useEffect } from 'react'
import { useSetIsInstalledPWA } from 'state/user/hooks'

function handleBeforeInstallPromptEvent(event: any) {
  event.preventDefault()
  window.deferredprompt = event
}
export default function PwaProvider() {
  const setIsInstalledPWA = useSetIsInstalledPWA()
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPromptEvent)
    // @ts-ignore: Property 'standalone' does not exist on type 'Navigator'.
    const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches
    setIsInstalledPWA(isStandalone)

    return function () {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPromptEvent)
    }
  }, [setIsInstalledPWA])

  return <></>
}
