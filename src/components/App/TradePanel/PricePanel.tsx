import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import Image from 'next/image'

import INFO_ICON from '/public/static/images/other/Info.svg'

import { toBN } from 'utils/numbers'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { getTokenWithFallbackChainId } from 'utils/token'
import { ErrorState, OrderType } from 'types/trade'
import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

import { useActiveMarket, useOrderType, useSetLimitPrice } from 'state/trade/hooks'
import useTradePage from 'hooks/useTradePage'
import useBidAskPrice from 'hooks/useBidAskPrice'

import { InnerCard } from 'components/Card'
import { ToolTipTop } from 'components/ToolTip'
import { NumericalInput } from 'components/Input'
import { Row, RowBetween, RowCenter } from 'components/Row'
import SlippageTolerance from 'components/App/SlippageTolerance'
import { ChevronDown as ChevronDownIcon } from 'components/Icons'
import { SlideModal } from 'components/App/MarketBar/MarketsModal/SlideModal'
import BlinkingPrice from 'components/App/FavoriteBar/BlinkingPrice'

const PriceWrap = styled(InnerCard)`
  padding-top: 8px;
  border-radius: 6px;
  gap: 8px;
`

const Title = styled.div`
  color: ${({ theme }) => theme.almostWhite};
  font-size: 13px;
  font-weight: 400;
`

const LimitTitle = styled.div`
  display: flex;
  gap: 8px;
`
const Line = styled(RowBetween)`
  height: 28px;
`
const TooltipWrapper = styled.div`
  height: 14px;
`

export const BalanceTitle = styled.span<{ color: string }>`
  color: ${({ color }) => color};
  margin-right: 4px;
  text-align: right;
  font-size: 12px;
  font-weight: 400;
  text-decoration: none !important;
`

const Balance = styled.div`
  font-size: 12px;
  &:hover {
    text-decoration: underline;
    color: white;
    cursor: pointer;
  }
`

const BalanceWrapper = styled(Row)`
  color: ${({ theme }) => theme.almostWhite};
`

export const SymbolWrapper = styled(RowCenter)`
  cursor: pointer;
  width: unset;

  &:hover > * {
    &:nth-child(1) {
      color: white;
    }
    &:nth-child(2) {
      & path {
        fill: white;
      }
    }
  }
`

export const CurrencySymbol = styled.div<{ color?: string; active?: any }>`
  display: flex;
  gap: 4px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme, color }) => color ?? theme.almostWhite};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 12px;
  `}
`

export const ChevronDown = styled(ChevronDownIcon)`
  margin-left: 7px;
  width: 16px;
  color: ${({ theme }) => theme.text1};

  ${({ theme }) => theme.mediaWidth.upToSmall`
      margin-left: 4px;
  `}
`

export default function PricePanel() {
  const orderType = useOrderType()
  const [openMarketsModal, setOpenMarketsModal] = useState(false)

  const openCurrencySelector = () => {
    setOpenMarketsModal(true)
  }

  return (
    <>
      {orderType === OrderType.MARKET ? (
        <MarketPanel onTokenSelect={openCurrencySelector} />
      ) : (
        <LimitPanel onTokenSelect={openCurrencySelector} />
      )}
      {openMarketsModal && (
        <SlideModal
          isOpen={openMarketsModal}
          onDismiss={() => {
            setOpenMarketsModal(false)
          }}
        />
      )}
    </>
  )
}

function MarketPanel({ onTokenSelect }: { onTokenSelect?: () => void }) {
  const { chainId } = useActiveWeb3React()
  const market = useActiveMarket()

  const symbolIcon = useCurrencyLogo(market?.symbol)
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)
  return (
    <PriceWrap>
      <Line>
        <Title>Market Price ({collateralCurrency?.symbol})</Title>
        <SlippageTolerance />
      </Line>
      <Line>
        <BlinkingPrice market={market} textSize="16px" />

        <SymbolWrapper onClick={onTokenSelect}>
          <CurrencySymbol>
            {' '}
            {symbolIcon && <Image src={symbolIcon} alt={market?.symbol + '-icon'} width={18} height={18}></Image>}{' '}
            {market?.symbol}{' '}
          </CurrencySymbol>

          {onTokenSelect && <ChevronDown />}
        </SymbolWrapper>
      </Line>
    </PriceWrap>
  )
}

function LimitPanel({ onTokenSelect }: { onTokenSelect?: () => void }) {
  const { chainId } = useActiveWeb3React()
  const { price: limitPrice, state } = useTradePage()
  const setLimitPrice = useSetLimitPrice()
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)
  const market = useActiveMarket()
  const symbolIcon = useCurrencyLogo(market?.symbol)

  return (
    <PriceWrap>
      <Line>
        <LimitTitle>
          <Title>Price ({collateralCurrency?.symbol})</Title>
          {(state === ErrorState.INVALID_PRICE || state === ErrorState.OUT_OF_RANGE_PRICE) && (
            <TooltipWrapper data-tip data-for={'limit_price'}>
              <Image src={INFO_ICON} width={'14px'} height={'14px'} alt={'info icon'} />
              <ToolTipTop id={'limit_price'} aria-haspopup="true">
                <Image src={INFO_ICON} width={'14px'} height={'14px'} alt={'info icon'} />
                <div>Enter valid Limit price</div>
              </ToolTipTop>
            </TooltipWrapper>
          )}
        </LimitTitle>

        <BidAndAskPrices />
      </Line>
      <Line>
        <NumericalInput
          value={limitPrice}
          onUserInput={setLimitPrice}
          precision={market?.pricePrecision}
          hotkey={'p'}
        />

        <SymbolWrapper onClick={onTokenSelect}>
          <CurrencySymbol>
            {' '}
            <Image src={symbolIcon} alt={market?.symbol + '-icon'} width={18} height={18} /> {market?.symbol}{' '}
          </CurrencySymbol>

          {onTokenSelect && <ChevronDown />}
        </SymbolWrapper>
      </Line>
    </PriceWrap>
  )
}

function BidAndAskPrices() {
  const theme = useTheme()
  const market = useActiveMarket()
  const setLimitPrice = useSetLimitPrice()
  const { ask, bid } = useBidAskPrice(market)
  return (
    <Row width="unset" gap="8px">
      <BalanceWrapper
        onClick={() => {
          setLimitPrice(ask)
        }}
      >
        <BalanceTitle color={theme.blue}>Long:</BalanceTitle>
        <Balance>${ask ? toBN(ask).toFormat() : '0.00'}</Balance>
      </BalanceWrapper>
      <BalanceWrapper
        onClick={() => {
          setLimitPrice(bid)
        }}
      >
        <BalanceTitle color={theme.pink}>Short:</BalanceTitle>
        <Balance>${bid ? toBN(bid).toFormat() : '0.00'}</Balance>
      </BalanceWrapper>
    </Row>
  )
}
