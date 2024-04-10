import React, { useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'

import { getRemainingTime } from 'utils/time'
import { BN_ZERO, formatAmount, toBN } from 'utils/numbers'

import { useActiveMarket } from 'state/trade/hooks'
import { useFundingRateData } from 'state/hedger/hooks'

import { useIsMobile } from 'lib/hooks/useWindowSize'

import { MarketColumn, Name } from 'components/App/MarketBar'
import { ToolTipTop } from 'components/ToolTip'

const Value = styled.div<{
  color?: string
  size?: string
}>`
  color: ${({ theme, color }) => color ?? theme.almostWhite};
  ${({ size }) =>
    size &&
    `
  font-size: ${size};
`}

  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 13px;
  `};
`

export default function MarketFundingRate() {
  const activeMarket = useActiveMarket()
  const { name } = activeMarket || {}
  const fundingRate = useFundingRateData(name)

  const nextFundingRateLongBN = fundingRate ? toBN(fundingRate.next_funding_rate_long) : BN_ZERO
  const nextFundingRateShortBN = fundingRate ? toBN(fundingRate.next_funding_rate_short) : BN_ZERO
  const longColor = useColor(nextFundingRateLongBN.toString())
  const shortColor = useColor(nextFundingRateShortBN.toString())
  const theme = useTheme()
  const mobileVersion = useIsMobile()

  return (
    <>
      <MarketColumn>
        <>
          <a data-tip data-for={'fundingL'}>
            <Name underLine={true}>{mobileVersion ? 'Funding[L]' : 'Funding[LONG]'}</Name>
            <ToolTipTop
              id="fundingL"
              aria-haspopup="true"
              width={mobileVersion ? 200 : undefined}
              display="block"
              align="center"
              color={theme.color1}
              background={theme.almostWhite}
            >
              <div>Amount paid to traders with open longs when &quot;Next Funding&quot; reaches 0,</div>
              <div>relative to their position size. Negative value means you pay.</div>
            </ToolTipTop>
          </a>

          <Value size="12px" color={longColor}>
            {fundingRate ? `${formatAmount(nextFundingRateLongBN.times(100).toFixed(4))}%` : '-'}
          </Value>
        </>
      </MarketColumn>

      <MarketColumn>
        <>
          <a data-tip data-for={'fundingS'}>
            <Name underLine={true}>{mobileVersion ? 'Funding[S]' : 'Funding[SHORT]'}</Name>
            <ToolTipTop
              id="fundingS"
              aria-haspopup="true"
              width={mobileVersion ? 200 : undefined}
              display="block"
              align="center"
              color={theme.color1}
              background={theme.almostWhite}
            >
              <div>Amount paid to traders with open shorts when &quot;Next Funding&quot; reaches 0,</div>
              <div>relative to their position size. Negative value means you pay.</div>
            </ToolTipTop>
          </a>

          <Value size="12px" color={shortColor}>
            {fundingRate ? `${formatAmount(nextFundingRateShortBN.times(100).toFixed(4))}%` : '-'}
          </Value>
        </>
      </MarketColumn>
      <MarketColumn>
        <a data-tip data-for={'fundingN'}>
          <Name underLine={true}>Next Funding</Name>
          <ToolTipTop
            id="fundingN"
            aria-haspopup="true"
            width={200}
            display="block"
            align="center"
            color={theme.color1}
            background={theme.almostWhite}
          >
            <div> When timer reaches 0, funding is paid/charged to traders. </div>
            <div> Used to bring perp prices and spot prices together. </div>
          </ToolTipTop>
        </a>

        <NextFundingTimeValue name={name} />
      </MarketColumn>
    </>
  )
}

function NextFundingTimeValue({ name }: { name: string | undefined }) {
  const [time, setTime] = useState<number>(0)

  const fundingRate = useFundingRateData(name)
  const { diff, hours, minutes, seconds } = getRemainingTime(fundingRate?.next_funding_time || 0)
  const nextFundingRateLongBN = fundingRate ? toBN(fundingRate.next_funding_rate_long) : BN_ZERO

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <Value size={'12px'}>
      {fundingRate && !nextFundingRateLongBN.isNaN()
        ? `${
            diff > 0 &&
            ` ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
              .toString()
              .padStart(2, '0')}`
          }`
        : '-'}
    </Value>
  )
}

function useColor(value: string) {
  const theme = useTheme()
  const valueBN = toBN(value)

  if (valueBN.isEqualTo(0)) return theme.text0
  else if (valueBN.isGreaterThan(0)) return theme.blue
  else return theme.pink
}
