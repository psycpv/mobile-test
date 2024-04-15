import React, { useEffect } from 'react'
import { useSetIsInstalledPWA } from 'state/user/hooks'
import { isIOS, isSafari } from 'mobile-device-detect'
import { toast } from 'react-toastify'

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

  useEffect(() => {
    if (isIOS && !isSafari) toast.info('To install PWA app, we recommend to use Safari Browser.')
  }, [])

  return <></>
}
