import { useMemo, useState } from 'react'
import find from 'lodash/find'

import { useFavorites } from 'state/user/hooks'
import { Market } from 'types/market'
import { useErrorMessages, useMarkets } from 'state/hedger/hooks'
import { FavoritesColor } from 'state/user/types'
import symbols from 'constants/files/symbols.json'
import ALL_CATEGORIES from 'constants/files/categories.json'

const symbolsList: {
  [symbol: string]: string[]
} = symbols

const all_categories: {
  [symbol: string]: string[]
} = ALL_CATEGORIES

export function useMarket(id: number | undefined): Market | undefined {
  const markets = useMarkets()

  return useMemo(() => {
    if (!id) return undefined
    return find(markets, { id })
  }, [id, markets])
}

export function useMarketsSearch() {
  const markets = useMarkets()
  const favorites = useFavorites()

  const marketsFormatted = useMemo(() => {
    return markets.map((market: Market) => {
      const symbolNames = symbolsList[market.symbol] ?? []
      const assetNames = symbolsList[market.asset] ?? []
      return {
        ...market,
        marketName: symbolNames,
        keyword: [market.name, market.symbol, ...symbolNames, market.asset, ...assetNames],
      }
    })
  }, [markets])

  const [searchValue, setSearchValue] = useState('')
  const [category, setCategory] = useState<string[]>([])
  const searchResult = useMemo(() => {
    return marketsFormatted.filter((market: any) =>
      market.keyword.some((keyword: string) => keyword.toLowerCase().startsWith(searchValue.toLowerCase()))
    )
  }, [marketsFormatted, markets, searchValue])

  const favoritePinkMarkets = useMemo(
    () => searchResult.filter((market: Market) => favorites[FavoritesColor.PINK].indexOf(market.symbol) !== -1),
    [favorites, searchResult]
  )

  const favoriteBlueMarkets = useMemo(
    () => searchResult.filter((market: Market) => favorites[FavoritesColor.BLUE].indexOf(market.symbol) !== -1),
    [favorites, searchResult]
  )

  const favoriteGreenMarkets = useMemo(
    () => searchResult.filter((market: Market) => favorites[FavoritesColor.GREEN].indexOf(market.symbol) !== -1),
    [favorites, searchResult]
  )

  const newMarkets = useMemo(
    () => searchResult.filter((market: Market) => market.id > markets.length - 25),
    [markets.length, searchResult]
  )

  const categoryMarkets = useMemo(
    () =>
      searchResult.filter(
        (market: Market) =>
          category.length === 0 ||
          (all_categories[market.symbol as string] &&
            all_categories[market.symbol as string].some((value) => category.includes(value)))
      ),
    [searchResult, category]
  )

  return useMemo(
    () => ({
      markets: searchResult,
      favoritePinkMarkets,
      favoriteBlueMarkets,
      favoriteGreenMarkets,
      newMarkets,
      searchValue,
      setSearchValue,
      category,
      setCategory,
      categoryMarkets,
    }),
    [
      searchResult,
      favoritePinkMarkets,
      favoriteBlueMarkets,
      favoriteGreenMarkets,
      newMarkets,
      searchValue,
      category,
      setCategory,
      categoryMarkets,
    ]
  )
}

export function useErrorMessage(code: number | null): string | undefined {
  const messages = useErrorMessages()
  return useMemo(() => {
    if (!code) return undefined
    return messages[code]
  }, [code, messages])
}
