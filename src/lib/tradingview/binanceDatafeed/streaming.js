const socketUrl = 'wss://fstream.binance.com/stream'
let websocket
const channelToSubscription = new Map()
if (typeof window !== 'undefined') {
  websocket = new WebSocket(socketUrl)

  websocket.addEventListener('open', function (event) {
    console.log('TradingView websocket open')
  })

  websocket.addEventListener('error', function (event) {
    console.error('TradingView WebSocket error:', event)
  })

  websocket.addEventListener('message', function (event) {
    const data = JSON.parse(event.data)
    if (!data?.data) return
    const { p: intPrice, E: tradeTime, e: eventTypeStr, s: eventSymbol } = data.data

    if (eventTypeStr !== 'markPriceUpdate') {
      return
    }
    const tradePrice = parseFloat(intPrice)
    let fromSymbol = ''
    if (eventSymbol.split('USDT').length > 0) {
      fromSymbol = eventSymbol.split('USDT')[0]
    }

    let flagChecker = null
    for (const channelKey of channelToSubscription.keys()) {
      const targetSymbol = channelKey.split('~')[2]
      if (targetSymbol === fromSymbol) {
        flagChecker = channelKey
      }
    }

    if (!flagChecker) {
      return
    }
    const subscriptionItem = channelToSubscription.get(flagChecker)
    const lastDailyBar = subscriptionItem.lastDailyBar
    const nextDailyBarTime = getNextDailyBarTime(lastDailyBar.time)

    let bar
    if (tradeTime >= nextDailyBarTime) {
      bar = {
        time: nextDailyBarTime,
        open: tradePrice,
        high: tradePrice,
        low: tradePrice,
        close: tradePrice,
      }
    } else {
      bar = {
        ...lastDailyBar,
        high: Math.max(lastDailyBar.high, tradePrice),
        low: Math.min(lastDailyBar.low, tradePrice),
        close: tradePrice,
      }
    }
    subscriptionItem.lastDailyBar = bar

    subscriptionItem?.handlers?.forEach((handler) => handler.callback(bar))
  })
  window.addEventListener('beforeunload', function (event) {
    if (websocket) {
      websocket.close()
      console.log('TradingView WebSocket closed')
    }
  })
}

function getNextDailyBarTime(barTime) {
  const date = new Date(barTime * 1000)
  date.setDate(date.getDate() + 1)
  return date.getTime() / 1000
}

export function subscribeOnStream(
  symbolInfo,
  resolution,
  onRealtimeCallback,
  subscriberUID,
  onResetCacheNeededCallback,
  lastDailyBar
) {
  const parsedInfo = symbolInfo.description.split('/')
  const channelString = `0~${symbolInfo.exchange}~${parsedInfo[0]}~${parsedInfo[1]}~${resolution}`
  const handler = {
    id: subscriberUID,
    callback: onRealtimeCallback,
  }
  let subscriptionItem = channelToSubscription.get(channelString)
  if (subscriptionItem) {
    subscriptionItem.handlers.push(handler)
    return
  }
  subscriptionItem = {
    subscriberUID,
    resolution,
    lastDailyBar,
    handlers: [handler],
  }
  channelToSubscription.set(channelString, subscriptionItem)
  const targetMarketSymbols = `${parsedInfo[0].toLowerCase()}${parsedInfo[1].toLowerCase()}`

  const data = {
    method: 'SUBSCRIBE',
    params: [`${targetMarketSymbols}@markPrice@1s`],
    id: 2,
  }
  const jsonString = JSON.stringify(data)

  websocket.send(jsonString)
}

export function unsubscribeFromStream(subscriberUID) {
  let targetSubscription = null
  let numberOfSubscriptionToTargetSymbol = 0
  for (const channelString of channelToSubscription.keys()) {
    const subscriptionItem = channelToSubscription.get(channelString)
    const handlerIndex = subscriptionItem.handlers.findIndex((handler) => handler.id === subscriberUID)

    if (handlerIndex !== -1) {
      targetSubscription = channelString
      const targetMarket = targetSubscription.split('~')[1] + targetSubscription.split('~')[2]
      for (const channelTempString of channelToSubscription.keys()) {
        const tempMarket = channelTempString.split('~')[1] + channelTempString.split('~')[2]
        if (tempMarket === targetMarket) {
          numberOfSubscriptionToTargetSymbol += 1
        }
      }
    }
  }
  if (targetSubscription) {
    channelToSubscription.delete(targetSubscription)
    if (numberOfSubscriptionToTargetSymbol < 2) {
      const parsedChannel = targetSubscription.split('~')
      const marketSymbol = `${parsedChannel[2].toLowerCase()}${parsedChannel[3].toLowerCase()}`
      const data = {
        method: 'UNSUBSCRIBE',
        params: [`${marketSymbol}@markPrice@1s`],
        id: 2,
      }
      const jsonString = JSON.stringify(data)
      websocket.send(jsonString)
    }
  }
}
