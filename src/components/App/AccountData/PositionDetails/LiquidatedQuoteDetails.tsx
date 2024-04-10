import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import Image from 'next/image'
import { Quote } from 'types/quote'
import { PositionType } from 'types/trade'
import { formatTimestamp } from 'utils/time'
import { formatAmount, formatPrice, toBN } from 'utils/numbers'

import { useMarketData } from 'state/hedger/hooks'

import { useMarket } from 'hooks/useMarkets'
import { useLockedMargin, useQuoteLeverage, useQuoteSize, useQuoteUpnlAndPnl } from 'hooks/useQuotes'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'

import { LongArrow, ShortArrow, ShareIcon } from 'components/Icons'
import ClosedAmountDetails from './ClosedSizeDetails/ClosedAmountDetails'
import { ShareWrapper } from 'components/App/UserPanel/Common'

import {
  Bar,
  ContentWrapper,
  DataWrap,
  FlexColumn,
  Label,
  Leverage,
  MarketNameQuote,
  PositionInfoBox,
  PositionMobileRow,
  QuoteData,
  QuoteDetailWrapper,
  QuoteMobileLeftLine,
  Row,
  TopWrap,
  TopWrapQuote,
  Value,
} from 'components/App/AccountData/PositionDetails/styles'
import { Row as RowComponent } from 'components/Row'
import PositionDetailsNavigator from './PositionDetailsNavigator'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { getTokenWithFallbackChainId } from 'utils/token'
import ShareModal from 'components/App/UserPanel/ShareModal'

export default function LiquidatedQuoteDetails({
  quote,
  platformFee,
  mobileVersion = false,
  buttonText,
}: {
  quote: Quote
  platformFee: string
  mobileVersion: boolean
  buttonText?: string
}): JSX.Element {
  const theme = useTheme()
  const { chainId } = useActiveWeb3React()
  const {
    id,
    positionType,
    marketId,
    createTimestamp,
    statusModifyTimestamp,
    liquidateAmount,
    liquidatePrice,
    openedPrice,
  } = quote
  const { symbol, name, asset } = useMarket(marketId) || {}
  const marketData = useMarketData(name)
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)
  const tokenLogo = useCurrencyLogo(symbol)

  const quoteSize = useQuoteSize(quote)
  const leverage = useQuoteLeverage(quote)
  const lockedAmount = useLockedMargin(quote)
  const [, pnl] = useQuoteUpnlAndPnl(quote, marketData?.markPrice || 0)
  const [showShareModal, setShowShareModal] = useState(false)

  function getPnlData(value: string) {
    const valueBN = toBN(value)
    const valuePercent = valueBN.div(quoteSize).div(openedPrice).times(leverage).times(100).toFixed(2)

    if (valueBN.isGreaterThan(0)) return [`+ $${formatAmount(valueBN)}`, valuePercent, theme.green1]
    else if (valueBN.isLessThan(0))
      return [`- $${formatAmount(Math.abs(valueBN.toNumber()))}`, valuePercent, theme.red1]
    return [`$${formatAmount(valueBN)}`, valuePercent, theme.text1]
  }

  const [PNL, PNLPercent] = getPnlData(pnl)

  return (
    <>
      {quote && showShareModal && (
        <ShareModal quote={quote} modalOpen={showShareModal} toggleModal={() => setShowShareModal(false)} />
      )}
      {mobileVersion ? (
        <>
          <TopWrapQuote>
            <QuoteMobileLeftLine positionType={positionType}></QuoteMobileLeftLine>
            <FlexColumn flex={buttonText ? 2 : 4} alignItems={'space-between'}>
              <PositionInfoBox>
                <RowComponent>
                  <QuoteData>
                    {positionType === PositionType.LONG ? (
                      <LongArrow width={15} height={12} color={theme.blue} />
                    ) : (
                      <ShortArrow width={15} height={12} color={theme.pink} />
                    )}
                  </QuoteData>
                  <MarketNameQuote>
                    <Image src={tokenLogo} width={18} height={18} alt={`icon`} />
                    <div style={{ paddingLeft: '5px' }}>
                      {symbol}-{asset}
                    </div>
                  </MarketNameQuote>
                  <Leverage>{leverage}x</Leverage>
                </RowComponent>
                <ShareWrapper>
                  <ShareIcon
                    size={20}
                    onClick={() => {
                      setShowShareModal(true)
                    }}
                  />
                </ShareWrapper>
              </PositionInfoBox>
              <PositionMobileRow width={'initial'}>
                <div>
                  <Label>ID</Label>
                  <Value>
                    {symbol}-{asset}
                    <span style={{ color: theme.coolGrey }}>-Q{id}</span>
                  </Value>
                </div>

                <div>
                  <Label>PNL</Label>
                  <Value>{`${PNL} (${Math.abs(Number(PNLPercent))}%)`}</Value>
                </div>
                <div>
                  <Label>Liquidated Size</Label>
                  <Value>{`${formatPrice(liquidatePrice, 6, true)} ${collateralCurrency?.symbol}`}</Value>
                </div>
              </PositionMobileRow>

              <PositionMobileRow width={'initial'}>
                <div>
                  <Label>Liquidated Price</Label>
                  <Value>{`${formatPrice(liquidatePrice, 6, true)} ${collateralCurrency?.symbol}`}</Value>
                </div>
                <div>
                  <Label>Locked Amount</Label>
                  <Value>{`${formatPrice(lockedAmount, 6, true)} ${collateralCurrency?.symbol}`}</Value>
                </div>
                <div></div>
              </PositionMobileRow>
            </FlexColumn>
          </TopWrapQuote>
        </>
      ) : (
        <>
          <TopWrap>
            <FlexColumn flex={buttonText ? 2 : 4} alignItems={'flex-start'}>
              <PositionInfoBox>
                <RowComponent width={'initial'}>
                  <MarketNameQuote>
                    <Image src={tokenLogo} width={24} height={24} alt={`icon`} />
                    <RowComponent padding="0 0 0 10px">
                      {symbol}-{asset}
                    </RowComponent>
                  </MarketNameQuote>

                  <Leverage>{leverage}x</Leverage>
                  <QuoteData>
                    {positionType}
                    {positionType === PositionType.LONG ? (
                      <LongArrow width={15} height={12} color={theme.blue} />
                    ) : (
                      <ShortArrow width={15} height={12} color={theme.pink} />
                    )}
                  </QuoteData>
                  <ShareIcon
                    size={15}
                    onClick={() => {
                      setShowShareModal(true)
                    }}
                  />
                </RowComponent>
                <PositionDetailsNavigator />
              </PositionInfoBox>
            </FlexColumn>
          </TopWrap>
          <QuoteDetailWrapper positionType={positionType}>
            <DataWrap style={{ paddingTop: '0px' }}>
              <Row>
                <Label>ID:</Label>
                <Value color={theme.almostWhite}>
                  {symbol}-{asset}
                  <span style={{ color: theme.coolGrey }}>-Q{id}</span>
                </Value>
              </Row>
              <Row>
                <Label>Liquidated Size:</Label>
                <Value>{`${formatPrice(liquidateAmount, 6, true)} ${symbol}`}</Value>
              </Row>
              <Row>
                <Label>Liquidated Price:</Label>
                <Value>{`${formatPrice(liquidatePrice, 6, true)} ${collateralCurrency?.symbol}`}</Value>
              </Row>
            </DataWrap>
            <ClosedAmountDetails quote={quote} />
            <Bar />
            <ContentWrapper>
              <Row>
                <Label>Liquidated Time:</Label>
                <Value>{formatTimestamp(statusModifyTimestamp * 1000)}</Value>
              </Row>
              <Row>
                <Label>Created Time:</Label>
                <Value>{formatTimestamp(createTimestamp * 1000)}</Value>
              </Row>
              <Row>
                <Label>Locked Amount:</Label>
                <Value>{`${formatAmount(lockedAmount, 6, true)} ${collateralCurrency?.symbol}`}</Value>
              </Row>
              <Row>
                <Label>Platform Fee:</Label>
                <Value>
                  {`${
                    Number(formatPrice(toBN(platformFee).div(2), 4)) + Number(formatPrice(toBN(platformFee).div(2), 4))
                  } ${collateralCurrency?.symbol}`}
                </Value>
              </Row>
            </ContentWrapper>
          </QuoteDetailWrapper>
        </>
      )}
    </>
  )
}
