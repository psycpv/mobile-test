import { SupportedChainId } from 'constants/chains'
import { createApolloClient } from './index'

const baseClient = createApolloClient(`${getSubgraphName(SupportedChainId.BASE)}`)

export function getOrderHistoryApolloClient(chainId: SupportedChainId) {
  switch (chainId) {
    case SupportedChainId.BASE:
      return baseClient
    default:
      console.error(`${chainId} is not a supported subgraph network`)
      return undefined
  }
}

export function getSubgraphName(chainId: SupportedChainId) {
  switch (chainId) {
    case SupportedChainId.BASE:
      return 'https://api.studio.thegraph.com/query/62454/main_base_8_2/version/latest'
    default:
      console.error(`${chainId} is not a supported subgraph network`)
      return null
  }
}
