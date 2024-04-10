import React, { useState } from 'react'
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts'
import styled from 'styled-components'
import { formatAmount, formatPrice } from 'utils/numbers'

const renderInactiveShape = (props: any) => {
  return <Sector {...props} stroke={'#AFD5E4'} />
}

const borderChartRenderInactiveShape = (props: any) => {
  return <Sector {...props} stroke={'none'} />
}

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 1) * cos
  const sy = cy + (outerRadius + 1) * sin
  const mx = cx + (outerRadius + 10) * cos
  const my = cy + (outerRadius + 10) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? 'start' : 'end'

  return (
    <g>
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={'#ffffff'} fill="none" />
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        stroke={'#AFD5E4'}
      />
      <circle cx={ex} cy={ey} r={3} fill={'#ffffff'} stroke="none" />
      <circle cx={sx} cy={sy} r={3} fill={'#ffffff'} stroke="none" />
      <text x={ex} y={ey} dy={18} textAnchor={textAnchor} fill={'#fff'}>
        {`${(percent * 100).toFixed(1)}%`}
      </text>
      <text x={ex} y={ey + 20} dy={18} textAnchor={textAnchor} fill={fill}>
        ${formatAmount(formatPrice(value))}
      </text>
    </g>
  )
}

const AppPieChartWrapper = styled.div<{
  width?: number
  height?: number
}>`
  position: relative;
  width: ${({ width }) => (width ? `${width}px` : '300px')};
  height: ${({ height }) => (height ? `${height}px` : '300px')};
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    overflow: visible;
    transform: translateX(10%);
  }
`

const AppPieChartImage = styled.img<{
  left?: string
  top?: string
  width?: string
  height?: string
}>`
  position: absolute;
  width: ${({ width }) => (width ? `${width}` : '300px')};
  height: ${({ height }) => (height ? `${height}` : '300px')};
  background: white;
  border-radius: 100%;
  border: 4px solid #123378;
  transform: translateX(20%);
`

export const AppPieChart = ({
  data,
  width,
  height,
  left = '50%',
  top = '50%',
}: {
  data: any
  width: number
  height: number
  left?: string
  top?: string
}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const onPieEnter = (index: number) => {
    setActiveIndex(index)
  }

  const outerLineData = [{ id: 0, name: 'BTC-USDT', value: 500, fill: '#123378' }]

  if (!data) {
    return null
  }

  return (
    <AppPieChartWrapper width={width} height={height}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={width} height={height}>
          <Pie
            activeIndex={activeIndex}
            data={outerLineData}
            inactiveShape={borderChartRenderInactiveShape}
            activeShape={borderChartRenderInactiveShape}
            fill="#8884d8"
            dataKey="value"
            paddingAngle={0}
            cx={'50%'}
            cy={'50%'}
            outerRadius={'85%'}
            isAnimationActive={false}
          />
          <Pie
            cx={'50%'}
            cy={'50%'}
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            inactiveShape={renderInactiveShape}
            data={data}
            fill="#8884d8"
            dataKey="value"
            isAnimationActive={false}
            onMouseEnter={(_, index) => onPieEnter(index)}
          />
        </PieChart>
      </ResponsiveContainer>
      <AppPieChartImage
        src="/static/images/faces/face-pie-chart.svg"
        alt={''}
        left={left}
        top={top}
        width={width / 2 + 'px'}
        height={width / 2 + 'px'}
      />
    </AppPieChartWrapper>
  )
}
