import { useMemo } from 'react'

import { toBN } from 'utils/numbers'
import { WEB_SETTING } from 'config'
import { ConnectionStatus } from 'state/user/types'

import { useAccountPartyAStat, useAccountUpnl, useActiveAccount, useUpnlWebSocketStatus } from 'state/user/hooks'
import { useAccountsLength } from './useAccounts'

export interface Emoji {
  symbol: string
  label: string
}

export interface Status {
  face: string
  type: 'animation' | 'image'
  color: string
  state: string
  smile: string
  frown: string
}

export interface AccountData {
  equity: string
  maintenanceMargin: string
  accountHealthData: { health: string; healthColor: string; healthEmoji: Emoji; healthStatus: Status }
  availableForOrder: string
  loading: boolean
}

export default function useAccountData(): AccountData {
  const { upnl } = useAccountUpnl() || {}
  const { accountAddress } = useActiveAccount() || {}

  const {
    allocatedBalance,
    lockedCVA,
    lockedLF,
    lockedPartyAMM,
    pendingLockedCVA,
    pendingLockedLF,
    pendingLockedPartyAMM,
    loading: statsLoading,
    liquidationStatus,
  } = useAccountPartyAStat(accountAddress)
  const upnlWebSocketStatus = useUpnlWebSocketStatus()

  const { accountLength, loading: accountsLoading } = useAccountsLength()

  const totalLocked = toBN(lockedCVA).plus(lockedLF).plus(lockedPartyAMM).toString()
  const totalPendingLocked = toBN(pendingLockedCVA).plus(pendingLockedLF).plus(pendingLockedPartyAMM).toString()

  const loading = statsLoading || upnlWebSocketStatus !== ConnectionStatus.OPEN

  const equity = toBN(allocatedBalance).plus(upnl).toString()

  const maintenanceMargin = toBN(lockedCVA).plus(lockedLF).toString()

  const accountHealthData = useMemo(() => {
    const rawAccountHealth = toBN(equity)
      .minus(maintenanceMargin)
      .div(toBN(allocatedBalance).minus(maintenanceMargin))
      .times(100)
    const health = toBN(equity).gt(0) ? rawAccountHealth.toString() : rawAccountHealth.times(-1).toString()
    const healthColor = getAccountColor(health, liquidationStatus)
    const healthEmoji = getAccountEmoji(health, liquidationStatus)
    const healthStatus = getAccountStatus(health, liquidationStatus, !accountsLoading && accountLength === 0)

    return { health, healthColor, healthEmoji, healthStatus }
  }, [allocatedBalance, equity, liquidationStatus, maintenanceMargin, accountsLoading, accountLength])

  const availableForOrder = useMemo(() => {
    if (upnl >= 0) return toBN(allocatedBalance).plus(upnl).minus(totalLocked).minus(totalPendingLocked).toString()
    else {
      const considering_mm = toBN(upnl).times(-1).minus(lockedPartyAMM).gt(0) ? toBN(upnl).times(-1) : lockedPartyAMM
      return toBN(allocatedBalance)
        .minus(lockedCVA)
        .minus(lockedLF)
        .minus(totalPendingLocked)
        .minus(considering_mm)
        .toString()
    }
  }, [allocatedBalance, lockedCVA, lockedLF, lockedPartyAMM, totalLocked, totalPendingLocked, upnl])

  return useMemo(
    () => ({
      equity,
      maintenanceMargin,
      accountHealthData,
      availableForOrder,
      loading,
    }),
    [accountHealthData, availableForOrder, equity, loading, maintenanceMargin]
  )
}

function getAccountColor(accountHealth: string, isLiquidated: boolean) {
  const accountHealthBN = toBN(accountHealth)
  if (isLiquidated) return '#EA5E5E'
  if (!WEB_SETTING.showColorfulAccountHealth) {
    return ''
  } else if (accountHealthBN.lt(10)) {
    return '#F84F4F'
  } else if (accountHealthBN.lt(25)) {
    return '#F84F4F'
  } else if (accountHealthBN.lt(50)) {
    return '#EA805E'
  } else if (accountHealthBN.lt(75)) {
    return '#94D47D'
  } else {
    return '#6FF37B'
  }
}

function getAccountEmoji(accountHealth: string, isLiquidated: boolean): Emoji {
  const accountHealthBN = toBN(accountHealth)
  if (isLiquidated) {
    return { symbol: '☠️', label: 'skull-and-crossbones' }
  }
  if (!WEB_SETTING.showAccountHealthEmoji) {
    return { symbol: '', label: '' }
  } else if (accountHealthBN.lt(10)) {
    return { symbol: '🥵', label: 'hot-face' }
  } else if (accountHealthBN.lt(25)) {
    return { symbol: '😨', label: 'fearful-face' }
  } else if (accountHealthBN.lt(50)) {
    return { symbol: '🙄', label: 'face-with-rolling-eyes' }
  } else if (accountHealthBN.lt(75)) {
    return { symbol: '😊', label: 'smiling-face-with-smiling-eyes' }
  } else {
    return { symbol: '😍', label: 'smiling-face-with-heart-eyes' }
  }
}

export function getAccountStatus(accountHealth: string, isLiquidated: boolean, isNotCreated: boolean): Status {
  const accountHealthBN = toBN(accountHealth)

  if (accountHealthBN.isNaN()) {
    return {
      face: '_loading',
      type: 'animation',
      color: '#f9a2f3',
      state: 'LOADING',
      smile: '_Almost_dead',
      frown: '_Almost_dead',
    }
  }
  if (isLiquidated) {
    return {
      face: '_dead',
      type: 'animation',
      color: '#ff2626',
      state: 'GONE?',
      smile: '_Almost_dead',
      frown: '_Almost_dead',
    }
  }
  if (isNotCreated) {
    return {
      face: 'face0.png',
      type: 'image',
      color: '#ff262',
      state: '-',
      smile: '_Almost_dead',
      frown: '_Almost_dead',
    }
  }
  if (accountHealthBN.gt(500)) {
    return {
      face: '_golden_god',
      type: 'animation',
      color: '#03ffff',
      state: 'HOLY',
      smile: '_golden_god_smile',
      frown: '_golden_frown',
    }
  } else if (accountHealthBN.gt(250)) {
    return {
      face: '_500',
      type: 'animation',
      color: '#0f92e1',
      state: 'HERO',
      smile: '_500_smile',
      frown: '_500_frown',
    }
  } else if (accountHealthBN.gt(125)) {
    return {
      face: '_250',
      type: 'animation',
      color: '#e89fed',
      state: 'GOOD',
      smile: '_250_smile',
      frown: '_250_frown',
    }
  } else if (accountHealthBN.gt(75)) {
    return {
      face: '_100_default',
      type: 'animation',
      color: '#f9a2f3',
      state: 'CHILL',
      smile: '_100_smile',
      frown: '_100_frown',
    }
  } else if (accountHealthBN.gt(50)) {
    return { face: '_75', type: 'animation', color: '#f2ff6c', state: 'OK', smile: '_75_smile', frown: '_75_frown' }
  } else if (accountHealthBN.gt(25)) {
    return { face: '_50', type: 'animation', color: '#fff54c', state: 'HURT', smile: '_50_smile', frown: '_50_frown' }
  } else if (accountHealthBN.gt(5)) {
    return { face: '_25', type: 'animation', color: '#ff8e33', state: 'BEAT', smile: '_25_smile', frown: '_25_frown' }
  } else {
    return {
      face: '_dead',
      type: 'animation',
      color: '#ff2626',
      state: 'GONE?',
      smile: '_Almost_dead',
      frown: '_Almost_dead',
    }
  }
}
