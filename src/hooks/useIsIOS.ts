import { useEffect, useState } from 'react'

export default function useIsIOS() {
  const [isIOS, setIsIOS] = useState(false)
  useEffect(() => {
    const userAgent = navigator.userAgent
    const isiPhone = /iPhone/.test(userAgent)
    setIsIOS(isiPhone)
  }, [])

  return isIOS
}
