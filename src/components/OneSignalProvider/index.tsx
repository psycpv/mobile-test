import React, { ReactNode, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSetPushNotification } from 'state/user/hooks'

export default function OneSignalProvider({ children }: { children: ReactNode }) {
  const setPushNotification = useSetPushNotification()
  useEffect(() => {
    window.OneSignalDeferred = window.OneSignalDeferred || []
    window.OneSignalDeferred.push(function (OneSignal: any) {
      OneSignal.init({
        appId: '4f412d26-e5f3-44e2-966e-6ea4c2aa88bf',
        safari_web_id: 'web.onesignal.auto.1f7edc6b-077e-4a04-b244-6d0a0c671761',

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

        if (event.current.id) toast.success(`Push Notification is ${event.current.optedIn ? 'enabled' : 'disabled'}`)
      })
    })
    return () => {
      window.OneSignalDeferred = undefined
    }
  }, [])
  return <>{children}</>
}
