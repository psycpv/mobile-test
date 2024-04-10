import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { toBN } from 'utils/numbers'

import { useIsMobile } from 'lib/hooks/useWindowSize'
import { useQuoteDetail, useSetQuoteDetailCallback } from 'state/quotes/hooks'
import { useAccountHealthAndEffects, useAccountPartyAStat, useActiveAccount } from 'state/user/hooks'

import { Tab } from 'components/Tab'
import AccountHealth from 'components/App/AccountData/AccountHealth'
import AccountOverview from 'components/App/AccountData/AccountOverview'
import PositionDetails from 'components/App/AccountData/PositionDetails'

const Wrapper = styled.div`
  width: 100%;
  max-width: 480px;
  min-height: 379px;
  display: flex;
  flex-flow: column nowrap;
  background: ${({ theme }) => theme.color2};
  border-radius: 4px;
  padding-top: 15px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
  max-width: unset;
`};
`

export enum PanelType {
  POSITION_OVERVIEW = 'Position Details',
  ACCOUNT_OVERVIEW = 'Account Overview',
}

export default function Overviews() {
  const mobileVersion = useIsMobile()
  const quoteDetail = useQuoteDetail()
  const setQuoteDetail = useSetQuoteDetailCallback()
  const { accountAddress } = useActiveAccount() || {}
  const showAccountHeathAndEffects = useAccountHealthAndEffects()
  const { allocatedBalance } = useAccountPartyAStat(accountAddress)
  const [panelType, setPanelType] = useState<PanelType>(PanelType.ACCOUNT_OVERVIEW)

  useEffect(() => {
    if (quoteDetail) setPanelType(PanelType.POSITION_OVERVIEW)
  }, [quoteDetail])
  useEffect(() => {
    if (mobileVersion) setPanelType(PanelType.ACCOUNT_OVERVIEW)
  }, [mobileVersion])
  return (
    <Wrapper>
      {showAccountHeathAndEffects && !toBN(allocatedBalance).isZero() && <AccountHealth />}
      {!mobileVersion && (
        <Tab
          tabOptions={[PanelType.ACCOUNT_OVERVIEW, PanelType.POSITION_OVERVIEW]}
          activeOption={panelType}
          onChange={(option: string) => {
            setPanelType(option as PanelType)
            if (option === PanelType.ACCOUNT_OVERVIEW) setQuoteDetail(null)
          }}
        />
      )}
      {panelType === PanelType.ACCOUNT_OVERVIEW ? <AccountOverview /> : <PositionDetails quote={quoteDetail} />}
    </Wrapper>
  )
}
