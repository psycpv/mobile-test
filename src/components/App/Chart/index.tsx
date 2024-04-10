import React from 'react'
import styled from 'styled-components'
import { useDetectAdBlock } from 'adblock-detect-react'

import { useActiveMarket } from 'state/trade/hooks'

import { Card } from 'components/Card'
import TVChart from 'components/App/Chart/TVChart'
import { RowCenter } from 'components/Row'
import { AdBlockerIcon } from 'components/Icons'

const Wrapper = styled(Card)`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0;
  position: relative;
  justify-content: center;
  background: ${({ theme }) => theme.color2};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    height: 400px;
  `};
`

const AdBlockText = styled(RowCenter)`
  width: 100%;
  font-size: 16px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.almostWhite};

  & span {
    font-size: 16px;
    margin: 0px 4px;
    color: ${({ theme }) => theme.warning};
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 14px;
  `};

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    font-size: 10px;
    & span {
      font-size: 10px;
    }
  `};
`

const LoadChartImage = styled.div`
  text-align: center;
  margin-top: 45px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    margin-top: 10px;
  `};
`

export default function Chart() {
  const adBlockDetected = useDetectAdBlock()
  const market = useActiveMarket()
  // TODO: add loader

  return (
    <Wrapper>
      {adBlockDetected ? (
        <>
          <LoadChartImage>
            <AdBlockerIcon />
          </LoadChartImage>
          <AdBlockText>Cannot load chart</AdBlockText>
          <AdBlockText>
            (The chart can not be loaded while your<span>ad blocker</span> is ON)
          </AdBlockText>
        </>
      ) : !market ? (
        <></>
      ) : (
        <TVChart symbol={`Binance:${market?.symbol}/${market?.asset}`} />
      )}
    </Wrapper>
  )
}
