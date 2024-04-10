import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

import { Market } from 'types/market'
import { formatAmount, toBN } from 'utils/numbers'

import { useMarketData } from 'state/hedger/hooks'

export const Price = styled.div<{
  positive: boolean
  visible?: boolean
  width?: string
  size?: string
  textAlign?: string
  breakWord?: boolean
}>`
  font-style: normal;
  font-weight: 500;
  font-size: ${({ size }) => (size ? size : '12px')};
  text-align: ${({ textAlign }) => textAlign ?? 'left'};

  @keyframes blink {
    25% {
      opacity: 0.6;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }

  color: ${({ theme, positive }) => (positive ? theme.blue : theme.pink)};
  animation: ${({ visible }) => (visible ? 'blink 0.5s linear 1' : 'none')};

  ${({ width }) =>
    width &&
    `
  width: ${width}px;
`};
  ${({ breakWord }) =>
    breakWord &&
    `
    break-word: break-all ;
`};
`

export default function BlinkingPrice({
  market,
  priceWidth,
  data,
  textSize,
  textAlign,
  breakWord,
}: {
  market?: Market
  priceWidth?: string
  data?: string
  textSize?: string
  textAlign?: string
  breakWord?: boolean
}) {
  const { name, pricePrecision } = market || {}
  const marketData = useMarketData(name)
  const mark = useMemo(
    () => (data ? data : marketData ? parseFloat(marketData.markPrice).toFixed(pricePrecision) : 0),
    [marketData, pricePrecision, data]
  )

  const [markPrice, setMarkPrice] = useState(mark)
  const [visible, setVisible] = useState(true)

  const [upOrDown] = useMemo(() => {
    setMarkPrice(mark)
    return [markPrice > mark]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mark])

  useEffect(() => {
    setVisible(false)
    const timer = setTimeout(() => {
      setVisible(true)
    }, 10)
    return () => clearTimeout(timer)
  }, [markPrice])

  return (
    <Price
      positive={!upOrDown}
      visible={visible}
      width={priceWidth}
      size={textSize}
      textAlign={textAlign}
      breakWord={breakWord}
    >
      ${formatAmount(toBN(mark).toString())}
    </Price>
  )
}
