import { useCallback } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

import useTradePage from 'hooks/useTradePage'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useToggleOpenPositionModal, useToggleSideBar } from 'state/application/hooks'
import { useSetOrderType, useSetPositionType } from 'state/trade/hooks'
import { ErrorState, OrderType, PositionType } from 'types/trade'
import { useToggleLeverageModal } from 'state/application/hooks'
import { toBN } from 'utils/numbers'

export default function Hotkeys() {
  const setOrderType = useSetOrderType()
  const setPositionType = useSetPositionType()
  const toggleSidebar = useToggleSideBar()
  const toggleShowTradeInfoModal = useToggleOpenPositionModal()
  const isUserAble2OpenPosition = useIsUserAble2OpenPosition()
  const toggleLeverageModal = useToggleLeverageModal()

  const onOpenPosition = useCallback(
    (positionType: PositionType) => {
      setPositionType(positionType)
      toggleShowTradeInfoModal()
    },
    [setPositionType, toggleShowTradeInfoModal]
  )

  useHotkeys('l', () => setOrderType(OrderType.LIMIT), { enableOnFormTags: ['input'] })
  useHotkeys('m', () => setOrderType(OrderType.MARKET), { enableOnFormTags: ['input'] })

  useHotkeys('b', () => onOpenPosition(PositionType.LONG), {
    enableOnFormTags: ['input'],
    enabled: isUserAble2OpenPosition,
  })
  useHotkeys('s', () => onOpenPosition(PositionType.SHORT), {
    enableOnFormTags: ['input'],
    enabled: isUserAble2OpenPosition,
  })

  useHotkeys('shift+right', toggleSidebar)
  useHotkeys('meta+s', () => console.log(''), {
    preventDefault: true,
  })

  useHotkeys('x', () => toggleLeverageModal(), {
    ignoreModifiers: true,
    preventDefault: true,
    enableOnFormTags: ['input'],
  })

  return <></>
}

function useIsUserAble2OpenPosition() {
  const { state, formattedAmounts } = useTradePage()
  const { account } = useActiveWeb3React()
  if (
    account &&
    state === ErrorState.VALID &&
    toBN(formattedAmounts[0]).isGreaterThan(0) &&
    toBN(formattedAmounts[1]).isGreaterThan(0)
  )
    return true
  return false
}
