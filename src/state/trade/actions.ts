import { createAction } from '@reduxjs/toolkit'
import { InputField, OrderType, PositionType } from 'types/trade'
import { TradeState } from './types'

export const setTradeState = createAction<TradeState>('trade/setTradeState')
export const updateMarketId = createAction<{ id: number }>('hedger/updateMarketId')
export const updateOrderType = createAction<OrderType>('trade/updateOrderType')
export const updateInputField = createAction<InputField>('trade/updateInputField')
export const updateLimitPrice = createAction<string>('trade/updateLimitPrice')
export const updateTypedValue = createAction<string>('trade/updateTypedValue')
export const updatePositionType = createAction<PositionType>('trade/updatePositionType')
export const updateLockedPercentages = createAction<{ cva: string; partyAmm: string; partyBmm: string; lf: string }>(
  'trade/updateLockedPercentages'
)
