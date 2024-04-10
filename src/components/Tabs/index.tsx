import { ThemedButton } from 'components/Button'
import { ThemedText } from 'components/Text'
import { FlexRow } from 'components/Row'
import React from 'react'
import { Color } from 'theme/styled'
import { useTheme } from 'styled-components'

interface TabsStyleInterface {
  color: Color
}

export const Tabs = ({
  options,
  styles,
  onChange,
  value,
}: {
  options: string[]
  styles?: TabsStyleInterface[]
  onChange: (value: string) => void
  value: string
}) => {
  const theme = useTheme()

  return (
    <FlexRow gap="24px">
      {options.map((option, index) => (
        <ThemedButton.SelectText key={index} onClick={() => onChange(option)} isSelect={value === option}>
          <ThemedText.P2 color={styles ? styles[index].color : theme.pink1}>{option}</ThemedText.P2>
        </ThemedButton.SelectText>
      ))}
    </FlexRow>
  )
}
