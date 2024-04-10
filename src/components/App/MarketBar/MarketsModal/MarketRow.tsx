import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useIsMobile } from 'lib/hooks/useWindowSize'
import styled from 'styled-components'

import { formatDollarAmount, toBN } from 'utils/numbers'

import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'
import { useFavoriteColor, useToggleUserFavoriteCallback } from 'state/user/hooks'
import { FavoritesColor } from 'state/user/types'
import { usePrices } from 'state/hedger/hooks'

import BlinkingPrice from 'components/App/FavoriteBar/BlinkingPrice'
import Column from 'components/Column'
import { Loader, Star } from 'components/Icons'
import { RowBetween, RowStart } from 'components/Row'
import FavoritesModal from 'components/ReviewModal/FavoritesColorModal'
import Image from 'next/image'

const TableStructure = styled(RowBetween)`
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  position: relative;

  & > * {
    &:nth-child(1) {
      width: 26%;
    }
    &:nth-child(6) {
      width: 38px;
    }
    width: 16%;

    ${({ theme }) => theme.mediaWidth.upToSmall`
      &:nth-child(1) {
        width: 30%;
      }
      &:nth-child(2) {
        width: 30%;
      }
      &:nth-child(3) {
        width: 30%;
      }
      &:nth-child(4) {
        display: none;
      }
      &:nth-child(5) {
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

const RowWrap = styled(TableStructure)<{ active?: boolean }>`
  height: 56px;
  min-height: 56px;
  color: ${({ theme }) => theme.almostWhite};
  background: ${({ theme, active }) => (active ? theme.color4 : theme.color3)};
  padding: 2px 6px 2px 6px;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color4};
  }

  & > * {
    &:nth-child(1) {
      height: 100%;
    }
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
    min-height: 35px;
  `}
`

const StarWrapper = styled.div`
  text-align: right;
  height: 18px;
  &:hover {
    cursor: pointer;
  }
`

const Symbol = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.almostWhite};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 13px;
  `}
`

const MarketName = styled.div`
  line-height: 1;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.coolGrey};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    display:none;
  `}
`
const TextCentered = styled.div`
  text-align: center;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 12px;
  `}
`
const ImageWrapper = styled.div<{ size?: number }>`
  padding-top: 5px;
  min-width: ${({ size }) => `${size}px` ?? '32px'};
  min-height: ${({ size }) => `${size}px` ?? '32px'};
`

const ColoredText = styled(TextCentered)<{ isPositive: boolean }>`
  color: ${({ theme, isPositive }) => (isPositive ? theme.blue : theme.pink)};
`

export default function MarketRow({
  market,
  onDismiss,
  sIndex,
  index,
  automaticScroll,
  showFavoriteColorsModal,
  setSelectedFavoriteSymbol,
}: {
  market: any
  onDismiss: any
  sIndex: number
  index: number
  automaticScroll: () => void
  showFavoriteColorsModal: boolean
  setSelectedFavoriteSymbol: (symbol: string) => void
}) {
  const { symbol, marketName, name, asset, priceChangePercent, tradeVolume, notionalCap } = market
  const router = useRouter()
  const { isFavorite, color } = useFavoriteColor(symbol)
  const icon = useCurrencyLogo(symbol)
  const toggleFavorite = useToggleUserFavoriteCallback(symbol)
  const isMobile = useIsMobile()

  function getImageSize() {
    return isMobile ? 16 : 32
  }

  function handleClick() {
    router.push(`/trade/${name}`)
    onDismiss()
  }

  const handleFavorite = (color: FavoritesColor) => {
    toggleFavorite(color)
    setSelectedFavoriteSymbol('')
  }

  useEffect(() => {
    if (sIndex === index) {
      automaticScroll()
    }
  }, [index, automaticScroll, sIndex])

  const isPositive = toBN(priceChangePercent).isGreaterThan(0)

  return (
    <RowWrap onClick={handleClick} active={sIndex === index} className={sIndex === index ? 'active' : ''}>
      <RowStart gap={'8px'}>
        <ImageWrapper size={getImageSize()}>
          <Image src={icon} alt={symbol} width={getImageSize()} height={getImageSize()} loading={'lazy'} />
        </ImageWrapper>
        <Column>
          <Symbol>
            {symbol}/{asset}
          </Symbol>
          <MarketName>{marketName[0]}</MarketName>
        </Column>
      </RowStart>
      <MarketPrice market={market} />
      {priceChangePercent ? (
        <ColoredText isPositive={isPositive}>{`${isPositive ? '+' : ''}${priceChangePercent}%`}</ColoredText>
      ) : (
        <TextCentered>
          <Loader />
        </TextCentered>
      )}
      {tradeVolume ? (
        <TextCentered>{formatDollarAmount(tradeVolume)}</TextCentered>
      ) : (
        <TextCentered>
          <Loader />
        </TextCentered>
      )}
      {notionalCap ? (
        <TextCentered>{formatDollarAmount(notionalCap)}</TextCentered>
      ) : (
        <TextCentered>
          <Loader />
        </TextCentered>
      )}
      <StarWrapper
        onClick={(e) => {
          if (showFavoriteColorsModal) setSelectedFavoriteSymbol('')
          else setSelectedFavoriteSymbol(symbol)
          e.stopPropagation()
        }}
      >
        <Star size={18} isFavorite={isFavorite} fillColor={color} />
        {showFavoriteColorsModal && <FavoritesModal setFavoriteColor={handleFavorite} inRow />}
      </StarWrapper>
    </RowWrap>
  )
}

function MarketPrice({ market }: { market: any }) {
  const prices = usePrices()
  const price = prices[market.name]?.markPrice
  const isMobile = useIsMobile()

  return price ? (
    <BlinkingPrice
      market={market}
      data={toBN(price).toString()}
      textSize={isMobile ? '12px' : '16px'}
      textAlign="center"
    />
  ) : (
    <TextCentered>
      <Loader />
    </TextCentered>
  )
}
