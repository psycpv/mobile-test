import styled from 'styled-components'
import RangeDatePicker, { DateRange } from 'components/DatePicker'
import { useEffect, useRef, useState } from 'react'
import useExportHistory, { ExportedQuote, QuoteToExport } from 'hooks/useExportHistory'
import { CSVLink } from 'react-csv'
import { toast } from 'react-toastify'

const ExportContainer = styled.div<{ hidden?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
`

const ExportButton = styled.button`
  width: 112px;
  height: 34px;
  position: relative;
  text-align: center;
  font-size: 14px;
  overflow: hidden;
  border-radius: 6px;
  font-weight: 400;
  color: ${({ theme }) => theme.almostWhite};
  background: ${({ theme }) => theme.color3};
  border: 1px solid ${({ theme }) => theme.color5};

  &:disabled {
    color: #8d90b3;
    cursor: default;
    opacity: 0.5;
  }
`

export function ExportHistory({
  setDateRange,
  hidden,
}: {
  setDateRange: (startDate: number, endDate: number) => void
  hidden?: boolean
}) {
  const [selectedRange, setSelectedRange] = useState<DateRange>(null)
  const { quotes, loading } = useExportHistory(
    selectedRange?.startDate || undefined,
    selectedRange?.endDate || undefined
  )
  const [dataToExport, setDataToExport] = useState<ExportedQuote[]>([])
  const csvLinkRef = useRef<CSVLink & HTMLAnchorElement & { link: HTMLAnchorElement }>(null)
  useEffect(() => {
    setDataToExport([])
  }, [quotes, selectedRange])

  useEffect(() => {
    if (selectedRange) {
      const start = Math.floor(selectedRange.startDate.getTime() / 1000)
      const end = Math.floor(selectedRange.endDate.getTime() / 1000)
      setDateRange(start, end)
    }
  }, [selectedRange])
  return (
    <ExportContainer hidden={hidden}>
      {!loading &&
        !!quotes.length &&
        quotes.map((quote, index) => {
          return (
            <QuoteToExport
              key={index}
              quote={quote}
              setDataToExport={setDataToExport}
              dataToExport={dataToExport}
            ></QuoteToExport>
          )
        })}
      <CSVLink
        ref={csvLinkRef}
        data={dataToExport}
        filename={`Vibe-${selectedRange?.startDate?.toDateString()}-${selectedRange?.endDate?.toDateString()}.csv`}
      />
      <RangeDatePicker
        selectedRange={selectedRange}
        setSelectedRange={setSelectedRange}
        calendarXPosition={selectedRange ? '-85px' : '-125px'}
        calendarYPosition={'-10px'}
      />
      <ExportButton
        disabled={loading || !selectedRange}
        onClick={() => {
          if (!selectedRange || !selectedRange?.startDate || !selectedRange?.endDate) {
            toast.error('Please Specify a date range')
            return
          }
          if (csvLinkRef.current) {
            if (dataToExport.length > 0) {
              csvLinkRef.current.link.click()
            } else toast.error('There is no quote to export!')
          }
        }}
      >
        {loading && selectedRange ? 'Exporting' : 'Export to CSV'}
      </ExportButton>
    </ExportContainer>
  )
}
