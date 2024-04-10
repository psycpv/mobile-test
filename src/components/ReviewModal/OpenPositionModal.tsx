import React, { useCallback, useMemo, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { toast } from 'react-toastify'

import { BN_ZERO, formatAmount, toBN } from 'utils/numbers'
import { DEFAULT_PRECISION } from 'constants/misc'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { OrderType, PositionType } from 'types/trade'
import { getTokenWithFallbackChainId } from 'utils/token'

import { useLeverage } from 'state/user/hooks'
import { ApplicationModal } from 'state/application/reducer'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useActiveMarket, useOrderType } from 'state/trade/hooks'
import { useIsHavePendingTransaction } from 'state/transactions/hooks'
import { useModalOpen, useToggleOpenPositionModal } from 'state/application/hooks'

import { useTradeCallback } from 'callbacks/useTrade'
import useTradePage, { useLockedValues, useNotionalValue } from 'hooks/useTradePage'

import Column from 'components/Column'
import { RowCenter } from 'components/Row'
import InfoItem from 'components/InfoItem'
import { DisplayLabel } from 'components/InputLabel'
import { Modal, ModalHeader } from 'components/Modal'
import ErrorButton from 'components/Button/ErrorButton'
import MainButton from 'components/Button/MainButton'
import { DotFlashing } from 'components/Icons'
import AnimationLoader from 'components/Animation/AnimationLoader'
import { titleCase } from 'utils/string'

const Wrapper = styled(Column)`
  gap: 25px;
  padding: 12px 12px 33px 12px;
  overflow-y: scroll;
  height: auto;
  border-radius: 6px;
  background: ${({ theme }) => theme.color2};
`

const AwaitingWrapper = styled(Column)`
  padding: 24px 0;
`

const SummaryWrap = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.text2};
  margin: 20px auto;
  max-width: 350px;
  text-align: center;
`

const ConfirmWrap = styled(SummaryWrap)`
  font-size: 14px;
  margin: 0;
  margin-top: 20px;
  color: ${({ theme }) => theme.almostWhite};
`

const LabelsWrapper = styled(Column)`
  gap: 13px;
`

const Data = styled(RowCenter)`
  width: 100%;
  padding: 5px;
  font-size: 12px;
  margin-left: 10px;
  color: ${({ theme }) => theme.text1};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 16px;
  `};
`

const Separator = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.border2};
`

export default function OpenPositionModal({
  positionType,
  data,
  summary,
}: {
  positionType: PositionType
  summary?: string
  data?: string
}) {
  const theme = useTheme()
  const { chainId } = useActiveWeb3React()
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false)

  const orderType = useOrderType()
  const market = useActiveMarket()
  const userLeverage = useLeverage()
  const toggleModal = useToggleOpenPositionModal()
  const modalOpen = useModalOpen(ApplicationModal.OPEN_POSITION)
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)

  const { price, formattedAmounts } = useTradePage()

  const [symbol, asset, pricePrecision] = useMemo(
    () => (market ? [market.symbol, market.asset, market.pricePrecision] : ['', '', DEFAULT_PRECISION]),
    [market]
  )

  const quantityAsset = useMemo(
    () => (toBN(formattedAmounts[1]).isNaN() ? BN_ZERO : toBN(formattedAmounts[1])),
    [formattedAmounts]
  )

  const notionalValue = useNotionalValue(quantityAsset.toString(), price)
  const { total: lockedValue } = useLockedValues(notionalValue)
  const tradingFee = useMemo(() => {
    const notionalValueBN = toBN(notionalValue)
    if (!market || notionalValueBN.isNaN()) return '-'
    return market.tradingFee ? notionalValueBN.times(market.tradingFee).toString() : '0'
  }, [market, notionalValue])

  const info = useMemo(() => {
    const lockedValueBN = toBN(lockedValue)
    return [
      {
        title: 'Open Price:',
        value: `${price === '' ? '-' : orderType === OrderType.MARKET ? 'Market' : price}`,
        valueColor:
          orderType === OrderType.MARKET
            ? positionType === PositionType.LONG
              ? theme.blue
              : theme.pink
            : theme.almostWhite,
      },
      {
        title: 'Amount:',
        value: `${lockedValueBN.isNaN() ? '0' : lockedValueBN.toFixed(pricePrecision)} ${collateralCurrency?.symbol}`,
      },
      { title: 'Leverage:', value: `${userLeverage}x` },
      { title: 'Receive', value: `${formattedAmounts[1]} `, symbol, ticker: symbol },

      {
        title: 'Platform Fee:',
        value: !toBN(tradingFee).isNaN()
          ? `${formatAmount(toBN(tradingFee).div(2), 3, true)} ${collateralCurrency?.symbol}`
          : `0 ${collateralCurrency?.symbol}`,
      },
    ]
  }, [
    lockedValue,
    pricePrecision,
    collateralCurrency?.symbol,
    userLeverage,
    price,
    orderType,
    theme.pink,
    tradingFee,
    formattedAmounts,
    symbol,
  ])

  return (
    <Modal isOpen={modalOpen} onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
      <ModalHeader
        onClose={toggleModal}
        title={`${titleCase(positionType)} ${symbol}/${asset}`}
        positionType={positionType}
      />
      {awaitingConfirmation ? (
        <AwaitingWrapper>
          <RowCenter>
            <AnimationLoader
              name={'_loading'}
              style={{
                width: '120px',
                height: '120px',
                margin: '0px auto',
              }}
            />
          </RowCenter>

          <RowCenter>
            <SummaryWrap>{summary}</SummaryWrap>
          </RowCenter>

          <RowCenter>
            <ConfirmWrap>Confirm this transaction in your wallet</ConfirmWrap>
          </RowCenter>
        </AwaitingWrapper>
      ) : (
        <Wrapper>
          <LabelsWrapper>
            {info.map((info, index) => {
              return (
                <InfoItem
                  label={info.title}
                  amount={info.value}
                  valueColor={info?.valueColor}
                  key={index}
                  ticker={info?.ticker}
                  symbol={info?.symbol}
                />
              )
            })}
            <DisplayLabel
              label="Position Value"
              value={toBN(lockedValue).toFixed(pricePrecision)}
              leverage={userLeverage}
              symbol={collateralCurrency?.symbol}
              precision={pricePrecision}
            />
          </LabelsWrapper>

          {data && (
            <>
              <Separator />
              <Data>{data}</Data>
            </>
          )}

          {!awaitingConfirmation && (
            <ActionButtons
              symbol={symbol}
              positionType={positionType}
              setAwaitingConfirmation={setAwaitingConfirmation}
            />
          )}
        </Wrapper>
      )}
    </Modal>
  )
}

function ActionButtons({
  symbol,
  positionType,
  setAwaitingConfirmation,
}: {
  symbol: string
  positionType: PositionType
  setAwaitingConfirmation: (value: boolean) => void
}) {
  const { state } = useTradePage()
  const isPendingTxs = useIsHavePendingTransaction()
  const toggleModal = useToggleOpenPositionModal()

  const { callback: tradeCallback, error: tradeCallbackError } = useTradeCallback(positionType)

  const onTrade = useCallback(async () => {
    if (!tradeCallback) {
      toast.error(tradeCallbackError)
      return
    }

    let error = ''
    try {
      setAwaitingConfirmation(true)
      await tradeCallback()
      setAwaitingConfirmation(false)
      toggleModal()
    } catch (e) {
      if (e instanceof Error) {
        error = e.message
      } else {
        console.debug(e)

        error = 'An unknown error occurred.'
      }
    }
    if (error) console.log(error)
    toggleModal()
    setAwaitingConfirmation(false)
  }, [toggleModal, tradeCallback, tradeCallbackError])

  if (isPendingTxs) {
    return (
      <MainButton disabled>
        Transacting <DotFlashing />
      </MainButton>
    )
  }

  if (state) {
    return <ErrorButton state={state} disabled={true} exclamationMark={true} />
  }

  return (
    <MainButton
      positionType={positionType}
      customText={`${titleCase(positionType ?? '')} ${symbol}`}
      onClick={onTrade}
    />
  )
}
