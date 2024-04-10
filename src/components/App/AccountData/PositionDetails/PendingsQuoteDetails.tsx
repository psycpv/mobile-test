import Image from 'next/image'
import React from 'react'
import styled, { useTheme } from 'styled-components'

import { Quote } from 'types/quote'
import { PositionType } from 'types/trade'
import { formatTimestamp } from 'utils/time'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { getTokenWithFallbackChainId } from 'utils/token'
import { formatAmount, formatCurrency, formatPrice, toBN } from 'utils/numbers'
import { useMarketData } from 'state/hedger/hooks'
import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import ClosePendingDetails from './ClosedSizeDetails/ClosePendingDetails'

import { useMarket } from 'hooks/useMarkets'
import { useCheckQuoteIsExpired, useLockedMargin, useQuoteLeverage, useQuoteSize } from 'hooks/useQuotes'
import { useNotionalValue } from 'hooks/useTradePage'
import useBidAskPrice from 'hooks/useBidAskPrice'
import { PositionRowActionButton } from 'components/Button'
import { LongArrow, ShortArrow } from 'components/Icons'
import BlinkingPrice from 'components/App/FavoriteBar/BlinkingPrice'
import { Row as RowComponent } from 'components/Row'
import {
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
import PositionDetailsNavigator from './PositionDetailsNavigator'
import { titleCase } from 'utils/string'

const ExpiredStatus = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.warning};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 12px;
  `};
`

export default function PendingQuoteDetails({
  quote,
  platformFee,
  buttonText,
  disableButton,
  onClickButton,
  mobileVersion = false,
}: {
  quote: Quote
  platformFee: string
  buttonText?: string
  disableButton?: boolean
  onClickButton?: (event: React.MouseEvent<HTMLDivElement>) => void
  mobileVersion: boolean
}): JSX.Element {
  const theme = useTheme()
  const { chainId } = useActiveWeb3React()
  const { quantity, quoteStatus, positionType, orderType, requestedOpenPrice, marketId, createTimestamp, deadline } =
    quote
  const market = useMarket(marketId)
  const { symbol, name, asset } = market || {}
  const { ask: askPrice, bid: bidPrice } = useBidAskPrice(market)
  const { expired } = useCheckQuoteIsExpired(quote)

  const marketData = useMarketData(name)
  const quoteSize = useQuoteSize(quote)
  const leverage = useQuoteLeverage(quote)
  const lockedAmount = useLockedMargin(quote)
  const notionalValue = useNotionalValue(quoteSize, marketData?.markPrice || 0)
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)
  const tokenLogo = useCurrencyLogo(symbol)

  return (
    <>
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
                <RowComponent width="initial">
                  {buttonText && (
                    <PositionRowActionButton
                      width={'110px'}
                      height={'28px'}
                      expired={expired}
                      disabled={disableButton}
                      onClick={onClickButton}
                    >
                      {buttonText}
                    </PositionRowActionButton>
                  )}
                </RowComponent>
              </PositionInfoBox>
              <PositionMobileRow width={'initial'}>
                {expired ? (
                  <div>
                    <Label>Expired in:</Label>
                    <Value>{formatTimestamp(deadline * 1000)}</Value>
                  </div>
                ) : (
                  <div>
                    <Label>Create Time:</Label>
                    <Value>{formatTimestamp(createTimestamp * 1000)}</Value>
                  </div>
                )}
                <div>
                  <Label>Size</Label>
                  <Value>
                    {toBN(notionalValue).isEqualTo(0)
                      ? '-'
                      : `${formatCurrency(notionalValue)} ${collateralCurrency?.symbol}`}
                  </Value>
                </div>

                <div>
                  <Label>Locked Amount:</Label>
                  {expired ? (
                    <ExpiredStatus>{`${formatAmount(lockedAmount, 6, true)} ${
                      collateralCurrency?.symbol
                    }`}</ExpiredStatus>
                  ) : (
                    <Value>{`${formatAmount(lockedAmount, 6, true)} ${collateralCurrency?.symbol}`}</Value>
                  )}
                </div>
              </PositionMobileRow>
              <PositionMobileRow width={'initial'}>
                <div>
                  <Label>Order Price:</Label>
                  <Value>{`${formatAmount(requestedOpenPrice, 6, true)} ${collateralCurrency?.symbol}`}</Value>
                </div>
                {positionType === PositionType.LONG ? (
                  <div>
                    <Label>Ask Price:</Label>
                    <Value>
                      {askPrice === '0' ? (
                        '-'
                      ) : (
                        <BlinkingPrice data={askPrice} textSize={mobileVersion ? '12px' : '14px'} />
                      )}
                    </Value>
                  </div>
                ) : (
                  <div>
                    <Label>Bid Price:</Label>
                    <Value>
                      {bidPrice === '0' ? (
                        '-'
                      ) : (
                        <BlinkingPrice data={bidPrice} textSize={mobileVersion ? '12px' : '14px'} />
                      )}
                    </Value>
                  </div>
                )}
                <div>
                  <Label>{titleCase(quoteStatus)}</Label>
                </div>
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
                </RowComponent>
                <PositionDetailsNavigator />
              </PositionInfoBox>
            </FlexColumn>
          </TopWrap>
          <QuoteDetailWrapper positionType={positionType}>
            <ClosePendingDetails quote={quote} />
            <DataWrap>
              {expired ? (
                <Row>
                  <Label>Expired in:</Label>
                  <Value>{formatTimestamp(deadline * 1000)}</Value>
                </Row>
              ) : (
                <Row>
                  <Label>Create Time:</Label>
                  <Value>{formatTimestamp(createTimestamp * 1000)}</Value>
                </Row>
              )}

              <Row>
                <Label>Total Position:</Label>
                <Value>
                  {toBN(notionalValue).isEqualTo(0)
                    ? '-'
                    : `${formatCurrency(notionalValue)} ${collateralCurrency?.symbol}`}
                </Value>
              </Row>
              <Row>
                <Label>Size:</Label>
                <Value>{`${formatAmount(quantity)} ${symbol}`}</Value>
              </Row>

              <Row>
                <Label>Order Price:</Label>
                <Value>{`${formatAmount(requestedOpenPrice, 6, true)} ${collateralCurrency?.symbol}`}</Value>
              </Row>
              {positionType === PositionType.LONG ? (
                <Row>
                  <Label>Ask Price:</Label>
                  <Value>
                    {askPrice === '0' ? (
                      '-'
                    ) : (
                      <BlinkingPrice data={askPrice} textSize={mobileVersion ? '12px' : '14px'} />
                    )}
                  </Value>
                </Row>
              ) : (
                <Row>
                  <Label>Bid Price:</Label>
                  <Value>
                    {bidPrice === '0' ? (
                      '-'
                    ) : (
                      <BlinkingPrice data={bidPrice} textSize={mobileVersion ? '12px' : '14px'} />
                    )}
                  </Value>
                </Row>
              )}

              <Row>
                <Label>Locked Amount:</Label>
                {expired ? (
                  <ExpiredStatus>{`${formatAmount(lockedAmount, 6, true)} ${
                    collateralCurrency?.symbol
                  }`}</ExpiredStatus>
                ) : (
                  <Value>{`${formatAmount(lockedAmount, 6, true)} ${collateralCurrency?.symbol}`}</Value>
                )}
              </Row>
            </DataWrap>
            <ContentWrapper>
              <Row>
                <Label>Order Type:</Label>
                <Value>{orderType}</Value>
              </Row>
              <Row>
                <Label>Platform Fee:</Label>
                <Value>{`${
                  Number(formatPrice(toBN(platformFee).div(2), 4)) + Number(formatPrice(toBN(platformFee).div(2), 4))
                } ${collateralCurrency?.symbol}`}</Value>
              </Row>
            </ContentWrapper>
          </QuoteDetailWrapper>
        </>
      )}
    </>
  )
}
