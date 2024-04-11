import PwaInstallCard from 'components/Layout/PwaInstallCard'
import React, { ReactNode, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSetIsInstalledPWA } from 'state/user/hooks'
import style from './pwa.module.css'

function handleBeforeInstallPromptEvent(event: any) {
  event.preventDefault()
  window.deferredprompt = event
}
export default function PwaProvider({ children }: { children: ReactNode }) {
  const setIsInstalledPWA = useSetIsInstalledPWA()
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPromptEvent)
    toast.success(<PwaInstallCard />, {
      icon: false,
      closeButton: false,
      autoClose: 70000,
      className: style.main,
      bodyClassName: style.body,
      progressClassName: style.progressbar,
    })
    // @ts-ignore: Property 'standalone' does not exist on type 'Navigator'.
    setIsInstalledPWA(window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches)
    return function () {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPromptEvent)
    }
  }, [setIsInstalledPWA])

  return <>{children}</>
}
