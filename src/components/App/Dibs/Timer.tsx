import useEpochTimer from 'hooks/useEpochTimer'
import { useIsMobile } from 'lib/hooks/useWindowSize'
import styled from 'styled-components'
import { SectionHeaderWrapper } from './DibsCalender'

const EpochFlipHeader = styled(SectionHeaderWrapper)`
  padding: 0px 13px;
  font-size: 16px;
  white-space: nowrap;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 15px;
  `}
`

const DateTitle = styled.div`
  color: ${({ theme }) => theme.almostWhite};
  margin-left: 10px;
`

export function Timer() {
  const { hours, minutes, seconds } = useEpochTimer()
  const isMobile = useIsMobile()
  return (
    <EpochFlipHeader>
      <div>{isMobile ? 'Epoch Ends:' : 'Epoch Flip in:'}</div>
      <DateTitle>
        {hours}:{minutes}:{seconds}
      </DateTitle>
    </EpochFlipHeader>
  )
}
