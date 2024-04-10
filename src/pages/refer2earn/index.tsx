import React from 'react'
import styled from 'styled-components'
import { HeaderSection } from 'components/App/Refer2Earn/HeaderSection'
import { Column, FlexColumn } from 'components/Column'
import { NFTCard } from 'components/App/Refer2Earn/NFTCard'
import { MyReferralCodeAndRakebackSection } from 'components/App/Refer2Earn/MyReferralCodeAndRakebackSection'

const Container = styled(Column)`
  background: ${({ theme }) => theme.color1};
  padding: 0 9%;

  ${({ theme }) => theme.mediaWidth.upToLarge`
    padding: 0 9%;
  `}

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 0 4%;
  `}

    ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 0 2%;
  `}
`

const MyReferral = () => {
  return (
    <Container>
      <HeaderSection />
      <FlexColumn gap="24px">
        <NFTCard />
        <MyReferralCodeAndRakebackSection />
      </FlexColumn>
    </Container>
  )
}

export default MyReferral
