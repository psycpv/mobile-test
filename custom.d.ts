declare global {
  namespace NodeJS {
    interface Process {
      NODE_ENV: 'development' | 'production'
    }
  }

  interface Window {
    // walletLinkExtension is injected by the Coinbase Wallet extension
    walletLinkExtension?: any
    TradingView?: any
    ethereum?: {
      // set by the Coinbase Wallet mobile dapp browser
      isRabby?: true
      // set by the Coinbase Wallet mobile dapp browser
      isCoinbaseWallet?: true
      // set by the Brave browser when using built-in wallet
      isBraveWallet?: true
      // set by the MetaMask browser extension (also set by Brave browser when using built-in wallet)
      isMetaMask?: true
      autoRefreshOnNetworkChange?: boolean
    }
    web3?: Record<string, unknown>
    OneSignalDeferred: any
    deferredprompt: any
  }
}

export {}
