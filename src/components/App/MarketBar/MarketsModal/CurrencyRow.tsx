import { useRouter } from 'next/router'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect'
import { useEffect } from 'react'

import { toBN } from 'utils/numbers'

import { usePrices } from 'state/hedger/hooks'
import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'

import BlinkingPrice from 'components/App/FavoriteBar/BlinkingPrice'
import Column from 'components/Column'
import { Loader } from 'components/Icons'
import { Row, RowBetween } from 'components/Row'

const TableStructure = styled(RowBetween)`
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
`

const RowWrap = styled(TableStructure)<{ active?: boolean }>`
  color: ${({ theme }) => theme.almostWhite};
  background: ${({ theme, active }) => (active ? theme.color4 : theme.color3)};
  padding: 6px;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color4};
  }

  & > * {
    &:nth-child(1) {
      height: 100%;
    }
  }

  & > * {
    width: 40%;

    &:nth-child(1) {
      width: 65%;
    }
  }
`

const Symbol = styled.div`
  font-size: 1rem;
  color: white;
`

const MarketName = styled.div`
  line-height: 1;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.coolGrey};
`

const ImageWrapper = styled.div`
  min-width: 32px;
  min-height: 32px;
`

const LoaderWrapper = styled.div`
  padding-left: 40px;
`

export default function CurrencyRow({
  market,
  onDismiss,
  sIndex,
  index,
  automaticScroll,
}: {
  market: any
  onDismiss: any
  sIndex: number
  index: number
  automaticScroll: () => void
}) {
  const { symbol, marketName, name, asset } = market
  const router = useRouter()
  const icon = useCurrencyLogo(symbol)

  function handleClick() {
    router.push(`/trade/${name}`)
    onDismiss()
  }

  useEffect(() => {
    if (sIndex === index) {
      automaticScroll()
    }
  }, [index, automaticScroll, sIndex])

  return (
    <RowWrap onClick={handleClick} active={sIndex === index} className={sIndex === index ? 'active' : ''}>
      <Row gap={'8px'}>
        <ImageWrapper>
          <img src={icon} alt={symbol} width={32} height={32} />
        </ImageWrapper>
        <Column>
          <Symbol>
            {symbol}/{asset}
          </Symbol>
          <MarketName>{marketName[0]}</MarketName>
        </Column>
      </Row>
      <CurrencyPrice market={market} />
    </RowWrap>
  )
}

function CurrencyPrice({ market }: { market: any }) {
  const prices = usePrices()
  const price = prices[market.name]?.markPrice

  return price ? (
    <BlinkingPrice market={market} data={toBN(price).toString()} textSize={isMobile ? '12px' : '16px'} />
  ) : (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  )
}
