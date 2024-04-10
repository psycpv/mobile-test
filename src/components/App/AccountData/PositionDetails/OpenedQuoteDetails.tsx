import Image from 'next/image'

import { useTheme } from 'styled-components'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import useFetchFundingRate, { shouldPayFundingRate, useGetPaidAmount } from 'lib/hooks/useFundingRate'
import { ApiState } from 'types/api'
import { OrderType, PositionType } from 'types/trade'
import { Quote, QuoteStatus } from 'types/quote'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { formatTimestamp, getRemainingTime } from 'utils/time'
import { getTokenWithFallbackChainId } from 'utils/token'
import { formatAmount, formatPrice, toBN } from 'utils/numbers'
import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'
import { FundingRateData } from 'state/hedger/types'
import { useMarketData } from 'state/hedger/hooks'
import { useMarket } from 'hooks/useMarkets'
import useBidAskPrice from 'hooks/useBidAskPrice'
import {
  useCheckQuoteIsExpired,
  useLockedMargin,
  useQuoteLeverage,
  useQuoteSize,
  useQuoteUpnlAndPnl,
} from 'hooks/useQuotes'
import { useNotionalValue } from 'hooks/useTradePage'
import { Row as RowComponent, RowEnd } from 'components/Row'
import ClosePendingDetails from './ClosedSizeDetails/ClosePendingDetails'
import ClosedAmountDetails from './ClosedSizeDetails/ClosedAmountDetails'
import { Loader, LongArrow, PinkIcon, EditPencil, ShareIcon, ShortArrow } from 'components/Icons'
import BlinkingPrice from 'components/App/FavoriteBar/BlinkingPrice'
import { PositionRowActionButton } from 'components/Button'
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
  PositionPnl,
  QuoteData,
  QuoteDetailWrapper,
  QuoteMobileLeftLine,
  Row,
  TopWrap,
  TopWrapQuote,
  Value,
} from 'components/App/AccountData/PositionDetails/styles'
import PositionDetailsNavigator from './PositionDetailsNavigator'
import { ShareWrapper } from 'components/App/UserPanel/Common'
import { useClosePosition } from 'callbacks/useClosePosition'
import ShareModal from 'components/App/UserPanel/ShareModal'
import { toast } from 'react-toastify'
import { useCallback, useState } from 'react'
import React from 'react'

export default function OpenedQuoteDetails({
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
  const { id, positionType, marketId, openedPrice, quoteStatus, avgClosedPrice, createTimestamp } = quote
  const market = useMarket(marketId)
  const { symbol, name, asset, pricePrecision } = market || {}
  const { ask: askPrice, bid: bidPrice } = useBidAskPrice(market)
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)
  const marketData = useMarketData(name)
  const quoteSize = useQuoteSize(quote)
  const leverage = useQuoteLeverage(quote)
  const lockedAmount = useLockedMargin(quote)
  const notionalValue = useNotionalValue(quoteSize, marketData?.markPrice || 0)
  const closePositionValue = toBN(avgClosedPrice).times(quoteSize)
  const [upnl, pnl] = useQuoteUpnlAndPnl(quote, marketData?.markPrice || 0, undefined, undefined)
  const { expired } = useCheckQuoteIsExpired(quote)
  const [showShareModal, setShowShareModal] = useState(false)

  function getPnlData(value: string) {
    const valueBN = toBN(value)
    const valuePercent = valueBN.div(quoteSize).div(openedPrice).times(leverage).times(100).toFixed(2)
    if (valueBN.isGreaterThan(0)) return [`+ $${formatAmount(valueBN.toFixed(4))}`, valuePercent, theme.blue]
    else if (valueBN.isLessThan(0))
      return [`- $${toBN(formatAmount(Math.abs(valueBN.toNumber()))).toFixed(4)}`, valuePercent, theme.pink]
    return [`$${formatAmount(valueBN.toFixed(2))}`, valuePercent, theme.blue]
  }

  const [uPnl, upnlPercent, coloruPnl] = getPnlData(upnl)
  const [PNL, PNLPercent, colorPNL] = getPnlData(pnl)

  const tokenLogo = useCurrencyLogo(symbol)

  const { callback: closeCallback, error } = useClosePosition(quote, OrderType.MARKET, '', quoteSize)
  const handleManage = useCallback(
    async (event: React.MouseEvent<HTMLDivElement>) => {
      console.log({ error })
      event.stopPropagation()
      if (!closeCallback) {
        toast.error(error)
        return
      }
      try {
        await closeCallback()
      } catch (e) {
        console.error(e)
      }
    },
    [closeCallback, error]
  )

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
                {quoteStatus !== QuoteStatus.CLOSED && (
                  <RowComponent width="initial" justify="space-between" gap="10px">
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
                    {quoteStatus === QuoteStatus.OPENED && (
                      <PositionRowActionButton
                        expired={expired}
                        disabled={disableButton}
                        onClick={handleManage}
                        width="50px"
                        height={'28px'}
                      >
                        <PinkIcon width={21} height={19} color={theme.pink} />
                      </PositionRowActionButton>
                    )}
                    <ShareIcon
                      size={20}
                      onClick={() => {
                        setShowShareModal(true)
                      }}
                    />
                  </RowComponent>
                )}
              </PositionInfoBox>

              <PositionMobileRow width={'initial'} position={true}>
                <div>
                  <Label>Position Size</Label>
                  <Value>{`${formatAmount(quoteSize)}`}</Value>
                </div>
                {quoteStatus === QuoteStatus.CLOSED ? (
                  <div>
                    <Label>Total Position:</Label>
                    <Value>
                      {closePositionValue.isEqualTo(0) ? '-' : `${toBN(formatAmount(closePositionValue)).toFixed(2)}`}
                    </Value>
                  </div>
                ) : (
                  <div>
                    <Label>Total Position:</Label>
                    <Value>
                      {toBN(notionalValue).isEqualTo(0) ? '-' : `${toBN(formatAmount(notionalValue)).toFixed(2)}`}
                    </Value>
                  </div>
                )}
              </PositionMobileRow>
              <PositionMobileRow width={'initial'} position={true}>
                <div>
                  <Label>Open Price</Label>
                  <Value>{`${formatAmount(toBN(openedPrice).toFixed(2))}`}</Value>
                </div>

                {quoteStatus === QuoteStatus.CLOSED ? (
                  <div>
                    <Label>Close Price:</Label>
                    <Value>{`${toBN(formatAmount(avgClosedPrice)).toFixed(2)}`}</Value>
                  </div>
                ) : (
                  <>
                    {positionType === PositionType.LONG ? (
                      <div>
                        <Label>Market Price:</Label>

                        <Value>{`${toBN(formatAmount(bidPrice)).toFixed(2)}`}</Value>
                      </div>
                    ) : (
                      <div>
                        <Label>Market Price:</Label>
                        <Value>
                          {askPrice === '0' ? (
                            '-'
                          ) : (
                            <BlinkingPrice
                              data={toBN(askPrice).toFixed(2)}
                              textSize={mobileVersion ? '12px' : '14px'}
                            />
                          )}
                        </Value>
                      </div>
                    )}
                  </>
                )}
              </PositionMobileRow>
              <PositionMobileRow width={'initial'} position={true}>
                {quoteStatus === QuoteStatus.CLOSED ? (
                  <div>
                    <Label>Status / PNL</Label>
                    <PositionPnl color={colorPNL}>{`${PNL} (${Math.abs(Number(PNLPercent))}%)`}</PositionPnl>
                  </div>
                ) : (
                  <div>
                    <Label>Status / uPNL</Label>
                    <PositionPnl color={coloruPnl}>
                      {uPnl === '-' ? uPnl : `${uPnl} (${Math.abs(Number(upnlPercent))}%)`}
                    </PositionPnl>
                  </div>
                )}
                <div>
                  <Label>
                    TP/SL <EditPencil width={15} height={15} color={theme.coolGrey} />
                  </Label>

                  <Value>51,234.55/50,456.88</Value>
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
                    <div style={{ alignItems: 'center', display: 'flex', paddingLeft: '10px' }}>
                      {symbol}-{asset}
                    </div>
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

                  <ShareWrapper>
                    <ShareIcon
                      size={15}
                      onClick={() => {
                        setShowShareModal(true)
                      }}
                    />
                  </ShareWrapper>
                </RowComponent>
                <PositionDetailsNavigator />
              </PositionInfoBox>
            </FlexColumn>
          </TopWrap>
          <QuoteDetailWrapper positionType={positionType}>
            <ClosePendingDetails quote={quote} />
            <DataWrap style={{ paddingTop: '0px' }}>
              <Row>
                <Label>ID:</Label>
                <RowEnd>
                  <PositionPnl color={theme.almostWhite}>
                    {symbol}-{asset}
                    <span style={{ color: theme.coolGrey }}>-Q{id}</span>
                  </PositionPnl>
                </RowEnd>
              </Row>
              {quoteStatus === QuoteStatus.CLOSED ? (
                <>
                  <Row>
                    <Label>PNL:</Label>
                    <RowEnd>
                      <PositionPnl color={colorPNL}>{`${PNL} (${Math.abs(Number(PNLPercent))}%)`}</PositionPnl>
                    </RowEnd>
                  </Row>
                </>
              ) : (
                <Row>
                  <Label>uPNL:</Label>
                  <RowEnd>
                    <PositionPnl color={coloruPnl}>
                      {uPnl === '-' ? uPnl : `${uPnl} (${Math.abs(Number(upnlPercent))}%)`}
                    </PositionPnl>
                  </RowEnd>
                </Row>
              )}
              {quoteStatus !== QuoteStatus.CLOSED && (
                <Row>
                  <Label>Locked Amount:</Label>
                  <Value>{`${formatPrice(lockedAmount, 4)} ${collateralCurrency?.symbol}`}</Value>
                </Row>
              )}
              {quoteStatus === QuoteStatus.CLOSED ? (
                <Row>
                  <Label>Total Position:</Label>
                  <Value>
                    {closePositionValue.isEqualTo(0)
                      ? '-'
                      : `${formatPrice(closePositionValue, 4)} ${collateralCurrency?.symbol}`}
                  </Value>
                </Row>
              ) : (
                <Row>
                  <Label>Total Position:</Label>
                  <Value>
                    {toBN(notionalValue).isEqualTo(0)
                      ? '-'
                      : `${formatPrice(notionalValue, 4)} ${collateralCurrency?.symbol}`}
                  </Value>
                </Row>
              )}
              <Row>
                <Label>Size:</Label>
                <Value>{`${formatAmount(quoteSize)} ${symbol}`}</Value>
              </Row>

              <Row>
                <Label>Open Price</Label>
                <Value>{`${formatPrice(openedPrice, 4)} ${collateralCurrency?.symbol}`}</Value>
              </Row>

              {quoteStatus === QuoteStatus.CLOSED ? (
                <Row>
                  <Label>Closed Price:</Label>
                  <Value>{`${formatPrice(avgClosedPrice, 4)} ${collateralCurrency?.symbol}`}</Value>
                </Row>
              ) : (
                <>
                  {positionType === PositionType.LONG ? (
                    <Row>
                      <Label>Current Close Price:</Label>
                      <Value>{`${formatPrice(bidPrice, pricePrecision)} ${collateralCurrency?.symbol}`}</Value>
                    </Row>
                  ) : (
                    <Row>
                      <Label>Current Close Price:</Label>
                      <Value>{`${formatPrice(askPrice, pricePrecision)} ${collateralCurrency?.symbol}`}</Value>
                    </Row>
                  )}
                </>
              )}
            </DataWrap>
            <ClosedAmountDetails quote={quote} />
            <Bar />
            <ContentWrapper>
              <Row>
                <Label>Created Time:</Label>
                <Value>{formatTimestamp(createTimestamp * 1000)}</Value>
              </Row>
              <FundingRate
                notionalValue={notionalValue}
                name={name}
                quoteId={id}
                symbol={collateralCurrency?.symbol}
                positionType={positionType}
                quoteStatus={quoteStatus}
              />
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

function FundingRate({
  notionalValue,
  positionType,
  quoteId,
  name,
  symbol,
  quoteStatus,
}: {
  notionalValue: string
  positionType: PositionType
  quoteId: number
  quoteStatus: QuoteStatus
  name?: string
  symbol?: string
}) {
  const theme = useTheme()
  const fundingRates = useFetchFundingRate(quoteStatus !== QuoteStatus.CLOSED ? name : undefined)
  const fundingRate =
    name && fundingRates
      ? fundingRates
      : ({ next_funding_time: 0, next_funding_rate_long: '', next_funding_rate_short: '' } as FundingRateData)

  const { paidAmount, status } = useGetPaidAmount(quoteId)

  const { next_funding_rate_long, next_funding_rate_short, next_funding_time } = fundingRate
  const { diff, hours, minutes, seconds } = getRemainingTime(next_funding_time)
  const nextFunding = positionType === PositionType.LONG ? next_funding_rate_long : next_funding_rate_short
  const color = shouldPayFundingRate(positionType, next_funding_rate_long, next_funding_rate_short)
    ? theme.pink
    : theme.blue

  const paidAmountBN = toBN(paidAmount).div(1e18)

  return (
    <React.Fragment>
      {quoteStatus !== QuoteStatus.CLOSED && (
        <Row>
          <Label>
            Next Funding:(
            <span style={{ color }}>
              in
              {diff > 0 &&
                ` ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
                  .toString()
                  .padStart(2, '0')}`}
            </span>
            )
          </Label>
          <Value>
            <PositionPnl color={color}>
              {!toBN(nextFunding).isNaN() ? `${formatPrice(toBN(notionalValue).times(nextFunding).abs(), 4)} ` : '-'}
              {symbol}
            </PositionPnl>
          </Value>
        </Row>
      )}
      <Row>
        <Label>Paid Funding:</Label>
        <PositionPnl
          color={paidAmountBN.lt(0) ? theme.blue : paidAmountBN.isEqualTo(0) ? theme.almostWhite : theme.pink}
        >
          {status === ApiState.LOADING ? (
            <Loader />
          ) : (
            `${
              paidAmountBN.isGreaterThanOrEqualTo(1) || paidAmountBN.lt(0) ? formatPrice(paidAmountBN.abs(), 4) : '0'
            } ${symbol}`
          )}
        </PositionPnl>
      </Row>
    </React.Fragment>
  )
}
