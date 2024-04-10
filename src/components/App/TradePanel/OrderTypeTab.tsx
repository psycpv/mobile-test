import React, { useEffect } from 'react'
import { useTheme } from 'styled-components'
import { OrderType } from 'types/trade'

import { useOrderType, useSetLimitPrice, useSetOrderType } from 'state/trade/hooks'
import { useLeverage } from 'state/user/hooks'
import { useModalOpen, useToggleLeverageModal } from 'state/application/hooks'
import { ApplicationModal } from 'state/application/reducer'

import { Tab, TabButton } from 'components/Tab'
import SetLeverageModal from 'components/ReviewModal/SetLeverageModal'

export default function OrderTypeTab() {
  const orderType = useOrderType()
  const setOrderType = useSetOrderType()
  const setLimitPrice = useSetLimitPrice()

  useEffect(() => {
    setLimitPrice('')
  }, [orderType]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Tab
      tabOptions={[OrderType.MARKET, OrderType.LIMIT]}
      activeOption={orderType}
      onChange={(option: string) => setOrderType(option as OrderType)}
    >
      <LeverageButton />
    </Tab>
  )
}

function LeverageButton() {
  const { color3 } = useTheme()
  const userLeverage = useLeverage()
  const toggleLeverageModal = useToggleLeverageModal()
  const openLeverageModal = useModalOpen(ApplicationModal.LEVERAGE)

  return (
    <React.Fragment>
      <TabButton
        width={'75px'}
        minWidth={'75px'}
        active={true}
        borderSize={'0'}
        backgroundColor={color3}
        onClick={() => toggleLeverageModal()}
      >
        {userLeverage}x
      </TabButton>
      {openLeverageModal && <SetLeverageModal isOpen={openLeverageModal} onDismiss={() => toggleLeverageModal()} />}
    </React.Fragment>
  )
}
