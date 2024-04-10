import styled from 'styled-components'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { lighten } from 'polished'

import { formatDollarAmount, toBN } from 'utils/numbers'
import { Market } from 'types/market'

import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'
import { useFavoriteColor, useToggleUserFavoriteCallback } from 'state/user/hooks'

import { Star } from 'components/Icons'
import { Row, RowBetween, RowCenter, RowStart } from 'components/Row'
import { FavoritesColor } from 'state/user/types'

const TableStructure = styled(RowBetween)`
  font-size: 12px;
  font-weight: 500;
  text-align: left;

  & > * {
    width: 18%;

    &:nth-child(1) {
      width: 28px;
      margin-right: 12px;
    }
    &:nth-child(2) {
      width: 14%;
    }
    &:nth-child(3) {
      width: 12%;
    }

    ${({ theme }) => theme.mediaWidth.upToSmall`
      &:nth-child(1) {
        width: 14px;
        margin-right: 0;
      }
      &:nth-child(2) {
        width: 20%;
      }
      &:nth-child(4) {
        width: 16%;
      }
      &:nth-child(5) {
        display: none;
      }
      &:nth-child(6) {
        display: none;
      }
    `}
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      &:nth-child(2) {
        width: 27%;
      }
      &:nth-child(4) {
        display: none;
      }
    `}
  }
`

const RowWrap = styled(TableStructure)`
  height: 56px;
  color: ${({ theme }) => theme.text0};
  background: ${({ theme }) => theme.bg0};
  padding: 12px 24px 12px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.bg};

  & > * {
    &:nth-child(1) {
      height: 100%;
    }
  }
`

const StarWrapper = styled(RowCenter)`
  &:hover {
    cursor: pointer;
  }
`

const Symbol = styled.div`
  margin-bottom: 4px;
`

const MarketName = styled.span`
  font-size: 10px;
`

const ColorLabel = styled(Row)<{ color: 'green' | 'red' | 'gray' }>`
  color: ${({ color, theme }) => (color === 'green' ? theme.green1 : color === 'red' ? theme.red1 : theme.text2)};
`

const ActionBtn = styled.button`
  box-sizing: border-box;
  width: 80px;
  height: 30px;
  padding: 8px 24px;
  color: ${({ theme }) => theme.primaryPink};
  background: ${({ theme }) => theme.bgPink1};
  border: 1px solid ${({ theme }) => theme.primaryPink};
  font-weight: 600;

  &:hover {
    background: ${({ theme }) => lighten(0.03, theme.bgPink1)};
  }
`

export default function MarketRow({
  market,
  marketInfo,
}: {
  market: Market
  marketInfo?: {
    price: string
    priceChangePercent: string
    tradeVolume: string
    notionalCap: string
  }
}) {
  const { symbol, name, pricePrecision } = market
  const { price, priceChangePercent, tradeVolume, notionalCap } = marketInfo || {}

  const router = useRouter()
  const { isFavorite, color } = useFavoriteColor(symbol)
  const icon = useCurrencyLogo(symbol)
  const toggleFavorite = useToggleUserFavoriteCallback(symbol)

  const onTradeClick = () => {
    router.push(`/trade/${name}`)
  }

  return (
    <RowWrap>
      <StarWrapper onClick={() => toggleFavorite(FavoritesColor.PINK)}>
        <Star size={12.44} isFavorite={isFavorite} fillColor={color} />
      </StarWrapper>
      <RowStart gap={'8px'}>
        <Image src={icon} alt={symbol} width={28} height={28} />
        <div>
          <Symbol>{symbol}</Symbol>
          <ColorLabel color={'gray'}>
            <MarketName>{name}</MarketName>
          </ColorLabel>
        </div>
      </RowStart>
      <div>{price ? `$${parseFloat(price).toFixed(pricePrecision)}` : '-'}</div>
      <ColorLabel
        color={priceChangePercent ? (toBN(priceChangePercent).isGreaterThan(0) ? 'green' : 'red') : 'gray'}
        gap={'2px'}
      >
        <span>
          {(() => {
            if (!priceChangePercent) return '-'
            return `${toBN(priceChangePercent).isGreaterThan(0) ? '+' : ''}${priceChangePercent}%`
          })()}
        </span>
      </ColorLabel>
      <div>{formatDollarAmount(tradeVolume)}</div>
      <div>{formatDollarAmount(notionalCap)}</div>
      <ActionBtn onClick={onTradeClick}>Trade</ActionBtn>
    </RowWrap>
  )
}
