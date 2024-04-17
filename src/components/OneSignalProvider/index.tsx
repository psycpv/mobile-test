import React, { ReactNode, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSetPushNotification } from 'state/user/hooks'

export default function OneSignalProvider({ children }: { children: ReactNode }) {
  const setPushNotification = useSetPushNotification()
  useEffect(() => {
    window.OneSignalDeferred = window.OneSignalDeferred || []
    window.OneSignalDeferred.push(function (OneSignal: any) {
      OneSignal.init({
        appId: '19236199-1935-431a-90ea-9e962953cc27',
        safari_web_id: 'web.onesignal.auto.54cd441e-7f12-4aed-9845-f98eb5c10ecb',

        allowLocalhostAsSecureOrigin: true,
        promptOptions: {
          slidedown: {
            prompts: [
              {
                type: 'push',
                autoPrompt: true,
                text: {
                  actionMessage: "We'd like to show you notifications for the latest news and updates.",
                  acceptButton: 'Allow',
                  cancelButton: 'Cancel',
                },
                delay: {
                  pageViews: 1,
                  timeDelay: 5,
                },
              },
            ],
          },
        },
      })
    })
    window.OneSignalDeferred.push(function (OneSignal: any) {
      OneSignal.User.PushSubscription.addEventListener('change', function (event: any) {
        if (event.current.id && !event.previous.id) setPushNotification(true)

        if (event.current.id && event.previous.id)
          toast.success(`Push Notification is ${event.current.optedIn ? 'enabled' : 'disabled'}`)
      })
    })
    return () => {
      window.OneSignalDeferred = undefined
    }
  }, [])
  return <>{children}</>
}
