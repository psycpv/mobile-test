import { XAxis, YAxis, CartesianGrid, LineChart, Line, Tooltip, ReferenceLine } from 'recharts'
import React, { useMemo } from 'react'
import { useTheme } from 'styled-components'
import { chartDomain } from 'utils/chart'
import { CustomTooltip } from 'components/App/Chart/CustomTooltip'
import { formatCurrencyIntl } from 'utils/currency'

const CustomizedTick = (props: any) => {
  const isMobile = window.innerWidth < 600
  const { x, y, payload } = props

  return (
    <g transform={`translate(${x},${y}) rotate(-45 0 0)`}>
      <text x={0} y={0} dy={16} textAnchor="middle" fill="#757575" fontSize={isMobile ? '10px' : '12px'}>
        {payload.value.split('/').slice(0, 2).join('/')}
      </text>
    </g>
  )
}

export function MyLineChart<T extends { date: Date }>({
  data,
  width,
  height,
  hasShadow,
  leftDataKey = 'cumulativePnl',
  rightDataKey = 'cumulativePnlPercent',
}: {
  data: T[] | null
  width: number
  height: number
  hasShadow?: boolean
  leftDataKey?: string
  rightDataKey?: string
}) {
  const theme = useTheme()
  const isMobile = window.innerWidth < 600

  const processedData = useMemo(
    () =>
      data
        ? data.map((d) => ({
            ...d,
            dateStrWithYear: `${d.date.getDate()}/${d.date.getMonth() + 1}/${d.date.getFullYear()}`,
          }))
        : null,
    [data]
  )

  if (processedData === null) {
    return <></>
  }

  return (
    <LineChart
      width={width}
      height={height}
      data={processedData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      {hasShadow && (
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="35%" stopColor="#18A0FB" stopOpacity={0.1} />
            <stop offset="95%" stopColor="#18A0FB" stopOpacity={0} />
          </linearGradient>
        </defs>
      )}
      <CartesianGrid strokeDasharray={isMobile ? '3 2' : '5 4'} color="#757575" vertical={false} />
      <XAxis
        dataKey="dateStrWithYear"
        padding={{ left: 5, right: 5 }}
        fontSize={isMobile ? '10px' : '12px'}
        color={'#18A0FB'}
        tickMargin={14}
        tickSize={0}
        axisLine={false}
        tick={<CustomizedTick />}
      />
      <YAxis
        yAxisId="left"
        type="number"
        width={isMobile ? 28 : 40}
        domain={chartDomain}
        orientation={'left'}
        tickMargin={isMobile ? 8 : 14}
        tickSize={0}
        axisLine={false}
        fontSize={isMobile ? '10px' : '12px'}
        color={'#18A0FB'}
        tickFormatter={(value: any) => {
          return `${formatCurrencyIntl(value.toFixed(2))}`
        }}
      />
      <YAxis
        yAxisId="right"
        orientation="right"
        width={isMobile ? 5 : 18}
        type="number"
        tickFormatter={(value) => `${value}%`}
        dataKey={rightDataKey}
        domain={chartDomain}
        tickMargin={isMobile ? 6 : 14}
        tickSize={0}
        axisLine={false}
        fontSize={isMobile ? '10px' : '12px'}
        color={theme.pink}
      />
      <Tooltip content={CustomTooltip.LineChart} />
      <ReferenceLine y={0} yAxisId={'left'} stroke={'#d7d7d7'} />
      <Line
        animationEasing="linear"
        animationDuration={500}
        yAxisId={'left'}
        type="monotone"
        dataKey={leftDataKey}
        strokeWidth={2}
        stroke={theme.blue7}
        fill={theme.color2}
      />
      <Line
        animationEasing="linear"
        animationDuration={500}
        yAxisId={'right'}
        type="monotone"
        dataKey={rightDataKey}
        strokeWidth={isMobile ? 1 : 2}
        stroke={theme.pink}
        fill={theme.color2}
      />
      {/*for tooltip*/}
      <YAxis yAxisId="forTooltip" hide={true} />
      <Line type="monotone" dataKey="pnl" stroke="none" fill="none" color="none" yAxisId="forTooltip" />
    </LineChart>
  )
}
