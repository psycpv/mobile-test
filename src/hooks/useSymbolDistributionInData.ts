import { useMemo } from 'react'
import { SymbolDistribution } from 'types/chart'

export default function useSymbolDistributionInData<T extends { symbol: string | undefined }>({
  data,
  totalValue,
  dataKey,
}: {
  data: T[] | null
  totalValue: number | null
  dataKey: keyof T
}): SymbolDistribution[] {
  return useMemo(() => {
    if (!data || !totalValue) return []
    const colors = [
      'red',
      'blue',
      'green',
      'pink',
      '#00B3E6',
      '#E6B333',
      '#3366E6',
      '#999966',
      '#99FF99',
      '#B34D4D',
      '#80B300',
      '#809900',
      '#E6B3B3',
      '#6680B3',
      '#66991A',
      '#FF99E6',
      '#CCFF1A',
      '#FF1A66',
      '#E6331A',
      '#33FFCC',
    ]
    return data.reduce((acc, item) => {
      const found = acc.find((i) => i.name === item.symbol ?? '-')
      const value = Number(item[dataKey])
      const percentOfTotal = (value * 100) / totalValue
      if (value) {
        if (found) {
          found.value += value
          found.percentOfTotal += percentOfTotal
        } else {
          acc.push({
            id: acc.length,
            name: item.symbol ?? '-',
            value,
            percentOfTotal,
            fill: colors[acc.length % colors.length],
          })
        }
      }

      return acc
    }, [] as SymbolDistribution[])
  }, [data, dataKey, totalValue])
}
