import { useMemo } from 'react'
import { formatAmount, toBN } from 'utils/numbers'

export function getUpnlValueAndColor(
  upnl: string,
  config?: {
    positiveColor?: string
    negativeColor?: string
    neutralColor?: string
    toFixedDecimalPlaces?: number
  }
): [string, string | undefined] {
  const upnlBN = toBN(upnl)
  if (upnlBN.isGreaterThan(0))
    return [
      `+ $${formatAmount(config?.toFixedDecimalPlaces ? upnlBN.toFixed(config?.toFixedDecimalPlaces) : upnlBN)}`,
      config?.positiveColor,
    ]
  else if (upnlBN.isLessThan(0))
    return [
      `- $${formatAmount(
        Math.abs(
          config?.toFixedDecimalPlaces ? Number(upnlBN.toFixed(config?.toFixedDecimalPlaces)) : upnlBN.toNumber()
        )
      )}`,
      config?.negativeColor,
    ]
  return [`$${formatAmount(upnlBN)}`, config?.neutralColor]
}
const useUpnlValueAndColor: typeof getUpnlValueAndColor = (upnl, config) => {
  return useMemo(() => getUpnlValueAndColor(upnl, config), [upnl, config])
}

export default useUpnlValueAndColor
