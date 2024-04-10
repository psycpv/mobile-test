import styled from 'styled-components'
import Calendar from 'components/Calendar'
import { formatDate } from 'utils/date'
import { RowFixed } from 'components/Row'
import CalendarIcon from 'components/Icons/Calendar'
import { useIsMobile } from 'lib/hooks/useWindowSize'

export const SectionHeaderWrapper = styled(RowFixed)`
  background-color: ${({ theme }) => theme.color3};
  padding: 4px 8px 4px 12px;
  font-size: 16px;
  height: 34px;
  color: ${({ theme }) => theme.coolGrey};
  border-radius: 6px;
  white-space: nowrap;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 15px;
  `}

  &:hover {
    cursor: pointer;
  }
`

const DateTitle = styled.div`
  color: ${({ theme }) => theme.almostWhite};
  margin-left: 10px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-left: 0px;
  `}
`

const ContainerCalender = styled.div`
  display: inline-flex;
  align-items: center;
  height: 100%;
`

export const CalenderIconWrapper = styled.div`
  margin: 3px 5px 0px 10px;
`

const BreakerIconWrapper = styled.div`
  margin: 5px 15px 0px 15px;
`

export function DibsCalender({
  showCalender,
  setShowCalender,
  ref_calender,
  getActiveDate,
  setCustomActiveDay,
  setCustomDay,
  initialDate,
}: {
  showCalender: boolean
  setShowCalender: (input: boolean) => void
  ref_calender: any
  getActiveDate: () => Date
  setCustomActiveDay: (input: Date) => void
  setCustomDay: (input: boolean) => void
  initialDate: boolean
}) {
  const isMobile = useIsMobile()
  return (
    <SectionHeaderWrapper
      onClick={() => {
        if (!showCalender) setShowCalender(true)
      }}
    >
      {!isMobile && <div>Select Date:</div>}
      <DateTitle>{initialDate ? formatDate(getActiveDate()) : '--/--/----'}</DateTitle>{' '}
      <CalenderIconWrapper>
        <CalendarIcon width={18} height={29} />
      </CalenderIconWrapper>
      <ContainerCalender ref={ref_calender}>
        <Calendar
          xPosition="-343px"
          yPosition="150px"
          isOpen={showCalender}
          setIsOpen={setShowCalender}
          setNewTime={setCustomActiveDay}
          setCustomDayActivate={setCustomDay}
          currentDate={getActiveDate()}
        />
      </ContainerCalender>
    </SectionHeaderWrapper>
  )
}
