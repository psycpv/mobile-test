import { useRef } from 'react'
import { Z_INDEX } from 'theme'
import styled, { useTheme } from 'styled-components'

import { FavoritesColor } from 'state/user/types'
import useOnOutsideClick from 'lib/hooks/useOnOutsideClick'

import { Row } from 'components/Row'
import { Star } from 'components/Icons'
import { Card } from 'components/Card'

const InlineModal = styled(Card)<{ isOpen: boolean; inRow?: boolean }>`
  position: fixed;
  padding: 6px 0px;
  font-size: 16px;
  z-index: ${Z_INDEX.modal};
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  border-radius: 3px;
  width: clamp(50px, 120px, 99%);
  max-height: 400px;
  transform: ${({ inRow }) => (inRow ? 'translate(-80px, 10px)' : 'translate(50px, 65px)')};
  color: ${({ theme }) => theme.coolGrey};
  background: ${({ theme }) => theme.color3};
  border: solid 1px ${({ theme }) => theme.coolGrey};

  ${({ theme, inRow }) => theme.mediaWidth.upToMedium`
    transform: ${inRow ? 'translate(-80px, 10px)' : 'translate(150px, 65px)'};
  `};
`

const FavoriteItem = styled(Row)`
  gap: 4px;
  padding: 3px 7px;
  &:hover {
    background: ${({ theme }) => theme.color4};
  }
`

export default function FavoritesModal({
  setFavoriteColor,
  setShowFavoriteColorsModal,
  inRow,
}: {
  setFavoriteColor: (color: FavoritesColor) => void
  setShowFavoriteColorsModal?: (value: boolean) => void
  inRow?: boolean
}) {
  const favoritesRef = useRef(null)
  const { blue, green, pink } = useTheme()
  useOnOutsideClick(favoritesRef, () => setShowFavoriteColorsModal && setShowFavoriteColorsModal(false))

  const StateTabs = [
    { tabName: 'Pink List', starColor: pink, colorEnum: FavoritesColor.PINK },
    { tabName: 'Blue List', starColor: blue, colorEnum: FavoritesColor.BLUE },
    { tabName: 'Green List', starColor: green, colorEnum: FavoritesColor.GREEN },
  ]
  return (
    <InlineModal isOpen={true} inRow={inRow} ref={favoritesRef}>
      {StateTabs.map((tab, index) => (
        <FavoriteItem key={index} onClick={() => setFavoriteColor(tab.colorEnum)}>
          {tab.starColor && <Star size={12} isFavorite fillColor={tab.starColor} />}
          {tab.tabName}
        </FavoriteItem>
      ))}
    </InlineModal>
  )
}
