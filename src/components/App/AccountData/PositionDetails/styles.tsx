import styled from 'styled-components'

import Column, { ColumnCenter } from 'components/Column'
import { Row as RowComponent, RowBetween, RowCenter, RowEnd, RowStart } from 'components/Row'
import { PnlValue } from 'components/App/UserPanel/Common'
import { ChevronDown, NextIcon } from 'components/Icons'
import { PositionType } from 'types/trade'

export const QuoteDetailWrapper = styled(Column)<{
  positionType: PositionType
}>`
  width: 100%;
  overflow-y: auto;
  background: ${({ theme }) => theme.color3};
  font-size: 14px;
  padding-top: 20px;
  border-left: 2px solid ${({ positionType, theme }) => (positionType === PositionType.LONG ? theme.blue : theme.pink)};
  &::-webkit-scrollbar {
    width: 8px;
    display: block;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.primaryDarkBg};
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primaryBlue};
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.primaryDisable};
  }
`

export const TopWrap = styled(RowComponent)`
  height: 50px;
  padding: 13px 12px 10px;
  background: ${({ theme }) => theme.color2};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    height: unset;
    background: ${theme.color2};
  `};
`

export const TopWrapQuote = styled(RowComponent)`
  max-height: 168px;
  padding: 10px 10px 10px 0;
  margin-top: 3px;
  background: ${({ theme }) => theme.color3};
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    height: unset;
    background: ${theme.color3};
  `};
`

export const QuoteMobileLeftLine = styled(RowComponent)<{
  positionType: PositionType
}>`
  width: initial;
  height: 170px;
  margin-right: 10px;
  border-left: 1px solid ${({ positionType, theme }) => (positionType === PositionType.LONG ? theme.blue : theme.pink)};
`

export const DataWrap = styled.div`
  display: flex;
  padding: 20px 12px;
  flex-flow: column nowrap;
  position: relative;
  background: ${({ theme }) => theme.color3};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    background: ${theme.color3};
  `};
`

export const Chevron = styled(ChevronDown)<{ open: boolean }>`
  transform: rotateX(${({ open }) => (open ? '180deg' : '0deg')});
  margin-right: 4px;
  margin-bottom: 12px;
  margin-top: auto;
`

export const EmptyRow = styled(ColumnCenter)`
  font-weight: 400;
  font-size: 14px;
  padding: 21px 0px;
  color: ${({ theme }) => theme.coolGrey};
  background: ${({ theme }) => theme.color2};
`

export const FlexColumn = styled(Column)<{ flex: number; alignItems: string }>`
  align-self: stretch;
  justify-content: space-between;
  align-items: ${({ alignItems }) => alignItems};
  flex: ${({ flex }) => flex};
`

export const ContentWrapper = styled(DataWrap)`
  margin-top: 1px;
  margin-bottom: 35px;
  background: ${({ theme }) => theme.color3};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    margin-bottom: unset;
  `};
`

export const Row = styled(RowBetween)`
  flex-flow: row nowrap;
  margin: 8px 0px;
  gap: 8px;
`

export const RowPnl = styled(RowStart)`
  flex-flow: row nowrap;
  margin: 8px 0px;
  gap: 8px;
`

export const PositionInfoBox = styled(RowBetween)`
  max-height: 40px;
  font-weight: 500;
  font-size: 12px;
  color: ${({ theme }) => theme.primaryPink};
`

export const PositionMobileRow = styled(PositionInfoBox)<{ position?: boolean }>`
  ${({ position }) =>
    position
      ? `& > * {
      width: 50%;     
      }`
      : `& > * {
        width: 30%;
        &:first-child {
        width: 45%;
  }
}`}
`

export const MarketNameQuote = styled(RowStart)<{ expired?: boolean }>`
  font-weight: 700;
  font-size: 20px;
  width: unset;
  color: ${({ theme, expired }) => (expired ? theme.warning : theme.almostWhite)};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 14px;
  `};
`

export const Leverage = styled(RowCenter)`
  width: 28px;
  height: 20px;
  font-weight: 700;
  font-size: 12px;
  margin-left: 12px;
  color: ${({ theme }) => theme.almostWhite};
  background: ${({ theme }) => theme.color3};
  border-radius: 2px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    width: 26px;
    margin-left: 10px;
    background: ${({ theme }) => theme.color2};
  `};
`

export const QuoteData = styled(Row)`
  width: 63px;
  height: 20px;
  gap: 5px;
  font-size: 10px;
  padding: 0px 4px;
  padding-top: 1px;
  margin-right: 8px;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.color3};
  border-radius: 2px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    width: 20px;
    gap: 1px;
  `};
`

export const Label = styled.div`
  font-weight: 400;
  font-size: 14px;
  justify-self: start;
  color: ${({ theme }) => theme.coolGrey};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 12px;
  `};
`

export const Value = styled(RowEnd)`
  width: unset;
  gap: 4px;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.almostWhite};

  & > * {
    &:nth-child(2) {
      font-weight: 400;
      color: ${({ theme }) => theme.almostWhite};
    }
  }
  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 13px;
    justify-content: flex-start;
  `};
`

export const PositionPnl = styled(PnlValue)`
  font-weight: 400;
  font-size: 14px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 12px;
  `};
`

export const Bar = styled.div`
  height: 2px;
  width: calc(100% - 24px);
  margin-left: 12px;
  background-color: ${({ theme }) => theme.color2};
`

export const PreviousIcon = styled(NextIcon)`
  rotate: 180deg;
`
