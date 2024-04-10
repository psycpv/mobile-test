import React, { useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

import { ChainInfo } from 'constants/chainInfo'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

import { NavButton } from 'components/Button'
import { V3_CHAIN_IDS } from 'constants/chains'
import { ChevronDown } from 'components/Icons'
import ImageWithFallback from 'components/ImageWithFallback'
import { isMobile } from 'react-device-detect'
import { NetworksModal } from './NetworksModal'
import useOnOutsideClick from 'lib/hooks/useOnOutsideClick'

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  height: 100%;
`

const Button = styled(NavButton)`
  gap: 4px;
  width: ${({ width }) => (width ? width : '40px')};
  font-size: 12px;
  padding: 0px 3px;
  cursor: default;

  /* ${({ theme }) => theme.mediaWidth.upToMedium`
    & > * {
      &:nth-child(2) {
        display: none;
      }
    }
  `}; */
`

const Chevron = styled(ChevronDown)<{ open: boolean }>`
  transform: rotateX(${({ open }) => (open ? '180deg' : '0deg')});
  transition: 0.5s;
`

export default function Web3Network() {
  const ref = useRef(null)
  const isMultiChain = V3_CHAIN_IDS.length > 1
  const { account, chainId } = useActiveWeb3React()
  const [networksModal, toggleNetworksModal] = useState(false)
  useOnOutsideClick(ref, () => toggleNetworksModal(false))

  const onClickButton = () => {
    if (isMultiChain) toggleNetworksModal(!networksModal)
  }

  const Chain = useMemo(() => {
    return chainId && chainId in ChainInfo ? ChainInfo[chainId] : null
  }, [chainId])

  if (!account || !chainId || !Chain || !V3_CHAIN_IDS.includes(chainId)) {
    return null
  }

  return isMobile ? (
    <>
      <Button onClick={onClickButton}>
        <ImageWithFallback src={Chain.logoUrl} alt={Chain.label} width={25} height={25} />
        {isMultiChain && <Chevron open={networksModal} />}
      </Button>
      <NetworksModal isModal isOpen={networksModal} onDismiss={() => toggleNetworksModal(false)} />
    </>
  ) : (
    <Container ref={ref}>
      {networksModal && (
        <div>
          <NetworksModal isOpen={networksModal} onDismiss={() => toggleNetworksModal(false)} />
        </div>
      )}

      <Button onClick={onClickButton} width={isMultiChain ? '52px' : undefined}>
        <ImageWithFallback src={Chain.logoUrl} alt={Chain.label} width={28} height={28} />
        {isMultiChain && <Chevron open={networksModal} />}
      </Button>
    </Container>
  )
}
