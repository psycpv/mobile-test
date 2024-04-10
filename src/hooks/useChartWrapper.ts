import { useEffect, useRef, useState } from 'react'
import useWindowSize from 'lib/hooks/useWindowSize'

export const useChartWrapper = () => {
  const [chartWidth, setChartWidth] = useState(0)
  const { width } = useWindowSize()
  const chartWrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chartWrapperRef.current) {
      const wrapperWidth = chartWrapperRef.current.clientWidth
      setChartWidth(wrapperWidth)
    }
  }, [width, chartWrapperRef.current])

  return { chartWidth, chartWrapperRef }
}
