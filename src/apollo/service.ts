import { getBalanceHistoryApolloClient } from 'apollo/client/balanceHistory'
import { BalanceHistoryData } from 'state/user/types'
import {
  BALANCE_CHANGES_DATA,
  USER_HISTORY_DATA_BY_RANGE,
  ORDER_HISTORY_DATA_BY_RANGE,
  USER_FEE_DATA_BY_RANGE,
  TOTAL_SYMBOL_TRADES_HISTORIES,
  ACCOUNT_NAME_DATA,
} from 'apollo/queries'
import { getOrderHistoryApolloClient } from 'apollo/client/orderHistory'
import { Quote } from 'types/quote'
import { QuoteOrder, SubGraphData } from 'state/quotes/types'
import { getPositionTypeByIndex, getQuoteStateByIndex } from 'hooks/useQuotes'
import { OrderType } from 'types/trade'
import { fromWei } from 'utils/numbers'
import {
  AccountNameData,
  UserFeeDataSubgraphResultItem,
  UserHistorySubgraphResultItem,
  totalSymbolTradesHistories,
} from 'types/user'
import { getR2eApolloClient } from 'apollo/client/r2e'

export async function getAccountsNameData({
  accountAddress,
  chainId,
  skip = 0,
}: {
  accountAddress: string
  chainId: number
  skip?: number
}): Promise<AccountNameData | null> {
  try {
    const client = getR2eApolloClient(chainId)
    if (!client) return null

    const {
      data: { account },
    } = await client.query({
      query: ACCOUNT_NAME_DATA,
      variables: { id: accountAddress.toLowerCase(), skip },
      fetchPolicy: 'no-cache',
    })

    return account as AccountNameData
  } catch (error) {
    console.error(error)
    throw new Error(`Unable to query data from Client`)
  }
}

export async function getBalanceHistoryQueryCall({
  account,
  chainId,
  skip,
  first,
}: {
  account: string
  chainId: number
  skip: number
  first: number
}) {
  try {
    const client = getBalanceHistoryApolloClient(chainId)
    if (!client) return []

    const {
      data: { balanceChanges },
    } = await client.query<{
      balanceChanges: BalanceHistoryData[]
    }>({
      query: BALANCE_CHANGES_DATA,
      variables: { account: account.toLowerCase(), first, skip },
      fetchPolicy: 'no-cache',
    })

    return balanceChanges
  } catch (error) {
    console.error(error)
    throw new Error(`Unable to query data from Client`)
  }
}

export function toQuoteFromGraph(entity: SubGraphData) {
  return {
    id: Number(entity.quoteId),
    partyBsWhiteList: entity.partyBsWhiteList,
    marketId: Number(entity.symbolId),
    positionType: getPositionTypeByIndex(entity.positionType),
    orderType: entity.orderTypeOpen === 1 ? OrderType.MARKET : OrderType.LIMIT,
    openedPrice: fromWei(entity.openedPrice),
    requestedOpenPrice: fromWei(entity.requestedOpenPrice),
    quantity: fromWei(entity.quantity),
    initialCVA: fromWei(entity.initialData.cva ?? null),
    initialPartyAMM: fromWei(entity.initialData.partyAmm ?? null),
    initialLF: fromWei(entity.initialData.lf ?? null),
    CVA: fromWei(entity.cva),
    partyAMM: fromWei(entity.partyAmm),
    LF: fromWei(entity.lf),
    partyA: entity.partyA,
    partyB: entity.partyB,
    quoteStatus: getQuoteStateByIndex(entity.quoteStatus),
    avgClosedPrice: fromWei(entity.averageClosedPrice),
    quantityToClose: fromWei(entity.quantityToClose),
    statusModifyTimestamp: Number(entity.timeStamp),
    createTimestamp: Number(entity.initialData.timeStamp ?? null),
    deadline: Number(entity.deadline),
    marketPrice: fromWei(entity.marketPrice),
    closedAmount: fromWei(entity.closedAmount),
    liquidateAmount: fromWei(entity.liquidateAmount),
    liquidatePrice: fromWei(entity.liquidatePrice),
  } as Quote
}

export async function getHistoryQueryCall({
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
  column?: string
  order?: QuoteOrder
  startTime?: number
  endTime?: number
}) {
  try {
    const client = getOrderHistoryApolloClient(chainId)
    if (!client) return []

    const {
      data: { resultEntities },
    } = await client.query({
      query: ORDER_HISTORY_DATA_BY_RANGE,
      variables: {
        address: account,
        first,
        skip,
        column,
        order,
        startDate: startTime ?? 0,
        endDate: endTime ?? 2000000000,
      },
      fetchPolicy: 'no-cache',
    })

    return resultEntities.map((entity: SubGraphData) => toQuoteFromGraph(entity)) as Quote[]
  } catch (error) {
    console.error(error)
    throw new Error(`Unable to query data from Client`)
  }
}
export async function getUserHistoryQueryCall({
  account,
  chainId,
  skip,
  first,
  startDate,
  endDate,
}: {
  account: string
  chainId: number
  skip: number
  first: number
  startDate: string
  endDate: string
  order?: QuoteOrder
}): Promise<UserHistorySubgraphResultItem[]> {
  try {
    const client = getR2eApolloClient(chainId)
    if (!client) return []

    const {
      data: { dailyHistories },
    } = await client.query({
      query: USER_HISTORY_DATA_BY_RANGE,
      variables: { address: account, first, skip, startDate, endDate },
      fetchPolicy: 'no-cache',
    })
    // console.log({
    //   startDate,
    //   endDate,
    // })
    return (dailyHistories as UserHistorySubgraphResultItem[]).map((entity) => ({
      ...entity,
      accAllocate: fromWei(entity.accAllocate),
      accDeallocate: fromWei(entity.accDeallocate),
      allocate: fromWei(entity.allocate),
      deallocate: fromWei(entity.deallocate),
      loss: fromWei(entity.loss),
      profit: fromWei(entity.profit),
    }))
  } catch (error) {
    console.error(error)
    throw new Error(`Unable to query data from Client`)
  }
}

export async function getUserFeeDataQueryCall({
  account,
  chainId,
  skip,
  first,
  startDate,
  endDate,
}: {
  account: string
  chainId: number
  skip: number
  first: number
  startDate: string
  endDate: string
  order?: QuoteOrder
}): Promise<UserFeeDataSubgraphResultItem[]> {
  try {
    const client = getR2eApolloClient(chainId)
    if (!client) return []

    const {
      data: { dailySymbolTradesHistories },
    } = await client.query({
      query: USER_FEE_DATA_BY_RANGE,
      variables: { address: account, first, skip, startDate, endDate },
      fetchPolicy: 'no-cache',
    })
    console.log({
      startDate,
      endDate,
    })
    return (dailySymbolTradesHistories as UserFeeDataSubgraphResultItem[]).map((entity) => ({
      ...entity,
      fundingPaid: fromWei(entity.fundingPaid),
      fundingReceived: fromWei(entity.fundingReceived),
      platformFeePaid: fromWei(entity.platformFeePaid),
    }))
  } catch (error) {
    console.error(error)
    throw new Error(`Unable to query data from Client`)
  }
}

export async function getTotalSymbolTradesHistoriesQueryCall({
  account,
  chainId,
  skip,
}: {
  account: string
  chainId: number
  skip: number
  order?: QuoteOrder
}): Promise<totalSymbolTradesHistories[]> {
  try {
    const client = getR2eApolloClient(chainId)
    if (!client) return []

    const {
      data: { totalSymbolTradesHistories },
    } = await client.query({
      query: TOTAL_SYMBOL_TRADES_HISTORIES,
      variables: { address: account, skip },
      fetchPolicy: 'no-cache',
    })
    return totalSymbolTradesHistories as totalSymbolTradesHistories[]
  } catch (error) {
    console.error(error)
    throw new Error(`Unable to query data from Client`)
  }
}
