import styled from 'styled-components'
import { RowBetween, RowCenter, RowStart } from 'components/Row'
import { Column } from 'components/Column'
import { PositionType } from 'types/trade'

export const Wrapper = styled.div`
  overflow-y: scroll;
  margin-bottom: 50px;
  padding: 0 10px;
  background: ${({ theme }) => theme.color2};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    margin-bottom: 44px;
  `};
`

export const BodyWrap = styled(Column)`
  background: ${({ theme }) => theme.color2};
  gap: 1px;
  flex: 1;
`

export const Structure = styled(RowBetween)`
  color: ${({ theme }) => theme.text2};
  font-size: 13px;
  font-weight: 400;
`

export const PositionTypeWrap = styled(RowStart)`
  min-width: 15px;
  height: 15px;
  width: unset;
  margin-right: 12px;
`

export const PositionLeverageWrap = styled(RowCenter)<{ liquidatePending?: boolean }>`
  max-width: 26px;
  height: 20px;
  padding: 12px 16px;
  font-weight: 600;
  font-size: 12px;
  border-radius: 3px;
  background: ${({ theme, liquidatePending }) => (liquidatePending ? theme.red1 : theme.color2)};
  color: ${({ theme, liquidatePending }) => (liquidatePending ? theme.text0 : theme.almostWhite)};
`

export const EmptyRow = styled(Column)`
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.coolGrey};
  background: ${({ theme }) => theme.color2};
`

export const EmptyPositionRow = styled(EmptyRow)`
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const PnlValue = styled.div<{
  color?: string
  size?: string
}>`
  color: ${({ theme, color }) => color ?? theme.text0};
  ${({ size }) =>
    size &&
    `
      font-size: ${size};
  `}

  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 10px;
  `};
`

export const LeftLine = styled.div<{
  positionType: PositionType
}>`
  height: 45px;
  width: 10px;
  border-left: 2px solid ${({ positionType, theme }) => (positionType === PositionType.LONG ? theme.blue : theme.pink)};
`

export const MarketName = styled(RowStart)`
  max-width: 110px;
  font-weight: 700;
  & > * {
    &:first-child {
      color: ${({ theme }) => theme.almostWhite};
    }
    &:last-child {
      color: ${({ theme }) => theme.almostWhite};
    }
  }
  &:hover {
    text-decoration: underline;
  }
`

export const QuoteStatusValue = styled.div<{
  liq: boolean
  expired: boolean
}>`
  white-space: nowrap;
  color: ${({ theme, liq, expired }) => (liq ? theme.red1 : expired ? theme.pink : theme.coolGrey)};
`

export const ShareWrapper = styled.div`
  width: 25px;
  height: 100%;
  align-items: center;
  display: flex;
  margin-right: 15px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    filter: brightness(0) invert(1);
  }
`
