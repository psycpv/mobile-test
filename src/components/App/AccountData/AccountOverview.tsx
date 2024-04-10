import React, { useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { toast } from 'react-toastify'
import Image from 'next/image'

import { formatAmount, formatPrice, toBN } from 'utils/numbers'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { getTokenWithFallbackChainId } from 'utils/token'

import { useActiveAccount, useExpertMode, useSetExpertModeCallback } from 'state/user/hooks'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { ApplicationModal } from 'state/application/reducer'
import { useDepositModalToggle, useModalOpen, useWithdrawModalToggle } from 'state/application/hooks'

import { useAccountsLength } from 'hooks/useAccounts'

import { Row, RowBetween, RowCenter, RowEnd } from 'components/Row'
import StartTrading from 'components/App/AccountData/StartTrading'
import CreateAccount from 'components/App/AccountData/CreateAccount'
import { ContextError, useInvalidContext } from 'components/InvalidContext'
import DepositModal from 'components/ReviewModal/DepositModal'
import AccountUpnl from 'components/App/AccountData/AccountUpnl'
import DataRow from 'components/App/AccountData/DataRow'
import WithdrawModal from 'components/ReviewModal/WithdrawModal'
import { NotConnectedWallet } from 'components/Icons'
import { EmptyRow } from '../UserPanel/Common'
import { truncateAddress } from 'utils/address'
import Emoji from './Emoji'
import AnimatedButton from 'components/Button/MainButton'
import useAccountBalanceStats from 'hooks/useAccountBalanceStats'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  margin: 14px 0px 12px 0px;
  background: ${({ theme }) => theme.color3};
`

const Title = styled(Row)`
  font-weight: 700;
  font-size: 21px;
  line-height: 19px;
  padding: 12px;
  color: ${({ theme }) => theme.almostWhite};
  padding-bottom: 1rem;
  white-space: nowrap;
`

const AccountHealth = styled(RowEnd)<{ color?: string }>`
  font-weight: 500;
  font-size: 16px;
  padding: 12px 12px 12px 0px;
  color: ${({ theme, color }) => color ?? theme.text1};
`

export const AccountHealthText = styled.div`
  font-size: 10px;
  margin-right: 4px;
  margin-top: 4px;
  color: ${({ theme }) => theme.text3};
`

const ContentWrapper = styled.div`
  display: flex;
  padding: 12px;
  padding-top: 0px;
  flex-flow: column nowrap;
  position: relative;
`

const DataWrap = styled.div`
  display: flex;
  padding: 0px 12px;
  flex-flow: column nowrap;
  position: relative;
`

const TopRow = styled(RowBetween)`
  flex-flow: row nowrap;
  margin: 8px 0;
`

const Label = styled.div`
  font-size: 14px;
  justify-self: start;
  color: ${({ theme }) => theme.coolGrey};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 12px;
  `};
`

const Address = styled.div`
  color: ${({ theme }) => theme.blue};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 8px 0px 0px 4px;
`

const Separator = styled.div`
  width: calc(100% - 24px);
  height: 2px;
  background: ${({ theme }) => theme.color2};
`

const ButtonsWrapper = styled(RowCenter)`
  margin-top: 16px;
  gap: 12px;
`

const ContextText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text3};
`

const LiquidatedHealth = styled.span`
  font-size: 14px;
  font-weight: 600;
`

const ImageWrapper = styled.div`
  margin: 40px auto 16px auto;
`

export enum PanelType {
  POSITION_OVERVIEW = 'POSITION OVERVIEW',
  ACCOUNT_OVERVIEW = 'ACCOUNT OVERVIEW',
}

export default function AccountOverview() {
  const theme = useTheme()
  const { chainId } = useActiveWeb3React()
  const { name } = useActiveAccount() || {}
  const { accountLength, loading: accountsLoading } = useAccountsLength()
  const validatedContext = useInvalidContext()

  const {
    allocatedBalance,
    accountBalance,
    lockedPartyAMM,
    statsLoading,
    liquidationStatus,
    equity,
    maintenanceMargin,
    accountHealthData: { healthColor, healthEmoji },
    availableForOrder,
  } = useAccountBalanceStats()

  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)
  const showDepositModal = useModalOpen(ApplicationModal.DEPOSIT)
  const showWithdrawModal = useModalOpen(ApplicationModal.WITHDRAW)
  const toggleDepositModal = useDepositModalToggle()
  const toggleWithdrawModal = useWithdrawModalToggle()

  if (validatedContext !== ContextError.VALID) {
    return <NotValidState text={'Wallet is not connected'} />
  } else if (statsLoading || accountsLoading) {
    return (
      <EmptyRow style={{ padding: 21 }}>
        <ImageWrapper>
          <Image src={'/static/images/etc/wallet_happy.svg'} alt="happy" width={120} height={120} />
        </ImageWrapper>
        <ContextText>loading...</ContextText>
      </EmptyRow>
    )
  } else if (accountLength === 0) {
    return <CreateAccount />
  } else if (!name) {
    return (
      <EmptyRow style={{ padding: '150px 21px' }}>
        <ContextText>Please choose an account from the navbar</ContextText>
      </EmptyRow>
    )
  } else if (toBN(allocatedBalance).isZero() && toBN(accountBalance).isZero()) {
    return <StartTrading symbol={collateralCurrency?.symbol} />
  } else {
    return (
      <>
        <Wrapper>
          <TopRow>
            <DeveloperModeTitle title={name} />
            <AccountHealth color={healthColor}>
              {liquidationStatus && (
                <>
                  <LiquidatedHealth>Liquidation Pending</LiquidatedHealth>
                  <Emoji
                    symbol={healthEmoji.symbol}
                    label={healthEmoji.label}
                    style={{ width: '22px', marginLeft: '4px' }}
                  />
                </>
              )}
            </AccountHealth>
          </TopRow>
          <DataWrap>
            <TopRow>
              <Label>Account Total uPnL:</Label>
              <AccountUpnl />
            </TopRow>
            <DataRow
              label={'Maintenance Margin (CVA):'}
              value={formatAmount(formatPrice(maintenanceMargin))}
              ticker={collateralCurrency?.symbol}
            />
            <DataRow
              label={'Equity Balance:'}
              value={formatAmount(formatPrice(equity))}
              ticker={collateralCurrency?.symbol}
            />
          </DataWrap>
          <RowCenter marginBottom={20} marginTop={20}>
            <Separator />
          </RowCenter>
          <ContentWrapper>
            <DataRow
              label={'Allocated Balance:'}
              value={formatAmount(formatPrice(allocatedBalance))}
              ticker={collateralCurrency?.symbol}
            />
            <DataRow
              label={'Locked Margin:'}
              value={formatAmount(formatPrice(lockedPartyAMM))}
              ticker={collateralCurrency?.symbol}
            />
            <DataRow
              label={'Available for Orders:'}
              value={formatAmount(formatPrice(availableForOrder))}
              ticker={collateralCurrency?.symbol}
            />

            <ButtonsWrapper>
              <AnimatedButton simpleMode customText={'Deposit'} onClick={() => toggleDepositModal()} />
              <AnimatedButton
                simpleMode
                customText={'Withdraw'}
                onClick={() => toggleWithdrawModal()}
                textColor={theme.almostWhite}
                hoverColor={theme.darkBluishGray}
                bgColor={theme.color4}
                borderColor={theme.yankeesBlue}
              />
            </ButtonsWrapper>
          </ContentWrapper>
        </Wrapper>
        {showDepositModal && <DepositModal />}
        {showWithdrawModal && <WithdrawModal />}
      </>
    )
  }
}

function NotValidState({ text }: { text: string }) {
  return (
    <EmptyRow style={{ padding: 21 }}>
      <NotConnectedWallet style={{ margin: '40px auto 16px auto' }} />
      <ContextText>{text}</ContextText>
    </EmptyRow>
  )
}

export const DeveloperModeTitle = ({ title }: { title: string | undefined }) => {
  const { account } = useActiveWeb3React()
  const setExpertMode = useSetExpertModeCallback()
  const isExpertMode = useExpertMode()
  const [tries, setTries] = useState(0)

  useEffect(() => {
    const toggleExpertMode = () => {
      toast.success(`Developer mode ${isExpertMode ? 'deactivated' : 'activated'}!`)
      setExpertMode(!isExpertMode)
      setTries(0)
    }

    if (tries >= 5) {
      toggleExpertMode()
    } else if (tries > 2) {
      toast.info(`Developer mode is ${isExpertMode ? 'deactivating' : 'activating'} #${tries}`)
    }
  }, [tries, setExpertMode, isExpertMode])

  const handleAccountOverviewClick = () => {
    setTries(tries + 1)
  }

  return (
    <React.Fragment>
      <Title onClick={handleAccountOverviewClick}>
        {title}
        <Address>{account && truncateAddress(account)}</Address>
      </Title>
    </React.Fragment>
  )
}
