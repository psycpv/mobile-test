export interface Market {
  id: number
  name: string
  symbol: string
  asset: string
  pricePrecision: number
  quantityPrecision: number
  isValid: boolean
  minAcceptableQuoteValue: number
  minAcceptablePortionLF: number
  tradingFee: number
  maxLeverage: number
  maxNotionalValue: number
  rfqAllowed?: boolean
  maxFundingRate: string
  hedgerFeeOpen: string
  hedgerFeeClose: string
  autoSlippage: number
}
