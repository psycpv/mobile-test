import React, { InputHTMLAttributes, ReactNode, useRef } from 'react'
import styled from 'styled-components'
import { useHotkeys } from 'react-hotkeys-hook'

export const InputField = styled.input<{
  [x: string]: any
  calculationMode: boolean
  calculationLoading: boolean
  height?: string
}>`
  width: 100%;
  height: ${({ height }) => height ?? '32px'};
  flex: 1;
  border: none;
  background: ${({ theme, calculationMode }) => (calculationMode ? theme.blue2 : 'transparent')};
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ calculationMode }) => (calculationMode ? 'transparent' : 'unset')};
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.almostWhite};
  text-align: left;

  @keyframes blink {
    25% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
  animation: ${({ calculationMode, calculationLoading }) =>
    calculationMode && calculationLoading ? 'blink 1s linear infinite' : 'none'};

  &:focus,
  &:hover {
    cursor: ${({ readOnly }) => (readOnly ? 'default' : 'auto')};
    outline: none;
  }
`

function escapeRegExp(string: string, calculational: boolean): string {
  const regexResult = calculational ? /[*?^{}()|[\]\\]/g : /[.*+?^${}()|[\]\\]/g
  return string.replace(regexResult, '\\$&') // $& means the whole matched string
}

export function makeRegex(precision: number, calculational: boolean): RegExp {
  let string = calculational ? '([$%]?([0-9]+' : '([0-9]*'

  if (precision > 0) {
    let precisionString = '(\\.?'
    for (let index = 0; index < precision; index++) {
      precisionString += '[0-9]?'
    }
    precisionString += ')?'
    if (calculational) {
      string += precisionString + '(?:\\s*([-+])\\s*([$%]?([0-9]+' + precisionString + ')?)?)?)?)?'
    } else {
      string += precisionString + ')'
    }

    return new RegExp(string, 'g')
  } else {
    if (calculational) {
      string += '(?:\\s*([-+])\\s*([$%]?([0-9]+)?)?)?)?)?'
    } else {
      string += ')'
    }
    return RegExp(string, 'g')
  }
}

const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group
const calculationalInputRegex = RegExp('^([$%]?\\d*(\\.?\\d*)?)(?:\\s*([-+])\\s*([$%]?\\d*(\\.?\\d*)?)?)?$')
export const NumericalInput = ({
  value,
  onUserInput,
  placeholder = '0.0',
  precision,
  calculational = false,
  calculationMode = false,
  calculationLoading = false,
  onEnterPress,
  readOnly = false,
  hotkey,
  height,
  ...rest
}: {
  value: string | number
  onUserInput: (input: string) => void
  precision?: number
  placeholder?: string
  calculational?: boolean
  calculationMode?: boolean
  calculationLoading?: boolean
  readonly?: boolean
  hotkey?: string
  height?: string
  onEnterPress?: () => void
} & Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'onChange' | 'as'>) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useHotkeys(hotkey ?? 'a', () => inputRef.current?.focus(), {
    ignoreModifiers: true,
    preventDefault: true,
    enabled: hotkey ? true : false,
    enableOnFormTags: ['input'],
  })

  function onKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event?.key === 'Enter' && calculationMode && onEnterPress) {
      onEnterPress()
    }
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event?.key === 'Escape') {
      inputRef.current?.blur()
    }
  }

  const enforcer = (nextUserInput: string) => {
    const targetRegex = calculational ? calculationalInputRegex : inputRegex
    if (nextUserInput !== '' && targetRegex.test(escapeRegExp(nextUserInput, calculational))) {
      const regex = precision !== undefined ? makeRegex(precision, calculational) : ''
      if (regex) {
        const result = nextUserInput.match(regex)
        if (result) onUserInput(result[0])
      } else onUserInput(nextUserInput)
    } else if (nextUserInput === '') {
      onUserInput(nextUserInput)
    }
  }

  const patternResult = calculational
    ? '^([$%]?\\d*\\.?\\d+)(?:\\s*([-+])\\s*([$%]?\\d*\\.?\\d+)?)?$'
    : '^[0-9]*[.,]?[0-9]*$'
  return (
    <InputField
      {...rest}
      readOnly={readOnly}
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        // replace commas with periods
        enforcer(event.target.value.replace(/,/g, '.'))
      }}
      // universal input options
      ref={inputRef}
      inputMode="decimal"
      title="Amount"
      autoComplete="off"
      autoCorrect="off"
      // text-specific options
      type="text"
      pattern={patternResult}
      placeholder={placeholder || '0.00'}
      min={0}
      minLength={1}
      maxLength={79}
      calculationMode={calculationMode}
      calculationLoading={calculationLoading}
      spellCheck="false"
      onKeyPress={onKeyPress}
      onKeyDown={onKeyDown}
      height={height}
    />
  )
}

const InputWrapper = styled.div<{
  width?: string
  smWidth?: string
}>`
  width: ${({ width }) => width ?? '100%'};
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #22263f;
  border-radius: 6px;
  gap: 8px;

  ${({ theme, smWidth }) => theme.mobileFirstMediaWidth.fromSmall`
    width: ${smWidth ?? '100%'};
  `}
`

const InputComponent = styled.input<{
  [x: string]: any
  calculationMode: boolean
  calculationLoading: boolean
  height?: string
}>`
  width: 100%;
  border: none;
  background: transparent;
  font-size: 12px;
  color: white;

  &:active,
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #646682;
  }

  ${({ theme }) => theme.mobileFirstMediaWidth.fromSmall`
    font-size: 14px;
  `}
`

export const ThemedInput = {
  WithRightIcon(props: InputHTMLAttributes<HTMLInputElement> & { icon: ReactNode; width?: string; smWidth?: string }) {
    return (
      <InputWrapper width={props.width} smWidth={props.smWidth}>
        <InputComponent {...props} />
        {props.icon}
      </InputWrapper>
    )
  },
}
