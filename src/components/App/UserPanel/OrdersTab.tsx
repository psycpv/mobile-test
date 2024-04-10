import styled from 'styled-components'

import { RowCenter, RowStart } from 'components/Row'
import { ExportHistory } from './ExportHistory'
import { useIsMobile } from 'lib/hooks/useWindowSize'

export enum StateTabs {
  POSITIONS = 'Positions',
  OPEN_ORDERS = 'Open Orders',
  ORDER_HISTORY = 'Order History',
}

const TabWrapper = styled(RowStart)`
  margin: 8px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const TabOptions = styled.div`
  display: flex;
  margin-right: 20px;
`

export const TabButton = styled(RowCenter)<{ active: boolean }>`
  font-size: 16px;
  font-weight: 500;
  width: fit-content;
  white-space: nowrap;
  padding: 16px 16px 0px;
  color: ${({ active, theme }) => (active ? theme.almostWhite : theme.inactiveText)};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.almostWhite};
    text-decoration: underline;
    text-underline-offset: 0.3em;
    text-decoration-color: ${({ theme }) => theme.coolGrey};
  }

  ${({ theme, active }) => theme.mediaWidth.upToMedium`
    font-size: 14px;
    font-weight: 400;
    color: ${active ? theme.almostWhite : theme.inactiveText};
  `};
`

export default function OrdersTab({
  activeTab,
  setActiveTab,
  positionsCount,
  openOrdersCount,
  setDateRange,
}: {
  activeTab: StateTabs
  setActiveTab(s: StateTabs): void
  positionsCount: number
  openOrdersCount: number
  setDateRange: (startValue: number, endValue: number) => void
}): JSX.Element | null {
  const mobileVersion = useIsMobile()
  return (
    <TabWrapper>
      <TabsContainer>
        <TabButton active={activeTab === StateTabs.POSITIONS} onClick={() => setActiveTab(StateTabs.POSITIONS)}>
          {StateTabs.POSITIONS} {positionsCount > 0 ? `(${positionsCount})` : null}
        </TabButton>
        <TabButton active={activeTab === StateTabs.OPEN_ORDERS} onClick={() => setActiveTab(StateTabs.OPEN_ORDERS)}>
          {StateTabs.OPEN_ORDERS} {openOrdersCount > 0 ? `(${openOrdersCount})` : null}
        </TabButton>
        <TabButton active={activeTab === StateTabs.ORDER_HISTORY} onClick={() => setActiveTab(StateTabs.ORDER_HISTORY)}>
          {StateTabs.ORDER_HISTORY}
        </TabButton>
      </TabsContainer>
      {!mobileVersion && (
        <TabOptions>
          <ExportHistory setDateRange={setDateRange} hidden={activeTab !== StateTabs.ORDER_HISTORY} />
        </TabOptions>
      )}
    </TabWrapper>
  )
}
