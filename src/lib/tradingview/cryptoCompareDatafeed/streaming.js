import { parseFullSymbol } from './helpers.js'
// import WebSocket from 'ws'
const socketUrl =
  'wss://streamer.cryptocompare.com/v2?api_key=afecf7fc7f334825c57cc30a372c7cf7418a0bdf14608ca6fb01405fffc3c973'
let websocket
const channelToSubscription = new Map()
if (typeof window !== 'undefined') {
  websocket = new WebSocket(socketUrl)

  websocket.addEventListener('open', function (event) {
    console.log('websocket open')
  })

  websocket.addEventListener('error', function (event) {
    console.error('WebSocket error:', event)
  })

  websocket.addEventListener('message', function (event) {
    const data = JSON.parse(event.data)

    const {
      P: intPrice,
      Q: fracPrice,
      M: exchange,
      TS: tradeTime,
      TYPE: eventTypeStr,
      TSYM: toSymbol,
      FSYM: fromSymbol,
    } = data

    if (parseInt(eventTypeStr) !== 0) {
      // Skip all non-trading events
      return
    }
    console.log('from,to:', fromSymbol, toSymbol)
    // console.log('price', intPrice, fracPrice)
    const tradePrice = intPrice
    // const tradeTime = parseInt(tradeTimeStr);
    const channelString = `0~${exchange}~${fromSymbol}~${toSymbol}`
    const subscriptionItem = channelToSubscription.get(channelString)
    if (subscriptionItem === undefined) {
      return
    }
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
      // console.log('[socket] Generate new bar', bar)
    } else {
      bar = {
        ...lastDailyBar,
        high: Math.max(lastDailyBar.high, tradePrice),
        low: Math.min(lastDailyBar.low, tradePrice),
        close: tradePrice,
      }
      // console.log('[socket] Update the latest bar by price', tradePrice)
    }
    subscriptionItem.lastDailyBar = bar

    // Send data to every subscriber of that symbol
    subscriptionItem?.handlers?.forEach((handler) => handler.callback(bar))
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
  // console.log('heereee', symbolInfo)
  const parsedSymbol = parseFullSymbol(symbolInfo.full_name)
  const channelString = `0~${parsedSymbol.exchange}~${parsedSymbol.fromSymbol}~${parsedSymbol.toSymbol}`
  const handler = {
    id: subscriberUID,
    callback: onRealtimeCallback,
  }
  let subscriptionItem = channelToSubscription.get(channelString)
  if (subscriptionItem) {
    // Already subscribed to the channel, use the existing subscription
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
  // console.log('[subscribeBars]: Subscribe to streaming. Channel:', channelString)
  const data = {
    action: 'SubAdd',
    subs: [channelString],
  }

  // Stringify the JSON object
  const jsonString = JSON.stringify(data)

  // Send the stringified JSON to the server
  websocket.send(jsonString)
  // websocket.send(jsonString);
  // socket.emit("SubAdd", { subs: [channelString] });
}

export function unsubscribeFromStream(subscriberUID) {
  // Find a subscription with id === subscriberUID
  for (const channelString of channelToSubscription.keys()) {
    const subscriptionItem = channelToSubscription.get(channelString)
    const handlerIndex = subscriptionItem.handlers.findIndex((handler) => handler.id === subscriberUID)

    if (handlerIndex !== -1) {
      // Remove from handlers
      subscriptionItem.handlers.splice(handlerIndex, 1)

      if (subscriptionItem.handlers.length === 0) {
        // Unsubscribe from the channel if it was the last handler
        console.log('[unsubscribeBars]: Unsubscribe from streaming. Channel:', channelString)
        const data = {
          action: 'SubRemove',
          subs: [channelString],
        }

        // Stringify the JSON object
        const jsonString = JSON.stringify(data)

        // Send the stringified JSON to the server
        websocket.send(jsonString)
        // socket.emit("SubRemove", { subs: [channelString] });
        channelToSubscription.delete(channelString)
        break
      }
    }
  }
}
