import { useRef } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import { RowStart } from 'components/Row'
import SEARCH_ICON from '/public/static/images/other/search.svg'

const SearchWrapper = styled(RowStart)`
  flex-flow: row nowrap;
  padding: 0.2rem 10px;
  gap: 5px;

  & > * {
    &:first-child {
      width: fit-content;
      padding: 0 0.5rem;
    }
  }
`

export const Input = styled.textarea<{
  [x: string]: any
}>`
  font-family: 'Cabin';
  height: fit-content;
  flex: 1;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: ${({ theme }) => theme.almostWhite};
  padding-left: 2px;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.inactiveText};
  }

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.almostWhite};
    outline: none;
  }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    font-size: 1rem;
  `}
`

export function InputField({
  searchValue,
  setSearchValue,
  placeholder,
}: {
  searchValue: string
  setSearchValue: any
  placeholder: string
}) {
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const handleKeyDown = (event: any) => {
    if (event.key === 'Escape') {
      inputRef.current?.blur()
    }
  }

  return (
    <SearchWrapper>
      <Image src={SEARCH_ICON} width={'22px'} height={'20px'} alt={'staking icon'} />
      <Input
        ref={inputRef}
        value={searchValue}
        autoFocus
        type="text"
        placeholder={placeholder}
        spellCheck="false"
        onBlur={() => null}
        onKeyDown={handleKeyDown}
        onChange={(e: any) => {
          setSearchValue(e.target.value)
        }}
        rows={1}
        cols={3}
      />
    </SearchWrapper>
  )
}
