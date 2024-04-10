import { makeApiRequest } from './helpers.js'
import { SUPPORTED_RESOLUTIONS } from '../../../components/TVChartContainer'
import { subscribeOnStream, unsubscribeFromStream } from './streaming.js'

const lastBarsCache = new Map()
async function getAllSymbols() {
  const data = await makeApiRequest('fapi/v1/exchangeInfo')
  const symbols = data.symbols
  let allSymbols = symbols.map((symbol) => ({
    symbol: symbol.symbol,
    full_name: `Binance:${symbol.baseAsset}${symbol.quoteAsset}`,
    description: `${symbol.baseAsset}/${symbol.quoteAsset}`,

    exchange: 'Binance',
    fromSymbol: symbol.baseAsset,
    toSymbol: symbol.quoteAsset,
    type: 'crypto',
  }))
  return allSymbols
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  onReady: (callback) => {
    setTimeout(() => {
      const resolutions = Object.keys(SUPPORTED_RESOLUTIONS)
      const configurationData = {
        supported_resolutions: resolutions,
        exchanges: [
          {
            value: 'Binance',
            name: 'Binance',
            desc: 'Binance  exchange',
          },
        ],
        symbols_types: [
          {
            name: 'crypto',
            value: 'crypto',
          },
        ],
      }
      callback(configurationData)
    })
  },

  searchSymbols: async (userInput, exchange, symbolType, onResultReadyCallback) => {
    const symbols = await getAllSymbols()
    const newSymbols = symbols.filter((symbol) => {
      const isExchangeValid = exchange === '' || symbol.exchange === exchange
      const isFullSymbolContainsInput = symbol.full_name.toLowerCase().indexOf(userInput.toLowerCase()) !== -1
      return isExchangeValid && isFullSymbolContainsInput
    })
    onResultReadyCallback(newSymbols)
  },

  resolveSymbol: async (symbolName, onSymbolResolvedCallback, onResolveErrorCallback, extension) => {
    const symbols = await getAllSymbols()
    const symbolItem = symbols.find(({ full_name }) => full_name === symbolName)
    if (!symbolItem) {
      onResolveErrorCallback('cannot resolve symbol')
      return
    }

    const symbolInfo = {
      ticker: symbolItem.full_name,
      name: symbolItem.symbol,
      description: symbolItem.description,
      type: symbolItem.type,
      session: '24x7',
      minmov: 1,
      timezone: 'Etc/UTC',
      exchange: symbolItem.exchange,
      pricescale: 100,
      has_intraday: true,
      has_daily: true,
      has_weekly_and_monthly: true,
      volume_precision: 2,
      data_status: 'streaming',
      visible_plots_set: 'ohlc',
    }

    onSymbolResolvedCallback(symbolInfo)
  },

  getBars: async (symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) => {
    const { from: fromTemp, to: toTemp, firstDataRequest } = periodParams
    let from = fromTemp * 1000
    const to = toTemp * 1000

    if (from < 0) {
      from = 0
    }

    const intTemp = SUPPORTED_RESOLUTIONS[resolution]
    const url = `fapi/v1/klines?symbol=${symbolInfo.name}&interval=${intTemp}${
      firstDataRequest ? '' : `&startTime=${from}`
    }${firstDataRequest ? '' : `&endTime=${to}`}${`&limit=${300}`}`

    try {
      const data = await makeApiRequest(url)

      if ((data.Response && data.Response === 'Error') || data.length === 0) {
        // "noData" should be set if there is no data in the requested period
        onHistoryCallback([], {
          noData: true,
        })
        return
      }

      let bars = []
      data.forEach((bar) => {
        bars = [
          ...bars,
          {
            time: bar[0],
            low: bar[3],
            high: bar[2],
            open: bar[1],
            close: bar[4],
          },
        ]
      })
      if (firstDataRequest) {
        lastBarsCache.set(symbolInfo.full_name, {
          ...bars[bars.length - 1],
        })
      }
      onHistoryCallback(bars, {
        noData: false,
      })
    } catch (error) {
      console.log('[getBars]: Get error', error)
      onErrorCallback(error)
    }
  },

  subscribeBars: (symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) => {
    subscribeOnStream(
      symbolInfo,
      resolution,
      onRealtimeCallback,
      subscriberUID,
      onResetCacheNeededCallback,
      lastBarsCache.get(symbolInfo.full_name)
    )
  },

  unsubscribeBars: (subscriberUID) => {
    unsubscribeFromStream(subscriberUID)
  },
}
