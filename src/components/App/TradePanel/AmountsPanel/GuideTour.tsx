import { SetStateAction, useEffect } from 'react'
import { StepType, useTour } from '@reactour/tour'

import useTradePage from 'hooks/useTradePage'
import { toBN } from 'utils/numbers'

import { Step } from 'components/Tour/Step'
import { ExternalLink } from 'components/Link'
import Handshake from 'components/Icons/Handshake'
import styled from 'styled-components'
import { useIsMobile } from 'lib/hooks/useWindowSize'
import { useIsInstalledPWA } from 'state/user/hooks'

const Link = styled(ExternalLink)`
  color: ${({ theme }) => theme.almostWhite};
  text-decoration: underline;
`

export default function GuideTour() {
  const { setIsOpen, setSteps, setCurrentStep } = useTour()
  const { balance } = useTradePage()
  const isMobile = useIsMobile()
  const isInstalledPWA = useIsInstalledPWA()

  useEffect(() => {
    if (!setSteps) {
      return
    }

    if (toBN(balance).lte(0)) {
      return
    }

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

    if (isMobile && !isInstalledPWA)
      steps.push({
        selector: '.tour-step-6',
        content: <Step title="Setup PWA" content="Get our PWA with one click for a faster and smoother experience" />,
        position: 'center',
        highlightedSelectors: [],
      })

    setSteps(steps)
    setCurrentStep(0)
    setIsOpen(true)
  }, [setSteps, balance, isMobile, setCurrentStep, setIsOpen, isInstalledPWA])

  return null
}
