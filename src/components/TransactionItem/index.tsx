import { useToken } from 'lib/hooks/useTokens'
import styled from 'styled-components'
import { CloseQuoteMessages, OrderType, PositionType } from 'types/trade'

import NotificationPopupIcon from 'components/Popups/NotificationPopupIcon'
import { Row } from 'components/Row'
import { FALLBACK_CHAIN_ID } from 'constants/chains'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { useMarket } from 'hooks/useMarkets'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import Image from 'next/image'
import {
  AddAccountTransactionInfo,
  ApproveTransactionInfo,
  CancelQuoteTransactionInfo,
  MintTransactionInfo,
  SignMessageTransactionInfo,
  StakeTransactionInfo,
  TradeTransactionInfo,
  TransferCollateralTransactionInfo,
} from 'state/transactions/types'
import { TradeState } from 'types/trade'
import { TransferTab } from 'types/transfer'
import { getTokenWithFallbackChainId } from 'utils/token'
import USDC_ICON from '/public/static/images/tokens/USDC.svg'
import { Link } from 'components/Icons'

const ImageWrapper = styled.div`
  min-width: 20px;
  min-height: 20px;
  width: 20px;
  height: 20px;
`

export const Summary = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.almostWhite};
`

const Icons = styled(Row)`
  width: unset;
`

export function TradeSummary({
  info: { state, positionType, amount, marketId, orderType },
  status,
}: {
  info: TradeTransactionInfo
  status?: string
}): JSX.Element {
  const { symbol } = useMarket(marketId) || {}
  const positionString = positionType === PositionType.LONG ? 'Long' : 'Short'
  const orderTypeString = orderType === OrderType.LIMIT ? 'Limit' : 'Market'
  const tradeTypeString = state === TradeState.OPEN ? 'Open' : 'Close'
  return (
    <Row gap="8px">
      <Summary>
        {symbol}/USDT {tradeTypeString} Order ({orderTypeString} {positionString}) for {amount} {symbol} {status}
      </Summary>

      <Icons>
        <NotificationPopupIcon symbol={symbol} />
        <Link color="#80BBF2" style={{ marginLeft: '12px', minWidth: '8px' }} />
      </Icons>
    </Row>
  )
}

export function ApproveSummary({
  info: { tokenAddress },
  status,
}: {
  info: ApproveTransactionInfo
  status?: string
}): JSX.Element {
  const token = useToken(tokenAddress)
  return (
    <Row gap="8px">
      <Summary>
        {`"Approve ${token?.symbol}"`} {status}
      </Summary>
      <Icons>
        <Link color="#80BBF2" style={{ marginLeft: '12px', minWidth: '8px' }} />
      </Icons>
    </Row>
  )
}

export function CancelQuoteSummary({
  info: { name, id, closeQuote },
  status,
}: {
  info: CancelQuoteTransactionInfo
  status?: string
}): JSX.Element {
  return (
    <Row gap="8px">
      <Summary>
        {name}/USDT {CloseQuoteMessages[closeQuote]} {status}
      </Summary>
      <Icons>
        <Link color="#80BBF2" style={{ marginLeft: '12px', minWidth: '8px' }} />
      </Icons>
    </Row>
  )
}

export function AddAccountSummary({
  info: { name },
  status,
}: {
  info: AddAccountTransactionInfo
  status?: string
}): JSX.Element {
  return (
    <Row gap="8px">
      <Summary>
        {`"Add new account [${name}]"`} {status}
      </Summary>
      <Icons>
        <Link color="#80BBF2" style={{ marginLeft: '12px', minWidth: '8px' }} />
      </Icons>
    </Row>
  )
}

export function TransferBalanceSummary({
  info: { amount, transferType },
  status,
}: {
  info: TransferCollateralTransactionInfo
  status?: string
}): JSX.Element {
  const { chainId } = useActiveWeb3React()
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)

  return (
    <Row gap="8px">
      <Summary>
        {(transferType === TransferTab.DEPOSIT || transferType === TransferTab.WITHDRAW) &&
          `${transferType} of ${amount} ${collateralCurrency?.symbol} ${
            status === 'submitted' ? 'successful' : status
          }`}
        {(transferType === TransferTab.ALLOCATE || transferType === TransferTab.DEALLOCATE) &&
          `${transferType} ${amount} ${collateralCurrency?.symbol} ${
            transferType === TransferTab.ALLOCATE ? 'to' : 'from'
          } Account Balance ${status}`}
      </Summary>
      <Icons>
        <ImageWrapper>
          <Image src={USDC_ICON} width={20} height={20} alt={`icon`} />
        </ImageWrapper>
        <Link color="#80BBF2" style={{ marginLeft: '12px', minWidth: '8px' }} />
      </Icons>
    </Row>
  )
}

export function MintSummary({ info, status }: { info: MintTransactionInfo; status?: string }): JSX.Element {
  const collateralSymbol = COLLATERAL_TOKEN[FALLBACK_CHAIN_ID].symbol ?? ''

  return (
    <Row gap="8px">
      <Summary>
        &#34;Mint&#34; {info.amount} {collateralSymbol} {status}
      </Summary>
      <Icons>
        <Link color="#80BBF2" style={{ marginLeft: '12px', minWidth: '8px' }} />
      </Icons>
    </Row>
  )
}

export function SignSummary({ info }: { info: SignMessageTransactionInfo }): JSX.Element {
  return (
    <Row gap="8px">
      <Summary>{info.text}</Summary>
      <Icons>
        <Link color="#80BBF2" style={{ marginLeft: '12px', minWidth: '8px' }} />
      </Icons>
    </Row>
  )
}

export function StakeSummary({ info }: { info: StakeTransactionInfo }): JSX.Element {
  return (
    <Row gap="8px">
      <Summary>
        {info.action} {`$VIBE`}
      </Summary>
      <Icons>
        <Link color="#80BBF2" style={{ marginLeft: '12px', minWidth: '8px' }} />
      </Icons>
    </Row>
  )
}

export function ClaimSummary(): JSX.Element {
  return (
    <Row gap="8px">
      <Summary>Claimed rewards</Summary>
      <Icons>
        <Link color="#80BBF2" style={{ marginLeft: '12px', minWidth: '8px' }} />
      </Icons>
    </Row>
  )
}
