import { useMemo } from 'react'
import styled, { useTheme } from 'styled-components'
import findIndex from 'lodash/findIndex'

import { Quote, QuoteStatus } from 'types/quote'
import {
  useHistoryQuotes,
  usePendingsQuotes,
  usePositionsQuotes,
  useQuoteDetail,
  useSetQuoteDetailCallback,
} from 'state/quotes/hooks'

import { PreviousIcon } from './styles'
import { RowEnd } from 'components/Row'
import { NextIcon } from 'components/Icons'
import { ItemsPerPage } from 'components/App/UserPanel/PaginateTable'
import { sortQuotesByModifyTimestamp } from 'hooks/useQuotes'

const ChangePositionBtn = styled.button<{ disabled?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 20px;
  background-color: ${({ theme }) => theme.color3};
  border-radius: 2px;

  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'unset' : 'pointer')};
  }
`

export default function PositionDetailsNavigator() {
  const theme = useTheme()

  const quote = useQuoteDetail() || ({} as Quote)
  const setQuoteDetail = useSetQuoteDetailCallback()

  const { quotes: closed } = useHistoryQuotes()
  const { quotes: positions } = usePositionsQuotes()
  const { quotes: pendings } = usePendingsQuotes()
  const positionQuotes: Quote[] = useMemo(() => {
    return [...pendings, ...positions].sort(sortQuotesByModifyTimestamp)
  }, [pendings, positions])

  const currentOrders: Quote[] = useMemo(() => {
    switch (quote.quoteStatus) {
      case QuoteStatus.CANCELED:
      case QuoteStatus.LIQUIDATED:
      case QuoteStatus.CLOSED:
        return closed
      default:
        return positionQuotes
    }
  }, [quote.quoteStatus, positionQuotes, closed])

  const quoteIndex = findIndex(currentOrders, quote)
  const currentPage = Math.ceil((quoteIndex + 1) / ItemsPerPage)
  const isFirstItem = quoteIndex === (currentPage - 1) * ItemsPerPage
  const isLastItem = quoteIndex === Math.min(currentPage * ItemsPerPage - 1, currentOrders.length - 1)
  return (
    <div>
      <RowEnd gap={'8px'}>
        <ChangePositionBtn
          disabled={isFirstItem}
          onClick={() => isFirstItem || setQuoteDetail(currentOrders[quoteIndex - 1])}
        >
          <NextIcon color={isFirstItem ? undefined : theme.coolGrey} />
        </ChangePositionBtn>
        <ChangePositionBtn
          disabled={isLastItem}
          onClick={() => isLastItem || setQuoteDetail(currentOrders[quoteIndex + 1])}
        >
          <PreviousIcon color={isLastItem ? undefined : theme.coolGrey} />
        </ChangePositionBtn>
      </RowEnd>
    </div>
  )
}
