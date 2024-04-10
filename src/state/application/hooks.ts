import { useCallback, useMemo } from 'react'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

import { DEFAULT_TXN_DISMISS_MS } from 'constants/misc'
import { AppState, useAppDispatch, useAppSelector } from 'state'
import { addPopup, removePopup, setOpenModal, showFlash, toggleSideBar } from './actions'
import { ApplicationModal, Flash, Popup, PopupContent, PopupList } from './reducer'

export function useBlockNumber(): number | undefined {
  const { chainId } = useActiveWeb3React()
  return useAppSelector((state: AppState) => state.application.blockNumber[chainId ?? -1])
}

export function useBlockTimestamp(): number | undefined {
  const { chainId } = useActiveWeb3React()
  return useAppSelector((state: AppState) => state.application.blockTimestamp[chainId ?? -1])
}

export function useModalOpen(modal: ApplicationModal): boolean {
  const openModal = useAppSelector((state: AppState) => state.application.openModal)
  return openModal === modal
}

export function useToggleModal(modal: ApplicationModal): () => void {
  const open = useModalOpen(modal)
  const dispatch = useAppDispatch()
  return useCallback(() => dispatch(setOpenModal(open ? null : modal)), [dispatch, modal, open])
}

export function useIsSideBarVisible() {
  const isSideBarVisible = useAppSelector((state: AppState) => state.application.isSideBarVisible)
  return isSideBarVisible
}

export function useToggleWalletModal(): () => void {
  return useToggleModal(ApplicationModal.WALLET)
}

export function useToggleLeverageModal(): () => void {
  return useToggleModal(ApplicationModal.LEVERAGE)
}

export function useToggleRecentTransactionsModal(): () => void {
  return useToggleModal(ApplicationModal.RECENT_TRANSACTIONS)
}

export function useToggleOpenPositionModal(): () => void {
  return useToggleModal(ApplicationModal.OPEN_POSITION)
}

export function useDepositModalToggle(): () => void {
  return useToggleModal(ApplicationModal.DEPOSIT)
}

export function useCreateAccountModalToggle(): () => void {
  return useToggleModal(ApplicationModal.CREATE_ACCOUNT)
}

export function useWithdrawModalToggle(): () => void {
  return useToggleModal(ApplicationModal.WITHDRAW)
}

export function useAdvancedSettingModalToggle(): () => void {
  return useToggleModal(ApplicationModal.ADVANCED_SETTINGS)
}

export function useWithdrawBarModalToggle(): () => void {
  return useToggleModal(ApplicationModal.WITHDRAW_BAR)
}

export function useNetworkModalToggle(): () => void {
  return useToggleModal(ApplicationModal.NETWORK)
}

export function useNotificationsModalToggle(): () => void {
  return useToggleModal(ApplicationModal.NOTIFICATIONS)
}

// returns a function that allows adding a popup
export function useAddPopup(): (content: PopupContent, key?: string, removeAfterMs?: number) => void {
  const dispatch = useAppDispatch()

  return useCallback(
    (content: PopupContent, key?: string, removeAfterMs?: number) => {
      dispatch(addPopup({ content, key, removeAfterMs: removeAfterMs ?? DEFAULT_TXN_DISMISS_MS }))
    },
    [dispatch]
  )
}
export function useRemovePopup(): (key: string) => void {
  const dispatch = useAppDispatch()
  return useCallback(
    (key: string) => {
      dispatch(removePopup({ key }))
    },
    [dispatch]
  )
}

export function useToggleSideBar() {
  const dispatch = useAppDispatch()
  return useCallback(() => {
    dispatch(toggleSideBar())
  }, [dispatch])
}

export function useActivePopups(): PopupList {
  const list = useAppSelector((state: AppState) => {
    return state.application.popupList
  })
  return useMemo(() => list.filter((item: Popup) => item.show), [list])
  // return useMemo(
  //   () =>
  //     list.filter((item: Popup) => {
  //       if ('txn' in item.content) {
  //         const info = item.content.txn.info
  //         if (info && 'transferType' in info) {
  //           return item.show
  //         }
  //         return item.show && !item.content.txn.success
  //       }
  //       return item.show
  //     }),
  //   [list]
  // )
}

export function useFlash(): Flash {
  const flashTime = useAppSelector((state: AppState) => state.application.flashTime)
  const flashType = useAppSelector((state: AppState) => state.application.flashType)
  const flashColor = useAppSelector((state: AppState) => state.application.flashColor)
  return { flashTime, flashType, flashColor }
}

export function useShowFlash(): (flashTime: number, flashType: 'increase' | 'decrease', flashColor: string) => void {
  const dispatch = useAppDispatch()
  return useCallback(
    (flashTime: number, flashType: 'increase' | 'decrease', flashColor: string) => {
      dispatch(showFlash({ flashTime, flashType, flashColor }))
    },
    [dispatch]
  )
}
