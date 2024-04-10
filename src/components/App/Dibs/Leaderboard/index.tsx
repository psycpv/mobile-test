import { useRef, useState } from 'react'
import styled from 'styled-components'
import { getFormattedDate } from 'utils/date'
import useOnOutsideClick from 'lib/hooks/useOnOutsideClick'
import { useDibs } from 'hooks/useDibs'
import { Row } from 'components/Row'
import LeaderboardTable from '../LeaderboardTable'
import { RefreshContextProvider } from 'context/RefreshContext'
import { DibsCalender } from '../DibsCalender'
import { Timer } from '../Timer'

const Container = styled.div`
  padding: 20px;
  color: ${({ theme }) => theme.almostWhite};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 10px 0px;
  `}
`

const Title = styled.div`
  font-size: 22px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 18px;
  `}
`

const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
  `}
`

export default function Leaderboard() {
  const [showCalender, setShowCalender] = useState(false)
  const [customDay, setCustomDay] = useState(false)
  const { activeDay, setCustomActiveDay, getActiveDate } = useDibs()

  const ref_calender = useRef(null)
  useOnOutsideClick(ref_calender, () => setShowCalender(false))

  return (
    <RefreshContextProvider>
      <Container>
        <TopWrap>
          <Title>Leaderboard / {getFormattedDate(getActiveDate(), true)}</Title>
          <Row width="unset" gap="10px">
            <Timer />
            <DibsCalender
              showCalender={showCalender}
              setShowCalender={setShowCalender}
              ref_calender={ref_calender}
              getActiveDate={getActiveDate}
              setCustomActiveDay={setCustomActiveDay}
              setCustomDay={setCustomDay}
              initialDate={true}
            />
          </Row>
        </TopWrap>
        <LeaderboardTable activeDay={activeDay} />
      </Container>
    </RefreshContextProvider>
  )
}
