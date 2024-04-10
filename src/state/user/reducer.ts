import { createReducer } from '@reduxjs/toolkit'
import { ApiState } from 'types/api'
import { ConnectionStatus, FavoritesColor, TermsStatus, UserState } from './types'

import {
  updateSelectedWallet,
  updateUserSlippageTolerance,
  updateMatchesDarkMode,
  updateUserDarkMode,
  updateUserExpertMode,
  updateUserFavorites,
  updateUserLeverage,
  updateAccount,
  updateAccountUpnl,
  updateUpnlWebSocketStatus,
  updateAccountPartyAStat,
  updateAcceptTerms,
  updateAllAccountsUpnl,
  updateHideZeroBalanceAccounts,
  updateSoundEffects,
  updateAccountHealthAndEffects,
  updateBalanceInfo,
  updateNotification,
} from './actions'
import { getBalanceHistory, getIsWhiteList, getTotalDepositsAndWithdrawals, getGlobalCoinStats } from './thunks'

const currentTimestamp = () => new Date().getTime()

const activeAccountUpnlInitialState = {
  upnl: 0,
  timestamp: 0,
  available_balance: 0,
}

export const initialState: UserState = {
  selectedWallet: undefined,
  matchesDarkMode: false,
  userDarkMode: true,
  userExpertMode: false,
  userSlippageTolerance: 'auto',
  timestamp: currentTimestamp(),
  favorites: { [FavoritesColor.BLUE]: [], [FavoritesColor.GREEN]: [], [FavoritesColor.PINK]: [] },
  leverage: 1,
  activeAccount: null,
  allAccountsUpnl: [],
  upnlWebSocketStatus: ConnectionStatus.CLOSED,
  activeAccountUpnl: activeAccountUpnlInitialState,
  accountsPartyAStat: {},

  whiteListAccount: null,
  whiteListAccountState: ApiState.LOADING,

  balanceInfo: {},
  balanceInfoState: ApiState.LOADING,

  balanceHistory: {},
  balanceHistoryState: ApiState.LOADING,
  hasMoreHistory: true,

  depositWithdrawalsData: null,
  depositWithdrawalsState: ApiState.LOADING,

  isTermsAccepted: TermsStatus.NOT_ACCEPTED,

  hideZeroBalanceAccounts: false,
  isEnabledSoundEffects: true,
  isEnabledNotification: false,
  isEnabledAccountHealthAndEffects: true,
  globalCoinStats: {},
  globalCoinStatsState: ApiState.LOADING,
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateUserDarkMode, (state, action) => {
      state.userDarkMode = action.payload.userDarkMode
      state.timestamp = currentTimestamp()
    })
    .addCase(updateSelectedWallet, (state, action) => {
      state.selectedWallet = action.payload.wallet
    })
    .addCase(updateMatchesDarkMode, (state, action) => {
      state.matchesDarkMode = action.payload.matchesDarkMode
      state.timestamp = currentTimestamp()
    })
    .addCase(updateUserExpertMode, (state, action) => {
      state.userExpertMode = action.payload.userExpertMode
      state.timestamp = currentTimestamp()
    })
    .addCase(updateUserFavorites, (state, action) => {
      state.favorites = action.payload
    })
    .addCase(updateUserLeverage, (state, action) => {
      state.leverage = action.payload
    })
    .addCase(updateUserSlippageTolerance, (state, action) => {
      state.userSlippageTolerance = action.payload.userSlippageTolerance
      state.timestamp = currentTimestamp()
    })
    .addCase(updateAccount, (state, action) => {
      state.activeAccount = action.payload
    })
    .addCase(updateAccountUpnl, (state, action) => {
      state.activeAccountUpnl = action.payload
    })
    .addCase(updateAllAccountsUpnl, (state, action) => {
      if (!state.allAccountsUpnl?.length) {
        state.allAccountsUpnl = []
      }
      const item = state.allAccountsUpnl.find((x) => x.account === action.payload.account)

      if (item) {
        item.upnl = action.payload.upnl
      } else {
        state.allAccountsUpnl.push(action.payload)
      }
    })
    .addCase(updateUpnlWebSocketStatus, (state, { payload }) => {
      state.upnlWebSocketStatus = payload.status
    })

    .addCase(updateAccountPartyAStat, (state, action) => {
      const result = state.accountsPartyAStat ?? {}
      const index = action.payload.address
      result[index] = action.payload.value
      state.accountsPartyAStat = result
    })
    .addCase(getIsWhiteList.fulfilled, (state, { payload }) => {
      state.whiteListAccount = payload.isWhiteList
      state.whiteListAccountState = ApiState.OK
    })

    .addCase(getIsWhiteList.pending, (state) => {
      state.whiteListAccountState = ApiState.LOADING
    })

    .addCase(getIsWhiteList.rejected, (state) => {
      state.whiteListAccount = false
      state.whiteListAccountState = ApiState.ERROR
    })

    .addCase(getBalanceHistory.fulfilled, (state, { payload: { hasMore, result } }) => {
      const history = { ...state.balanceHistory }
      if (!result) return

      result.forEach((d) => {
        history[d.transaction] = d
      })
      state.balanceHistory = history
      state.hasMoreHistory = hasMore
      state.balanceHistoryState = ApiState.OK
    })

    .addCase(getBalanceHistory.pending, (state) => {
      state.balanceHistoryState = ApiState.LOADING
    })

    .addCase(getBalanceHistory.rejected, (state) => {
      state.hasMoreHistory = false
      state.balanceHistoryState = ApiState.ERROR
    })

    .addCase(getTotalDepositsAndWithdrawals.fulfilled, (state, { payload: { result } }) => {
      state.depositWithdrawalsData = result
      state.depositWithdrawalsState = ApiState.OK
    })

    .addCase(getTotalDepositsAndWithdrawals.pending, (state) => {
      state.depositWithdrawalsState = ApiState.LOADING
    })

    .addCase(getTotalDepositsAndWithdrawals.rejected, (state) => {
      state.depositWithdrawalsData = null
      state.depositWithdrawalsState = ApiState.ERROR
    })

    .addCase(updateAcceptTerms, (state, action) => {
      state.isTermsAccepted = action.payload
    })
    .addCase(updateHideZeroBalanceAccounts, (state, action) => {
      state.hideZeroBalanceAccounts = action.payload
    })
    .addCase(updateSoundEffects, (state, action) => {
      state.isEnabledSoundEffects = action.payload
    })
    .addCase(updateNotification, (state, action) => {
      state.isEnabledNotification = action.payload
    })
    .addCase(updateAccountHealthAndEffects, (state, action) => {
      state.isEnabledAccountHealthAndEffects = action.payload
    })
    .addCase(getGlobalCoinStats.fulfilled, (state, { payload }) => {
      state.globalCoinStats = payload.globalCoinStats
      state.globalCoinStatsState = ApiState.OK
    })

    .addCase(getGlobalCoinStats.pending, (state) => {
      state.globalCoinStatsState = ApiState.LOADING
    })

    .addCase(getGlobalCoinStats.rejected, (state) => {
      state.globalCoinStatsState = ApiState.ERROR
    })
    .addCase(updateBalanceInfo, (state, action) => {
      state.balanceInfo = action.payload
    })
)
