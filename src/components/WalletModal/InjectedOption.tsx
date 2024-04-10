import { Connector } from '@web3-react/types'
import INJECTED_ICON_URL from '/public/static/images/wallets/injected.svg'
import METAMASK_ICON_URL from '/public/static/images/wallets/metamask.png'
import RABBY_ICON_URL from '/public/static/images/wallets/rabby.svg'
import { ConnectionType, injectedConnection } from 'connection'
import { getConnectionName } from 'connection/utils'

import Option from './Option'

const INJECTED_PROPS = {
  color: '#010101',
  icon: INJECTED_ICON_URL,
  id: 'injected',
}

const METAMASK_PROPS = {
  color: '#E8831D',
  icon: METAMASK_ICON_URL,
  id: 'metamask',
}

const RABBY_PROPS = {
  color: '#E8831D',
  icon: RABBY_ICON_URL,
  id: 'rabby',
}

export function InstallMetaMaskOption() {
  return <Option {...METAMASK_PROPS} header={<div>Install MetaMask</div>} link="https://metamask.io/" />
}

export function MetaMaskOption({ tryActivation }: { tryActivation: (connector: Connector) => void }) {
  const isActive = injectedConnection.hooks.useIsActive()
  return (
    <Option
      {...METAMASK_PROPS}
      active={isActive}
      header={getConnectionName(ConnectionType.INJECTED, true)}
      onClick={() => tryActivation(injectedConnection.connector)}
    />
  )
}

export function InjectedOption({ tryActivation }: { tryActivation: (connector: Connector) => void }) {
  const isActive = injectedConnection.hooks.useIsActive()
  return (
    <Option
      {...INJECTED_PROPS}
      active={isActive}
      header={getConnectionName(ConnectionType.INJECTED, false)}
      onClick={() => tryActivation(injectedConnection.connector)}
    />
  )
}

export function RabbyWalletOption({ tryActivation }: { tryActivation: (connector: Connector) => void }) {
  const isActive = injectedConnection.hooks.useIsActive()
  return (
    <Option
      {...RABBY_PROPS}
      active={isActive}
      header={getConnectionName(ConnectionType.INJECTED, false)}
      onClick={() => tryActivation(injectedConnection.connector)}
    />
  )
}

export function InstallRabbyWalletOption() {
  return <Option {...RABBY_PROPS} header={<div>Install Rabby Wallet</div>} link="https://rabby.io/" />
}

export function ActivateRabbyWalletOption() {
  return (
    <Option
      {...RABBY_PROPS}
      header={<div>Flip to Rabby Wallet</div>}
      hint={`Open your Rabby wallet and click "Flip to Rabby" to stop using Metamask and start using Rabby`}
      hintId="rabby-wallet-hint"
    />
  )
}
