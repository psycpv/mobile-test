import React from 'react'
import styled from 'styled-components'

import { formatAmount } from 'utils/numbers'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { getTokenWithFallbackChainId } from 'utils/token'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

import { useAccountPartyAStat, useActiveAccountAddress } from 'state/user/hooks'

import { Row, RowBetween } from 'components/Row'
import WithdrawCooldown from 'components/App/AccountData/WithdrawCooldown'

const Container = styled(RowBetween)`
  height: 59px;
  padding: 0px 12px 0px 16px;
  background-color: ${({ theme }) => theme.bg1};

  & > * {
    &:nth-child(2) {
      width: 228px;
      ${({ theme }) => theme.mediaWidth.upToSmall`
        width: auto;
        padding: 0 8px;
      `}
    }
  }
`

const WithdrawAmount = styled(Row)`
  gap: 8px;
  width: unset;
  font-size: 16px;
  white-space: nowrap;
  color: ${({ theme }) => theme.text0};

  & > * {
    &:first-child {
      font-weight: 400;
    }
    &:last-child {
      margin-left: 4px;
      font-weight: 500;
    }
  }
`

export default function Statusbar() {
  const { chainId } = useActiveWeb3React()
  const activeAccountAddress = useActiveAccountAddress()
  const { accountBalance } = useAccountPartyAStat(activeAccountAddress)

  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)
  return (
    <Container>
      <WithdrawAmount>
        <span>Withdraw</span>
        <span>
          {formatAmount(accountBalance)} {collateralCurrency?.name}
        </span>
      </WithdrawAmount>
      <WithdrawCooldown formatedAmount={true} text={'Withdraw'} />
    </Container>
  )
}
