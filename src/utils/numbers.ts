import BigNumber from 'bignumber.js'

BigNumber.config({ EXPONENTIAL_AT: 30 })

export function toBN(number: BigNumber.Value): BigNumber {
  return new BigNumber(number)
}

export const BN_ZERO: BigNumber = toBN('0')
export const BN_ONE: BigNumber = toBN('1')
export const BN_TEN: BigNumber = toBN('10')

export enum RoundMode {
  ROUND_UP,
  ROUND_DOWN,
}

export function removeTrailingZeros(number: BigNumber.Value): string {
  return toBN(number).toString()
}

export function formatPrice(
  number: BigNumber.Value,
  pricePrecision = 2,
  separator = false,
  roundMode = RoundMode.ROUND_DOWN
): string {
  const toFixed = toBN(number).toFixed(pricePrecision, roundMode)
  return separator ? toBN(toFixed).toFormat() : removeTrailingZeros(toFixed)
}

export const formatAmount = (amount: BigNumber.Value | undefined | null, fixed = 6, separator = false): string => {
  if (amount === null || amount === undefined) return ''

  const bnAmount = toBN(amount)

  if (isNaN(bnAmount.toNumber())) return '0'

  if (BN_TEN.pow(fixed - 1).lte(bnAmount)) {
    return separator ? toBN(amount).toFormat(0, BigNumber.ROUND_DOWN) : bnAmount.toFixed(0, BigNumber.ROUND_DOWN)
  }

  const rounded = bnAmount.sd(fixed, BigNumber.ROUND_DOWN)
  return separator ? toBN(rounded.toFixed()).toFormat() : rounded.toFixed()
}

export const formatCurrency = (amount: BigNumber.Value | undefined | null, fixed = 6, separator = false) => {
  if (amount === undefined || amount === null || amount === '') return '-'
  const bnAmount = toBN(amount)
  if (bnAmount.isZero()) {
    return '0'
  }
  if (bnAmount.absoluteValue().lt(0.001)) {
    return '< 0.001'
  }
  // if (bnAmount.gte(1e9)) {
  //   return formatAmount(bnAmount.div(1e9), fixed, separator) + 'b'
  // }
  if (bnAmount.absoluteValue().gte(1e6)) {
    return formatAmount(bnAmount.div(1e6), fixed, separator) + 'm'
  }
  if (bnAmount.absoluteValue().gte(1e3)) {
    return formatAmount(bnAmount.div(1e3), fixed, separator) + 'k'
  }
  return formatAmount(bnAmount, fixed, separator)
}

export const formatDollarAmount = (
  amount: BigNumber.Value | undefined | null,
  config?: { minimumDecimalPlaces?: number }
) => {
  // Handle null or undefined amount
  if (amount === null || amount === undefined) {
    return '-'
  }

  // Convert amount to a BigNumber instance to handle negative values and formatting
  const amountBigNumber = new BigNumber(amount)

  // Check for negative amount and use absolute value for formatting
  const isNegative = amountBigNumber.isNegative()
  const absoluteAmount = isNegative ? amountBigNumber.negated() : amountBigNumber

  // Format the absolute amount
  let formattedAmount = formatCurrency(absoluteAmount, 4, true)

  // Handle amounts less than 0.001
  if (formattedAmount === '< 0.001') {
    return isNegative ? '- < $0.001' : '< $0.001'
  }

  // Ensure the formatted amount has the minimum required decimal places
  if (config?.minimumDecimalPlaces !== undefined) {
    const decimalPointIndex = formattedAmount.lastIndexOf('.')
    if (decimalPointIndex === -1) {
      // No decimal point, add one with the required number of zeroes
      formattedAmount += '.' + '0'.repeat(config.minimumDecimalPlaces)
    } else {
      // Add missing zeroes to reach the minimum required decimal places
      const decimalPlaces = formattedAmount.length - decimalPointIndex - 1
      if (decimalPlaces < config.minimumDecimalPlaces) {
        formattedAmount += '0'.repeat(config.minimumDecimalPlaces - decimalPlaces)
      }
    }
  }
  return (isNegative ? '-$' : '$') + formattedAmount
}

export function toWei(amount: BigNumber.Value | null, decimals = 18): string {
  return toWeiBN(amount, decimals).toFixed(0)
}

export function toWeiBN(amount: BigNumber.Value | null, decimals = 18): BigNumber {
  if (amount === undefined || amount === null || amount === '') return BN_ZERO
  if (typeof amount === 'string' && isNaN(Number(amount))) {
    return BN_ZERO
  }
  return toBN(amount).times(BN_TEN.pow(decimals))
}

export function fromWei(amount: BigNumber.Value | null, decimals = 18, defaultOutput?: string): string {
  if (amount === undefined || amount === null || amount === '') return '0'
  if (typeof amount === 'string' && isNaN(Number(amount))) {
    return defaultOutput ?? '0'
  }

  return toBN(amount).div(BN_TEN.pow(decimals)).toString()
}

export function fromWeiBN(amount: BigNumber.Value | null, decimals = 18, defaultOutput?: BigNumber): BigNumber {
  if (amount === undefined || amount === null || amount === '') return BN_ZERO
  if (typeof amount === 'string' && isNaN(Number(amount))) {
    return defaultOutput ?? BN_ZERO
  }

  return toBN(amount).div(BN_TEN.pow(decimals))
}

export function addCurrencyPrefix(amount: string) {
  if (!amount || amount.length == 0) return ''
  const formattedAmount = amount.charAt(0) === '-' ? `-$${amount.slice(1)}` : `$${amount}`
  return formattedAmount
}
