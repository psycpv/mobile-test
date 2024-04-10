import styled from 'styled-components'
import { Dispatch, SetStateAction, useRef, useState } from 'react'
import { CustomCalendar, InlineModal } from 'components/Calendar'
import Image from 'next/image'
import CalenderSvg from '/public/static/images/dibs/calender.svg'
import useOnOutsideClick from 'lib/hooks/useOnOutsideClick'
import { format } from 'date-fns'

const DatePickerContainer = styled.div``

const DatePickerBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: ${({ theme }) => theme.color3};
  color: ${({ theme }) => theme.almostWhite};
  padding: 10px;
  height: 34px;
  border-radius: 6px;
  font-size: 13px;
`
const DatePickerTitle = styled.div``

export type DateRange = {
  startDate: Date
  endDate: Date
} | null

export default function RangeDatePicker({
  selectedRange,
  setSelectedRange,
  placeholder = 'Select a date',
  calendarYPosition = '0',
  calendarXPosition = '0',
  dateFormat = 'dd/MM/yyyy',
  onChange,
}: {
  selectedRange: DateRange
  setSelectedRange: Dispatch<SetStateAction<DateRange>>
  placeholder?: string
  calendarXPosition?: string
  calendarYPosition?: string
  dateFormat?: string
  onChange?: (data: Date[]) => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const datePickerRef = useRef(null)
  useOnOutsideClick(datePickerRef, () => {
    setIsOpen(false)
  })
  return (
    <DatePickerContainer ref={datePickerRef}>
      <DatePickerBoxContainer
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <DatePickerTitle>
          {selectedRange && selectedRange.startDate && selectedRange.endDate
            ? `${format(selectedRange.startDate, dateFormat)} - ${format(selectedRange.endDate, dateFormat)}`
            : placeholder}
        </DatePickerTitle>
        <Image src={CalenderSvg} alt="Asset" width={20} height={20} />
      </DatePickerBoxContainer>
      <InlineModal
        isOpen={isOpen}
        x={calendarXPosition}
        y={calendarYPosition}
        style={{ padding: '10px', background: 'transparent' }}
      >
        <CustomCalendar
          value={selectedRange ? [selectedRange.startDate, selectedRange.endDate] : null}
          selectRange={true}
          onChange={(data) => {
            const [start, end] = data as Date[]
            if (data && start && end) {
              setSelectedRange({ startDate: start, endDate: end })
            }
            if (onChange) onChange((data as Date[]) || null)
            setIsOpen(false)
          }}
        />
      </InlineModal>
    </DatePickerContainer>
  )
}
