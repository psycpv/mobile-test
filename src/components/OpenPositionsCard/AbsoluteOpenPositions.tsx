import { FlexColumn } from 'components/Column'
import { FlexRow, Row, WrapRow } from 'components/Row'
import { TextWrapper, ThemedText } from 'components/Text'
import { LongArrow, ShortArrow } from 'components/Icons'
import { ThemedButton } from 'components/Button'
import ArrowRight from 'components/Icons/ArrowRight'
import { Quote } from 'types/quote'
import { useMarket } from 'hooks/useMarkets'
import { useMarketData } from 'state/hedger/hooks'
import { useQuoteLeverage, useQuoteSize, useQuoteUpnlAndPnl } from 'hooks/useQuotes'
import { useMemo } from 'react'
import { toBN } from 'utils/numbers'
import useUpnlValueAndColor from 'hooks/useUpnlValueAndColor'
import { useTheme } from 'styled-components'
import { PositionType } from 'types/trade'
import { Colors } from 'theme/styled'
import GoToPositionLink from 'components/Link/GoToPositionLink'

interface AbsoluteOpenPositionItemProps {
  title: string
  quote: Quote
  action: React.ReactNode
}

const AbsoluteOpenPositionItem = ({ title, quote, action }: AbsoluteOpenPositionItemProps) => {
  const theme = useTheme()
  const { positionType } = quote
  const market = useMarket(quote.marketId)
  const { name, symbol, asset, pricePrecision } = market || {}
  const marketData = useMarketData(name)
  const leverage = useQuoteLeverage(quote)
  const quoteAvailableAmount = useQuoteSize(quote)

  const [upnl] = useQuoteUpnlAndPnl(quote, marketData?.markPrice ?? '0', undefined, undefined)

  const [value, color] = useUpnlValueAndColor(upnl, {
    positiveColor: theme.green,
    negativeColor: theme.red,
    toFixedDecimalPlaces: 2,
  })
  const upnlPercent = useMemo(() => {
    return toBN(upnl).div(quoteAvailableAmount).div(quote.openedPrice).times(leverage).times(100).toFixed(2)
  }, [leverage, upnl, quote.openedPrice, quoteAvailableAmount])

  return (
    <FlexColumn gap={'4px'} minWidth="100%">
      <FlexRow justify={'space-between'}>
        <ThemedText.EasternBlue flex={1} fontWeight={400} fontSize={14}>
          {title}
        </ThemedText.EasternBlue>
        <FlexRow justify={'right'}>
          <ThemedText.White marginRight={'4px'} fontWeight={400} fontSize={16}>
            {value}
          </ThemedText.White>
          <TextWrapper color={(color ?? theme.white) as keyof Colors} fontWeight={400} fontSize={16}>
            {upnlPercent}%
          </TextWrapper>
        </FlexRow>
      </FlexRow>
      <FlexRow justify={'space-between'}>
        <Row>
          <ThemedText.White marginRight={'8px'} fontWeight={400} fontSize={16}>
            {symbol} / {asset}
          </ThemedText.White>
          {positionType === PositionType.SHORT ? (
            <ShortArrow width={16} height={11} color={theme.pink} />
          ) : (
            <LongArrow width={16} height={11} color={theme.blue7} />
          )}
        </Row>
        <Row justify={'right'}>{action}</Row>
      </FlexRow>
    </FlexColumn>
  )
}

export const AbsoluteOpenPositions = ({
  minUpnlQuote,
  maxUpnlQuote,
}: {
  minUpnlQuote: Quote | null
  maxUpnlQuote: Quote | null
}) => {
  const theme = useTheme()

  return (
    <WrapRow gap="16px">
      {maxUpnlQuote && (
        <AbsoluteOpenPositionItem
          title={'Largest Unrealized Profit'}
          quote={maxUpnlQuote}
          action={
            <GoToPositionLink position={maxUpnlQuote}>
              <ThemedButton.TextWithHoverIcon color={theme.pink} fontSize={'18px'}>
                Go to Position <ArrowRight width={17} height={17} marginLeft={'4px'} color={theme.pink} />
              </ThemedButton.TextWithHoverIcon>
            </GoToPositionLink>
          }
        />
      )}

      {minUpnlQuote && (
        <AbsoluteOpenPositionItem
          title={'Largest Unrealized Loss'}
          quote={minUpnlQuote}
          action={
            <GoToPositionLink position={minUpnlQuote}>
              <ThemedButton.TextWithHoverIcon color={theme.pink} fontSize={'18px'}>
                Go to Position <ArrowRight width={17} height={17} marginLeft={'4px'} color={theme.pink} />
              </ThemedButton.TextWithHoverIcon>
            </GoToPositionLink>
          }
        />
      )}
    </WrapRow>
  )
}
