import { useLayoutEffect, useState, useMemo } from 'react'

import { MEDIA_WIDTHS } from 'theme'

interface WindowSize {
  width: number
  height: number
}

export default function useWindowSize(): WindowSize {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return { width, height }
}

export function useIsMobile() {
  const { width } = useWindowSize()
  return useMemo(() => width <= MEDIA_WIDTHS.upToMedium, [width])
}

export function useIsUpToSmall() {
  const { width } = useWindowSize()
  return useMemo(() => width <= MEDIA_WIDTHS.upToSmall, [width])
}
