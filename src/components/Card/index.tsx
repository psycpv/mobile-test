import styled from 'styled-components'
import Column from 'components/Column'
import { WrapRow } from 'components/Row'

export const Card = styled(Column)<{
  padding?: string
  paddingX?: string
  paddingY?: string
  maxHeight?: string
  alignSelf?: string
  borderRadius?: string
  flex?: number
  background?: string
}>`
  background: ${({ theme, background }) => (background ? `url(${background})` : theme.color2)};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: ${({ borderRadius }) => borderRadius ?? '4px'};
  padding: ${({ padding }) => padding ?? '16px'};
  padding-top: ${({ paddingY }) => paddingY};
  padding-bottom: ${({ paddingY }) => paddingY};
  padding-left: ${({ paddingX }) => paddingX};
  padding-right: ${({ paddingX }) => paddingX};
  overflow: hidden;
  max-height: ${({ maxHeight }) => maxHeight ?? '100%'};
  overflow-y: auto;
  align-self: ${({ alignSelf }) => alignSelf ?? 'auto'};
  height: ${({ height }) => height ?? 'auto'};
  flex: ${({ flex }) => (flex ? flex : '')};

  ${({ theme, padding }) => theme.mediaWidth.upToMedium`
    padding: ${padding ? padding : '16px'};
  `}
`

export const InnerCard = styled(Column)<{
  borderRadius?: string
}>`
  background: ${({ theme }) => theme.color3};
  padding: 12px;
  padding-bottom: 8px;
  overflow: hidden;
  border-radius: ${({ borderRadius }) => borderRadius ?? '0px'};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 10px;
  `}
`

export const WrapFlexCard = styled(WrapRow)<{
  padding?: string
  maxHeight?: string
}>`
  background: ${({ theme }) => theme.color2};
  border-radius: 4px;
  padding: ${({ padding }) => padding ?? '16px'};
  overflow: hidden;
  max-height: ${({ maxHeight }) => maxHeight ?? '100%'};
  overflow-y: auto;

  ${({ theme, padding }) => theme.mediaWidth.upToMedium`
    padding: ${padding ? padding : '16px'};
  `}
`

export const WrapFlexInnerCard = styled(WrapRow)`
  background: ${({ theme }) => theme.color3};
  padding: 12px;
  padding-bottom: 8px;
  overflow: hidden;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 10px;
  `}
`
