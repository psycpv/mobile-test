import { useActiveMarket } from 'state/trade/hooks'
import useBidAskPrice from 'hooks/useBidAskPrice'

import { Name, Value } from '.'
import Column from 'components/Column'
import BlinkingPrice from '../FavoriteBar/BlinkingPrice'
import React from 'react'

export default function MarketDepths() {
  const activeMarket = useActiveMarket()
  const { spread, bid, ask } = useBidAskPrice(activeMarket)
  return (
    <React.Fragment>
      <Column gap="5px">
        <Name>Long</Name>
        <BlinkingPrice data={ask} textSize="13px" />
      </Column>
      <Column gap="5px">
        <Name>Short</Name>
        <BlinkingPrice data={bid} textSize="13px" />
      </Column>
      <Column gap="5px">
        <Name>Spread(bps)</Name>
        <Value>{spread}</Value>
      </Column>
    </React.Fragment>
  )
}
