import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'

import { DEFAULT_HEDGER } from 'constants/hedgers'

import { useMarket } from 'hooks/useMarkets'

export default function Trade() {
  const router = useRouter()
  const defaultMarket = useMarket(DEFAULT_HEDGER?.defaultMarketId)
  const defaultSymbol = useMemo(() => (defaultMarket ? defaultMarket.name : 'BTCUSDT'), [defaultMarket])
  const lastSymbol = localStorage.getItem('LAST_TRADE_SYMBOL')

  useEffect(() => {
    const symbol = lastSymbol ?? defaultSymbol
    router.push(`/trade/${symbol}`)
  }, [lastSymbol, defaultSymbol, router])

  return null
}
