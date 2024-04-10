import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { useRouter } from 'next/router'

import { useMarketsSearch } from 'hooks/useMarkets'

import { Row } from 'components/Row'
import { Close as CloseIcon, Star } from 'components/Icons'
import { InputField } from 'components/App/MarketBar/InputField'
import { TabButton } from 'components/App/UserPanel/OrdersTab'
import MarketsTable from './MarketsTable'
import { ChevronDown as ChevronDownIcon } from 'components/Icons'
import CategoriesModal from 'components/ReviewModal/CategoriesModal'

const AllMarkets = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const SearchWrapper = styled(Row)`
  min-height: 40px;
  background: ${({ theme }) => theme.color4};
  border-radius: 4px;
  z-index: 0;
  gap: 12px;
  flex-flow: row nowrap;
  font-size: 1rem;
`

const Close = styled.div`
  border: none;
  min-width: 24px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  margin-left: 10px;
  background: ${({ theme }) => theme.color1};
`

const TabWrapper = styled(Row)`
  width: 100%;
  min-height: 38px;
  margin-bottom: 8px;
  border-bottom: solid 1px;
  border-color: ${({ theme }) => theme.text2};
  overflow-x: scroll;
`

const MarketsButton = styled(TabButton)`
  gap: 3px;
  min-width: 120px;
  padding: 10px 10px 5px 10px;
  border-bottom: solid 1px ${({ active, theme }) => (active ? theme.blue : theme.color4)};
  color: ${({ active, theme }) => (active ? theme.almostWhite : theme.coolGrey)};
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: ${({ theme, active }) => (active ? theme.coolGrey : theme.almostWhite)};
  }
`

const StarWrapper = styled.div`
  min-width: 10px;
  margin-bottom: -2px;
  margin-left: 4px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    margin-bottom: -4px;
  `};
`

const ChevronDown = styled(ChevronDownIcon)`
  margin-left: 4px;
  width: 16px;
  color: ${({ theme }) => theme.text1};
`

const Category = styled(MarketsButton)`
  display: flex;
  align-items: center;
`

const NavigationWrap = styled.div<{ direction: 'right' | 'left' }>`
  position: absolute;
  z-index: 99;
  height: 36px;
  ${({ direction }) => (direction === 'left' ? 'left: 0px' : 'right: 0px')};
`

const StyledNavButton = styled.button<{ direction: 'right' | 'left' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 100%;
  transform: ${({ direction }) => (direction === 'left' ? 'rotate(0deg)' : 'rotate(180deg)')};
`

const Arrow = styled.div`
  width: 12px;
  height: 12px;
  border: solid ${({ theme }) => theme.almostWhite};
  border-width: 0 2px 2px 0;
  rotate: 135deg;
`

export default function MarketsContent({
  openFavorites,
  slideModal,
  onDismiss,
}: {
  openFavorites?: boolean
  slideModal?: boolean
  onDismiss: () => void
}): JSX.Element | null {
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)
  const { blue, green, pink } = useTheme()
  const {
    markets,
    favoritePinkMarkets,
    favoriteBlueMarkets,
    favoriteGreenMarkets,
    newMarkets,
    categoryMarkets,
    searchValue,
    setSearchValue,
    category,
    setCategory,
  } = useMarketsSearch()
  const StateTabs = [
    { tabName: 'All', starColor: null, visible: true },
    { tabName: 'New', starColor: null, visible: true },
    { tabName: 'Pink List', starColor: pink, visible: favoritePinkMarkets && favoritePinkMarkets.length > 0 },
    { tabName: 'Blue List', starColor: blue, visible: favoriteBlueMarkets && favoriteBlueMarkets.length > 0 },
    { tabName: 'Green List', starColor: green, visible: favoriteGreenMarkets && favoriteGreenMarkets.length > 0 },
  ]
  const [activeTab, setActiveTab] = useState(openFavorites ? StateTabs[1] : StateTabs[0])
  const [visibleMarkets, setVisibleMarkets] = useState(markets)
  const [arrowMode, setArrowMode] = useState(false)
  const [sIndex, setSIndex] = useState(-1) // selected market index
  const [showCategories, setShowCategories] = useState(false)

  useEffect(() => {
    if (activeTab.tabName == StateTabs[0].tabName) {
      setVisibleMarkets(markets)
    } else if (activeTab.tabName == StateTabs[1].tabName) {
      setVisibleMarkets(newMarkets)
    } else if (activeTab.tabName == StateTabs[2].tabName) {
      setVisibleMarkets(favoritePinkMarkets)
    } else if (activeTab.tabName == StateTabs[3].tabName) {
      setVisibleMarkets(favoriteBlueMarkets)
    } else if (activeTab.tabName == StateTabs[4].tabName) {
      setVisibleMarkets(favoriteGreenMarkets)
    } else if (activeTab.tabName == 'category') {
      setVisibleMarkets(categoryMarkets)
    }
  }, [activeTab, markets, favoritePinkMarkets, newMarkets, favoriteBlueMarkets, favoriteGreenMarkets])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const currentIndex = StateTabs.findIndex((tab) => tab.tabName === activeTab.tabName)
      const nextIndex = (currentIndex + 1) % StateTabs.length
      setActiveTab(StateTabs[nextIndex])
      setArrowMode(false)
      setSIndex(0)
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      if (arrowMode) {
        if (e.key === 'ArrowDown') {
          if (sIndex < visibleMarkets.length - 1) setSIndex((pre) => pre + 1)
        } else {
          if (sIndex >= 0) setSIndex((pre) => pre - 1)
        }
      } else {
        setSIndex(0)
        setArrowMode(true)
      }
    } else if (e.key === 'Enter' && sIndex !== -1) {
      e.preventDefault()
      router.push(`/trade/${visibleMarkets[sIndex].name}`)
      onDismiss()
    }
  }

  const statesRef = useRef<HTMLDivElement>()
  const [target, setTarget] = useState(statesRef.current)

  const [leftArrow, setLeftArrow] = useState(false)
  const [rightArrow, setRightArrow] = useState(false)
  const THRESHOLD = 24
  const SCROLL_AMOUNT = 200

  useEffect(() => {
    setTarget(statesRef.current)
  }, [statesRef])

  useEffect(() => {
    if (target && StateTabs.length) {
      const maxScroll = target.scrollWidth - target.clientWidth
      if (maxScroll > THRESHOLD) {
        setRightArrow(true)
      } else {
        setRightArrow(false)
      }
    }
  }, [StateTabs.length, target, target?.scrollWidth])

  const handleScroll = useCallback((e) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget
    const maxScroll = scrollWidth - clientWidth

    if (scrollLeft > THRESHOLD) {
      setLeftArrow(true)
    } else {
      setLeftArrow(false)
    }

    if (scrollLeft < maxScroll - THRESHOLD) {
      setRightArrow(true)
    } else {
      setRightArrow(false)
    }
  }, [])

  return (
    <AllMarkets onKeyDown={handleKeyDown} ref={ref}>
      <Row>
        <SearchWrapper>
          <InputField
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            placeholder="Search by ticker or token name..."
          />
        </SearchWrapper>
        {!slideModal && (
          <Close onClick={() => onDismiss()}>
            <CloseIcon size={10} />
          </Close>
        )}
      </Row>

      <TabWrapper role="button" ref={statesRef} onScroll={handleScroll}>
        {leftArrow && (
          <NavButton
            direction="left"
            onClick={() => {
              target?.scrollTo({ left: target.scrollLeft - SCROLL_AMOUNT, behavior: 'smooth' })
            }}
          />
        )}

        {StateTabs.map(
          (tab, index) =>
            tab.visible && (
              <MarketsButton active={activeTab.tabName === tab.tabName} onClick={() => setActiveTab(tab)} key={index}>
                {tab.tabName}
                {tab.starColor && (
                  <StarWrapper>
                    <Star isFavorite fillColor={tab.starColor} />
                  </StarWrapper>
                )}
              </MarketsButton>
            )
        )}
        {!slideModal && (
          <Category
            active={activeTab.tabName === 'category'}
            onClick={() => {
              setShowCategories((prev) => !prev)
              setActiveTab({ tabName: 'category', starColor: '', visible: true })
            }}
          >
            Categories
            <ChevronDown />
            {showCategories && (
              <CategoriesModal category={category} setCategory={setCategory} toggleModal={setShowCategories} />
            )}
          </Category>
        )}
        {rightArrow && (
          <NavButton
            direction="right"
            onClick={() => {
              target?.scrollTo({ left: target.scrollLeft + SCROLL_AMOUNT, behavior: 'smooth' })
            }}
          />
        )}
      </TabWrapper>

      <MarketsTable priceOnly={slideModal} markets={visibleMarkets} onDismiss={onDismiss} sIndex={sIndex} />
    </AllMarkets>
  )
}

function NavButton({ direction, onClick }: { direction: 'left' | 'right'; onClick: () => void }) {
  return (
    <NavigationWrap direction={direction}>
      <StyledNavButton direction={direction} onClick={onClick}>
        <Arrow />
      </StyledNavButton>
    </NavigationWrap>
  )
}
