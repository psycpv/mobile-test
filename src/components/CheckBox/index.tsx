import styled, { keyframes } from 'styled-components'

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`

const Label = styled.label<{ disabled?: boolean }>`
  position: relative;
  display: inline-block;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin-left: 8px;
  font-size: 12px;
  font-weight: 400;
`

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`

const Indicator = styled.div<{ checked?: boolean }>`
  width: 14px;
  height: 14px;
  background: ${({ theme }) => theme.bg4};
  position: absolute;
  top: 0em;
  left: -1.6em;
  border-radius: 2px;

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 2px;
    left: 5px;
    width: 30%;
    height: 60%;
    border: solid black;
    border-width: 0 0.2em 0.2em 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
  &::disabled {
    cursor: not-allowed;
  }
`

export default function Checkbox({
  checked,
  onChange,
  name,
  id,
  disabled,
}: {
  checked?: boolean
  onChange: (...arg: any) => void
  name?: string | undefined
  id?: string | undefined
  disabled?: boolean
}) {
  return (
    <Label htmlFor={id} disabled={disabled}>
      <Input id={id} type="checkbox" name={name} checked={checked} onChange={onChange} disabled={disabled} />
      <Indicator checked={checked} />
    </Label>
  )
}
