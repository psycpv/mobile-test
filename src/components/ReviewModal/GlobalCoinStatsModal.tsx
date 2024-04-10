import styled from 'styled-components'
import { Z_INDEX } from 'theme'

import { Card } from 'components/Card'
import { useActiveMarket } from 'state/trade/hooks'
import { useGlobalCoinStats } from 'state/user/hooks'
import { addCurrencyPrefix, formatAmount, formatPrice } from 'utils/numbers'
import { Row } from 'components/Row'
import useOnOutsideClick from 'lib/hooks/useOnOutsideClick'
import { useRef } from 'react'
import Image from 'next/image'
import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'

const InlineModal = styled(Card)<{ isOpen: boolean; height?: string; top?: string; left?: string }>`
  position: absolute;
  top: ${({ top }) => top ?? '30px'};
  left: ${({ left }) => left ?? '30px'};
  padding: 10px;
  font-size: 16px;
  z-index: ${Z_INDEX.modal};

  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  border-radius: 6px;
  width: 260px;
  max-height: 400px;
  overflow-y: scroll;
  color: ${({ theme }) => theme.coolGrey};
  background: ${({ theme }) => theme.color2};
  border: solid 1px ${({ theme }) => theme.coolGrey};
  gap: 4px;
`

const Value = styled.div`
  color: ${({ theme }) => theme.blue};
  font-size: 13px;
`

const CoinValue = styled(Row)`
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: ${({ theme }) => theme.almostWhite};
`

const Label = styled.div`
  color: ${({ theme }) => theme.almostWhite};
  font-size: 13px;
`

const Title = styled.div`
  color: ${({ theme }) => theme.almostWhite};
  font-size: 18px;
`

const ImageWrapper = styled(Row)`
  align-items: center;
`

export default function GlobalCoinStatsModal({
  left,
  top,
  toggleModal,
}: {
  left?: string
  top?: string
  toggleModal?: (value: boolean) => void
}) {
  const favoritesRef = useRef(null)
  const globalCoinStats = useGlobalCoinStats()
  const market = useActiveMarket()
  const logo = useCurrencyLogo(market?.symbol)
  useOnOutsideClick(favoritesRef, () => toggleModal && toggleModal(false), 'mousedown', true)

  const data = [
    {
      label: 'Mcap Rank:',
      value:
        globalCoinStats && globalCoinStats['market_cap_rank']
          ? formatAmount(globalCoinStats['market_cap_rank'], 6, true)
          : '-',
    },
    {
      label: 'Market Cap:',
      value:
        globalCoinStats && globalCoinStats['market_cap']
          ? `${addCurrencyPrefix(formatAmount(globalCoinStats['market_cap'], 6, true))}`
          : '-',
    },
    {
      label: 'FDV:',
      value:
        globalCoinStats && globalCoinStats['fully_diluted_valuation']
          ? `$${formatAmount(globalCoinStats['fully_diluted_valuation'], 6, true)}`
          : '-',
    },
    {
      label: 'Global Volume:',
      value:
        globalCoinStats && globalCoinStats['total_volume']
          ? `${addCurrencyPrefix(formatAmount(globalCoinStats['total_volume'], 6, true))}`
          : '-',
    },
    {
      label: '24hr High:',
      value:
        globalCoinStats && globalCoinStats['high_24h']
          ? `${addCurrencyPrefix(formatAmount(globalCoinStats['high_24h'], 6, true))}`
          : '-',
    },
    {
      label: '24hr Low:',
      value:
        globalCoinStats && globalCoinStats['low_24h']
          ? `${addCurrencyPrefix(formatAmount(globalCoinStats['low_24h'], 6, true))}`
          : '-',
    },
    {
      label: '24hr Mcap Change:',
      value:
        globalCoinStats && globalCoinStats['market_cap_change_24h']
          ? `${addCurrencyPrefix(formatAmount(globalCoinStats['market_cap_change_24h'], 6, true))}`
          : '-',
    },
    {
      label: '24hr Mcap Change %:',
      value:
        globalCoinStats && globalCoinStats['market_cap_change_percentage_24h']
          ? `${formatAmount(globalCoinStats['market_cap_change_percentage_24h'], 6, true)}%`
          : '-',
    },
    {
      label: 'Circ Supply:',
      value:
        globalCoinStats && globalCoinStats['circulating_supply']
          ? formatAmount(globalCoinStats['circulating_supply'], 6, true)
          : '-',
    },
    {
      label: 'Max Supply:',
      value:
        globalCoinStats && globalCoinStats['max_supply'] ? formatAmount(globalCoinStats['max_supply'], 6, true) : '-',
    },
    {
      label: 'ATH:',
      value:
        globalCoinStats && globalCoinStats['ath']
          ? `${addCurrencyPrefix(formatAmount(formatPrice(globalCoinStats['ath']), 6, true))}`
          : '-',
    },
  ]

  return (
    <InlineModal isOpen={true} top={top} left={left} ref={favoritesRef}>
      <Title>Global Coin Stats</Title>

      <Row gap="4px">
        <Label>Coin:</Label>
        <CoinValue>
          {market?.symbol}{' '}
          <ImageWrapper>
            <Image src={logo} alt={'logo'} width={16} height={16} />
          </ImageWrapper>
        </CoinValue>
      </Row>
      {data.map((item) => (
        <Row gap="4px" key={item.label}>
          <Label>{item.label}</Label>
          <Value>{item.value}</Value>
        </Row>
      ))}
    </InlineModal>
  )
}
