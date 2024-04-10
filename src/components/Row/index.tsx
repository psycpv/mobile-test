import { Box } from 'rebass/styled-components'
import styled from 'styled-components'

export const Row = styled(Box)<{
  width?: string
  smWidth?: string
  smMinWidth?: string
  align?: string
  justify?: string
  margin?: string
  padding?: string
  border?: string
  gap?: string
  smGap?: string
  borderRadius?: string
}>`
  width: ${({ width }) => width ?? '100%'};
  display: flex;
  padding: 0;
  gap: ${({ gap }) => gap && `${gap}`};
  align-items: ${({ align }) => align ?? 'center'};
  justify-content: ${({ justify }) => justify ?? 'flex-start'};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};

  ${({ theme, smGap, smWidth, width, gap, smMinWidth }) => theme.mobileFirstMediaWidth.fromSmall`
    gap: ${smGap ?? gap};
    width: ${smWidth ?? width};
    min-width: ${smMinWidth ?? 'auto'};
  `}
`

export const AutoRow = styled(Row)<{ gap?: string; justify?: string }>`
  flex-wrap: wrap;
  margin: ${({ gap }) => gap && `${gap}`};
  justify-content: ${({ justify }) => justify && justify};

  & > * {
    margin: ${({ gap }) => gap} !important;
  }
`
export const RowBetween = styled(Row)`
  justify-content: space-between;
`
export const RowCenter = styled(Row)`
  justify-content: center;
`
export const RowStart = styled(Row)`
  justify-content: flex-start;
`
export const RowEnd = styled(Row)`
  justify-content: flex-end;
`
export const RowFixed = styled(Row)`
  width: fit-content;
`

export const FlexRow = styled(Row)<{ gap?: string }>`
  flex: 1;
  gap: ${({ gap }) => gap && `${gap}`};
`

export const ResponsiveRow = styled(Row)<{
  direction?: 'reverse' | 'normal'
}>`
  ${({ theme, direction }) => theme.mediaWidth.upToSmall`
    flex-direction: ${direction === 'reverse' ? 'column-reverse' : 'column'};
  `}
`

export const WrapRow = styled(Row)<{
  columnGap?: string
  rowGap?: string
}>`
  flex-wrap: wrap;
  row-gap: ${({ rowGap }) => rowGap && `${rowGap}`};
  column-gap: ${({ columnGap }) => columnGap && `${columnGap}`};
`
