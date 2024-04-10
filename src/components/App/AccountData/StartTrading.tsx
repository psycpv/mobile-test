import { useEffect } from 'react'
import styled, { useTheme } from 'styled-components'
import { useTour } from '@reactour/tour'

import { COLLATERAL_TOKEN } from 'constants/tokens'
import { getTokenWithFallbackChainId } from 'utils/token'

import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'
import { ApplicationModal } from 'state/application/reducer'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useDepositModalToggle, useModalOpen } from 'state/application/hooks'

import DepositModal from 'components/ReviewModal/DepositModal'
import { Step } from 'components/Tour/Step'
import AnimatedButton from 'components/Button/MainButton'
import AnimationLoader from 'components/Animation/AnimationLoader'
import Image from 'next/image'
import USDCIcon from '/public/static/images/tokens/USDC.svg'
import Download2 from 'components/Icons/Download2'

const Wrapper = styled.div`
  border: none;
  width: 100%;
  min-height: 379px;
  background: ${({ theme }) => theme.color2};
  ${({ theme }) => theme.mediaWidth.upToLarge`
    width: 100%;
  `};
`

const ContentWrapper = styled.div`
  display: flex;
  padding: 12px;
  flex-flow: column nowrap;
  position: relative;
`

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  margin: 0 auto;
  margin-top: -10px;
  margin-bottom: 30px;
  width: 300px;
  height: 220px;
`

const DepositText = styled.div`
  font-size: 14px;
  text-align: center;
  margin-bottom: 37px;

  color: ${({ theme }) => theme.pink};
`

const TourImageWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding: 0px 4px;
`

export default function StartTrading({ symbol }: { symbol?: string }) {
  const { chainId } = useActiveWeb3React()
  const showDepositModal = useModalOpen(ApplicationModal.DEPOSIT)
  const toggleDepositModal = useDepositModalToggle()
  const { setIsOpen, setSteps, setCurrentStep } = useTour()
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)
  const logo = useCurrencyLogo(collateralCurrency?.symbol)
  const theme = useTheme()

  useEffect(() => {
    if (!setSteps) {
      return
    }

    if (localStorage.getItem('tour-part3') === 'done') {
      return
    }

    localStorage.setItem('tour-part1', 'done')
    localStorage.setItem('tour-part2', 'done')
    localStorage.setItem('tour-part3', 'done')

    setSteps([
      {
        selector: '.tour-step-4',
        content: (
          <Step
            title="Step 3: Deposit Funds"
            content={
              <div>
                Deposit{' '}
                <TourImageWrapper>
                  <Image width={20} src={USDCIcon} />
                </TourImageWrapper>
                USDC in your account to begin your trading journey
              </div>
            }
            icon={<Download2 size={18} color={theme.almostWhite} />}
          />
        ),
      },
    ])
    setCurrentStep(0)
    setIsOpen(true)
  }, [setSteps])

  return (
    <Wrapper>
      <ContentWrapper>
        <ImageWrapper>
          <AnimationLoader name={'_deposit_collateral'} />
        </ImageWrapper>
        <DepositText>Deposit {symbol} and start trading</DepositText>

        <div className="tour-step-4">
          <AnimatedButton onClick={() => toggleDepositModal()} customText={`Deposit ${symbol}`} icon={logo} />
        </div>
      </ContentWrapper>
      {showDepositModal && <DepositModal />}
    </Wrapper>
  )
}
