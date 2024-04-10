import { Provider as ReduxProvider } from 'react-redux'
import { ModalProvider } from 'styled-react-modal'
import { toast } from 'react-toastify'
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'
import { BlockNumberProvider } from 'lib/hooks/useBlockNumber'
import { TourProvider } from '@reactour/tour'

import store, { persistor } from 'state'

import ThemeProvider, { ThemedGlobalStyle } from 'theme'
import Popups from 'components/Popups'
import Layout from 'components/Layout'
import { ModalBackground } from 'components/Modal'
import { PersistGate } from 'redux-persist/integration/react'
import { Close as CloseIcon } from 'components/Icons'
import AnimatedButton from 'components/Button/MainButton'
import styled from 'styled-components'
import 'styles/custom-font.css'
import { useEffect } from 'react'
import Head from 'next/head'

const Close = styled.div`
  width: 24px;
  height: 24px;
  padding: 3px 6px;
  cursor: pointer;
  margin: 2px 2px 1px 0px;
`

const ButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`

const Updaters = dynamic(() => import('state/updaters'), { ssr: false })
const Web3Provider = dynamic(() => import('components/Web3Provider'), {
  ssr: false,
})

if (typeof window !== 'undefined' && !!window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false
}

declare global {
  interface Window {
    OneSignalDeferred: any
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('Service worker registration successful: ', registration)
        })
        .catch((error) => {
          console.error('Service worker registration failed:', error)
        })
    }
  }, [])
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
                type: 'push', // current types are "push" & "category"
                autoPrompt: true,
                text: {
                  /* limited to 90 characters */
                  actionMessage: "We'd like to show you notifications for the latest news and updates.",
                  /* acceptButton limited to 15 characters */
                  acceptButton: 'Allow',
                  /* cancelButton limited to 15 characters */
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
        if (event.current.id) toast.error(`Notification is ${event.current.optedIn ? 'enabled' : 'disabled'}`)
      })
    })
    return () => {
      window.OneSignalDeferred = undefined
    }
  }, [])
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
      </Head>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Web3Provider>
            <ThemeProvider>
              <TourProvider
                steps={[]}
                showDots={false}
                showBadge={false}
                showCloseButton={true}
                disableInteraction={true}
                disableKeyboardNavigation={true}
                styles={{
                  popover: (base) => ({
                    ...base,
                    padding: '10px',
                    background: '#16182C',
                    border: '1px solid #8D90B5',
                    width: '400px',
                    maxWidth: '400px',
                    borderRadius: '4px',
                  }),
                }}
                components={{
                  Close: (onClick) => (
                    <Close
                      onClick={() => (onClick && onClick.onClick ? onClick.onClick() : null)}
                      style={{ float: 'right' }}
                    >
                      <CloseIcon size={12} />
                    </Close>
                  ),
                }}
                onClickHighlighted={(e, clickProps) => {
                  clickProps.setIsOpen(false)
                }}
                onClickMask={(clickProps) => {
                  //..
                }}
                prevButton={({ Button, currentStep, stepsLength, setIsOpen, setCurrentStep, steps }) => {
                  if (steps && steps[currentStep].selector === '.tour-step-5') {
                    return
                  }

                  return (
                    <div
                      onClick={() => {
                        localStorage.setItem('tour-part1', 'done')
                        localStorage.setItem('tour-part2', 'done')
                        localStorage.setItem('tour-part3', 'done')
                        localStorage.setItem('tour-part4', 'done')
                        setIsOpen(false)
                      }}
                      style={{
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        color: '#F1F1F1',
                        position: 'absolute',
                        left: 'calc(50% - 45px)',
                        bottom: '9px',
                        fontSize: '12px',
                        textDecoration: 'underline',
                      }}
                    >
                      Skip Walkthrough
                    </div>
                  )
                }}
                nextButton={({ Button, currentStep, stepsLength, setIsOpen, setCurrentStep, steps }) => {
                  const last = currentStep === stepsLength - 1

                  if (last) {
                    return (
                      <ButtonWrapper>
                        <AnimatedButton onClick={() => setIsOpen(false)} simpleMode customText={'Continue'} />
                      </ButtonWrapper>
                    )
                  }

                  return (
                    <ButtonWrapper>
                      <AnimatedButton
                        onClick={() => {
                          setCurrentStep((s) => (s === (steps?.length || 1) - 1 ? 0 : s + 1))
                        }}
                        simpleMode
                        customText={'Continue'}
                      />
                    </ButtonWrapper>
                  )
                }}
              >
                <ThemedGlobalStyle />
                <ModalProvider backgroundComponent={ModalBackground}>
                  <BlockNumberProvider>
                    <Popups />
                    <Updaters />
                    <Layout>
                      <Component {...pageProps} />
                    </Layout>
                  </BlockNumberProvider>
                </ModalProvider>
              </TourProvider>
            </ThemeProvider>
          </Web3Provider>
        </PersistGate>
      </ReduxProvider>
    </>
  )
}
