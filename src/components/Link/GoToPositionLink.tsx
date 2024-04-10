import React from 'react'
import { LinkProps } from 'next/dist/client/link'
import LinkWithInjectedWalletSupport from 'components/Link/LinkWithInjectedWalletSupport'
import { ProcessedOpenPosition, Quote } from 'types/quote'
import { useMarket } from 'hooks/useMarkets'

const GoToPositionLink = ({
  position,
  ...props
}: Omit<React.PropsWithChildren<LinkProps>, 'href'> & {
  position: Quote | ProcessedOpenPosition | null | undefined
}) => {
  const market = useMarket(position?.marketId)
  const { symbol, asset } = market || {}
  return <LinkWithInjectedWalletSupport {...props} href={'/trade/' + symbol + asset} />
}

export default GoToPositionLink
