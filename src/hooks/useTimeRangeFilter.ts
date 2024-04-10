import { useCallback, useMemo, useState } from 'react'

export default function useTimeRangeFilter() {
  const endOfToday = useMemo(() => {
    const date = new Date()
    date.setHours(23, 59, 59, 0)
    return date.getTime() / 1000 // Convert to seconds
  }, [])

  const [filterRange, setFilterRange] = useState<{ startTimestamp: number; endTimestamp: number }>({
    startTimestamp: endOfToday - 7 * 86400 + 1,
    endTimestamp: endOfToday,
  })
  const filterRangeDaysCount = useMemo(
    () => Math.floor((filterRange.endTimestamp - filterRange.startTimestamp) / 86400),
    [filterRange.endTimestamp, filterRange.startTimestamp]
  )

  const setFilterRangeForLastNDays = useCallback(
    (days: number) => {
      setFilterRange({
        startTimestamp: endOfToday + 1 - days * 86400,
        endTimestamp: endOfToday,
      })
    },
    [endOfToday]
  )
  const getIsFilterActiveForLastNDays = useCallback(
    (days: number) =>
      Boolean(
        filterRange &&
          filterRange.endTimestamp === endOfToday &&
          endOfToday + 1 - filterRange.startTimestamp === days * 86400
      ),
    [filterRange, endOfToday]
  )

  return {
    endOfToday,
    filterRange,
    setFilterRange,
    filterRangeDaysCount,
    setFilterRangeForLastNDays,
    getIsFilterActiveForLastNDays,
  }
}
