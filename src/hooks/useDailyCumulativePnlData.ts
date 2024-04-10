import { useCallback, useEffect, useMemo, useState } from 'react'
import { CumulativePnlData, DailyAndCumulativePnlData, DailyPnlData, UserHistorySubgraphResultItem } from 'types/user'
import { getUserHistoryQueryCall } from 'apollo/service'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useActiveAccountAddress } from 'state/user/hooks'
import { useTimeRangeFilterContext } from 'context/TimeRangeFilterContext'

export default function useDailyCumulativePnlData() {
  const { endOfToday, filterRange } = useTimeRangeFilterContext()

  const [historyItems, setHistoryItems] = useState<UserHistorySubgraphResultItem[] | null>(null)
  const { chainId } = useActiveWeb3React()
  const activeAccountAddress = useActiveAccountAddress()

  const startTimestamp = useMemo(() => {
    if (historyItems === null || !historyItems[0]) return null
    const timestamp = Number(historyItems[0].timestamp)
    const date = new Date(timestamp * 1000)
    date.setHours(0, 0, 0, 0)
    return date.getTime() / 1000
  }, [historyItems])

  useEffect(() => {
    async function getAllHistoryItems() {
      if (!chainId || !activeAccountAddress) return
      let skip = 0
      const result: UserHistorySubgraphResultItem[] = []
      let chunkResult: UserHistorySubgraphResultItem[] = []
      do {
        chunkResult = await getUserHistoryQueryCall({
          chainId,
          account: activeAccountAddress,
          skip,
          first: 1000,
          startDate: '0',
          endDate: String(endOfToday),
        })
        result.push(...chunkResult)
        skip += chunkResult.length
      } while (chunkResult.length === 1000 && skip <= 5000)
      setHistoryItems(result)
    }

    getAllHistoryItems()
  }, [activeAccountAddress, chainId, endOfToday])

  const dailyPnlData = useMemo(() => {
    if (historyItems === null || startTimestamp === null) return null
    const dailyData: DailyPnlData[] = []
    for (let dayStartTime = startTimestamp; dayStartTime < endOfToday; dayStartTime += 86400) {
      const historyItemsFiltered = historyItems.filter(
        (item) => Number(item.timestamp) >= dayStartTime && Number(item.timestamp) < dayStartTime + 86400
      )
      const profit = historyItemsFiltered.reduce((a, c) => a + Number(c.profit), 0)
      const loss = historyItemsFiltered.reduce((a, c) => a + Number(c.loss), 0)
      const pnl = profit + loss
      const netTransfer = historyItemsFiltered.reduce((a, c) => a + (Number(c.allocate) - Number(c.deallocate)), 0)
      dailyData.push({
        date: new Date(dayStartTime * 1000),
        profit,
        loss,
        pnl,
        netTransfer,
      })
    }
    return dailyData
  }, [historyItems, startTimestamp, endOfToday])

  const daysCount = useMemo(() => {
    if (dailyPnlData === null) return null
    return dailyPnlData.length
  }, [dailyPnlData])

  const daysIndex = useMemo(() => {
    if (startTimestamp === null || daysCount === null) return undefined
    const startIndex = Math.floor((filterRange.startTimestamp - startTimestamp) / 86400)
    const endIndex = daysCount - Math.floor((endOfToday - filterRange.endTimestamp) / 86400)
    return [Math.max(0, startIndex), Math.min(daysCount, endIndex)]
  }, [daysCount, filterRange, endOfToday, startTimestamp])

  const dailyCumulativePnlDataForRange = useMemo(() => {
    if (!dailyPnlData || !daysIndex) return null
    const dailyCumulativeData: DailyAndCumulativePnlData[] = []
    const startIndex = daysIndex[0]
    const endIndex = daysIndex[1]
    const cumulativeNetTransferAll = dailyPnlData.reduce((a, c) => a + c.netTransfer, 0)

    for (let i = startIndex; i < endIndex; i++) {
      const cumulativeProfit =
        i > startIndex
          ? dailyCumulativeData[i - startIndex - 1].cumulativeProfit + dailyPnlData[i].profit
          : dailyPnlData[i].profit
      const cumulativeLoss =
        i > startIndex
          ? dailyCumulativeData[i - startIndex - 1].cumulativeLoss + dailyPnlData[i].loss
          : dailyPnlData[i].loss
      const cumulativePnl =
        i > startIndex
          ? dailyCumulativeData[i - startIndex - 1].cumulativePnl + dailyPnlData[i].pnl
          : dailyPnlData[i].pnl
      const cumulativeNetTransfer =
        i > startIndex
          ? dailyCumulativeData[i - startIndex - 1].cumulativeNetTransfer + dailyPnlData[i].netTransfer
          : dailyPnlData[i].netTransfer
      dailyCumulativeData.push({
        ...dailyPnlData[i],
        cumulativeProfit,
        cumulativeLoss,
        cumulativePnl,
        cumulativeNetTransfer,
        cumulativePnlPercent: cumulativeNetTransferAll
          ? cumulativePnl / (cumulativeNetTransferAll / (i - startIndex))
          : 0,
      })
    }
    return dailyCumulativeData
  }, [dailyPnlData, daysIndex])

  const getCumulativePnlForDaysRange = useCallback(
    (startDayIndex: number, endDayIndex?: number): CumulativePnlData | null => {
      if (!dailyPnlData) return null
      const filteredData: DailyPnlData[] =
        endDayIndex !== undefined && endDayIndex < startDayIndex ? [] : dailyPnlData.slice(startDayIndex, endDayIndex)
      const cumulativeProfit = filteredData.reduce((a, c) => a + c.profit, 0)
      const cumulativeLoss = filteredData.reduce((a, c) => a + c.loss, 0)
      const cumulativePnl = filteredData.reduce((a, c) => a + c.pnl, 0)
      const cumulativeNetTransfer = filteredData.reduce((a, c) => a + c.netTransfer, 0)
      const cumulativeNetTransferAll = dailyPnlData.reduce((a, c) => a + c.netTransfer, 0)
      return {
        cumulativeProfit,
        cumulativeLoss,
        cumulativePnl,
        cumulativeNetTransfer,
        cumulativePnlPercent: cumulativeNetTransferAll
          ? cumulativePnl / (cumulativeNetTransferAll / ((endDayIndex ?? dailyPnlData.length) - startDayIndex))
          : 0,
      }
    },
    [dailyPnlData]
  )

  const getCumulativePnlForLastNDays = useCallback(
    (selectedDaysCount: number) => {
      if (!daysCount) return null
      return getCumulativePnlForDaysRange(Math.max(daysCount - selectedDaysCount, 0))
    },
    [getCumulativePnlForDaysRange, daysCount]
  )

  const cumulativePnlDataForRange = useMemo(() => {
    if (daysIndex === undefined) return null //TODO: check if this is necessary for a good render or not
    return getCumulativePnlForDaysRange(daysIndex[0], daysIndex[1])
  }, [daysIndex, getCumulativePnlForDaysRange])

  return {
    startTimestamp,
    daysCount,
    getCumulativePnlForLastNDays,
    dailyCumulativePnlDataForRange,
    cumulativePnlDataForRange,
  }
}
