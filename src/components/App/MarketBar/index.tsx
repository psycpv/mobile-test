import React, { useMemo, useState } from 'react'
import styled, { useTheme } from 'styled-components'

import { ApiState } from 'types/api'
import { formatAmount, formatDollarAmount, toBN } from 'utils/numbers'
import { useActiveMarket } from 'state/trade/hooks'
import { useMarketNotionalCap, useMarketsInfo } from 'state/hedger/hooks'

import { Loader, ChevronDown } from 'components/Icons'
import MarketInfo from 'components/App/MarketBar/MarketInfo'
import Column from 'components/Column'
import { Row, RowBetween, RowEnd } from 'components/Row'
import MarketFundingRate from './MarketFundingRate'
import MarketDepths from './MarketDepths'
import { useIsMobile } from 'lib/hooks/useWindowSize'
import BlinkingPrice from 'components/App/FavoriteBar/BlinkingPrice'
import { ToolTipTop } from 'components/ToolTip'

import ALL_CATEGORIES from 'constants/files/categories.json'
import { useGlobalCoinStats } from 'state/user/hooks'
import GlobalCoinStatsModal from 'components/ReviewModal/GlobalCoinStatsModal'

const all_categories: {
  [symbol: string]: string[]
} = ALL_CATEGORIES

const Wrapper = styled(Row)`
  height: fit-content;
  padding: 8px 12px;
  border-radius: 4px;
  background: ${({ theme }) => theme.color2};
  flex-direction: column;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: column;   
    min-height: unset;
    gap:10px; 
  `};
`
const Chevron = styled(ChevronDown)<{ open: boolean }>`
  transform: rotate(${({ open }) => (open ? '0deg' : '270deg')});
  color: ${({ theme }) => theme.red};
  cursor: pointer;
`
const ChevronWrapper = styled(Row)<{ height: string }>`
  cursor: pointer;
  height: ${({ height }) => height && `${height}`};
`
const DataWrap = styled(Row)`
  height: 100%;
  flex: 1;
  background: ${({ theme }) => theme.color2};

  & > * {
    width: 25%;
    ${({ theme }) => theme.mobileFirstMediaWidth.fromMedium`
      width: 87%;
      &:first-child {
        width: 17%;
        min-width: 186px;
      }
    `};
  }
`

const HedgerInfos = styled(RowBetween)`
  gap: 10px;
  & > * {
    ${({ theme }) => theme.mobileFirstMediaWidth.fromMedium`
      flex: 1;
      &:nth-last-child(1) {
        width: 25px;
        flex: none;
      }
    `};

    ${({ theme }) => theme.mediaWidth.upToMedium`
      width: 10%;
      &:first-child {
        width: 90%;
      }
    `}
  }
`

const Separator = styled(Row)<{ height?: string; isSecondRowVisible?: boolean }>`
  width: 2px;
  height: 40px;
  margin-right: 20px;
  margin-bottom: ${({ height, isSecondRowVisible }) =>
    isSecondRowVisible && height ? `${height}` : isSecondRowVisible ? '-10px' : '0'};
  background: ${({ theme }) => theme.color4};
`

const LastPriceBox = styled(Column)`
  position: relative;
  cursor: pointer;
  &:hover {
    & > * {
      &:nth-child(1) {
        text-decoration: underline;
      }
    }
  }
`

export const Name = styled.div<{
  textAlign?: string
  padding?: string
  color?: string
  fontSize?: string
  underLine?: boolean
}>`
  font-weight: 400;
  font-size: ${({ fontSize }) => fontSize ?? '12px'};
  color: ${({ theme, color }) => color ?? theme.coolGrey};
  padding: ${({ padding }) => padding && `${padding}`};
  display: inline-block;
  ${({ underLine }) =>
    underLine &&
    `    border-bottom: 1px solid; /* Adjust the thickness as needed */
   `}
`

export const Value = styled.div<{ textAlign?: string; color?: string; fontSize?: string }>`
  font-weight: 500;
  font-size: ${({ fontSize }) => fontSize ?? '12px'};
  color: ${({ theme, color }) => color ?? theme.almostWhite};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size:13px;
  `};
`

export const ColoredText = styled(Value)<{ isPositive: boolean }>`
  color: ${({ theme, isPositive }) => (isPositive ? theme.blue : theme.pink)};
`
export const MarketColumn = styled(Column)`
  gap: 5px;
`
export default function MarketBar() {
  const { marketNotionalCap, marketNotionalCapStatus } = useMarketNotionalCap()
  const activeMarket = useActiveMarket()
  const theme = useTheme()
  const [notionalCapUsed, totalCap] = useMemo(() => {
    return activeMarket?.name === marketNotionalCap.name && marketNotionalCapStatus !== ApiState.ERROR
      ? [marketNotionalCap?.used, marketNotionalCap?.totalCap]
      : [-1, -1]
  }, [activeMarket?.name, marketNotionalCapStatus, marketNotionalCap])

  const [isSecondDataWrapVisible, setIsSecondDataWrapVisible] = useState(false)
  const toggleSecondDataWrap = () => {
    setIsSecondDataWrapVisible((prevValue) => !prevValue)
  }
  const mobileVersion = useIsMobile()
  const [showMarketData, setShowMarketData] = useState(false)

  return (
    <>
      {mobileVersion ? (
        <Wrapper>
          <Row>
            <MarketInfo />
            <RowEnd width={'unset'} minWidth={'20px'}>
              <ChevronWrapper height="25px" justify="center" onClick={toggleSecondDataWrap}>
                <Chevron open={isSecondDataWrapVisible} />
              </ChevronWrapper>
            </RowEnd>
          </Row>

          {isSecondDataWrapVisible && (
            <>
              <DataWrap>
                <MarketDepths />
                <MarketColumn>
                  <Name>
                    <a data-tip data-for={'open interest'}>
                      <Name underLine={true}>Open Interest</Name>
                      <ToolTipTop
                        id="open interest"
                        aria-haspopup="true"
                        width={mobileVersion ? 200 : undefined}
                        display="block"
                        align="center"
                        color={theme.color1}
                        background={theme.almostWhite}
                      >
                        <div>Current open position of all</div>
                        <div>users on this token pair</div>
                      </ToolTipTop>
                    </a>
                  </Name>
                  <Value>
                    {notionalCapUsed === -1 ? (
                      <Loader size={'12px'} stroke="#EBEBEC" />
                    ) : (
                      formatDollarAmount(notionalCapUsed)
                    )}
                  </Value>
                </MarketColumn>
              </DataWrap>
              <DataWrap>
                <MarketFundingRate />
                <MarketColumn>
                  <Name>{activeMarket?.symbol} Liquidity</Name>
                  <Value>
                    {totalCap === -1 ? <Loader size={'12px'} stroke="#EBEBEC" /> : formatDollarAmount(totalCap)}
                  </Value>
                </MarketColumn>
              </DataWrap>
            </>
          )}
        </Wrapper>
      ) : (
        <Wrapper>
          <DataWrap>
            <MarketInfo />
            <Separator isSecondRowVisible={isSecondDataWrapVisible} />
            <HedgerInfos>
              <Row gap="5px">
                <Name>Last Price: </Name>
                <LastPriceBox
                  onClick={() => {
                    setShowMarketData((prev) => !prev)
                  }}
                >
                  {activeMarket ? (
                    <BlinkingPrice market={activeMarket} textSize={'16px'} breakWord={true} />
                  ) : (
                    <Loader size={'12px'} stroke="#EBEBEC" />
                  )}
                  {showMarketData && <GlobalCoinStatsModal toggleModal={setShowMarketData} />}
                </LastPriceBox>
              </Row>

              <MarketColumn>
                <Name>
                  <a data-tip data-for={'open interest'}>
                    <Name underLine={true}>{activeMarket?.symbol} Open Interest </Name>
                    <ToolTipTop
                      id="open interest"
                      aria-haspopup="true"
                      display="block"
                      width={mobileVersion ? 200 : undefined}
                      align="center"
                      color={theme.color1}
                      background={theme.almostWhite}
                    >
                      <div>Current open position of all</div>
                      <div>users on this token pair</div>
                    </ToolTipTop>
                  </a>
                </Name>

                <Value>
                  {notionalCapUsed === -1 ? (
                    <Loader size={'12px'} stroke="#EBEBEC" />
                  ) : (
                    formatDollarAmount(notionalCapUsed)
                  )}
                </Value>
              </MarketColumn>
              <MarketColumn>
                <Name>{activeMarket?.symbol} Available Liquidity</Name>
                <Value>
                  {totalCap === -1 ? <Loader size={'12px'} stroke="#EBEBEC" /> : formatDollarAmount(totalCap)}
                </Value>
              </MarketColumn>
              <MarketFundingRate />
              <ChevronWrapper gap="5px" height="25px" justify="center" onClick={toggleSecondDataWrap}>
                <Chevron open={isSecondDataWrapVisible} />
              </ChevronWrapper>
            </HedgerInfos>
          </DataWrap>
          {isSecondDataWrapVisible && (
            <DataWrap>
              <Row gap="5px">
                <Column>
                  <Name color={theme.almostWhite} fontSize="16px" padding="0 0 0 5px">
                    Category:
                  </Name>
                </Column>
                <Column>
                  <Value color={theme.blue} fontSize="16px">
                    {activeMarket && all_categories[activeMarket.symbol] ? all_categories[activeMarket.symbol][0] : ''}
                  </Value>
                </Column>
              </Row>
              <Separator height="10px" isSecondRowVisible={isSecondDataWrapVisible} />

              <HedgerInfos>
                <MarketData />
                <MarketDepths />
                <MarketColumn />
              </HedgerInfos>
            </DataWrap>
          )}
        </Wrapper>
      )}
    </>
  )
}

function MarketData() {
  const activeMarket = useActiveMarket()
  const { marketsInfo } = useMarketsInfo()
  const globalCoinStats = useGlobalCoinStats()

  const { priceChangePercent, tradeVolume } = marketsInfo[activeMarket?.name || ''] || {}
  return (
    <React.Fragment>
      <MarketColumn>
        <Name>Market Cap</Name>
        <Value>
          {globalCoinStats && globalCoinStats['market_cap']
            ? `$${formatAmount(globalCoinStats['market_cap'], 6, true)}`
            : '-'}
        </Value>
      </MarketColumn>
      <MarketColumn>
        <Name>24 Hour Change</Name>
        <Value>
          <ColoredText isPositive={toBN(priceChangePercent).isGreaterThan(0)}>
            {`${toBN(priceChangePercent).isGreaterThan(0) ? '+' : ''}${
              priceChangePercent ? priceChangePercent + '%' : '-'
            }`}
          </ColoredText>
        </Value>
      </MarketColumn>
      <MarketColumn>
        <Name>24 Hour Volume</Name>
        <Value>{formatDollarAmount(tradeVolume)}</Value>
      </MarketColumn>
    </React.Fragment>
  )
}
