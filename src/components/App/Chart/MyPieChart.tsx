import { FlexColumn } from 'components/Column'
import { AppPieChart } from 'components/AppPieChart'
import { Row } from 'components/Row'
import { TextWrapper, ThemedText } from 'components/Text'
import styled from 'styled-components'
import { SymbolDistribution } from 'types/chart'
import { Colors } from 'theme/styled'

const PieChartDataItemColor = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  background-color: ${({ color }) => color};
  border-radius: 100%;
`
const PieChartDataItem = ({ item }: { item: SymbolDistribution }) => {
  return (
    <Row gap={'8px'}>
      <PieChartDataItemColor color={item.fill} />
      <ThemedText.White>{item.name + ' '}</ThemedText.White>
      <TextWrapper color={item.fill as keyof Colors}>{item.percentOfTotal.toFixed(1)}%</TextWrapper>
    </Row>
  )
}
export const MyPieChart = ({ data, width, height }: { data: SymbolDistribution[]; width: number; height: string }) => {
  return (
    <Row>
      <FlexColumn flex={'unset'} height={'100%'} gap={'12px'}>
        {data.map((item) => {
          return <PieChartDataItem key={item.id} item={item} />
        })}
      </FlexColumn>
      <FlexColumn height={height} align={'center'}>
        <AppPieChart data={data} width={width * 0.55} height={width * 0.55} />
      </FlexColumn>
    </Row>
  )
}
