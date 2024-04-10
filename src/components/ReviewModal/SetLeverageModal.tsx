import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { useActiveMarket } from 'state/trade/hooks'
import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'

import Column from 'components/Column'
import { Modal } from 'components/Modal'
import { Row, RowStart } from 'components/Row'
import { Close as CloseIcon } from 'components/Icons'
import LeverageSlider from 'components/App/TradePanel/LeverageSlider'

const MainModal = styled(Modal)`
  width: 456px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    min-width: 95%;
    width: unset;
  `};
`

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  width: 100%;
  padding: 21px 23px;
  padding-bottom: 22px;
  height: 364px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 21px 10px;
  `};
`

const Title = styled(RowStart)`
  padding: 0px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 26px;
  color: ${({ theme }) => theme.almostWhite};
`

const Close = styled.div`
  position: absolute;
  right: 0px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin: 2px 12px 1px 0px;
`

const LeverageInfoWrapper = styled.div`
  font-size: 14px;
  margin-left: 7px;
  color: ${({ theme }) => theme.coolGrey};

  ${({ theme }) => theme.mediaWidth.upToMedium`
     font-size: 12px;
  `};
`

const Market = styled(Row)`
  & span {
    gap: 4px;
    display: flex;
    font-size: 16px;
    margin: 0px 4px;
    color: ${({ theme }) => theme.almostWhite};

    ${({ theme }) => theme.mediaWidth.upToMedium`
       font-size: 13px;
    `};
  }
`

const MaxLeverage = styled(Column)`
  margin-top: 20px;
  margin-bottom: 35px;
  & span {
    gap: 4px;
    margin-top: 3px;
    font-size: 12px;

    color: ${({ theme }) => theme.pink};

    ${({ theme }) => theme.mediaWidth.upToMedium`
       font-size: 11px;
    `};
  }
`

export default function SetLeverageModal({ isOpen, onDismiss }: { isOpen: boolean; onDismiss: () => void }) {
  const activeMarket = useActiveMarket()
  const logo = useCurrencyLogo(activeMarket?.symbol)

  return (
    <MainModal isOpen={isOpen} onBackgroundClick={onDismiss} onEscapeKeydown={onDismiss}>
      <Wrapper>
        <Title>
          Choose Leverage
          <Close onClick={onDismiss}>
            {' '}
            <CloseIcon size={12} style={{ marginRight: '12px' }} />
          </Close>
        </Title>

        <LeverageInfoWrapper>
          <Market>
            Choose your leverage for
            <span>
              <Image src={logo} alt={'logo'} width={14} height={14} loading={'lazy'} />
              {activeMarket?.symbol}/{activeMarket?.asset}
            </span>
          </Market>

          <MaxLeverage>
            Maximum leverage on this pair is {activeMarket?.maxLeverage}x.
            <span>Setting high leverage increases the risk of liquidation.</span>
          </MaxLeverage>

          <LeverageSlider onDismiss={onDismiss} />
        </LeverageInfoWrapper>
      </Wrapper>
    </MainModal>
  )
}
