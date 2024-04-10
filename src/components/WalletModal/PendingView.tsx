import styled from 'styled-components'
import { Connector } from '@web3-react/types'
import Image from 'next/image'

import { ColumnCenter } from 'components/Column'
import { RowCenter, RowStart } from 'components/Row'
import { ThemedText } from 'components/Text'
import { Row } from 'components/Row'
import AnimatedButton from 'components/Button/MainButton'

const PendingSection = styled(RowCenter)`
  flex-flow: column nowrap;
  & > * {
    width: 100%;
  }
`

const LoadingMessage = styled(RowStart)<{ error?: boolean }>`
  flex-flow: row nowrap;
  color: ${({ error, theme }) => (error ? theme.red3 : 'inherit')};
  & > * {
    padding: 1rem;
  }
`

const ErrorGroup = styled(RowStart)`
  flex-flow: column nowrap;
  color: ${({ theme }) => theme.red1};
`

const LoadingWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
`

const LoaderContainer = styled(RowCenter)`
  width: unset;
  flex-wrap: nowrap;
  margin-bottom: 16px;
  padding-bottom: 16px;
`

const Title = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin: 20px 0px 12px 0px;
  color: ${({ theme }) => theme.red};
`

const ConnectingText = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.almostWhite};
`

const Description = styled.div`
  font-size: 14px;
  text-align: center;
  margin-bottom: 35px;
  color: ${({ theme }) => theme.almostWhite};
`

const Text = styled.div`
  font-size: 14px;
  padding-top: 18px;
  color: ${({ theme }) => theme.coolGrey};
`

export default function PendingView({
  connector,
  error = false,
  tryActivation,
  openOptions,
}: {
  connector: Connector
  error?: boolean
  tryActivation: (connector: Connector) => void
  openOptions: () => void
}) {
  return (
    <PendingSection>
      <LoadingMessage error={error}>
        <LoadingWrapper>
          {error ? (
            <ErrorGroup>
              <Image src={'/static/images/etc/wallet_sad.svg'} alt="Asset" width={134} height={152} />
              <Title>Error Connecting...</Title>
              <Description>The connection attempt failed. Please try again.</Description>
              <Row gap={'8px'}>
                <AnimatedButton
                  simpleMode
                  onClick={() => {
                    tryActivation(connector)
                  }}
                >
                  {' '}
                  Try Again
                </AnimatedButton>

                <AnimatedButton simpleMode onClick={openOptions}>
                  Go Back
                </AnimatedButton>
              </Row>
            </ErrorGroup>
          ) : (
            <>
              <ColumnCenter style={{ margin: '0px auto' }}>
                <LoaderContainer>
                  <Image src={'/static/images/etc/wallet_happy.svg'} alt="Asset" width={134} height={152} />
                </LoaderContainer>
                <ThemedText.MediumHeader>
                  <ConnectingText>Connecting...</ConnectingText>
                </ThemedText.MediumHeader>
                <ThemedText.MediumHeader>
                  <Text>Please confirm this connection in your wallet.</Text>
                </ThemedText.MediumHeader>
              </ColumnCenter>
            </>
          )}
        </LoadingWrapper>
      </LoadingMessage>
    </PendingSection>
  )
}
