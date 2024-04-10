import styled from 'styled-components'

import useAccountData from 'hooks/useAccountData'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { formatAmount } from 'utils/numbers'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

import { Row } from 'components/Row'
import Column from 'components/Column'
import InfoItem from 'components/InfoItem'
import { DefaultContainer } from '../styles'
import AccountHealth from './AccountHealth'
import UPNLBar from './UPNLBar'
import { getTokenWithFallbackChainId } from 'utils/token'

const Container = styled(DefaultContainer)`
  padding-bottom: 16px;
`

const InfoWrapper = styled(Column)`
  gap: 16px;
  padding: 0 16px;
  margin-top: 50px;
`

export default function AccountOverview() {
  const { chainId } = useActiveWeb3React()
  const { equity, maintenanceMargin, loading: accountLoading } = useAccountData()
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)
  const loading = chainId ? accountLoading : true

  return (
    <Container>
      <AccountHealth />
      <Row flexDirection={'column'} gap={'16px'} align={'stretch'}>
        <UPNLBar />
        <InfoWrapper>
          <InfoItem
            label={'Equity Balance:'}
            amount={formatAmount(equity)}
            ticker={collateralCurrency?.symbol}
            fontSize={'14px'}
            loading={loading}
          />
          <InfoItem
            label={'Maintenance Margin (CVA):'}
            amount={formatAmount(maintenanceMargin)}
            ticker={collateralCurrency?.symbol}
            fontSize={'14px'}
            loading={loading}
          />
        </InfoWrapper>
      </Row>
    </Container>
  )
}
