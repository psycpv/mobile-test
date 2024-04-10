import { ThemedText } from 'components/Text'
import { WrapRow } from 'components/Row'
import { Column } from 'components/Column'
import React from 'react'
import { useTheme } from 'styled-components'

interface SummaryBoxProps {
  title: string
  value: React.ReactNode
  percentage?: string | number | null
  minWidth?: string
  loading?: boolean
  breakLine?: boolean
}

export const SummaryInfo = ({ title, value, percentage, minWidth, loading, breakLine }: SummaryBoxProps) => {
  const theme = useTheme()

  const content = (
    <>
      <ThemedText.P6>{value}</ThemedText.P6>
      {percentage !== null && percentage !== undefined && (
        <ThemedText.P6
          color={Number(percentage) > 0 ? theme.green2 : Number(percentage) < 0 ? theme.red5 : theme.coolGrey}
        >
          {percentage}%
        </ThemedText.P6>
      )}
    </>
  )
  return (
    <Column minWidth={minWidth}>
      <ThemedText.EasternBlue fontSize={14} marginBottom={'8px'}>
        {title}
      </ThemedText.EasternBlue>
      {loading ? '...' : breakLine ? <Column>{content}</Column> : <WrapRow columnGap="4px">{content}</WrapRow>}
    </Column>
  )
}
