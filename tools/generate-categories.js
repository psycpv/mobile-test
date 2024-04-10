const symbols = require('../src/constants/files/all_symbols.json')
const coingeckoList = require('../src/constants/files/coingecko_coins.json')
const axios = require('axios')
const fs = require('fs')

const ALL_CATEGORIES = [
  { coingecko: 'Decentralized Finance (DeFi)', based: 'DeFi' },
  { coingecko: 'Gambling', based: 'Gambling' },
  { coingecko: 'Gaming (GameFi)', based: 'Gaming' },
  { coingecko: 'Layer 1 (L1)', based: 'Layer 1 (L1)' },
  { coingecko: 'Layer 2 (L2)', based: 'Layer 2 (L2)' },
  { coingecko: 'Liquid Staking Tokens', based: 'Liquid Staking Tokens' },
  { coingecko: 'Meme', based: 'Meme' },
  { coingecko: 'Metaverse', based: 'Metaverse' },
  { coingecko: 'Oracle', based: 'Oracle' },
  { coingecko: 'Privacy Coins', based: 'Privacy Coins' },
  { coingecko: 'Real World Assets (RWA)', based: 'Real World Assets' },
]

let result = []
let lastItem = 0

async function fetchCategories() {
  if (lastItem >= symbols.count) {
    const categoriesObj = {}
    for (let i = 0; i < symbols.count; i++) {
      categoriesObj[symbols.symbols[i].symbol] = result[i]
    }
    const jsonData = JSON.stringify(categoriesObj)

    fs.writeFile('categories.json', jsonData, 'utf8', (err) => {
      if (err) {
        console.error('Error writing JSON file:', err)
      } else {
        console.log('Array data saved to arrayData.json')
      }
    })
    return
  }

  const categories = await Promise.all(
    symbols.symbols.slice(lastItem, lastItem + 30).map(async (item) => {
      try {
        let entry = coingeckoList.find(
          (coin) => coin.symbol === item.symbol.toLowerCase() && Object.keys(coin.platforms).length === 0
        )
        if (entry === undefined) {
          entry = coingeckoList.find((coin) => coin.symbol === item.symbol.toLowerCase())
        }
        if (!entry) {
          return ['Default']
        }
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${entry.id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&x_cg_demo_api_key=CG-CwBppKStMC73hsdZzfobBG7f`
        )
        if (!response.data || !response.data.categories) {
          return ['Default']
        }

        const categories = response.data.categories
        let myCategories = ['Default']

        ALL_CATEGORIES.forEach((item) => {
          if (categories.indexOf(item.coingecko) >= 0) {
            myCategories.push(item.based)
          }
        })

        return myCategories
      } catch (e) {
        console.log(`error in ${item.symbol}`)
      }
    })
  )

  console.log(categories)
  result = result.concat(categories)

  lastItem += 30

  setTimeout(fetchCategories, 70000)
}

async function main() {
  await fetchCategories()
}

main()
