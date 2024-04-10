import React, { ReactElement, useMemo } from 'react'
import { Bar, BarChart, CartesianGrid, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts'
import { useTheme } from 'styled-components'
import { formatCurrencyIntl } from 'utils/currency'

const RoundedChart = (props: any) => {
  const { x, y, width, height, value } = props
  const theme = useTheme()
  const color = value > 0 ? theme.blue7 : theme.pink

  return (
    <g>
      <rect x={x} y={height > 0 ? y : y + height} width={width} height={Math.abs(height)} fill={color} rx={5} />
    </g>
  )
}

const CustomizedTick = (props: any) => {
  const { x, y, payload } = props
  return (
    <g transform={`translate(${x - 18},${y}) rotate(-45 0 0)`}>
      <text x={0} y={0} dy={16} textAnchor="middle" fill="#757575" fontSize={'12px'}>
        {payload.value.split('/').slice(0, 2).join('/')}
      </text>
    </g>
  )
}

export const MyBarChart = ({
  data,
  width,
  height,
  leftDataKey = 'pnl',
  rightDataKey,
  tooltipContent,
}: {
  data: any[] | null
  width: number
  height: number
  leftDataKey?: string
  rightDataKey?: string
  tooltipContent: ReactElement
}) => {
  const processedData: any[] = useMemo(
    () =>
      data
        ? data.map((d) => ({
            ...d,
            dateStr: `${d.date.getDate()}/${d.date.getMonth() + 1}`,
            dateStrWithYear: `${d.date.getDate()}/${d.date.getMonth() + 1}/${d.date.getFullYear()}`,
          }))
        : [],
    [data]
  )

  return (
    <BarChart
      width={width}
      height={height}
      data={processedData ?? []}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="5 4" color="#757575" vertical={false} />
      <XAxis
        padding={{ left: 10, right: 10 }}
        fontSize={'12px'}
        color={'#18A0FB'}
        tickMargin={12}
        tickSize={0}
        axisLine={false}
        tick={<CustomizedTick />}
        dataKey="dateStrWithYear"
      />
      <YAxis
        yAxisId="left"
        width={40}
        type="number"
        domain={([dataMin, dataMax]) => {
          const absMax = Math.max(Math.abs(dataMin), Math.abs(dataMax))
          return [-absMax * 1.1, absMax * 1.1]
        }}
        orientation={'left'}
        tickMargin={8}
        tickSize={0}
        axisLine={false}
        fontSize={'12px'}
        color={'#18A0FB'}
        tickFormatter={(value: any) => {
          return `${formatCurrencyIntl(value.toFixed(2))}`
        }}
      />
      {rightDataKey && (
        <YAxis
          yAxisId="right"
          orientation="right"
          width={20}
          type="number"
          domain={([dataMin, dataMax]) => {
            const absMax = Math.max(Math.abs(dataMin), Math.abs(dataMax))
            return [-absMax - 20, absMax + 20]
          }}
          tickMargin={14}
          tickSize={0}
          axisLine={false}
          fontSize={'12px'}
          color={'#18A0FB'}
          tickFormatter={(value: any) => {
            return `${value}%`
          }}
        />
      )}
      <Tooltip cursor={{ fill: '#666666' }} content={tooltipContent} />
      <ReferenceLine y={0} yAxisId={'left'} stroke={'#d7d7d7'} />
      <Bar
        animationEasing="linear"
        animationDuration={500}
        yAxisId="left"
        dataKey={leftDataKey}
        fill="#ffffff"
        shape={<RoundedChart />}
      />
      {rightDataKey && (
        <Bar
          animationEasing="linear"
          animationDuration={500}
          yAxisId="right"
          dataKey={rightDataKey}
          barSize={0}
          fill="#00000000"
        />
      )}
    </BarChart>
  )
}
