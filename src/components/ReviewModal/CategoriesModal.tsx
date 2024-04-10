import { useRef } from 'react'
import styled, { useTheme } from 'styled-components'
import { Z_INDEX } from 'theme'

import useOnOutsideClick from 'lib/hooks/useOnOutsideClick'

import { Card } from 'components/Card'
import CustomCheckbox from 'components/CheckBox/CustomCheckBox'

const InlineModal = styled(Card)<{ isOpen: boolean }>`
  position: absolute;
  transform: translate(46px, 125px);
  padding: 6px;
  font-size: 16px;
  z-index: ${Z_INDEX.modal};

  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  border-radius: 3px;
  width: 200px;
  max-height: 400px;
  overflow-y: scroll;
  color: ${({ theme }) => theme.coolGrey};
  background: ${({ theme }) => theme.color3};
  border: solid 1px ${({ theme }) => theme.coolGrey};
  gap: 4px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    right: 55px;
  `};
`
const ALL_CATEGORIES = [
  'DeFi',
  'Gaming',
  'Layer 1 (L1)',
  'Layer 2 (L2)',
  'Meme',
  'Metaverse',
  'Oracle',
  'Privacy Coins',
  'Real World Assets',
]

export default function CategoriesModal({
  toggleModal,
  category,
  setCategory,
}: {
  toggleModal?: (value: boolean) => void
  category: string[]
  setCategory: any
}) {
  const favoritesRef = useRef(null)
  const { blue } = useTheme()

  useOnOutsideClick(favoritesRef, () => toggleModal && toggleModal(false), 'mousedown', true)

  const updateCategory = (cat: string) => {
    setCategory((prevCategory: string[]) => {
      const index = prevCategory.indexOf(cat)
      if (index > -1) {
        return prevCategory.filter((value) => value !== cat)
      } else {
        return [...prevCategory, cat]
      }
    })
  }

  return (
    <InlineModal isOpen={true} ref={favoritesRef}>
      {ALL_CATEGORIES.map((cat, index) => (
        <CustomCheckbox
          checkSize={18}
          fontSize={12}
          checked={category.includes(cat)}
          onClick={async () => updateCategory(cat)}
          label={cat}
          key={`category_item_${index}`}
          checkColor={blue}
        />
      ))}
    </InlineModal>
  )
}
