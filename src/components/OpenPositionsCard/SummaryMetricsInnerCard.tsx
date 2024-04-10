import styled from 'styled-components'
import { Card, InnerCard } from 'components/Card'
import { FlexColumn } from 'components/Column'
import { FlexRow, Row } from 'components/Row'
import { LongArrow, ShortArrow } from 'components/Icons'
import { ThemedText } from 'components/Text'
import useUpnlValueAndColor from 'hooks/useUpnlValueAndColor'
import { formatDollarAmount } from 'utils/numbers'

interface SummaryMetricItemProps {
  title: string
  value: React.ReactNode
  titleIcon?: React.ReactNode
  percentage?: string | number
}

const SummaryMetricsInnerCardWrapper = styled(InnerCard)`
  border-radius: 4px;
`

const SummaryMetricsCardWrapper = styled(FlexRow)`
  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
  `}
`

export const SummaryMetricsInnerCard = ({
  orientation,
  positionsCount,
  longPositionsCount,
  positionsTotalValue,
  totalUpnl,
  totalUpnlPercent,
}: {
  orientation?: 'horizontal' | 'vertical'
  positionsCount: number
  longPositionsCount: number
  positionsTotalValue: number | undefined
  totalUpnl: number
  totalUpnlPercent: number
}) => {
  const [value] = useUpnlValueAndColor(String(totalUpnl), { toFixedDecimalPlaces: 2 })

  function renderPositionsCount() {
    return <SummaryMetricItem title={'#'} value={positionsCount} />
  }

  function renderLongAndShortPositionsCount() {
    return (
      <>
        <SummaryMetricItem
          title={'Long'}
          value={longPositionsCount}
          titleIcon={<LongArrow width={16} height={11} color={'#80BBF2'} />}
        />
        <SummaryMetricItem
          title={'Short'}
          value={positionsCount - longPositionsCount}
          titleIcon={<ShortArrow width={16} height={11} color={'#F0A7EB'} />}
        />
      </>
    )
  }

  function valueAndUpnlStatsRow() {
    return (
      <Row>
        <SummaryMetricItem
          title={'Positions Total Value'}
          value={formatDollarAmount(positionsTotalValue, { minimumDecimalPlaces: 2 })}
        />
        <SummaryMetricItem title={'Unrealized PNL'} value={value} percentage={totalUpnlPercent.toFixed(2)} />
      </Row>
    )
  }

  return (
    <>
      {orientation === 'horizontal' ? (
        <Card>
          <SummaryMetricsCardWrapper gap={'12px'}>
            <Row>
              {renderPositionsCount()}
              {renderLongAndShortPositionsCount()}
            </Row>
            {valueAndUpnlStatsRow()}
          </SummaryMetricsCardWrapper>
        </Card>
      ) : (
        <SummaryMetricsInnerCardWrapper>
          <FlexColumn gap={'12px'}>
            <Row>
              {renderPositionsCount()}
              <FlexRow>{renderLongAndShortPositionsCount()}</FlexRow>
            </Row>
            {valueAndUpnlStatsRow()}
          </FlexColumn>
        </SummaryMetricsInnerCardWrapper>
      )}
    </>
  )
}

const SummaryMetricItem = ({ title, value, titleIcon, percentage }: SummaryMetricItemProps) => {
  return (
    <FlexColumn gap={'6px'}>
      <Row>
        <ThemedText.EasternBlue fontWeight={400} marginRight={'4px'} fontSize={14}>
          {title}
        </ThemedText.EasternBlue>
        {titleIcon}
      </Row>
      <Row gap={'4px'}>
        <ThemedText.White fontSize={18} fontWeight={400}>
          {value}
        </ThemedText.White>
        {percentage ? (
          percentage > 0 ? (
            <ThemedText.Green fontSize={18} fontWeight={400}>
              {percentage}%
            </ThemedText.Green>
          ) : percentage < 0 ? (
            <ThemedText.Red fontSize={18} fontWeight={400}>
              {percentage}%
            </ThemedText.Red>
          ) : (
            <ThemedText.White fontSize={18} fontWeight={400}>
              0%
            </ThemedText.White>
          )
        ) : null}
      </Row>
    </FlexColumn>
  )
}
