import { useCallback } from 'react'
import { shallowEqual } from 'react-redux'
import { useTheme } from 'styled-components'

import { WEB_SETTING } from 'config'
import { makeHttpRequest } from 'utils/http'
import { BALANCE_HISTORY_ITEMS_NUMBER } from 'constants/misc'

import { Account, AccountUpnl, BalanceInfosType, UserPartyAStatDetail, initialUserPartyAStatDetail } from 'types/user'
import { ApiState } from 'types/api'
import { BalanceHistoryData, ConnectionStatus, FavoritesColor, FavoritesType, GlobalCoinState } from './types'
import { getBalanceHistory } from './thunks'
import { getAppNameHeader } from 'state/hedger/thunks'
import { AppThunkDispatch, useAppDispatch, useAppSelector } from 'state'

import {
  updateUserSlippageTolerance,
  updateUserDarkMode,
  updateUserLeverage,
  updateUserFavorites,
  updateUserExpertMode,
  updateUpnlWebSocketStatus,
  updateHideZeroBalanceAccounts,
  updateSoundEffects,
  updateAccountHealthAndEffects,
  updateBalanceInfo,
  updateNotification,
} from './actions'
import { useHedgerInfo } from 'state/hedger/hooks'
import useDebounce from 'lib/hooks/useDebounce'

export function useIsDarkMode(): boolean {
  const { userDarkMode, matchesDarkMode } = useAppSelector(
    ({ user: { matchesDarkMode, userDarkMode } }) => ({
      userDarkMode,
      matchesDarkMode,
    }),
    shallowEqual
  )
  return userDarkMode === null ? matchesDarkMode : userDarkMode
}

export function useDarkModeManager(): [boolean, () => void] {
  const dispatch = useAppDispatch()
  const darkMode = useIsDarkMode()

  const toggleSetDarkMode = useCallback(() => {
    dispatch(updateUserDarkMode({ userDarkMode: !darkMode }))
  }, [darkMode, dispatch])

  return [darkMode, toggleSetDarkMode]
}

export function useSetSlippageToleranceCallback(): (slippageTolerance: 'auto') => void {
  const dispatch = useAppDispatch()
  return useCallback(
    (userSlippageTolerance: 'auto') => {
      dispatch(
        updateUserSlippageTolerance({
          userSlippageTolerance,
        })
      )
    },
    [dispatch]
  )
}

export function useSlippageTolerance(): number | 'auto' {
  const userSlippageTolerance = useAppSelector((state) => state.user.userSlippageTolerance)
  return userSlippageTolerance
}

export function useSetExpertModeCallback() {
  const dispatch = useAppDispatch()
  return useCallback(
    (userExpertMode: boolean) => {
      dispatch(updateUserExpertMode({ userExpertMode }))
    },
    [dispatch]
  )
}

export function useExpertMode(): boolean {
  const userExpertMode = useAppSelector((state) => state.user.userExpertMode)
  return userExpertMode ? true : false
}

export function useUserWhitelist(): null | boolean {
  const whiteListAccount = useAppSelector((state) => state.user.whiteListAccount)
  return whiteListAccount
}

export function useLeverage(): number {
  const leverage = useAppSelector((state) => state.user.leverage)
  return leverage
}

export function useSetLeverageCallback() {
  const dispatch = useAppDispatch()
  return useCallback(
    (leverage: number) => {
      dispatch(updateUserLeverage(leverage))
    },
    [dispatch]
  )
}

export function useFavorites(): FavoritesType {
  const favorites = useAppSelector((state) => state.user.favorites)
  return favorites
}

export function useToggleUserFavoriteCallback(symbol: string): (color: FavoritesColor) => void {
  const dispatch = useAppDispatch()
  const favorites = useFavorites()

  return useCallback(
    (color: FavoritesColor) => {
      const allListsEmpty = Object.values(favorites).every((list) => list.length === 0)
      if (allListsEmpty) {
        // add first market
        dispatch(updateUserFavorites({ ...favorites, [color]: [symbol] }))
        return
      }
      if (favorites[color].includes(symbol)) {
        // remove market from favorite
        const filteredFavorites = favorites[color].filter((favorite) => favorite !== symbol)
        dispatch(updateUserFavorites({ ...favorites, [color]: [...filteredFavorites] }))
        return
      }
      for (const [label, itemList] of Object.entries(favorites)) {
        // change market favorite color
        if (label !== color && itemList.includes(symbol)) {
          const filteredFavorite = itemList.filter((i: string) => i !== symbol)
          const newFavorite = [...favorites[color], symbol]
          dispatch(updateUserFavorites({ ...favorites, [label]: [...filteredFavorite], [color]: [...newFavorite] }))
          return
        }
      }

      // add market that doesn't exists in another favorites
      dispatch(updateUserFavorites({ ...favorites, [color]: [...favorites[color], symbol] }))
    },
    [favorites, symbol, dispatch]
  )
}

export function useActiveAccount(): Account | null {
  const activeAccount = useAppSelector((state) => state.user.activeAccount)
  return activeAccount
}

export function useActiveAccountAddress(): string | null {
  const activeAccount = useAppSelector((state) => state.user.activeAccount)
  return activeAccount && activeAccount.accountAddress
}

export function useGetBalanceInfo(): BalanceInfosType {
  const balanceInfo = useAppSelector((state) => state.user.balanceInfo)
  return balanceInfo
}

export function useAccountPartyAStat(address: string | null | undefined): UserPartyAStatDetail {
  const accountsPartyAStat = useAppSelector((state) => state.user.accountsPartyAStat)
  if (!address || !accountsPartyAStat) return initialUserPartyAStatDetail
  if (!accountsPartyAStat[address]) return initialUserPartyAStatDetail
  return accountsPartyAStat[address]
}

export function useAccountUpnl() {
  const activeAccountUpnl = useAppSelector((state) => state.user.activeAccountUpnl)
  return activeAccountUpnl
}

export function useCustomAccountUpnl(account: string): AccountUpnl | undefined {
  return useAppSelector((state) => (state.user.allAccountsUpnl || []).find((x: any) => x.account === account))?.upnl
}

export function useSetUpnlWebSocketStatus() {
  const dispatch = useAppDispatch()
  return useCallback(
    (status: ConnectionStatus) => {
      dispatch(updateUpnlWebSocketStatus({ status }))
    },
    [dispatch]
  )
}

export function useSetHideZeroBalanceAccounts() {
  const dispatch = useAppDispatch()
  return useCallback(
    (status: boolean) => {
      dispatch(updateHideZeroBalanceAccounts(status))
    },
    [dispatch]
  )
}

export function useSetNotification() {
  const dispatch = useAppDispatch()
  return useCallback(
    (status: boolean) => {
      dispatch(updateNotification(status))
    },
    [dispatch]
  )
}

export function useSetSoundEffects() {
  const dispatch = useAppDispatch()
  return useCallback(
    (status: boolean) => {
      dispatch(updateSoundEffects(status))
    },
    [dispatch]
  )
}

export function useSetAccountHealthAndEffects() {
  const dispatch = useAppDispatch()
  return useCallback(
    (status: boolean) => {
      dispatch(updateAccountHealthAndEffects(status))
    },
    [dispatch]
  )
}

export function useSetBalanceInfo() {
  const dispatch = useAppDispatch()
  return useCallback(
    (info: BalanceInfosType) => {
      dispatch(updateBalanceInfo(info))
    },
    [dispatch]
  )
}

export function useGetBalanceHistoryCallback() {
  const thunkDispatch: AppThunkDispatch = useAppDispatch()
  return useCallback(
    (chainId: number | undefined, account: string | null, skip?: number, first?: number) => {
      if (!chainId || !account) return
      thunkDispatch(
        getBalanceHistory({
          account,
          chainId,
          first: first ?? BALANCE_HISTORY_ITEMS_NUMBER,
          skip: skip ? skip : 0,
        })
      )
    },
    [thunkDispatch]
  )
}

export function useUpnlWebSocketStatus() {
  const upnlWebSocketStatus = useAppSelector((state) => state.user.upnlWebSocketStatus)
  return upnlWebSocketStatus
}

export function useIsWhiteList(
  account: string | undefined,
  multiAccountAddress: string | undefined
): () => Promise<any> {
  const { baseUrl, fetchData } = useHedgerInfo() || {}

  const isWhiteList = useCallback(async () => {
    if (!WEB_SETTING.checkWhiteList || !fetchData || !account || !baseUrl || !multiAccountAddress) {
      return Promise.reject('')
    }

    const url = new URL(`/check_in-whitelist/${account}/${multiAccountAddress}`, baseUrl).href
    return makeHttpRequest(url, getAppNameHeader())
  }, [fetchData, account, baseUrl, multiAccountAddress])

  return isWhiteList
}

export function useAddInWhitelist(
  subAccount: string | undefined,
  multiAccountAddress: string | undefined
): () => Promise<any> {
  const { baseUrl, fetchData } = useHedgerInfo() || {}

  const addInWhitelist = useCallback(async () => {
    if (!WEB_SETTING.checkWhiteList || !fetchData || !subAccount || !baseUrl || !multiAccountAddress) {
      return Promise.reject('')
    }

    const url = new URL(`/add-sub-address-in-whitelist/${subAccount}/${multiAccountAddress}`, baseUrl).href
    return makeHttpRequest(url, getAppNameHeader())
  }, [baseUrl, fetchData, multiAccountAddress, subAccount])

  return addInWhitelist
}

export function useBalanceHistory(): {
  hasMoreHistory: boolean | undefined
  balanceHistory: { [txHash: string]: BalanceHistoryData } | undefined
  balanceHistoryState: ApiState
} {
  const hasMoreHistory = useAppSelector((state) => state.user.hasMoreHistory)
  const balanceHistory = useAppSelector((state) => state.user.balanceHistory)
  const balanceHistoryState = useAppSelector((state) => state.user.balanceHistoryState)

  return { hasMoreHistory, balanceHistory, balanceHistoryState }
}

export function useTotalDepositsAndWithdrawals() {
  const depositWithdrawalsData = useAppSelector((state) => state.user.depositWithdrawalsData)
  const depositWithdrawalsState = useAppSelector((state) => state.user.depositWithdrawalsState)
  const debounceState = useDebounce(depositWithdrawalsState, 200)

  return { depositWithdrawalsData, depositWithdrawalsState: debounceState }
}

export function useIsTermsAccepted() {
  const isTermsAccepted = useAppSelector((state) => state.user.isTermsAccepted)
  return isTermsAccepted
}

export function useIsHideAccountBalances() {
  const hideZeroBalanceAccounts = useAppSelector((state) => state.user.hideZeroBalanceAccounts)
  return hideZeroBalanceAccounts
}

export function useFavoriteColor(symbol: string | undefined): {
  label: FavoritesColor | null
  color: string | undefined
  isFavorite: boolean
} {
  const { blue, green, pink } = useTheme()
  const favorites = useFavorites()
  const colorMap = {
    blue,
    green,
    pink,
  }

  if (!symbol) return { label: null, color: undefined, isFavorite: false }

  for (const [label, itemList] of Object.entries(favorites)) {
    if (itemList.includes(symbol)) {
      return { label: label as FavoritesColor, color: colorMap[label as FavoritesColor], isFavorite: true }
    }
  }

  return { label: null, color: undefined, isFavorite: false }
}

export function useSoundEffects() {
  const isEnabledSoundEffects = useAppSelector((state) => state.user.isEnabledSoundEffects)
  return isEnabledSoundEffects
}

export function useNotification() {
  const isEnabledNotification = useAppSelector((state) => state.user.isEnabledNotification)
  return isEnabledNotification
}

export function useAccountHealthAndEffects() {
  const isEnabledAccountHealthAndEffects = useAppSelector((state) => state.user.isEnabledAccountHealthAndEffects)
  return isEnabledAccountHealthAndEffects
}

export function useGlobalCoinStats(): GlobalCoinState {
  const globalCoinStats = useAppSelector((state) => state.user.globalCoinStats)
  return globalCoinStats
}
