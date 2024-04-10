import { useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import find from 'lodash/find'

import { Market } from 'types/market'
import { DEFAULT_HEDGER } from 'constants/hedgers'
import { useMarkets } from 'state/hedger/hooks'
import { useActiveMarket, useActiveMarketPrice, useSetMarketId } from 'state/trade/hooks'
import { useMarket } from 'hooks/useMarkets'

export function UpdaterRoot() {
  const market = useActiveMarket()
  const price = useActiveMarketPrice()
  useEffect(() => {
    document.title = !market
      ? 'Loading...'
      : price
      ? `$${price} | ${market.symbol} | Vibe Trading`
      : `${market.symbol} | Vibe Trading`
  }, [price, market])

  const markets = useMarkets()
  const updateMarketId = useSetMarketId()
  const marketFromURL = useValidatedSymbolFromURL(markets)
  useRedirectIfInvalidSymbol(markets)
  useEffect(() => {
    if (marketFromURL) {
      updateMarketId(marketFromURL.id)
    }
  }, [updateMarketId, marketFromURL])

  return null
}

function useRedirectIfInvalidSymbol(markets: Market[]) {
  const router = useRouter()
  const market = useValidatedSymbolFromURL(markets)
  const symbol = router.query.symbol

  const defaultMarket = useMarket(DEFAULT_HEDGER?.defaultMarketId)
  const defaultSymbol = useMemo(() => (defaultMarket ? defaultMarket.name : 'BTCUSDT'), [defaultMarket])

  useEffect(() => {
    if (markets.length > 0 && !market) {
      router.push(`/trade/${defaultSymbol}`)
    }
  }, [router, market, symbol, markets, defaultSymbol])

  return null
}

function useValidatedSymbolFromURL(markets: Market[]): Market | null {
  const router = useRouter()

  const parsedSymbol: string | null = useMemo(() => {
    const symbol = router.query?.symbol || undefined
    return typeof symbol === 'string' ? symbol : null
  }, [router])

  return useMemo(() => {
    if (!parsedSymbol) {
      return null
    }
    const va = find(markets, { name: parsedSymbol })

    return va ?? null
  }, [parsedSymbol, markets])
}
