import styled from 'styled-components'

import { Quote } from 'types/quote'
import { IQuotesInfo } from 'types/quotesOverview'
import { AccountPositionsContext } from './context'

import { usePositionValue } from 'hooks/usePositionOverview'
import useGenerateRandomColors from 'hooks/useGenerateRandomColor'
import { usePositionsQuotes } from 'state/quotes/hooks'

import { DefaultContainer, DefaultHeader } from '../styles'
import AccountTable from './AccountTable'
import PositionStatus from './PositionStatus'
import PositionsPieChart from './PositionsPieChart'
import { RowBetween } from 'components/Row'
import { ConnectionStatus } from 'state/user/types'
import { useUpnlWebSocketStatus } from 'state/user/hooks'

const Container = styled(DefaultContainer)`
  padding: 20px 16px 24px;
  position: relative;
  min-height: 442px;
`

const Header = styled(DefaultHeader)`
  padding: 0;
  margin-bottom: 20px;
`

const Center = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: ${({ theme }) => theme.text1};
  font-weight: 400;
`

const ChartInfo = styled(RowBetween)`
  align-items: flex-start;
  ${({ theme }) => theme.mediaWidth.upToLarge`
    flex-direction: column;
    align-items: center;
  `}
`

const ChartWrapper = styled.div`
  margin-top: 32px;
  margin-right: 16px;
  width: 240px;
  height: 240px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    width: 180px;
    height: 180px;
  `}
`

function AccountPositionsBody({ positions }: { positions: Quote[] }) {
  const marketQuotesInfo: IQuotesInfo = usePositionValue(positions)

  const colors = useGenerateRandomColors(marketQuotesInfo.length)

  return (
    <AccountPositionsContext.Provider value={{ marketQuotesInfo, colors }}>
      <PositionStatus />
      <ChartInfo>
        <AccountTable />
        <ChartWrapper>
          <PositionsPieChart />
        </ChartWrapper>
      </ChartInfo>
    </AccountPositionsContext.Provider>
  )
}

export default function AccountPositions() {
  const { quotes } = usePositionsQuotes()
  const upnlLoadingStatus = useUpnlWebSocketStatus()
  const loading = upnlLoadingStatus === ConnectionStatus.CLOSED

  return (
    <Container>
      <Header>Account Open Positions Overview</Header>
      {quotes.length || loading ? (
        <AccountPositionsBody positions={quotes} />
      ) : (
        <Center>You have no open position!</Center>
      )}
    </Container>
  )
}
