import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import { InputAmount } from 'components/App/SlippageTolerance/Styles'
import { RowCenter } from 'components/Row'

const Wrapper = styled(RowCenter)`
  font-size: 14px;
  width: 55px;
  padding: 8px 15px;
  background: ${({ theme }) => theme.color3};
  border-radius: 2px;

  &:hover {
    cursor: text;
  }
`

const InputWrapper = styled.div`
  position: relative;
`

const Template = styled.span`
  white-space: pre;
  opacity: 0;
  /* max-width : could be wised to set a maximum width and overflow:hidden; */
`

const InputBox = styled(InputAmount)`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  text-align: right;
  color: ${({ theme }) => theme.almostWhite};
`

export default function InputWithSuffix({
  suffix,
  value,
  onChange,
  placeholder,
  className,
  shouldFocus,
  setShouldFocus,
}: {
  suffix: string
  value: string
  placeholder: string
  onChange(values: string): void
  className?: string
  shouldFocus: boolean
  setShouldFocus: any
}): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (shouldFocus) {
      inputRef.current?.focus()
    } else {
      inputRef.current?.blur()
    }
  }, [shouldFocus])

  const handleClick = () => {
    inputRef.current?.focus()
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event?.key === 'Escape') {
      inputRef.current?.blur()
    }
  }

  return (
    <Wrapper className={className} onClick={handleClick}>
      <InputWrapper>
        <Template>{value ? value : placeholder}</Template>
        <InputBox
          onBlur={() => setShouldFocus(false)}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          ref={inputRef}
        />
      </InputWrapper>
      <span>{suffix}</span>
    </Wrapper>
  )
}
