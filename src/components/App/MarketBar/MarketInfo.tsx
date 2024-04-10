import React, { useCallback, useRef, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import styled from 'styled-components'
import Image from 'next/image'

import { useActiveMarket } from 'state/trade/hooks'
import useOnOutsideClick from 'lib/hooks/useOnOutsideClick'
import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'
import { useIsMobile } from 'lib/hooks/useWindowSize'
import { useCloseWithEscape } from 'lib/hooks/useCloseWithEscape'
import { useFavoriteColor, useToggleUserFavoriteCallback } from 'state/user/hooks'
import { FavoritesColor } from 'state/user/types'

import { Name } from '.'
import Column from 'components/Column'
import { ChevronDown, Loader, Star } from 'components/Icons'
import { Row, RowCenter, RowEnd, RowStart } from 'components/Row'
import { MarketsModal } from 'components/App/MarketBar/MarketsModal'
import FavoritesModal from 'components/ReviewModal/FavoritesColorModal'
import BlinkingPrice from 'components/App/FavoriteBar/BlinkingPrice'

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  height: 100%;
`

const Wrapper = styled(RowStart)`
  font-size: 1.2rem;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
    gap: 16px;
    // width: fit-content;
  `};
`

export const InnerContentWrapper = styled(Row)`
  padding: 11px 10px 10px 7px;
  height: 38px;
  border-radius: 4px;
  background: ${({ theme }) => theme.color3};
  &:hover {
    background: ${({ theme }) => theme.color4};
  }
`

const Chevron = styled(ChevronDown)<{ open: boolean }>`
  transform: rotate(${({ open }) => (open ? '0deg' : '-90deg')});
  transition: 0.1s;
`

const MarketText = styled(Row)`
  gap: 12px;
  font-weight: 700;
  font-size: 15px;
  line-height: normal;
  white-space: nowrap;

  color: ${({ theme }) => theme.almostWhite};
  ${({ theme }) => theme.mediaWidth.upToMedium`
   font-size: 14px;
  `};
`

const StarWrapper = styled.div`
  min-width: 18px;
  min-height: 18px;
`

const IconWrapper = styled(StarWrapper)`
  display: flex;
  justify-content: center;
`

const SymbolWrapper = styled.div`
  display: flex;
  gap: 6px;
`

export default function MarketSelect() {
  const ref = useRef(null)
  const market = useActiveMarket()
  const token1 = useCurrencyLogo(market?.symbol)
  const [modalOpen, setModalOpen] = useState(false)
  const [clickMarket, setClickMarket] = useState(false)
  const [openFavorites, setOpenFavorites] = useState(false)
  const [showFavoriteColorsModal, setShowFavoriteColorsModal] = useState(false)
  const toggleFavorite = useToggleUserFavoriteCallback(market?.symbol ?? '')
  const { color, isFavorite } = useFavoriteColor(market?.symbol)
  const mobileVersion = useIsMobile()
  const activeMarket = useActiveMarket()

  useOnOutsideClick(ref, () => setClickMarket(false))
  useCloseWithEscape(() => setClickMarket(false), mobileVersion)

  useHotkeys(
    '2',
    () => {
      setClickMarket(true)
    },
    { preventDefault: true }
  )
  useHotkeys(
    'F',
    () => {
      setOpenFavorites(true)
      setClickMarket(true)
    },
    { preventDefault: true }
  )

  function getInnerContent() {
    return (
      <InnerContentWrapper>
        <RowStart style={{ marginRight: '10px' }}>
          {market ? (
            <SymbolWrapper>
              <IconWrapper>
                <Image src={token1} width={18} height={18} alt={`icon`} />
              </IconWrapper>
              <MarketText>
                {market.symbol} / {market.asset}
              </MarketText>
            </SymbolWrapper>
          ) : (
            <Loader />
          )}
        </RowStart>
        <RowEnd width={'10%'} minWidth={'10px'}>
          <Chevron open={clickMarket} />
        </RowEnd>
      </InnerContentWrapper>
    )
  }

  const handleFavorite = useCallback(
    (color: FavoritesColor) => {
      toggleFavorite(color)
      setShowFavoriteColorsModal((prev) => !prev)
    },
    [toggleFavorite]
  )

  return mobileVersion ? (
    <>
      <Wrapper>
        <div style={{ width: '150px' }} onClick={() => setModalOpen(true)}>
          {getInnerContent()}
        </div>

        <StarWrapper>
          <Star
            size={18}
            isFavorite={isFavorite}
            fillColor={color}
            onClick={() => setShowFavoriteColorsModal((prev) => !prev)}
          />
        </StarWrapper>
        <Row gap={'4px'}>
          <Name>Last Price: </Name>
          <Column>
            {activeMarket ? (
              <BlinkingPrice market={activeMarket} priceWidth={'60'} textSize={'16px'} />
            ) : (
              <Loader size={'12px'} stroke="#EBEBEC" />
            )}
          </Column>
        </Row>

        {modalOpen && <MarketsModal isModal isOpen={modalOpen} onDismiss={() => setModalOpen(false)} />}
        {showFavoriteColorsModal && <FavoritesModal setFavoriteColor={handleFavorite} />}
      </Wrapper>
    </>
  ) : (
    <Container ref={ref}>
      {clickMarket && (
        <div>
          <MarketsModal isOpen onDismiss={() => setClickMarket(!clickMarket)} openFavorites={openFavorites} />
        </div>
      )}
      <Wrapper>
        <div
          onClick={() => {
            setOpenFavorites(false)
            setClickMarket(!clickMarket)
          }}
        >
          {getInnerContent()}
        </div>
        <RowCenter>
          <Star
            size={18}
            isFavorite={isFavorite}
            fillColor={color}
            style={{
              zIndex: 99,
            }}
            onClick={() => setShowFavoriteColorsModal((prev) => !prev)}
          />
          {showFavoriteColorsModal && (
            <FavoritesModal setFavoriteColor={handleFavorite} setShowFavoriteColorsModal={setShowFavoriteColorsModal} />
          )}
        </RowCenter>
      </Wrapper>
    </Container>
  )
}
