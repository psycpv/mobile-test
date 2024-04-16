import { Provider as ReduxProvider } from 'react-redux'
import { ModalProvider } from 'styled-react-modal'
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
import OneSignalProvider from 'components/OneSignalProvider'
import PwaProvider from 'components/PwaProvider'
import { toast } from 'react-toastify'
import { isIOS, isMobile } from 'mobile-device-detect'

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
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
      </Head>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <OneSignalProvider>
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
                    if (
                      steps &&
                      (steps[currentStep].selector === '.tour-step-5' || steps[currentStep].selector === '.tour-step-6')
                    ) {
                      return
                    }

                    return (
                      <div
                        onClick={() => {
                          localStorage.setItem('tour-part1', 'done')
                          localStorage.setItem('tour-part2', 'done')
                          localStorage.setItem('tour-part3', 'done')
                          localStorage.setItem('tour-part4', 'done')
                          if (isMobile) {
                            setCurrentStep(2)
                          } else {
                            setIsOpen(false)
                          }
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
                      if (steps && steps[currentStep].selector === '.tour-step-6') {
                        return (
                          <ButtonWrapper>
                            <AnimatedButton
                              onClick={() => {
                                if (!isIOS)
                                  window.deferredprompt
                                    .prompt()
                                    .then(() => window.deferredprompt.userChoice)
                                    .then((choiceResult: any) => {
                                      if (choiceResult.outcome === 'accepted') {
                                        toast.success('PWA native installation succesful')
                                      } else {
                                        toast.error('User opted out by cancelling native installation')
                                      }
                                    })
                                    .catch((err: any) => {
                                      toast.success('Error occurred in the installing process: ' + err)
                                    })

                                setIsOpen(false)
                              }}
                              simpleMode
                              customText={isIOS ? 'Finish' : 'Install PWA'}
                            />
                          </ButtonWrapper>
                        )
                      } else {
                        return (
                          <ButtonWrapper>
                            <AnimatedButton onClick={() => setIsOpen(false)} simpleMode customText={'Continue'} />
                          </ButtonWrapper>
                        )
                      }
                    }
                    return (
                      <ButtonWrapper>
                        <AnimatedButton
                          onClick={() => {
                            if (steps && steps[currentStep].selector === '.tour-step-2') setIsOpen(false)
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
                      <PwaProvider />
                      <Layout>
                        <Component {...pageProps} />
                      </Layout>
                    </BlockNumberProvider>
                  </ModalProvider>
                </TourProvider>
              </ThemeProvider>
            </Web3Provider>
          </OneSignalProvider>
        </PersistGate>
      </ReduxProvider>
    </>
  )
}
