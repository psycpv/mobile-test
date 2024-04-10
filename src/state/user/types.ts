import { ConnectionType } from 'connection/index'
import { ApiState } from 'types/api'
import { Account, AccountUpnl, BalanceInfosType, UserPartyAStatType } from 'types/user'

export enum ConnectionStatus {
  OPEN,
  CLOSED,
}

export interface UserState {
  selectedWallet?: ConnectionType
  matchesDarkMode: boolean // whether the dark mode media query matches
  userDarkMode: boolean | null // the user's choice for dark mode or light mode
  userExpertMode: boolean | null // the expert user's choice it for disable review modal and enable submit buggy tx
  userSlippageTolerance: 'auto' // user defined slippage tolerance in percentages
  timestamp: number
  favorites: FavoritesType
  leverage: number
  activeAccount: Account | null
  activeAccountUpnl: AccountUpnl
  allAccountsUpnl: { account: string; upnl: AccountUpnl }[]
  upnlWebSocketStatus: ConnectionStatus
  whiteListAccount: boolean | null
  accountsPartyAStat: UserPartyAStatType
  whiteListAccountState: ApiState

  balanceInfo: BalanceInfosType
  balanceInfoState: ApiState
  balanceHistory?: { [txHash: string]: BalanceHistoryData }
  balanceHistoryState: ApiState
  hasMoreHistory?: boolean

  depositWithdrawalsData: DepositWithdrawalsData | null
  depositWithdrawalsState: ApiState

  isTermsAccepted: TermsStatus

  hideZeroBalanceAccounts: boolean

  isEnabledSoundEffects: boolean
  isEnabledNotification: boolean
  isEnabledAccountHealthAndEffects: boolean
  globalCoinStats: GlobalCoinState
  globalCoinStatsState: ApiState
}

export interface GlobalCoinState {
  market_cap?: number
  market_cap_rank?: number
  fully_diluted_valuation?: number
  total_volume?: number
  high_24h?: number
  low_24h?: number
  market_cap_change_24h?: number
  market_cap_change_percentage_24h?: number
  circulating_supply?: number
  max_supply?: number
  ath?: number
}

export interface FavoritesType {
  pink: string[]
  blue: string[]
  green: string[]
}

export enum FavoritesColor {
  PINK = 'pink',
  GREEN = 'green',
  BLUE = 'blue',
}

export enum BalanceHistoryType {
  DEPOSIT_PARTY_A = 'DEPOSIT',
  ALLOCATE_PARTY_A = 'ALLOCATE_PARTY_A',
  DEALLOCATE_PARTY_A = 'DEALLOCATE_PARTY_A',
  WITHDRAW_PARTY_A = 'WITHDRAW',
}

export const BalanceHistoryName: { [status: string]: string } = {
  [BalanceHistoryType.DEPOSIT_PARTY_A]: 'DEPOSIT',
  [BalanceHistoryType.DEALLOCATE_PARTY_A]: 'WITHDRAW REQUEST',
  [BalanceHistoryType.WITHDRAW_PARTY_A]: 'WITHDRAW',
}

export interface BalanceHistoryData {
  amount: string
  transaction: string
  timestamp: string
  account: string
  type: BalanceHistoryType
  __typename: string
}

export interface DepositWithdrawalsData {
  id: string
  timestamp: string
  withdraw: string
  deposit: string
  updateTimestamp: string
  __typename: string
}

export enum TermsStatus {
  NOT_ACCEPTED,
  ACCEPTED,
  UNCLEAR,
}
