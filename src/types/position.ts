import { PositionType } from 'types/trade'

export type ShareInfoData = {
  type: PositionType
  leverage: string
  symbol: string
  value: string
  percent: string
  referralCode: string
  openPrice: string
  lastPrice: string
  openPriceTime: number
  lastPriceTime: number
}
