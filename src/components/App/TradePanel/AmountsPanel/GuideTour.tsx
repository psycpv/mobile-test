import { SetStateAction, useEffect } from 'react'
import { StepType, useTour } from '@reactour/tour'

import useTradePage from 'hooks/useTradePage'

import { Step } from 'components/Tour/Step'
import { ExternalLink } from 'components/Link'
import Handshake from 'components/Icons/Handshake'
import styled from 'styled-components'
import { useIsMobile } from 'lib/hooks/useWindowSize'
import IOSShare from '/public/static/images/Share.svg'
import HomeScreen from '/public/static/images/HomeScreen.svg'
import Image from 'next/image'
import { isIOS, isSafari } from 'mobile-device-detect'

const Link = styled(ExternalLink)`
  color: ${({ theme }) => theme.almostWhite};
  text-decoration: underline;
`

const IconParagraph = styled.div`
  display: flex;
  padding: 5px 0;
  gap: 8px;
  align-items: center;
`

export default function GuideTour() {
  const { setIsOpen, setSteps, setCurrentStep } = useTour()
  const { balance } = useTradePage()
  const isMobile = useIsMobile()

  useEffect(() => {
    if (!setSteps) {
      return
    }

    // if (toBN(balance).lte(0)) {
    //   return
    // }

    if (localStorage.getItem('tour-part4') === 'done') {
      return
    }

    localStorage.setItem('tour-part1', 'done')
    localStorage.setItem('tour-part2', 'done')
    localStorage.setItem('tour-part3', 'done')
    localStorage.setItem('tour-part4', 'done')

    const steps: SetStateAction<StepType[]> = [
      {
        selector: '.tour-step-5',
        content: (
          <Step
            title="Ready to Trade!"
            content={
              <div>
                For more info about Vibe Trading, please see our{' '}
                <Link href={'https://docs.based.markets/'} target="_blank" rel="noreferrer">
                  documentation
                </Link>
              </div>
            }
            icon={<Handshake size={20} />}
          />
        ),
        position: 'center',
        highlightedSelectors: [],
      },
    ]

    // if (isMobile)
    steps.push({
      selector: '.tour-step-6',
      content: (
        <Step
          title="Setup PWA"
          content={
            isIOS ? (
              isSafari ? (
                <div>
                  <div>To install PWA app</div>
                  <br />
                  <IconParagraph>
                    <Image src={IOSShare} alt="ios share icon" width={20} height={20} />
                    <div>1) Press the &apos;Share&apos; button on the menu bar.</div>
                  </IconParagraph>
                  <IconParagraph>
                    <Image src={HomeScreen} alt="ios share icon" width={20} height={20} />
                    <div>2) Press &apos;Add to Home Screen&apos;.</div>
                  </IconParagraph>
                </div>
              ) : (
                "Open safari for best experience with pwa' something like for chrome."
              )
            ) : (
              'Get our PWA with one click for a faster and smoother experience'
            )
          }
        />
      ),
      position: 'center',
      highlightedSelectors: [],
    })

    setSteps(steps)
    setCurrentStep(0)
    setIsOpen(true)
  }, [setSteps, balance, isMobile, setCurrentStep, setIsOpen])

  return null
}
