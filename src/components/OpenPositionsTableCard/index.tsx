import { Card } from 'components/Card'
import React, { useMemo, useState } from 'react'
import { ThemedTables } from 'components/Table'
import useOpenPositionsInsights from 'hooks/useOpenPositionsInsights'

export const OpenPositionsTableCard = () => {
  const { processedOpenPositions, positionsTotalValue } = useOpenPositionsInsights()
  const visibleItemCount = 7

  const [pageIndex, setPageIndex] = useState(0)

  const processedOpenPositionsVisible = useMemo(() => {
    const startIndex = pageIndex * visibleItemCount
    return processedOpenPositions.slice(startIndex, startIndex + visibleItemCount)
  }, [processedOpenPositions, pageIndex])

  return (
    <Card maxHeight={'50vh'} alignSelf={'stretch'} flex={1}>
      <ThemedTables.OpenPositions
        data={processedOpenPositionsVisible}
        paginationProps={{
          onPageChange({ selected }) {
            setPageIndex(selected)
          },
          pageCount: Math.ceil(processedOpenPositions.length / visibleItemCount),
        }}
        positionsTotalValue={positionsTotalValue}
      ></ThemedTables.OpenPositions>
    </Card>
  )
}
