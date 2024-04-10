import styled from 'styled-components'

import { ApplicationModal } from 'state/application/reducer'
import { useModalOpen } from 'state/application/hooks'
import { usePositionType } from 'state/trade/hooks'

import PricePanel from './PricePanel'
import { T2EReward } from './T2EReward'
import AmountsPanel from './AmountsPanel'
import OrderTypeTab from './OrderTypeTab'
import TradeActionButtons from './TradeActionButton'
import Column from 'components/Column'
import TradeOverview from 'components/App/TradePanel/TradeOverview'
import OpenPositionModal from 'components/ReviewModal/OpenPositionModal'

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  background: ${({ theme }) => theme.color2};
  border-radius: 4px;
  position: relative;

  ${({ theme }) => theme.mediaWidth.upToMedium`
  max-width: unset;
`};
`

const Container = styled(Column)`
  padding: 4px 12px 12px;
  gap: 12px;
`

export default function TradePanel() {
  const showTradeInfoModal = useModalOpen(ApplicationModal.OPEN_POSITION)
  const positionType = usePositionType()

  return (
    <>
      <T2EReward />
      <Wrapper>
        <OrderTypeTab />
        <Container>
          <PricePanel />
          <AmountsPanel />
          <TradeActionButtons />
          <TradeOverview />
        </Container>
        {showTradeInfoModal && <OpenPositionModal positionType={positionType} />}
      </Wrapper>
    </>
  )
}
