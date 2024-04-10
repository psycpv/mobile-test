import { InnerCard } from 'components/Card'
import styled from 'styled-components'
import { SummaryInfo } from 'components/SummaryInfo'
import React from 'react'
import { ThemedText } from 'components/Text'
import { Box } from 'rebass/styled-components'

interface SummaryBoxProps {
  title: string
  value: React.ReactNode
  percentage: string | number | null | undefined
  loading?: boolean
  breakLine?: boolean
}

const SummaryBoxCard = styled(InnerCard)`
  border-radius: 4px;
  flex: 1;
  padding-right: 4px;
  align-self: stretch;
`

const SummaryBoxCardLarge = styled(Box)<{
  background: string
}>`
  border-radius: 6px;
  flex: 1;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: 16px 24px 14px 24px;
  gap: 12px;
  background: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${({ theme }) => theme.mobileFirstMediaWidth.fromSmall`
    padding: 18px 30px 28px 40px;
    gap: 18px;
  `}
`

export const ThemedSummaryBox = {
  Simple({ title, value, percentage, loading, breakLine }: SummaryBoxProps) {
    return (
      <SummaryBoxCard>
        <SummaryInfo title={title} value={value} percentage={percentage} loading={loading} breakLine={breakLine} />
      </SummaryBoxCard>
    )
  },
  Large({ title, value, background }: { title: string; value: React.ReactNode; background: string }) {
    return (
      <SummaryBoxCardLarge background={background}>
        <ThemedText.P3>{title}</ThemedText.P3>
        <ThemedText.H2 marginLeft="auto">{value}</ThemedText.H2>
      </SummaryBoxCardLarge>
    )
  },
}
