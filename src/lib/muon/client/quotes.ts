import { toast } from 'react-toastify'

import { toWei } from 'utils/numbers'
import { APP_NAME, MUON_BASE_URLS } from '../config'
import { MuonClient } from './base'

export class QuotesClient extends MuonClient {
  constructor(app?: string) {
    super({ APP: app ?? APP_NAME, APP_METHOD: 'uPnl_A_withSymbolPrice' })
  }

  static createInstance(isEnabled: boolean, app?: string): QuotesClient | null {
    if (isEnabled) {
      return new QuotesClient(app ?? APP_NAME)
    }
    return null
  }

  private _getRequestParams(
    account: string | null,
    chainId?: number,
    contractAddress?: string,
    marketId?: number
  ): string[][] | Error {
    if (!account) return new Error('Param `account` is missing.')
    if (!chainId) return new Error('Param `chainId` is missing.')
    if (!contractAddress) return new Error('Param `contractAddress` is missing.')
    if (!marketId) return new Error('Param `marketId` is missing.')

    return [
      ['partyA', account],
      ['chainId', chainId.toString()],
      ['symmio', contractAddress],
      ['symbolId', marketId.toString()],
    ]
  }

  public async getMuonSig(account: string | null, chainId?: number, contractAddress?: string, marketId?: number) {
    try {
      const requestParams = this._getRequestParams(account, chainId, contractAddress, marketId)
      if (requestParams instanceof Error) throw new Error(requestParams.message)
      console.info('Requesting data from Muon: ', requestParams)

      let result, success

      for (const url of MUON_BASE_URLS) {
        try {
          const res = await this._sendRequest(url, requestParams)
          result = res.result
          success = res.success

          break // Exit the loop if successful
        } catch (error) {
          console.log('Retrying with the next URL...')
        }
      }

      console.info('Response from Muon: ', result)

      if (!success) {
        throw new Error('')
      }

      const reqId = result['reqId']
      const timestamp: number = result['data']['timestamp']
      const upnl: string = result['data']['result']['uPnl']
      const price: string = result['data']['result']['price']
      const gatewaySignature: string = result['nodeSignature']

      const signature = result['signatures'][0]['signature']
      const owner = result['signatures'][0]['owner']
      const nonce = result['data']['init']['nonceAddress']

      const generatedSignature = [
        reqId,
        timestamp,
        upnl,
        price ? price : toWei(0),
        gatewaySignature,
        [signature, owner, nonce],
      ]

      return { success: true, signature: generatedSignature }
    } catch (error) {
      console.error(error)
      toast.error('Unable to get response from Muon')
      return { success: false, error }
    }
  }
}
