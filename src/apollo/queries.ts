import gql from 'graphql-tag'

export const ORDER_HISTORY_DATA_BY_RANGE = gql`
  query OrderHistory(
    $address: String!
    $first: Int!
    $skip: Int!
    $column: String!
    $order: String!
    $startDate: Int!
    $endDate: Int!
  ) {
    resultEntities(
      first: $first
      skip: $skip
      orderBy: $column
      orderDirection: $order
      where: { partyA: $address, quoteStatus_in: [3, 7, 8, 9], timeStamp_gte: $startDate, timeStamp_lte: $endDate }
    ) {
      orderTypeOpen
      partyAmm
      partyBmm
      lf
      cva
      partyA
      partyB
      quoteId
      quoteStatus
      symbol
      positionType
      quantity
      orderTypeClose
      openedPrice
      requestedOpenPrice
      closedPrice
      quantityToClose
      timeStamp
      closePrice
      deadline
      partyBsWhiteList
      symbolId
      fillAmount
      marketPrice
      averageClosedPrice
      liquidateAmount
      liquidatePrice
      closedAmount
      initialData {
        cva
        lf
        partyAmm
        partyBmm
        timeStamp
      }
    }
  }
`

export const GET_PAID_AMOUNT = gql`
  query GetPaidAmount($id: String!) {
    resultEntities(where: { quoteId: $id }) {
      fee
    }
  }
`

export const BALANCE_CHANGES_DATA = gql`
  query BalanceChanges($account: String!, $first: Int!, $skip: Int!) {
    balanceChanges(
      where: { account: $account, type_not: "ALLOCATE_PARTY_A" }
      first: $first
      skip: $skip
      orderBy: timestamp
      orderDirection: desc
    ) {
      amount
      timestamp
      transaction
      account
      type
    }
  }
`

export const TOTAL_DEPOSITS_AND_WITHDRAWALS = gql`
  query TotalDepositsAndWithdrawals($id: String!) {
    accounts(where: { id: $id }) {
      id
      timestamp
      withdraw
      deposit
      updateTimestamp
    }
  }
`

/*
{
  dailyGeneratedVolumes(first: 5, where: {day: 4, amountAsUser_gt: 0, pair: "0x0000000000000000000000000000000000000000"} orderBy: amountAsUser orderDirection: desc) {
    id
    day
    user
    amountAsUser
  }
}
 */
export const DailyData = gql`
  query DailyDataForPairQuery($skip: Int!, $day: BigInt!) {
    dailyGeneratedVolumes(
      first: 100
      skip: $skip
      where: { day: $day, amountAsUser_gt: 0, pair: "0x0000000000000000000000000000000000000000" }
      orderBy: amountAsUser
      orderDirection: desc
    ) {
      user
      amountAsUser
    }
  }
`

/*
{
dailyGeneratedVolumes(first: 100, where: {user: "0x0000000000000000000000000000000000000000", amountAsUser_gt: 0, pair: "0x0000000000000000000000000000000000000000"} orderBy: day orderDirection: desc) {
  id
  day
  user
  amountAsUser
}
}
*/

export const TotalVolumeForDaysData = gql`
  query DailyDataForPairQuery($days: [BigInt!]) {
    dailyGeneratedVolumes(
      first: 100
      where: {
        user: "0x0000000000000000000000000000000000000000"
        pair: "0x0000000000000000000000000000000000000000"
        day_in: $days
      }
      orderBy: day
      orderDirection: desc
    ) {
      user
      day
      amountAsUser
    }
  }
`

export const UserRewardData = gql`
  query DailyDataForPairQuery($skip: Int!, $user: Bytes!) {
    dailyGeneratedVolumes(
      first: 100
      skip: $skip
      where: { user: $user, day_gte: 0, amountAsUser_gt: 0, pair: "0x0000000000000000000000000000000000000000" }
      orderBy: day
      orderDirection: desc
    ) {
      user
      day
      amountAsUser
    }
  }
`

export const UserRewardDataCustomDay = gql`
  query DailyDataForPairQuery($user: Bytes!, $skip: Int!, $day: BigInt!) {
    dailyGeneratedVolumes(
      first: 100
      skip: $skip
      where: { user: $user, day: $day, amountAsUser_gt: 0, pair: "0x0000000000000000000000000000000000000000" }
      orderBy: day
      orderDirection: desc
    ) {
      user
      day
      amountAsUser
    }
  }
`

export const AccountsNameData = gql`
  query AccountsNameData($users: [ID!]!) {
    accounts(where: { user_in: $users }) {
      id
      user
      name
    }
  }
`

export const ACCOUNT_NAME_DATA = gql`
  query AccountsNameData($id: ID, $skip: Int) {
    account(skip: $skip, id: $id) {
      user
      name
      timestamp
    }
  }
`

export const TotalTradingFee = gql`
  query TotalTradingFee {
    totalHistories(where: { accountSource: "0x5de6949717f3aa8e0fbed5ce8b611ebcf1e44ae9" }) {
      platformFee
    }
  }
`

export const USER_HISTORY_DATA_BY_RANGE = gql`
  query UserHistory($address: String!, $first: Int!, $skip: Int!, $startDate: String!, $endDate: String!) {
    dailyHistories(
      first: $first
      skip: $skip
      orderBy: timestamp
      orderDirection: asc
      where: {
        account: $address
        timestamp_gte: $startDate
        timestamp_lte: $endDate
        accountSource: "0x1c03b6480a4efc2d4123ba90d7857f0e1878b780"
      }
    ) {
      accAllocate
      accDeallocate
      allocate
      deallocate
      loss
      profit
      timestamp
      account
    }
  }
`

export const USER_FEE_DATA_BY_RANGE = gql`
  query UserFeeData($address: String!, $first: Int!, $skip: Int!, $startDate: String!, $endDate: String!) {
    dailySymbolTradesHistories(
      first: $first
      skip: $skip
      orderBy: updateTimestamp
      orderDirection: asc
      where: {
        account: $address
        updateTimestamp_gte: $startDate
        updateTimestamp_lte: $endDate
        accountSource: "0x1c03b6480a4efc2d4123ba90d7857f0e1878b780"
      }
    ) {
      fundingPaid
      fundingReceived
      platformFeePaid
      symbolId
      updateTimestamp
    }
  }
`

export const TOTAL_SYMBOL_TRADES_HISTORIES = gql`
  query totalSymbolTradesHistories($address: String!, $skip: Int) {
    totalSymbolTradesHistories(skip: $skip, where: { account: $address }) {
      accountSource
      fundingPaid
      fundingReceived
      id
      platformFeePaid
      symbolId
      totalTrades
      account
      updateTimestamp
    }
  }
`
