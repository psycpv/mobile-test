import { useEffect } from 'react'
import { useTour } from '@reactour/tour'

import { toBN } from 'utils/numbers'
import useTradePage from 'hooks/useTradePage'

import { Step } from 'components/Tour/Step'
import { ExternalLink } from 'components/Link'
import Handshake from 'components/Icons/Handshake'
import styled from 'styled-components'

const Link = styled(ExternalLink)`
  color: ${({ theme }) => theme.almostWhite};
  text-decoration: underline;
`

export default function GuideTour() {
  const { setIsOpen, setSteps, setCurrentStep } = useTour()
  const { balance } = useTradePage()

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

    setSteps([
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
    ])
    setCurrentStep(0)
    setIsOpen(true)
  }, [setSteps, balance])

  return null
}
