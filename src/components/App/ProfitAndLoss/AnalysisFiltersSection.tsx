import { WrapRow } from 'components/Row'
import styled from 'styled-components'
import { ThemedButton } from 'components/Button'
import ArrowRight from 'components/Icons/ArrowRight'
import CalendarIcon from 'components/Icons/Calendar'
import Calendar from 'components/Calendar'

import { useCallback, useMemo, useRef, useState } from 'react'
import useOnOutsideClick from 'lib/hooks/useOnOutsideClick'
import { useTimeRangeFilterContext } from 'context/TimeRangeFilterContext'
import { useDailyCumulativePnlDataContext } from 'context/DailyCumulativePnlDataContext'

const AnalysisFilterSectionWrapper = styled(WrapRow)``

const ContainerCalender = styled.div`
  display: inline-flex;
  align-items: center;
  height: 100%;
`

export const AnalysisFiltersSection = () => {
  const { getIsFilterActiveForLastNDays, endOfToday, filterRange, setFilterRangeForLastNDays, setFilterRange } =
    useTimeRangeFilterContext()
  const { startTimestamp: pnlDataStartTimestamp } = useDailyCumulativePnlDataContext()

  const [showCalender, setShowCalender] = useState(false)
  const [customDay, setCustomDay] = useState(false)
  const ref_calender = useRef(null)
  useOnOutsideClick(ref_calender, () => setShowCalender(false))

  const startDate = useMemo(() => {
    return new Date(filterRange.startTimestamp * 1000)
  }, [filterRange])

  const setStartDate = useCallback(
    (date: Date) => {
      return setFilterRange((f) => ({
        startTimestamp: Math.floor(date.getTime() / 1000),
        endTimestamp: f.endTimestamp,
      }))
    },
    [setFilterRange]
  )

  const setEndDate = useCallback(
    (date: Date) => {
      const endOfDay = new Date(date)
      endOfDay.setHours(23, 59, 59, 0)
      return setFilterRange((f) => ({
        startTimestamp: f.startTimestamp,
        endTimestamp: endOfDay.getTime() / 1000,
      }))
    },
    [setFilterRange]
  )

  const endDate = useMemo(() => {
    return new Date(filterRange.endTimestamp * 1000)
  }, [filterRange])

  const setFilterRangeAllTime = useCallback(() => {
    if (pnlDataStartTimestamp) {
      setFilterRange({
        startTimestamp: pnlDataStartTimestamp,
        endTimestamp: endOfToday,
      })
    }
  }, [pnlDataStartTimestamp, setFilterRange, endOfToday])
  const isFilterRangeAllTime = useMemo(
    () => filterRange.startTimestamp === pnlDataStartTimestamp && filterRange.endTimestamp === endOfToday,
    [endOfToday, filterRange.endTimestamp, filterRange.startTimestamp, pnlDataStartTimestamp]
  )

  return (
    <AnalysisFilterSectionWrapper gap="12px" smGap={'16px'}>
      <ThemedButton.Filter isActive={getIsFilterActiveForLastNDays(7)} onClick={() => setFilterRangeForLastNDays(7)}>
        7 Days
      </ThemedButton.Filter>
      <ThemedButton.Filter isActive={getIsFilterActiveForLastNDays(30)} onClick={() => setFilterRangeForLastNDays(30)}>
        30 Days
      </ThemedButton.Filter>
      <ThemedButton.Filter isActive={getIsFilterActiveForLastNDays(90)} onClick={() => setFilterRangeForLastNDays(90)}>
        3 Months
      </ThemedButton.Filter>
      <ThemedButton.Filter
        isActive={getIsFilterActiveForLastNDays(360)}
        onClick={() => setFilterRangeForLastNDays(360)}
      >
        1 Year
      </ThemedButton.Filter>
      <ThemedButton.Filter isActive={isFilterRangeAllTime} onClick={setFilterRangeAllTime}>
        All Time
      </ThemedButton.Filter>
      <ThemedButton.Filter
        onClick={() => {
          setShowCalender(true)
        }}
        gap="6px"
        smGap="14px"
        color={'#ffffff'}
      >
        {startDate ? `${startDate.getDate()}/${startDate.getMonth() + 1}/${startDate.getFullYear()}` : '-'}
        <ArrowRight width="1em" height="1em" color={'#ffffff'} />
        {endDate ? `${endDate.getDate()}/${endDate.getMonth() + 1}/${endDate.getFullYear()}` : '-'}
        <CalendarIcon width="1.5em" height="1.25em" />
      </ThemedButton.Filter>

      <ContainerCalender ref={ref_calender}>
        <Calendar
          setNewTime={(newDateValue) => {
            console.log({ newDateValue })
          }}
          xPosition="-315px"
          yPosition="170px"
          isOpen={showCalender}
          setIsOpen={setShowCalender}
          setCustomDayActivate={setCustomDay}
          currentDate={new Date(endOfToday * 1000)}
          selectRange={true}
          returnValue="range"
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      </ContainerCalender>
    </AnalysisFilterSectionWrapper>
  )
}
