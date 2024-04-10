import { Card } from 'components/Card'
import { FlexRow, Row, WrapRow } from 'components/Row'
import { ThemedButton } from 'components/Button'
import { ThemedText } from 'components/Text'
import Hashtag from 'components/Icons/Hashtag'
import React, { useState } from 'react'
import { ThemedModal } from 'components/Modal'
import styled, { useTheme } from 'styled-components'
import { CheckMark } from 'components/Icons'
import Column, { FlexColumn } from 'components/Column'
import Vibe from 'components/Icons/Vibe'

export const NFTCard = () => {
  const [isChangeActiveNFTModalOpen, setIsChangeActiveNFTModalOpen] = useState(false)
  const [isMintNFTModalOpen, setIsMintNFTModalOpen] = useState(false)

  return (
    <>
      <NFTCardComponent />
      <ChangeActiveNFTModal isOpen={isChangeActiveNFTModalOpen} setIsOpen={setIsChangeActiveNFTModalOpen} />
      <MintNFTModal isOpen={isMintNFTModalOpen} setIsOpen={setIsMintNFTModalOpen} />
    </>
  )
}

const NFTCardComponent = () => {
  return (
    <Card paddingY="28px" paddingX="40px" borderRadius="8px">
      <WrapRow columnGap="24px" rowGap="52px" width="100%">
        <WrapRow columnGap="36px" rowGap="8px" width="100%" smWidth="fit-content" minWidth="250px">
          <Row gap="12px" alignItems="center" width="100%" smWidth="fit-content">
            <ThemedText.P4 color="coolGrey" marginRight="auto">
              Active NFT:
            </ThemedText.P4>
            <Row width="fit-content" gap="4px">
              <Hashtag width="14px" smWidth="20px" height="14px" smHeight="20px" />
              <ThemedText.P4>2310</ThemedText.P4>
            </Row>
          </Row>
          <Row gap="12px" width="100%" smWidth="fit-content">
            <ThemedText.P4 color="coolGrey" marginRight="auto">
              Locked Amount:
            </ThemedText.P4>
            <ThemedText.P4>11 $BASED</ThemedText.P4>
          </Row>
        </WrapRow>
        <FlexRow gap="12px" width="fit-content" minWidth="250px">
          <ThemedButton.Primary width="100%" marginLeft="auto" smWidth="fit-content">
            Change Active
          </ThemedButton.Primary>
          <ThemedButton.Pink width="100%" smWidth="fit-content">
            Mint New NFT
          </ThemedButton.Pink>
        </FlexRow>
      </WrapRow>
    </Card>
  )
}

const ChangeActiveNFTModal = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) => {
  return (
    <ThemedModal.Simple size="md" isOpen={isOpen} toggleModal={() => setIsOpen(false)}>
      <ThemedText.White fontSize="18px" marginBottom="20px">
        Active NFT
      </ThemedText.White>
      <NFTList />
      <ThemedButton.Primary marginLeft="auto">Save</ThemedButton.Primary>
    </ThemedModal.Simple>
  )
}

const ModalListWrapper = styled(Column)`
  max-height: 40vh;
  overflow-y: auto;
  min-height: 30vh;
`

const NFTList = () => {
  return (
    <ModalListWrapper gap="8px" marginBottom="24px">
      <NFTListItem />
      <NFTListItem />
      <NFTListItem active />
      <NFTListItem />
    </ModalListWrapper>
  )
}

const NFTListItemWrapper = styled(WrapRow)`
  cursor: pointer;
  padding: 24px 28px 24px 20px !important;
`

const NFTListItem = ({ active }: { active?: boolean }) => {
  const theme = useTheme()

  return (
    <NFTListItemWrapper gap="8px" backgroundColor={active ? theme.pink30 : theme.color3} borderRadius="6px">
      <Row width="fit-content" minWidth="100px" gap="12px" marginRight="auto">
        {active && <CheckMark color={theme.pink} />}
        <Hashtag />
        <ThemedText.White fontSize="18px" marginLeft="-8px">
          2310
        </ThemedText.White>
      </Row>
      <Row width="fit-content" gap="12px">
        <ThemedText.CoolGray fontSize="18px">Locked Amount: </ThemedText.CoolGray>
        <ThemedText.White fontSize="18px">11 VIBE</ThemedText.White>
      </Row>
    </NFTListItemWrapper>
  )
}

const MintNFTModal = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) => {
  return (
    <ThemedModal.Simple size="sm" isOpen={isOpen} toggleModal={() => setIsOpen(false)}>
      <FlexColumn align="center" gap="24px">
        <Vibe size={96} />
        <ThemedText.White marginBottom="54px" textAlign="center" width="clamp(200px, 100%, 260px)">
          Create Your Vibe NFT to access unique benefits and features
        </ThemedText.White>
        <ThemedButton.Primary width="100%" smWidth="100%">
          Mint
        </ThemedButton.Primary>
      </FlexColumn>
    </ThemedModal.Simple>
  )
}
