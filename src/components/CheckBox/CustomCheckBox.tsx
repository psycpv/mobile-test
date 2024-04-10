import styled, { useTheme } from 'styled-components'
import { RowFixed } from 'components/Row'
import { ThemedText } from 'components/Text'
import { CheckMark } from 'components/Icons'

const Text = styled(ThemedText.Main)`
  white-space: nowrap;
`

const Wrapper = styled(RowFixed)`
  cursor: pointer;
`

const CheckBox = styled.div<{ checked?: boolean; width: number; checkColor?: string }>`
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  border-width: 2px;
  border-style: solid;
  border-radius: 3px;
  border-color: ${({ theme, checkColor }) => checkColor ?? theme.pink};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ checked, checkColor, theme }) => (checked ? checkColor ?? theme.pink : theme.color3)};
`

export default function CustomCheckbox({
  checked,
  label,
  onClick,
  textColor,
  checkColor,
  fontSize,
  checkSize,
}: {
  checked?: boolean
  label: string | JSX.Element
  onClick?: () => void
  textColor?: string
  checkColor?: string
  fontSize?: number
  checkSize?: number
}) {
  const theme = useTheme()

  return (
    <Wrapper gap="6px" onClick={onClick}>
      <CheckBox checkColor={checkColor} checked={checked} width={checkSize ? checkSize : 24}>
        {checked && <CheckMark color={theme.color3} />}
      </CheckBox>
      <Text fontSize={fontSize ? fontSize : 16} color={textColor ? textColor : 'white'}>
        {label}
      </Text>
    </Wrapper>
  )
}
