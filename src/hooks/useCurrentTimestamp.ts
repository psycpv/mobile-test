import { useEffect, useState } from 'react'

export default function useCurrentTimestamp() {
  const [currentTimestamp, setCurrentTimestamp] = useState(Math.floor(Date.now() / 1000))
  useEffect(() => {
    const interval = setInterval(() => setCurrentTimestamp(Math.floor(Date.now() / 1000)))
    return () => {
      clearInterval(interval)
    }
  }, [])
  return currentTimestamp
}
