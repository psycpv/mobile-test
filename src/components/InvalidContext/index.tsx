import { useMemo } from 'react'
import styled, { useTheme } from 'styled-components'
import Image from 'next/image'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

import { FALLBACK_CHAIN_ID } from 'constants/chains'
import { ChainInfo } from 'constants/chainInfo'

import { useToggleWalletModal } from 'state/application/hooks'
import { useSupportedChainId } from 'lib/hooks/useSupportedChainId'
import useRpcChangerCallback from 'lib/hooks/useRpcChangerCallback'

import MainButton from 'components/Button/MainButton'
import { SwitchWallet } from 'components/Icons'
import { RowCenter } from 'components/Row'

const ChainImageWrapper = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: center;
`

export enum ContextError {
  ACCOUNT,
  CHAIN_ID,
  VALID,
}

export function useInvalidContext() {
  const { chainId, account } = useActiveWeb3React()
  const isSupportedChainId = useSupportedChainId()
  return useMemo(
    () =>
      !account || !chainId ? ContextError.ACCOUNT : !isSupportedChainId ? ContextError.CHAIN_ID : ContextError.VALID,
    [account, chainId, isSupportedChainId]
  )
}

export function InvalidContext() {
  const theme = useTheme()
  const invalidContext = useInvalidContext()
  const toggleWalletModal = useToggleWalletModal()
  const rpcChangerCallback = useRpcChangerCallback()
  const fallbackChainInfo = ChainInfo[FALLBACK_CHAIN_ID]

  return useMemo(() => {
    if (invalidContext === ContextError.ACCOUNT) {
      return (
        <>
          <MainButton onClick={toggleWalletModal} simpleMode>
            <RowCenter gap="10px">
              <SwitchWallet />
              Connect Wallet
            </RowCenter>
          </MainButton>
        </>
      )
    }
    if (invalidContext === ContextError.CHAIN_ID) {
      return (
        <>
          <MainButton
            customText={`Switch Network to ${fallbackChainInfo.chainName}`}
            onClick={() => rpcChangerCallback(FALLBACK_CHAIN_ID)}
            simpleMode
            bgColor={theme.bakerMillerPink}
            hoverColor={theme.bakerMillerPink}
            borderColor={theme.red}
          >
            <ChainImageWrapper>
              <Image src={fallbackChainInfo.logoUrl} alt={fallbackChainInfo.label} width={24} height={24} />
            </ChainImageWrapper>
          </MainButton>
        </>
      )
    }
    return null
  }, [
    fallbackChainInfo.chainName,
    fallbackChainInfo.label,
    fallbackChainInfo.logoUrl,
    invalidContext,
    rpcChangerCallback,
    theme.bakerMillerPink,
    theme.red,
    toggleWalletModal,
  ])
}
