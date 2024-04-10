import { createAsyncThunk } from '@reduxjs/toolkit'

import { getOrderHistoryApolloClient } from 'apollo/client/orderHistory'
import { ItemsPerPage } from 'components/App/UserPanel/PaginateTable'
import { getHistoryQueryCall } from 'apollo/service'
import { QuoteOrder } from './types'

export const getHistory = createAsyncThunk(
  'quotes/getHistory',
  async ({
    account,
    chainId,
    skip,
    first,
    column = 'timeStamp',
    order = QuoteOrder.DESCENDING,
    startTime,
    endTime,
  }: {
    account: string
    chainId: number
    skip: number
    first: number
    column: string
    order: QuoteOrder
    startTime?: number
    endTime?: number
  }) => {
    if (!account) {
      throw new Error('account is undefined')
    }
    if (!chainId) {
      throw new Error('chainId is empty')
    }

    try {
      const client = getOrderHistoryApolloClient(chainId)
      if (!client) return {}

      const quotes = await getHistoryQueryCall({ account, chainId, skip, first, column, order, startTime, endTime })

      return { quotes, hasMore: quotes.length === ItemsPerPage + 1, chainId }
    } catch (error) {
      console.error(error)
      throw new Error(`Unable to query data from Client`)
    }
  }
)
