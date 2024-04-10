import { useEffect, useMemo, useState } from 'react'
import { DailyFeeData, UserFeeDataSubgraphResultItem } from 'types/user'
import { getUserFeeDataQueryCall } from 'apollo/service'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useActiveAccountAddress } from 'state/user/hooks'
import { useTimeRangeFilterContext } from 'context/TimeRangeFilterContext'
import find from 'lodash/find'
import { useMarkets } from 'state/hedger/hooks'

export default function useDailyFundingData() {
  const { endOfToday, filterRange } = useTimeRangeFilterContext()

  const [historyItems, setHistoryItems] = useState<UserFeeDataSubgraphResultItem[] | null>(null)
  const { chainId } = useActiveWeb3React()
  const activeAccountAddress = useActiveAccountAddress()

  const startTimestamp = useMemo(() => {
    if (historyItems === null || !historyItems[0]) return null
    const timestamp = Number(historyItems[0].updateTimestamp)
    const date = new Date(timestamp * 1000)
    date.setHours(0, 0, 0, 0)
    return date.getTime() / 1000
  }, [historyItems])

  useEffect(() => {
    async function getAllHistoryItems() {
      if (!chainId || !activeAccountAddress) return
      let skip = 0
      const result: UserFeeDataSubgraphResultItem[] = []
      let chunkResult: UserFeeDataSubgraphResultItem[] = []
      do {
        chunkResult = await getUserFeeDataQueryCall({
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

  const dailyFeeData = useMemo(() => {
    if (historyItems === null || startTimestamp === null) return null
    const dailyData: DailyFeeData[] = []
    for (let dayStartTime = startTimestamp; dayStartTime < endOfToday; dayStartTime += 86400) {
      const historyItemsFiltered = historyItems.filter(
        (item) => Number(item.updateTimestamp) >= dayStartTime && Number(item.updateTimestamp) < dayStartTime + 86400
      )
      const fundingFeePaid = historyItemsFiltered.reduce((a, c) => a + Number(c.fundingPaid), 0)
      const fundingFeeReceived = historyItemsFiltered.reduce((a, c) => a + Number(c.fundingReceived), 0)
      const platformFeePaid = historyItemsFiltered.reduce((a, c) => a + Number(c.platformFeePaid), 0)
      dailyData.push({
        date: new Date(dayStartTime * 1000),
        fundingFeePaid,
        fundingFeeReceived,
        fundingFeeNet: fundingFeePaid + fundingFeeReceived,
        platformFeePaid,
      })
    }
    return dailyData
  }, [historyItems, startTimestamp, endOfToday])

  const daysCount = useMemo(() => {
    if (dailyFeeData === null) return null
    return dailyFeeData.length
  }, [dailyFeeData])

  const daysIndex = useMemo(() => {
    if (startTimestamp === null || daysCount === null) return undefined
    const startIndex = Math.floor((filterRange.startTimestamp - startTimestamp) / 86400)
    const endIndex = daysCount - Math.floor((endOfToday - filterRange.endTimestamp) / 86400)
    return [Math.max(0, startIndex), Math.min(daysCount, endIndex)]
  }, [daysCount, filterRange, endOfToday, startTimestamp])

  const dailyFeeDataForRange = useMemo(() => {
    if (!dailyFeeData || !daysIndex) return null
    return dailyFeeData.slice(daysIndex[0], daysIndex[1])
  }, [dailyFeeData, daysIndex])

  const markets = useMarkets()
  const [
    processedFeeDataItemsForRange,
    totalFundingFeePaid,
    totalFundingFeeReceived,
    totalPlatformFeePaid,
    totalFundingFee,
  ] = useMemo(() => {
    if (historyItems === null) return [null, null, null, null, null]
    const historyItemsFiltered = historyItems.filter(
      (item) =>
        Number(item.updateTimestamp) >= filterRange.startTimestamp &&
        Number(item.updateTimestamp) < filterRange.endTimestamp
    )
    const processedFeeDataItemsForRange = historyItemsFiltered.map((item) => {
      const market = find(markets, { id: Number(item.symbolId) })
      return {
        ...item,
        symbol: market ? `${market.symbol}-${market.asset}` : undefined,
      }
    })
    const totalFundingFeePaid = historyItemsFiltered.reduce((a, c) => a + Number(c.fundingPaid), 0)
    const totalFundingFeeReceived = historyItemsFiltered.reduce((a, c) => a + Number(c.fundingReceived), 0)
    const totalPlatformFeePaid = historyItemsFiltered.reduce((a, c) => a + Number(c.platformFeePaid), 0)
    const totalFundingFee = totalFundingFeePaid + totalFundingFeeReceived
    return [
      processedFeeDataItemsForRange,
      totalFundingFeePaid,
      totalFundingFeeReceived,
      totalPlatformFeePaid,
      totalFundingFee,
    ]
  }, [filterRange.endTimestamp, filterRange.startTimestamp, historyItems, markets])

  return {
    startTimestamp,
    daysCount,
    dailyFeeDataForRange,
    processedFeeDataItemsForRange,
    totalFundingFeePaid,
    totalFundingFeeReceived,
    totalPlatformFeePaid,
    totalFundingFee,
  }
}
