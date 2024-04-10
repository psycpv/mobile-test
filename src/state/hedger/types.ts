import { ApiState } from 'types/api'
import { OpenInterest } from 'types/hedger'
import { Market } from 'types/market'

export enum ConnectionStatus {
  OPEN,
  CLOSED,
}

export interface MarketData {
  fundingRate: string
  nextFundingTime: number
  markPrice: string
  indexPrice: string
}
export interface MarketDepthData {
  bestAskPrice: string
  bestAskQuantity: string
  bestBidPrice: string
  bestBidQuantity: string
}

export interface PriceResponse {
  r: string
  T: number
  p: string
  s: string
  i: string
}

export interface FundingRateData {
  next_funding_time: number
  next_funding_rate_long: string
  next_funding_rate_short: string
}

// web socket response
// {
//   "e":"bookTicker",         // event type
//   "u":400900217,            // order book updateId
//   "E": 1568014460893,       // event time
//   "T": 1568014460891,       // transaction time
//   "s":"BNBUSDT",            // symbol
//   "b":"25.35190000",        // best bid price
//   "B":"31.21000000",        // best bid qty
//   "a":"25.36520000",        // best ask price
//   "A":"40.66000000"         // best ask qty
// }

// Web socket response
export interface DepthResponse {
  e: string
  u: number
  E: number
  T: number
  s: string
  a: string
  A: string
  b: string
  B: string
}

export interface MarketDataMap {
  [symbol: string]: MarketData
}
export interface MarketDepthMap {
  [symbol: string]: MarketDepthData
}

export interface FundingRateMap {
  [symbol: string]: FundingRateData
}

export interface MarketNotionalCap {
  name: string
  used: number
  totalCap: number
}

export interface PriceRange {
  name: string
  minPrice: number
  maxPrice: number
}

export interface ITotalTradingFee {
  platformFee: string
  __typename: string
}

export interface MarketsInfo {
  [marketName: string]: { price: string; priceChangePercent: string; tradeVolume: string; notionalCap: string }
}

export interface ErrorMessages {
  [errorCode: number]: string
}

export interface HedgerState {
  hedgerId: string | number | undefined
  prices: MarketDataMap // load from hedger socket
  lessFrequentPrices: MarketDataMap // load from hedger socket
  lastPriceUpdate: Date
  depths: MarketDepthMap
  markets: Market[] //load from hedger api
  fundingRates: FundingRateMap
  openInterest: OpenInterest
  webSocketStatus: ConnectionStatus
  marketsStatus: ApiState
  marketNotionalCap: MarketNotionalCap
  marketNotionalCapStatus: ApiState
  priceRange: PriceRange
  priceRangeStatus: ApiState
  errorMessages: ErrorMessages
  marketsInfo: MarketsInfo //load from hedger api
  marketsInfoStatus: ApiState
}
