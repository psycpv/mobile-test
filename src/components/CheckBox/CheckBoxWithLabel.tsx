import styled from 'styled-components'
import { Row } from 'components/Row'
import Checkbox from '.'

const Text = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.almostWhite};

  &:hover {
    cursor: pointer;
  }
`

export default function CheckBoxWithLabel({
  checked,
  label,
  onChange,
  name,
  id,
  disabled,
}: {
  checked?: boolean
  label: string | JSX.Element
  onChange: (...arg: any) => void
  name?: string | undefined
  id?: string | undefined
  disabled?: boolean
}) {
  return (
    <Row>
      <Checkbox id={id} disabled={disabled} name={name} checked={checked} onChange={onChange} />
      <Text onClick={onChange}>{label}</Text>
    </Row>
  )
}
