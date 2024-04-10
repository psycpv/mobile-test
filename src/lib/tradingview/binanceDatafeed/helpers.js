export async function makeApiRequest(path) {
  try {
    const response = await fetch(`https://fapi.binance.com/${path}`)
    return response.json()
  } catch (error) {
    throw new Error(`CryptoCompare request error: ${error.status} - ${path}`)
  }
}

export function generateSymbol(exchange, fromSymbol, toSymbol) {
  const short = `${fromSymbol}/${toSymbol}`
  return {
    short,
    full: `${exchange}:${short}`,
  }
}

export function parseFullSymbol(fullSymbol) {
  const match = fullSymbol.match(/^(\w+):(\w+)\/(\w+)$/)
  if (!match) {
    return null
  }

  return {
    exchange: match[1],
    fromSymbol: match[2],
    toSymbol: match[3],
  }
}
