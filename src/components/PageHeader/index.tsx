import styled from 'styled-components'
import { ThemedButton } from 'components/Button'
import { WrapRow } from 'components/Row'

export const HeaderActionPrimary = styled(ThemedButton.Primary)`
  display: none !important;

  ${({ theme }) => theme.mobileFirstMediaWidth.fromSmall`
    display: flex !important;
  `}
`

export const HeaderActionSecondary = styled(ThemedButton.Secondary)`
  display: none !important;

  ${({ theme }) => theme.mobileFirstMediaWidth.fromSmall`
    display: flex !important;
  `}
`

export const PageHeader = styled(WrapRow)`
  margin-top: 1.5rem;
  margin-bottom: 1rem;

  ${({ theme }) => theme.mobileFirstMediaWidth.fromSmall`
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  `}

  > :first-child {
    margin-right: auto;
  }
`
