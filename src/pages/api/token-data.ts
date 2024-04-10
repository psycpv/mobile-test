import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import NextCors from 'nextjs-cors'

import { supportedTokens } from 'lib/hooks/useCurrencyLogo'
import symbols from 'constants/files/symbols.json'
const symbolsList: {
  [symbol: string]: string[]
} = symbols

const hedgerBaseUrl = 'https://base-hedger82.rasa.capital'

async function getTokenBasics() {
  const response = await axios.get(`${hedgerBaseUrl}/contract-symbols`)
  return response.data.symbols
}

async function getTokenStats() {
  const response = await axios.get(`${hedgerBaseUrl}/get_market_info/0x1c03B6480a4efC2d4123ba90d7857f0e1878B780`)
  return response.data
}

const tokenData = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await NextCors(req, res, {
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200,
    })

    const tokenBasics = await getTokenBasics()
    const tokenStats = await getTokenStats()

    if (!tokenBasics || !tokenStats) {
      return res.status(500).json({ error: 'Something went wrong in data fetch' })
    }

    const result = tokenBasics.map((token: any) => ({
      name: symbolsList[token.symbol] ? symbolsList[token.symbol][0] : token.symbol,
      ticker: token.symbol,
      logo: supportedTokens.includes(token.symbol)
        ? `http://${req.headers.host}/static/images/tokens/${token.symbol}.svg`
        : `http://${req.headers.host}/static/images/tokens/default-token.svg`,
      price: tokenStats[token.name]?.price,
      price_change_percent: tokenStats[token.name]?.price_change_percent,
      volume_change: tokenStats[token.name]?.trade_volume,
    }))

    return res.json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Something went wrong in data fetch' })
  }
}

export default tokenData
