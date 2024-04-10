import styled from 'styled-components'

import { Row, RowCenter, RowStart } from 'components/Row'
import Column from 'components/Column'

export const Full = styled(Row)`
  height: 4px;
  overflow: hidden;
  margin-bottom: 10px;
  background: ${({ theme }) => theme.bg7};
`

export const Child = styled.div<{ color?: string; width?: string }>`
  height: 100%;
  background: ${({ color }) => (color ? color : 'none')};
  width: ${({ width }) => (width ? `${width}%` : 'none')};
`

export const ColoredBox = styled.div<{ color?: string }>`
  width: 8px;
  height: 8px;
  margin-right: 8px;
  background: ${({ color }) => (color ? color : 'none')};
`

export const Label = styled(RowStart)<{ color?: string }>`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  width: unset;
  white-space: nowrap;

  & > * {
    &:first-child {
      color: ${({ theme }) => theme.coolGrey};
    }
    &:nth-child(2) {
      margin-left: 4px;
      color: ${({ theme, color }) => color ?? theme.text1};
    }
  }
`

export const Amount = styled.div<{ color?: string; active?: boolean; hoverColor?: string }>`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: ${({ theme, color }) => (color ? color : theme.almostWhite)};
  ${({ active, hoverColor }) =>
    active &&
    `
    cursor: pointer;
    &:hover { 
      color: ${hoverColor};
    }
   `}

  span {
    text-decoration: underline;
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
    text-align: right;
  `};
`

export const Wrapper = styled(Column)`
  gap: 12px;
`

export const TabButton = styled(RowCenter)`
  flex: 1;
  height: 24px;
  text-align: center;
  font-size: 11px;
  font-weight: 400;
  border: solid 1px ${({ theme }) => theme.color5};
  border-radius: 6px;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.color4};
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color3};
  }
`
