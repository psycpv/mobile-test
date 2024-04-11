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
    console.log(
      ('standalone' in window.navigator && window.navigator['standalone'] === true) ||
        window.matchMedia('(display-mode: standalone)').matches
    )
    toast.success(<PwaInstallCard />, {
      icon: false,
      closeButton: false,
      autoClose: 70000,
      className: style.main,
      bodyClassName: style.body,
      progressClassName: style.progressbar,
    })
    setIsInstalledPWA(
      ('standalone' in window.navigator && window.navigator['standalone'] === true) ||
        window.matchMedia('(display-mode: standalone)').matches
    )
    return function () {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPromptEvent)
    }
  }, [setIsInstalledPWA])

  return <>{children}</>
}
