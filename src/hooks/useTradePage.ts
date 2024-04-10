import { useMemo } from 'react'
import BigNumber from 'bignumber.js'

import { DEFAULT_PRECISION, MAX_PENDINGS_POSITIONS_NUMBER } from 'constants/misc'
import { removeTrailingZeros, RoundMode, toBN } from 'utils/numbers'
import { InputField, OrderType, ErrorState } from 'types/trade'
import { useMarketNotionalCap, useMarketOpenInterest, useMarketPriceRange } from 'state/hedger/hooks'
import { useLeverage } from 'state/user/hooks'
import {
  useActiveMarket,
  useActiveMarketPrice,
  useLockedPercentages,
  useLimitPrice,
  useOrderType,
  useInputField,
  useTypedValue,
} from 'state/trade/hooks'

import { usePendingsQuotes } from 'state/quotes/hooks'
import useAccountData from './useAccountData'

export default function useTradePage(): {
  price: string
  formattedAmounts: string[]
  state: ErrorState
  balance: string
} {
  const typedValue = useTypedValue()
  const inputField = useInputField()
  const limitPrice = useLimitPrice()
  const orderType = useOrderType()
  const market = useActiveMarket()
  const { quotes: pendingQuotes } = usePendingsQuotes()
  const marketPrice = useActiveMarketPrice()
  const priceRange = useMarketPriceRange()
  const openInterest = useMarketOpenInterest()
  const { availableForOrder } = useAccountData()
  const { marketNotionalCap } = useMarketNotionalCap()
  const { name: notionalCapName, used: notionalCapUsedValue, totalCap: totalNotionalCap } = marketNotionalCap
  const { used: usedOpenInterest, total: totalOpenInterest } = openInterest
  const leverage = useLeverage()
  const { tradingFee } = market || {}

  const [pricePrecision, quantityPrecision] = useMemo(
    () => (market ? [market.pricePrecision, market.quantityPrecision] : [DEFAULT_PRECISION, DEFAULT_PRECISION]),
    [market]
  )

  const price: string = useMemo(() => {
    if (orderType === OrderType.LIMIT) {
      return limitPrice
    } else {
      return marketPrice
    }
  }, [orderType, limitPrice, marketPrice])

  const independentValue = useMemo(() => {
    if (!typedValue || toBN(price).isZero()) return 0

    return inputField === InputField.PRICE
      ? toBN(typedValue).times(leverage).div(price)
      : toBN(typedValue).times(price).div(leverage)
  }, [typedValue, inputField, price, leverage])

  const formattedAmounts: string[] = useMemo(() => {
    return [
      inputField === InputField.PRICE // Collateral amount
        ? typedValue
        : independentValue
        ? removeTrailingZeros(independentValue.toFixed(pricePrecision, RoundMode.ROUND_DOWN))
        : '',
      inputField === InputField.QUANTITY // Receive amount
        ? typedValue
        : independentValue
        ? removeTrailingZeros(independentValue.toFixed(quantityPrecision, RoundMode.ROUND_DOWN))
        : '',
    ]
  }, [inputField, independentValue, pricePrecision, quantityPrecision, typedValue])

  const balance = useMemo(() => {
    if (!tradingFee) return '0'
    const balance = toBN(availableForOrder).times(toBN(1).minus(toBN(leverage).times(tradingFee)))
    return orderType === OrderType.MARKET ? balance.times('0.99').toString() : balance.toString()
  }, [availableForOrder, leverage, tradingFee, orderType])

  const outOfRangePrice = useMemo(() => {
    // check limit price range)
    const { name, maxPrice, minPrice } = priceRange

    if (orderType === OrderType.LIMIT && market && market.name === name) {
      return toBN(limitPrice).isLessThan(minPrice) || toBN(limitPrice).isGreaterThan(maxPrice)
    }
    return false
  }, [priceRange, orderType, market, limitPrice])

  const state = useMemo(() => {
    const notionalValue = toBN(formattedAmounts[1]).isNaN() ? toBN(0) : toBN(formattedAmounts[1]).times(price)
    const freeNotionalCap = toBN(totalNotionalCap).minus(notionalCapUsedValue)
    const freeOpenInterest = toBN(totalOpenInterest).minus(usedOpenInterest)
    const lockedValue = notionalValue.div(leverage)

    const minimumCap = BigNumber.min(freeNotionalCap, freeOpenInterest)

    if (!price || toBN(price).isZero()) {
      return ErrorState.INVALID_PRICE
    }
    if (balance && toBN(formattedAmounts[0]).gt(balance)) {
      return ErrorState.INSUFFICIENT_BALANCE
    }

    if (market && toBN(lockedValue).lt(market.minAcceptableQuoteValue)) {
      return ErrorState.LESS_THAN_MIN_ACCEPTABLE_QUOTE_VALUE
    }
    if (
      market &&
      notionalValue.isGreaterThanOrEqualTo(market.maxNotionalValue) &&
      formattedAmounts[0] &&
      formattedAmounts[1]
    ) {
      return ErrorState.HIGHER_THAN_MAX_NOTIONAL_VALUE
    }
    if (outOfRangePrice) {
      return ErrorState.OUT_OF_RANGE_PRICE
    }
    if (market && market.name === notionalCapName && minimumCap.minus(notionalValue).lte(0)) {
      return ErrorState.CAP_REACHED
    }

    if (pendingQuotes.length >= MAX_PENDINGS_POSITIONS_NUMBER) {
      return ErrorState.MAX_PENDING_POSITIONS_REACHED
    }

    return ErrorState.VALID
  }, [
    formattedAmounts,
    price,
    totalNotionalCap,
    notionalCapUsedValue,
    totalOpenInterest,
    usedOpenInterest,
    leverage,
    balance,
    market,
    outOfRangePrice,
    notionalCapName,
    pendingQuotes.length,
  ])

  return useMemo(() => ({ price, formattedAmounts, state, balance }), [price, formattedAmounts, state, balance])
}

// ****************************************//
// ****************************************//
// ****************************************//
// ****************************************//
//#####  TRADE VALUE HOOKS ###### //

//Notional Value
export function useNotionalValue(quantity: BigNumber.Value, price: BigNumber.Value): string {
  return useMemo(() => toBN(quantity).times(price).toString(), [quantity, price])
}

//Credit Valuation Adjustment
export function useLockedCVA(notionalValue: string): string {
  const leverage = useLeverage()
  const { cva } = useLockedPercentages()

  return useMemo(
    () =>
      toBN(notionalValue)
        .times(cva ?? 0)
        .div(100)
        .div(leverage)
        .toString(),
    [cva, leverage, notionalValue]
  )
}

export function usePartyBLockedMM(notionalValue: string): string {
  const { partyBmm } = useLockedPercentages()

  return useMemo(
    () =>
      toBN(notionalValue)
        .times(partyBmm ?? 0)
        .div(100)
        .toString(),
    [partyBmm, notionalValue]
  )
}

//Maintenance Margin
export function usePartyALockedMM(notionalValue: string): string {
  const leverage = useLeverage()
  const { partyAmm } = useLockedPercentages()

  return useMemo(
    () =>
      toBN(notionalValue)
        .times(partyAmm ?? 0)
        .div(100)
        .div(leverage)
        .toString(),
    [leverage, partyAmm, notionalValue]
  )
}

//Liquidation Fee
export function useLockedLF(notionalValue: string): string {
  const leverage = useLeverage()
  const { lf } = useLockedPercentages()

  return useMemo(
    () =>
      toBN(notionalValue)
        .times(lf ?? 0)
        .div(100)
        .div(leverage)
        .toString(),
    [leverage, lf, notionalValue]
  )
}

export function useMaxFundingRate(): string {
  const market = useActiveMarket()
  return useMemo(() => market?.maxFundingRate ?? '0', [market?.maxFundingRate])
}

export function useLockedValues(notionalValue: string): {
  cva: string
  lf: string
  partyAmm: string
  total: string
} {
  const lf = useLockedLF(notionalValue)
  const partyAmm = usePartyALockedMM(notionalValue)
  const cva = useLockedCVA(notionalValue)

  return useMemo(
    () => ({
      cva,
      lf,
      partyAmm,
      total: toBN(cva).plus(partyAmm).plus(lf).toString(),
    }),
    [lf, partyAmm, cva]
  )
}
