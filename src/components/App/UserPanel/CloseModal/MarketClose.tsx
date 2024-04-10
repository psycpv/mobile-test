import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { formatAmount } from 'utils/numbers'
import { RowBetween } from 'components/Row'
import SlippageTolerance from 'components/App/SlippageTolerance'
import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'
import Column from 'components/Column'

export const PriceWrap = styled(Column)`
  width: 100%;
  font-size: 13px;
  font-weight: 400;
  white-space: nowrap;
  border-radius: 6px;
  background: ${({ theme }) => theme.color3};
  position: relative;
  padding: 8px 12px;
  height: 60px;
  justify-content: space-between;
`
const Title = styled.div`
  color: ${({ theme }) => theme.almostWhite};
`

const MarketPrice = styled(Title)`
  height: 20px;
  font-size: 16px;
`
const PriceTapSymbol = styled(RowBetween)`
  color: ${({ theme }) => theme.tempPink};
  font-size: 14px;
  gap: 4px;
`

export default function MarketClose({ price, symbol }: { price: string | undefined; symbol?: string }) {
  const tokenLogo = useCurrencyLogo(symbol)

  return (
    <PriceWrap>
      <RowBetween>
        <Title>Market Price</Title>
        <SlippageTolerance width="112px" fontSize="10px" padding="1.5px 6px" />
      </RowBetween>
      <RowBetween margin="6px 0px 4px 0px">
        <MarketPrice>{formatAmount(price, 6)}</MarketPrice>
        <PriceTapSymbol width="initial">
          <Image src={tokenLogo} width={16} height={16} alt={`icon`} />
          {symbol}
        </PriceTapSymbol>
      </RowBetween>
    </PriceWrap>
  )
}
