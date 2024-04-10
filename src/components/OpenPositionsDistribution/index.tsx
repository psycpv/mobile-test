import { Card } from 'components/Card'
import { ThemedText } from 'components/Text'
import { Row } from 'components/Row'
import { AutoColumn, FlexColumn } from 'components/Column'
import { AppPieChart } from 'components/AppPieChart'
import styled from 'styled-components'
import { useElementSize } from 'usehooks-ts'
import useOpenPositionsInsights from 'hooks/useOpenPositionsInsights'
import useSymbolDistributionInData from 'hooks/useSymbolDistributionInData'

const OpenPositionColor = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  background-color: ${({ color }) => color};
  border-radius: 100%;
`

const OpenPositionItem = ({ title, color }: { title: string; color: string }) => {
  return (
    <Row gap={'8px'}>
      <OpenPositionColor color={color} />
      <ThemedText.White>{title}</ThemedText.White>
    </Row>
  )
}

export const OpenPositionsDistribution = () => {
  const { processedOpenPositions, positionsTotalValue } = useOpenPositionsInsights()
  const data = useSymbolDistributionInData({
    data: processedOpenPositions,
    totalValue: positionsTotalValue,
    dataKey: 'positionValue',
  })
  const [chartWrapperRef, { width, height }] = useElementSize()

  return (
    <Card height="100%">
      <AutoColumn gap="28px">
        <ThemedText.P2>Open Positions Distribution</ThemedText.P2>
        <Row ref={chartWrapperRef}>
          <FlexColumn flex={'unset'} height={'100%'} gap={'12px'}>
            {data.map((item) => {
              return <OpenPositionItem key={item.id} title={item.name} color={item.fill} />
            })}
          </FlexColumn>
          <FlexColumn height="auto" align={'center'}>
            <AppPieChart data={data} width={width * 0.55} height={width * 0.55} />
          </FlexColumn>
        </Row>
      </AutoColumn>
    </Card>
  )
}
