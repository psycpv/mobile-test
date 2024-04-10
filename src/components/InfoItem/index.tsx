import { useCallback } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'

import { RowBetween, RowStart } from 'components/Row'
import { ToolTip } from 'components/ToolTip'
import { Info as InfoIcon } from 'components/Icons'
import ShimmerAnimation from 'components/ShimmerAnimation'

const StyledInfoIcon = styled(InfoIcon)`
  color: ${({ theme }) => theme.text2};
  width: 12px;
  height: 12px;
  margin: 4px 4px 0px 4px;
  cursor: default;
`

export const DataRow = styled(RowBetween)<{ closeModal?: boolean }>`
  flex-flow: row nowrap;
  padding: 0px 3px;
  ${({ closeModal }) =>
    closeModal &&
    `  gap: 15px;
       display: flex;
  `}
`

export const Label = styled(RowStart)<{ size?: string; color?: string }>`
  font-size: ${({ size }) => size ?? '14px'};
  justify-self: start;
  font-weight: 400;
  width: 50%;
  color: ${({ theme, color }) => color ?? theme.coolGrey};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 12px;
  `};
`

export const Value = styled.div<{ color?: string; cursor?: string; size?: string }>`
  display: flex;
  gap: 4px;
  justify-self: end;
  white-space: nowrap;
  font-size: ${({ size }) => size ?? '14px'};
  color: ${({ theme, color }) => color ?? theme.almostWhite};
  cursor: ${({ cursor }) => cursor ?? 'default'};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 10px;
  `};
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 16px;
  min-height: 16px;
  margin: 0px 0px 0px 6px;
`

export default function InfoItem({
  label,
  amount,
  ticker,
  tooltip,
  valueColor,
  labelColor,
  onClick,
  balanceExact,
  fontSize,
  loading,
  symbol,
}: {
  label: string
  amount: string
  ticker?: string
  tooltip?: string
  valueColor?: string
  labelColor?: string
  onClick?: (amount: string) => void
  balanceExact?: string
  fontSize?: string
  loading?: boolean
  symbol?: string
}): JSX.Element {
  const handleClick = useCallback(() => {
    if (!balanceExact || !onClick) return
    onClick(balanceExact.toString())
  }, [balanceExact, onClick])
  const marketLogo = useCurrencyLogo(symbol)

  const cursor = onClick ? 'pointer' : undefined
  return (
    <DataRow>
      <Label size={fontSize} color={labelColor}>
        {label}
        <a data-tip data-for={label}>
          {tooltip && <StyledInfoIcon />}
          <ToolTip id={label} aria-haspopup="true">
            {tooltip}
          </ToolTip>
        </a>
        {/* {tooltip && <>:</>} */}
      </Label>
      {loading ? (
        <ShimmerAnimation width="68px" height="17px" />
      ) : (
        <Value onClick={handleClick} color={valueColor} cursor={cursor} size={fontSize}>
          <span>{amount}</span>
          {symbol && (
            <ImageWrapper>
              <Image src={marketLogo} width={16} height={16} alt={`icon`} />
            </ImageWrapper>
          )}
          <span>{ticker && ` ${ticker}`}</span>
        </Value>
      )}
    </DataRow>
  )
}
