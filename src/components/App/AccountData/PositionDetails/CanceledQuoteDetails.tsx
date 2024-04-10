import React from 'react'
import { useTheme } from 'styled-components'
import Image from 'next/image'
import { Quote } from 'types/quote'
import { PositionType } from 'types/trade'
import { formatTimestamp } from 'utils/time'
import { formatAmount, formatPrice, toBN } from 'utils/numbers'
import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'
import { useMarket } from 'hooks/useMarkets'
import { useLockedMargin, useQuoteLeverage, useQuoteSize } from 'hooks/useQuotes'
import { LongArrow, ShortArrow } from 'components/Icons'
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

export default function CanceledQuoteDetails({
  quote,
  mobileVersion = false,
  buttonText,
}: {
  quote: Quote
  mobileVersion: boolean
  buttonText?: string
}): JSX.Element {
  const theme = useTheme()
  const { id, quantity, positionType, marketId, requestedOpenPrice, orderType, statusModifyTimestamp } = quote
  const { symbol, asset } = useMarket(marketId) || {}
  const quoteSize = useQuoteSize(quote)
  const leverage = useQuoteLeverage(quote)
  const lockedAmount = useLockedMargin(quote)
  const notionalValue = toBN(quoteSize).times(requestedOpenPrice)
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
                  <Label>Size</Label>
                  <Value>{`${formatAmount(quantity)} ${symbol}`}</Value>
                </div>
                <div>
                  <Label>Order Type:</Label>
                  <Value>{orderType}</Value>
                </div>
              </PositionMobileRow>

              <PositionMobileRow width={'initial'}>
                <div>
                  <Label>Canceled</Label>
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
            <DataWrap style={{ paddingTop: '0px' }}>
              <Row>
                <Label>ID:</Label>
                <Value color={theme.almostWhite}>
                  {symbol}-{asset}
                  <span style={{ color: theme.coolGrey }}>-Q{id}</span>
                </Value>
              </Row>
              <Row>
                <Label>Locked Amount:</Label>
                <Value>
                  {`${formatPrice(lockedAmount, 4)}`} {asset}
                </Value>
              </Row>
              <Row>
                <Label>Total Position:</Label>
                <Value>{toBN(notionalValue).isEqualTo(0) ? '-' : `${formatPrice(notionalValue, 4)} ${asset}`}</Value>
              </Row>
              <Row>
                <Label>Size:</Label>
                <Value>{`${formatAmount(quantity)} ${symbol}`}</Value>
              </Row>
              <Row>
                <Label>Order Price:</Label>
                <Value>{`${formatPrice(requestedOpenPrice, 4)} ${asset}`}</Value>
              </Row>
            </DataWrap>
            <Bar />
            <ContentWrapper>
              <Row>
                <Label>Created Time:</Label>
                <Value>{formatTimestamp(quote.createTimestamp * 1000)}</Value>
              </Row>
              <Row>
                <Label>Cancel Time:</Label>
                <Value>{formatTimestamp(statusModifyTimestamp * 1000)}</Value>
              </Row>
              <Row>
                <Label>Order Type:</Label>
                <Value>{orderType}</Value>
              </Row>
              <Row>
                <Label>Platform Fee:</Label>
                <Value>-</Value>
              </Row>
            </ContentWrapper>
          </QuoteDetailWrapper>
        </>
      )}
    </>
  )
}
