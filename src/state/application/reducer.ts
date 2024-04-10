import { createReducer, nanoid } from '@reduxjs/toolkit'
import { SupportedChainId } from 'constants/chains'
import { NotificationDetails } from 'state/notifications/types'
import { TransactionInfo } from 'state/transactions/types'

import {
  addPopup,
  removePopup,
  setOpenModal,
  setChainConnectivityWarning,
  showFlash,
  updateBlockNumber,
  updateBlockTimestamp,
  updateChainId,
  setCjsLoaded,
  toggleSideBar,
} from './actions'

export enum ApplicationModal {
  WALLET = 'WALLET',
  NETWORK = 'NETWORK',
  OPEN_POSITION = 'OPEN_POSITION',
  DEPOSIT = 'DEPOSIT',
  WITHDRAW = 'WITHDRAW',
  WITHDRAW_BAR = 'WITHDRAW_BAR',
  CREATE_ACCOUNT = 'CREATE_ACCOUNT',
  RECENT_TRANSACTIONS = 'RECENT_TRANSACTIONS',
  ADVANCED_SETTINGS = 'ADVANCED_SETTINGS',
  NOTIFICATIONS = 'NOTIFICATIONS',
  LEVERAGE = 'LEVERAGE',
}

export type PopupContent =
  | {
      txn: {
        hash: string
        success: boolean
        summary?: string
        info?: TransactionInfo
      }
    }
  | {
      failedSwitchNetwork: SupportedChainId
    }
  | NotificationDetails

export type Popup = {
  key: string
  show: boolean
  content: PopupContent
  removeAfterMs: number | null
}

export type PopupList = Array<Popup>

export type Flash = {
  flashTime: number
  flashType: 'increase' | 'decrease'
  flashColor: string
}

export interface ApplicationState {
  readonly blockNumber: { readonly [chainId: number]: number }
  readonly blockTimestamp: { readonly [chainId: number]: number }
  readonly chainConnectivityWarning: boolean
  readonly chainId: number | null
  readonly popupList: PopupList
  readonly isCjsLoaded: boolean | undefined
  readonly openModal: ApplicationModal | null
  readonly flashTime: number
  readonly flashType: 'increase' | 'decrease'
  readonly flashColor: string
  readonly isSideBarVisible: boolean
}

const initialState: ApplicationState = {
  blockNumber: {},
  blockTimestamp: {},
  chainConnectivityWarning: false,
  chainId: null,
  openModal: null,
  popupList: [],
  isCjsLoaded: false,
  flashTime: 0,
  flashType: 'increase',
  flashColor: '#3C7FBD',
  isSideBarVisible: true,
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateBlockNumber, (state, { payload }) => {
      const { chainId, blockNumber } = payload
      if (typeof state.blockNumber[chainId] !== 'number') {
        state.blockNumber[chainId] = blockNumber
      } else {
        state.blockNumber[chainId] = Math.max(blockNumber, state.blockNumber[chainId])
      }
    })
    .addCase(updateBlockTimestamp, (state, action) => {
      const { chainId, blockTimestamp } = action.payload
      if (typeof state.blockTimestamp[chainId] !== 'number') {
        state.blockTimestamp[chainId] = blockTimestamp
      } else {
        state.blockTimestamp[chainId] = Math.max(blockTimestamp, state.blockTimestamp[chainId])
      }
    })
    .addCase(updateChainId, (state, { payload }) => {
      const { chainId } = payload
      state.chainId = chainId
    })
    .addCase(setChainConnectivityWarning, (state, action) => {
      const { chainConnectivityWarning } = action.payload
      state.chainConnectivityWarning = chainConnectivityWarning
    })
    .addCase(setOpenModal, (state, { payload }) => {
      state.openModal = payload
    })
    .addCase(addPopup, (state, { payload: { content, key, removeAfterMs = 25000 } }) => {
      state.popupList = (key ? state.popupList.filter((popup) => popup.key !== key) : state.popupList).concat([
        {
          key: key || nanoid(),
          show: true,
          content,
          removeAfterMs,
        },
      ])
    })
    .addCase(removePopup, (state, { payload }) => {
      const { key } = payload
      state.popupList.forEach((p) => {
        if (p.key === key) {
          p.show = false
        }
      })
    })
    .addCase(setCjsLoaded, (state, { payload }) => {
      const { isLoaded } = payload
      state.isCjsLoaded = isLoaded
    })
    .addCase(showFlash, (state, { payload }) => {
      const { flashTime, flashType, flashColor } = payload
      state.flashTime = flashTime
      state.flashType = flashType
      state.flashColor = flashColor
    })
    .addCase(toggleSideBar, (state) => {
      state.isSideBarVisible = !state.isSideBarVisible
    })
)
