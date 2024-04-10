import React, { useState, useEffect, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect'
import { X } from 'react-feather'
import { networkConnection } from 'connection'
import {
  getConnection,
  getConnectionName,
  getIsCoinbaseWallet,
  getIsInjected,
  getIsMetaMaskWallet,
  getIsRabbyWallet,
} from 'connection/utils'

import { Connector } from '@web3-react/types'

import { isSupportedChain } from 'constants/chains'
import usePrevious from 'lib/hooks/usePrevious'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { updateConnectionError } from 'state/connection/reducer'
import { updateSelectedWallet } from 'state/user/actions'
import { useConnectedWallets } from 'state/wallet/hooks'

import { useModalOpen, useToggleWalletModal } from 'state/application/hooks'
import { ApplicationModal } from 'state/application/reducer'

import PendingView from 'components/WalletModal/PendingView'
import { Modal } from 'components/Modal'
import { CoinbaseWalletOption, OpenCoinbaseWalletOption } from './CoinbaseWalletOption'
import {
  ActivateRabbyWalletOption,
  InjectedOption,
  InstallMetaMaskOption,
  InstallRabbyWalletOption,
  MetaMaskOption,
  RabbyWalletOption,
} from './InjectedOption'
import { useAppDispatch, useAppSelector } from 'state'
import { WalletConnectOption } from './WalletConnectOption'
import { AutoColumn } from 'components/Column'
import { RowEnd, RowStart } from 'components/Row'

const CloseIcon = styled(RowEnd)`
  padding: 10px 16px;
  &:hover {
    cursor: pointer;
    opacity: ${({ theme }) => theme.red1};
  }
`

const CloseColor = styled(X)`
  stroke: ${({ theme }) => theme.coolGrey};
`

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: ${({ theme }) => theme.color2};
  box-shadow: ${({ theme }) => theme.shadow1};
  margin: 0;
  padding: 0;
  width: 100%;
  border-radius: 8px;
`

const HeaderRow = styled.div`
  display: flex;
  flex-flow: rpw nowrap;
  font-weight: 600;
  size: 16px;
  color: ${(props) => (props.color === 'blue' ? ({ theme }) => theme.almostWhite : 'inherit')};
`

const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.color2};
  padding: 0 1rem 1rem 1rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  ${({ theme }) => theme.mediaWidth.upToMedium`padding: 0 1rem 1rem 1rem`};
`

const UpperSection = styled.div`
  position: relative;
  h5 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
  }
  h5:last-child {
    margin-bottom: 0px;
  }
  h4 {
    margin-top: 0;
    font-weight: 500;
  }
`

const OptionGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    grid-template-columns: 1fr;
    grid-gap: 10px;
  `};
`

const HoverText = styled.div`
  text-decoration: none;
  color: ${({ theme }) => theme.almostWhite};
  display: flex;
  align-items: center;
  font-size: 20px;
  margin: 6px 0;

  :hover {
    cursor: pointer;
  }
`

const WALLET_VIEWS = {
  OPTIONS: 'options',
  ACCOUNT: 'account',
  PENDING: 'pending',
}

export default function WalletModal() {
  const dispatch = useAppDispatch()
  const { connector, account, chainId } = useActiveWeb3React()
  const previousAccount = usePrevious(account)
  const [connectedWallets, addWalletToConnectedWallets] = useConnectedWallets()

  const [walletView, setWalletView] = useState(WALLET_VIEWS.OPTIONS)
  const [lastActiveWalletAddress, setLastActiveWalletAddress] = useState<string | undefined>(account)

  const [pendingConnector, setPendingConnector] = useState<Connector | undefined>()
  const pendingError = useAppSelector((state) =>
    pendingConnector ? state.connection.errorByConnectionType[getConnection(pendingConnector).type] : undefined
  )

  const walletModalOpen = useModalOpen(ApplicationModal.WALLET)
  const toggleWalletModal = useToggleWalletModal()

  const openOptions = useCallback(() => {
    setWalletView(WALLET_VIEWS.OPTIONS)
  }, [setWalletView])

  // always reset to account view
  useEffect(() => {
    if (walletModalOpen && !account) {
      setWalletView(WALLET_VIEWS.OPTIONS)
    }
  }, [walletModalOpen, setWalletView, account])

  // close on connection, when logged out before
  useEffect(() => {
    if (account && account !== previousAccount && walletModalOpen) {
      toggleWalletModal()
    }
  }, [account, previousAccount, toggleWalletModal, walletModalOpen])

  useEffect(() => {
    if (pendingConnector && walletView !== WALLET_VIEWS.PENDING) {
      updateConnectionError({ connectionType: getConnection(pendingConnector).type, error: undefined })
      setPendingConnector(undefined)
    }
  }, [pendingConnector, walletView])

  // Keep the network connector in sync with any active user connector to prevent chain-switching on wallet disconnection.
  useEffect(() => {
    if (chainId && isSupportedChain(chainId) && connector !== networkConnection.connector) {
      networkConnection.connector.activate(chainId)
    }
  }, [chainId, connector])

  // When new wallet is successfully set by the user, trigger logging of Amplitude analytics event.
  useEffect(() => {
    if (account && account !== lastActiveWalletAddress) {
      const walletType = getConnectionName(getConnection(connector).type)
      const isReconnect =
        connectedWallets.filter((wallet) => wallet.account === account && wallet.walletType === walletType).length > 0
      if (!isReconnect) addWalletToConnectedWallets({ account, walletType })
    }
    setLastActiveWalletAddress(account)
  }, [connectedWallets, addWalletToConnectedWallets, lastActiveWalletAddress, account, connector, chainId])

  const tryActivation = useCallback(
    async (connector: Connector) => {
      const connectionType = getConnection(connector).type

      try {
        setPendingConnector(connector)
        // setWalletView(WALLET_VIEWS.PENDING)
        dispatch(updateConnectionError({ connectionType, error: undefined }))

        await connector.activate()

        dispatch(updateSelectedWallet({ wallet: connectionType }))
      } catch (error) {
        console.debug(`web3-react connection error: ${error}`)
        dispatch(updateConnectionError({ connectionType, error: error.message }))
      }
    },
    [dispatch]
  )

  // get wallets user can switch too, depending on device/browser
  function getModalContent() {
    let headerRow
    if (!(walletView === WALLET_VIEWS.PENDING || walletView === WALLET_VIEWS.ACCOUNT || !!account)) {
      headerRow = (
        <HeaderRow color="blue">
          <HoverText>Connect a wallet</HoverText>
        </HeaderRow>
      )
    } else {
      headerRow = (
        <HeaderRow color="blue">
          <HoverText>Change wallet</HoverText>
        </HeaderRow>
      )
    }

    return (
      <UpperSection>
        <CloseIcon onClick={toggleWalletModal}>
          <RowStart>{headerRow}</RowStart>
          <CloseColor />
        </CloseIcon>
        <ContentWrapper>
          <AutoColumn gap="16px">
            {walletView === WALLET_VIEWS.PENDING && pendingConnector && (
              <PendingView
                openOptions={openOptions}
                connector={pendingConnector}
                error={!!pendingError}
                tryActivation={tryActivation}
              />
            )}
            {walletView !== WALLET_VIEWS.PENDING && <GetOptions tryActivation={tryActivation} />}
          </AutoColumn>
        </ContentWrapper>
      </UpperSection>
    )
  }

  return (
    <Modal isOpen={walletModalOpen} onBackgroundClick={toggleWalletModal} onEscapeKeydown={toggleWalletModal}>
      <Wrapper>{getModalContent()}</Wrapper>
    </Modal>
  )
}

export function GetOptions({ tryActivation }: { tryActivation: (connector: Connector) => Promise<void> }) {
  const [eip6963Providers, setEip6963Providers] = useState<any>([])

  const eip6963ProviderListener = (event: any) => {
    setEip6963Providers((prevValue: any[]) => [...prevValue, event.detail])
  }
  useEffect(() => {
    window.addEventListener('eip6963:announceProvider', eip6963ProviderListener)
    window.dispatchEvent(new Event('eip6963:requestProvider'))

    return () => {
      window.removeEventListener('eip6963:announceProvider', eip6963ProviderListener)
    }
  }, [])

  return useMemo(() => {
    const isInjected = getIsInjected()
    const hasMetaMaskExtension = getIsMetaMaskWallet()
    const hasCoinbaseExtension = getIsCoinbaseWallet()
    const hasRabbyExtension = getIsRabbyWallet()

    const isCoinbaseWalletBrowser = isMobile && hasCoinbaseExtension
    const isMetaMaskBrowser = isMobile && hasMetaMaskExtension
    const isInjectedMobileBrowser = isCoinbaseWalletBrowser || isMetaMaskBrowser

    let injectedOption
    if (!isInjected) {
      if (!isMobile) {
        injectedOption = <InstallMetaMaskOption />
      }
    } else if (!hasCoinbaseExtension) {
      if (hasMetaMaskExtension) {
        injectedOption = <MetaMaskOption tryActivation={tryActivation} />
      } else {
        injectedOption = <InjectedOption tryActivation={tryActivation} />
      }
    }

    let rabbyWalletOption
    if (hasRabbyExtension) {
      rabbyWalletOption = <RabbyWalletOption tryActivation={tryActivation} />
    } else {
      if (eip6963Providers.find((provider: any) => provider.info.name === 'Rabby Wallet')) {
        rabbyWalletOption = <ActivateRabbyWalletOption />
      } else {
        rabbyWalletOption = <InstallRabbyWalletOption />
      }
    }

    let coinbaseWalletOption
    if (isMobile && !isInjectedMobileBrowser) {
      coinbaseWalletOption = <OpenCoinbaseWalletOption />
    } else if (!isMobile || isCoinbaseWalletBrowser) {
      coinbaseWalletOption = <CoinbaseWalletOption tryActivation={tryActivation} />
    }

    const walletConnectionOption =
      (!isInjectedMobileBrowser && <WalletConnectOption tryActivation={tryActivation} />) ?? null

    return (
      <OptionGrid>
        {injectedOption}
        {rabbyWalletOption}
        {coinbaseWalletOption}
        {walletConnectionOption}
      </OptionGrid>
    )
  }, [eip6963Providers])
}
