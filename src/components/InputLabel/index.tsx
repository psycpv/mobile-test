import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import { formatPrice, toBN } from 'utils/numbers'
import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'

import { RowBetween, RowEnd, RowStart } from 'components/Row'
import { ToolTip } from 'components/ToolTip'
import { Info as InfoIcon } from 'components/Icons'

export const Wrapper = styled(RowBetween)`
  width: 100%;
  font-size: 12px;
  height: 46px;
  font-weight: 400;
  white-space: nowrap;
  position: relative;
  border-radius: 6px;
  background: ${({ theme }) => theme.color3};
`

export const CurrencySymbol = styled(RowEnd)`
  font-size: 16px;
  font-weight: 500;
  width: unset;
  gap: 3px;
  color: ${({ theme }) => theme.almostWhite};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 12px;
  `}
`

const StyledInfoIcon = styled(InfoIcon)`
  color: ${({ theme }) => theme.text2};
  width: 12px;
  height: 12px;
  margin-bottom: -2px;
  cursor: default;
`

const LabelWrap = styled(RowStart)`
  padding-left: 10px;
  font-weight: 400;
  font-size: 14px;
  width: 150px;
  gap: 4px;
  color: ${({ theme }) => theme.coolGrey};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    white-space: normal;
    font-size: 12px;

  `}
`

const DataWrap = styled(RowEnd)<{ borderLeft?: boolean }>`
  gap: 4px;
  height: 100%;
  font-size: 16px;
  max-width: 282px;
  font-weight: 500;
  padding-right: 10px;
  white-space: normal;
  color: ${({ theme }) => theme.almostWhite};
  & > * {
    &:first-child {
      color: ${({ theme }) => theme.coolGrey};
    }
  }

  ${({ borderLeft, theme }) =>
    borderLeft &&
    `
    border-left: 1px solid ${theme.color2};

  `}

  ${({ theme }) => theme.mediaWidth.upToMedium`
    white-space: normal;
    font-size: 12px;

  `}
`

const CurrencyImage = styled.div`
  min-width: 16px;
  min-height: 16px;
  display: flex;
  justify-content: center;
`

const PositionDescription = styled.div`
  font-size: 14px;
`

export function DisplayLabel({
  value,
  label,
  tooltip,
  leverage,
  symbol,
  precision,
}: {
  value: number | string
  label: string | undefined
  leverage?: number
  symbol?: string
  tooltip?: string
  precision?: number
}) {
  const amount = isNaN(Number(value)) ? 0 : value
  const marketLogo = useCurrencyLogo(symbol)

  return (
    <Wrapper>
      <LabelWrap>
        <div>{label}:</div>
        <a data-tip data-for={label}>
          {tooltip && <StyledInfoIcon />}
          <ToolTip id={label} aria-haspopup="true">
            {tooltip}
          </ToolTip>
        </a>
      </LabelWrap>

      <DataWrap borderLeft={false}>
        <PositionDescription>({leverage && `${formatPrice(amount, 3)} x ${leverage}`})</PositionDescription>
        <div>{leverage ? formatPrice(toBN(amount).times(leverage), 3) : value}</div>

        <CurrencySymbol>
          <CurrencyImage>
            <Image src={marketLogo} width={16} height={16} alt={`icon`} />
          </CurrencyImage>
          {symbol}
        </CurrencySymbol>
      </DataWrap>
    </Wrapper>
  )
}
