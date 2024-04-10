import React from 'react'

import { toBN } from 'utils/numbers'

import { Quote } from 'types/quote'
import { useMarket } from 'hooks/useMarkets'
import { CustomInputBox2 } from 'components/InputBox'

export default function LimitClose({
  quote,
  price,
  setPrice,
  marketPrice,
  symbol,
  balanceTitle,
}: {
  quote: Quote | null
  price: string
  setPrice: (s: string) => void
  marketPrice: string | null | undefined
  symbol?: string
  balanceTitle?: string
}) {
  const { pricePrecision } = useMarket(quote?.marketId) || {}

  return (
    <CustomInputBox2
      title={'Price'}
      symbol={symbol}
      placeholder="0"
      precision={pricePrecision}
      balanceTitle={balanceTitle ?? 'Offer Price:'}
      balanceDisplay={marketPrice && pricePrecision ? toBN(marketPrice).toFixed(pricePrecision) : '0'}
      balanceExact={marketPrice && pricePrecision ? toBN(marketPrice).toFixed(pricePrecision) : '0'}
      onChange={setPrice}
      value={price}
      height={'20px'}
      closeModal={true}
    />
  )
}
