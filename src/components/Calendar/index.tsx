import { Card } from 'components/Card'
import styled, { css } from 'styled-components'
import { Z_INDEX } from 'theme'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export const InlineModal = styled(Card)<{ isOpen: boolean; x?: string; y?: string }>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: absolute;
  padding: unset;
  padding-top: unset;

  transform: ${({ x, y }) => css`
    translateX(${x ?? 0}) translateY(${y ?? 0})
    `};
  z-index: ${Z_INDEX.dropdown};
  margin-top: 10px;
`

export const CustomCalendar = styled(Calendar)`
  background: ${({ theme }) => theme.color4};
  color: white;
  border: unset;
  padding-bottom: 5px;

  .react-calendar__navigation__label,
  .react-calendar__navigation__arrow {
    text-align: center;
    /* Add more styles as needed */
  }

  .react-calendar__month-view__weekdays__weekday {
    color: white;
  }

  .react-calendar__tile {
    color: #7fbdf2;

    &--hover {
      border: 1px dashed ${({ theme }) => theme.blue};
      background: transparent !important;
    }

    &--hoverEnd,
    &--hoverStart {
      border: 1px dotted ${({ theme }) => theme.blue} !important;
      background: ${({ theme }) => theme.blue} !important;
    }
  }

  .react-calendar__tile--rangeStart,
  .react-calendar__tile--rangeEnd {
    background: ${({ theme }) => theme.blue} !important;
    color: ${({ theme }) => theme.color1} !important;
  }

  .react-calendar__month-view__days__day--weekend {
    color: ${({ theme }) => theme.pink};
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.color1};
  }

  .react-calendar__tile--active {
    background: ${({ theme }) => theme.blue} !important;
    color: ${({ theme }) => theme.color1} !important;
  }

  .react-calendar__tile--now {
    background: ${({ theme }) => theme.color4};
    color: ${({ theme }) => theme.almostWhite};
    border: 2px solid ${({ theme }) => theme.pink};
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.color1};
  }
`

export default function BasedCalender({
  isOpen,
  xPosition = '0',
  yPosition = '0',
  setIsOpen,
  setNewTime,
  setCustomDayActivate,
  currentDate,
  returnValue = 'start',
  selectRange = false,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: {
  isOpen: boolean
  xPosition?: string
  yPosition?: string
  setIsOpen: (value: boolean) => void
  setNewTime: (value: Date) => void
  setCustomDayActivate?: (value: boolean) => void
  currentDate: Date | undefined

  returnValue?: 'start' | 'range'
  selectRange?: boolean
  startDate?: Date
  setStartDate?: (value: Date) => void
  endDate?: Date
  setEndDate?: (value: Date) => void
}) {
  return (
    <InlineModal isOpen={isOpen} x={xPosition} y={yPosition}>
      <CustomCalendar
        onChange={(data) => {
          if (selectRange) {
            if (data) {
              // @ts-ignore
              setStartDate(new Date(data[0].toString()))
              // @ts-ignore
              setEndDate?.(new Date(data[1].toString()))
              setCustomDayActivate?.(true)
            }
          } else {
            if (data) {
              setNewTime(new Date(data.toString()))
              setCustomDayActivate?.(true)
            }
          }
          setIsOpen(false)
        }}
        value={selectRange && startDate && endDate && currentDate ? [startDate, endDate] : currentDate}
        returnValue={returnValue}
        selectRange={selectRange}
      />
    </InlineModal>
  )
}
