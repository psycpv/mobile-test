import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

import { Market } from 'types/market'
import { useMarketsInfo } from 'state/hedger/hooks'

import MarketRow from './MarketRow'
import CurrencyRow from './CurrencyRow'
import Column from 'components/Column'
import MarketHeader from './MarketHeader'
import CurrencyHeader from './CurrencyHeader'
import { EmptySearch } from 'components/Icons'

const Body = styled(Column)`
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  min-height: 440px;
`

const EmptyRow = styled.div`
  text-align: center;
  margin: 110px auto;
  font-size: 14px;
`

export default function MarketsTable({
  markets,
  priceOnly,
  onDismiss,
  sIndex,
}: {
  markets: any[]
  priceOnly?: boolean
  onDismiss: () => void
  sIndex: number
}): JSX.Element | null {
  const tableRef = useRef<HTMLTableElement>(null)
  const DEFAULT_SORT_FIELD = 'symbol_id'

  const [selectedFavoriteSymbol, setSelectedFavoriteSymbol] = useState('')

  const [sortOrder, setSortOrder] = useState(true)
  const [sortField, setSortField] = useState(DEFAULT_SORT_FIELD)
  const { marketsInfo } = useMarketsInfo()

  useEffect(() => {
    if (tableRef.current) tableRef.current.scrollTop = 0
  }, [markets])

  const sortedMarkets = useMemo(() => {
    const sortedArray = markets.map((market: Market) => ({
      ...market,
      ...marketsInfo[market.name],
    }))

    sortedArray.sort((a: any, b: any) => {
      const _sortField = sortField ? sortField : DEFAULT_SORT_FIELD
      const valueA = sortOrder ? a[_sortField] : b[_sortField]
      const valueB = sortOrder ? b[_sortField] : a[_sortField]

      if (!valueA || !valueB) {
        return 0
      }

      const parsedValueA = parseFloat(valueA)
      const parsedValueB = parseFloat(valueB)

      if (!isNaN(parsedValueA) && !isNaN(parsedValueB)) {
        return parsedValueA - parsedValueB
      } else {
        return valueA.localeCompare(valueB)
      }
    })

    return sortedArray
  }, [marketsInfo, sortField, sortOrder, markets])

  const automaticScroll = useCallback(() => {
    const selected = tableRef?.current?.querySelector('.active')

    if (selected) {
      selected?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })
    }
  }, [])

  return sortedMarkets.length > 0 ? (
    <>
      {priceOnly ? (
        <CurrencyHeader
          sortField={sortField}
          sortOrder={sortOrder}
          setSortField={setSortField}
          setSortOrder={setSortOrder}
        />
      ) : (
        <MarketHeader
          sortField={sortField}
          sortOrder={sortOrder}
          setSortField={setSortField}
          setSortOrder={setSortOrder}
        />
      )}
      <Body ref={tableRef}>
        {sortedMarkets.map((market, index) =>
          priceOnly ? (
            <CurrencyRow
              key={market.id}
              market={market}
              onDismiss={onDismiss}
              index={index}
              sIndex={sIndex}
              automaticScroll={automaticScroll}
            />
          ) : (
            <MarketRow
              key={market.id}
              market={market}
              onDismiss={onDismiss}
              index={index}
              sIndex={sIndex}
              automaticScroll={automaticScroll}
              showFavoriteColorsModal={selectedFavoriteSymbol === market.symbol}
              setSelectedFavoriteSymbol={setSelectedFavoriteSymbol}
            />
          )
        )}
      </Body>
    </>
  ) : (
    <EmptyRow>
      <EmptySearch />
    </EmptyRow>
  )
}
