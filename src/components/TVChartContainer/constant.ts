const RED = '#F0A7EB'
const GREEN = '#80BBF2'
export const DEFAULT_PERIOD = '4h'

type ChartStyleOverrides = {
  [key: string]: boolean | string
}
const chartStyleOverrides = ['candleStyle', 'hollowCandleStyle', 'haStyle'].reduce<ChartStyleOverrides>((acc, cv) => {
  acc[`mainSeriesProperties.${cv}.drawWick`] = true
  acc[`mainSeriesProperties.${cv}.drawBorder`] = false
  acc[`mainSeriesProperties.${cv}.upColor`] = GREEN
  acc[`mainSeriesProperties.${cv}.downColor`] = RED
  acc[`mainSeriesProperties.${cv}.wickUpColor`] = GREEN
  acc[`mainSeriesProperties.${cv}.wickDownColor`] = RED
  acc[`mainSeriesProperties.${cv}.borderUpColor`] = GREEN
  acc[`mainSeriesProperties.${cv}.borderDownColor`] = RED
  return acc
}, {})

export const chartOverrides = {
  'paneProperties.background': '#16182e',
  'paneProperties.backgroundGradientStartColor': '#16182e',
  'paneProperties.backgroundGradientEndColor': '#16182e',
  'paneProperties.backgroundType': 'solid',
  'paneProperties.vertGridProperties.color': 'rgba(35, 38, 59, 1)',
  'paneProperties.vertGridProperties.style': 2,
  'paneProperties.horzGridProperties.color': 'rgba(35, 38, 59, 1)',
  'paneProperties.horzGridProperties.style': 2,
  'mainSeriesProperties.priceLineColor': '#3a3e5e',
  'scalesProperties.textColor': '#fff',
  'scalesProperties.lineColor': '#16182e',
  ...chartStyleOverrides,
}
