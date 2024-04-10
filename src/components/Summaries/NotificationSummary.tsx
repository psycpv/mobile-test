import styled from 'styled-components'

import { NotificationDetails, NotificationMessages, NotificationType } from 'state/notifications/types'

import { RowStart } from 'components/Row'
import { useErrorMessage, useMarket } from 'hooks/useMarkets'
import { useGetQuoteByIds } from 'hooks/useQuotes'
import { useGetExistedQuoteByIdsCallback } from 'state/quotes/hooks'
import { Quote } from 'types/quote'
import { OrderType, PositionType } from 'types/trade'
import { toBN } from 'utils/numbers'

const NotificationText = styled(RowStart)`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.almostWhite};

  & > * {
    &:first-child {
      margin-right: 4px;
    }
  }
`

export default function NotificationSummary({
  notification,
}: {
  notification: NotificationDetails
}): JSX.Element | null {
  const { notificationType, quoteId, lastSeenAction, errorCode } = notification
  const existedQuoteCallback = useGetExistedQuoteByIdsCallback()
  const existedQuote = existedQuoteCallback(quoteId)
  const { quotes, loading } = useGetQuoteByIds([Number(quoteId)])
  const quoteData = existedQuote ? existedQuote : !loading ? quotes[0] : ({} as Quote)
  const { marketId, positionType, orderType, quantity, quantityToClose } = quoteData || {}
  const { symbol } = useMarket(marketId) || {}
  const text = lastSeenAction !== null ? NotificationMessages[lastSeenAction] : ''
  const errorMessage = useErrorMessage(errorCode)

  const positionString = positionType === PositionType.LONG ? 'Long' : 'Short'
  const orderTypeString = orderType === OrderType.LIMIT ? 'Limit' : 'Market'

  switch (notificationType) {
    case NotificationType.TRANSFER_COLLATERAL:
      return <>Transfer collateral</>

    case NotificationType.LIQUIDATION_ALERT:
      return <>Liq alert</>

    case NotificationType.PARTIAL_FILL:
      return <>fill</>

    case NotificationType.SEEN_BY_HEDGER:
      return (
        <NotificationText>
          {symbol}/USDT {text} ({orderTypeString} {positionString}) for{' '}
          {toBN(quantityToClose != '0' ? quantityToClose : quantity).toFixed()} {symbol} received
        </NotificationText>
      )

    case NotificationType.HEDGER_ERROR:
      return (
        <NotificationText>
          <div>
            {name}-Q{quoteId}
          </div>
          &#34;
          {errorMessage ??
            'PartyB (Hedger) request time requirements are not sufficient, please send a new request with more time to process.'}
          &#34;
        </NotificationText>
      )
    case NotificationType.SUCCESS:
      return (
        <NotificationText>
          {symbol}/USDT {text} ({orderTypeString} {positionString}) for{' '}
          {toBN(quantityToClose != '0' ? quantityToClose : quantity).toFixed()} {symbol} successful
        </NotificationText>
      )
    case NotificationType.OTHER:
      return <>other</>

    default:
      return <>default</>
  }
}
