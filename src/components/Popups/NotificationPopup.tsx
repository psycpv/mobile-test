import styled, { useTheme } from 'styled-components'

import { NotificationDetails, NotificationType } from 'state/notifications/types'
import { useGetExistedQuoteByIdsCallback } from 'state/quotes/hooks'
import { Quote } from 'types/quote'

import LIQUIDATION_ALERT_ICON from '/public/static/images/etc/RedErrorTriangle.svg'

import { useGetQuoteByIds } from 'hooks/useQuotes'

import ImageWithFallback from 'components/ImageWithFallback'
import { Row } from 'components/Row'
import NotificationSummary from 'components/Summaries/NotificationSummary'
import { useMarket } from 'hooks/useMarkets'
import NotificationPopupIcon from './NotificationPopupIcon'

const Wrapper = styled(Row)`
  color: ${({ theme }) => theme.almostWhite};
  gap: 2px;
`

export default function NotificationPopup({ content }: { content: NotificationDetails }) {
  const theme = useTheme()
  const { quoteId, notificationType } = content
  const existedQuoteCallback = useGetExistedQuoteByIdsCallback()
  const existedQuote = existedQuoteCallback(quoteId)
  const { quotes, loading } = useGetQuoteByIds([Number(quoteId)])
  const quoteData = existedQuote ? existedQuote : !loading ? quotes[0] : ({} as Quote)
  const { marketId } = quoteData || {}
  const { symbol } = useMarket(marketId) || {}

  return (
    <Wrapper>
      <div>
        <NotificationSummary notification={content} />
      </div>
      <div style={{ cursor: 'pointer' }}>
        {notificationType === NotificationType.LIQUIDATION_ALERT ? (
          <ImageWithFallback src={LIQUIDATION_ALERT_ICON} width={25} height={22} alt={`icon`} />
        ) : (
          <NotificationPopupIcon symbol={symbol} />
        )}
      </div>
    </Wrapper>
  )
}
