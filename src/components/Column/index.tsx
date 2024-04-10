import styled from 'styled-components'

export const Column = styled.div<{
  height?: string
  minWidth?: string
  width?: string
  justifyContent?: string
  gap?: string
  marginBottom?: string
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? '0'};
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
  ${({ height }) => height && `height: ${height};`}
    ${({ gap }) => gap && `gap: ${gap};`}
    ${({ width }) => width && `width: ${width};`}
`
export const ColumnCenter = styled(Column)`
  align-items: center;
`

export const AutoColumn = styled.div<{
  gap?: 'sm' | 'md' | 'lg' | string
  justify?: 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'space-between'
  marginBottom?: string
}>`
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: ${({ gap }) => (gap === 'sm' && '8px') || (gap === 'md' && '12px') || (gap === 'lg' && '24px') || gap};
  justify-items: ${({ justify }) => justify && justify};

  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
`

export const FlexColumn = styled(Column)<{
  gap?: 'sm' | 'md' | 'lg' | string
  smGap?: string
  flex?: number | string
  align?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'space-between'
  minWidth?: string
  maxWidth?: string
}>`
  flex: ${({ flex }) => flex ?? 1};
  gap: ${({ gap }) => (gap === 'sm' && '8px') || (gap === 'md' && '12px') || (gap === 'lg' && '24px') || gap};
  align-items: ${({ align }) => align && align};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};

  ${({ theme, gap, smGap }) => theme.mobileFirstMediaWidth.fromSmall`
    gap: ${smGap ?? ((gap === 'sm' && '8px') || (gap === 'md' && '12px') || (gap === 'lg' && '24px') || gap)};
  `}
`

export default Column
