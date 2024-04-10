import { useEffect, useMemo } from 'react'
import { AppThunkDispatch, useAppDispatch } from 'state'
import find from 'lodash/find'
import isEqual from 'lodash/isEqual'

import { useGetPendingIds, useGetPositions, useGetQuoteByIds } from 'hooks/useQuotes'
import { addQuoteToHistory, removeQuote, setPendings, setPositions } from './actions'
import {
  useAddQuotesToListenerCallback,
  useHistoryDateRange,
  useHistoryOrder,
  useListenersQuotes,
  usePendingsQuotes,
  usePositionsQuotes,
} from './hooks'
import { QuoteStatus } from 'types/quote'
import usePrevious from 'lib/hooks/usePrevious'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { autoRefresh } from 'utils/retry'
import { getHistory } from './thunks'
import { useActiveAccountAddress } from 'state/user/hooks'

export function QuotesUpdater(): null {
  const dispatch = useAppDispatch()
  const thunkDispatch: AppThunkDispatch = useAppDispatch()
  const account = useActiveAccountAddress()
  const { chainId } = useActiveWeb3React()

  const { pendingIds } = useGetPendingIds()

  const { quotes: pendings } = useGetQuoteByIds(pendingIds)
  const { positions } = useGetPositions()

  const { orderColumn: historyOrderColumn, order: historyOrder } = useHistoryOrder()
  const { startTime, endTime } = useHistoryDateRange()

  useEffect(() => {
    if (account && chainId)
      return autoRefresh(
        () =>
          thunkDispatch(
            getHistory({
              account,
              chainId,
              first: 8,
              skip: 0,
              column: historyOrderColumn,
              order: historyOrder,
              startTime,
              endTime,
            })
          ),
        3000
      )
  }, [account, chainId, historyOrderColumn, historyOrder, startTime, endTime, thunkDispatch])

  // useEffect(() => {
  //   if (account) thunkDispatch(getHistory({ account }))
  // }, [account, thunkDispatch])

  // useEffect(() => {
  //   if (account && historyState === ApiState.ERROR) {
  //     retry(() => thunkDispatch(getHistory({ account })), { n: 5, minWait: 1000, maxWait: 10000 })
  //   }
  // }, [account, historyState, thunkDispatch])

  useEffect(() => {
    if (positions) dispatch(setPositions({ quotes: positions }))
  }, [positions, dispatch])

  useEffect(() => {
    if (pendingIds.length === pendings.length) dispatch(setPendings({ quotes: pendings }))
  }, [pendings, pendingIds, dispatch])

  return null
}

export function UpdaterListeners(): null {
  const dispatch = useAppDispatch()
  const { chainId } = useActiveWeb3React()
  const addQuoteToListenerCallback = useAddQuotesToListenerCallback()

  const { quotes: pendings } = usePendingsQuotes()
  const { quotes: positions } = usePositionsQuotes()

  const pendingIds = useMemo(() => {
    return pendings.map((q) => q.id)
  }, [pendings])

  const prevPendingIds = usePrevious(pendingIds)
  const prevPositions = usePrevious(positions)

  const listeners = useListenersQuotes()

  // const filteredListeners = useMemo(
  //   () => listeners.filter((lf) => !find(positions, { id: lf })),
  //   [listeners, positions]
  // )

  const { quotes: listenersQuotes } = useGetQuoteByIds(listeners)

  //we don't need add quote to positions because we are getting all live
  useEffect(() => {
    for (let i = 0; i < listenersQuotes.length; i++) {
      const quote = listenersQuotes[i]
      if (quote.quoteStatus === QuoteStatus.OPENED) {
        dispatch(removeQuote({ id: quote.id }))
      }
      if (
        (quote.quoteStatus === QuoteStatus.CANCELED ||
          quote.quoteStatus === QuoteStatus.LIQUIDATED ||
          quote.quoteStatus === QuoteStatus.CLOSED ||
          quote.quoteStatus === QuoteStatus.EXPIRED) &&
        chainId
      ) {
        dispatch(addQuoteToHistory({ quote, chainId }))
        dispatch(removeQuote({ id: quote.id }))
      }
    }
  }, [listenersQuotes, dispatch, chainId])

  useEffect(() => {
    if (!isEqual(prevPendingIds, pendingIds)) {
      const unpendingIds = prevPendingIds?.filter((id) => !pendingIds.includes(id))
      for (let i = 0; i < unpendingIds?.length; i++) {
        addQuoteToListenerCallback(unpendingIds[i])
      }
    }
  }, [prevPendingIds, pendingIds, addQuoteToListenerCallback])

  useEffect(() => {
    if (!isEqual(prevPositions, positions)) {
      const unPositionsId = prevPositions?.filter((id) => !find(positions, { id })).map((p) => p.id)
      for (let i = 0; i < unPositionsId?.length; i++) {
        addQuoteToListenerCallback(unPositionsId[i])
      }
    }
  }, [prevPositions, positions, addQuoteToListenerCallback])

  return null
}
