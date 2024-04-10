import { useState, useEffect } from 'react'

export default function useCheckInternetConnection() {
  // state variable holds the state of the internet connection
  const [isOnline, setOnline] = useState<boolean>(true)

  // On initialization set the isOnline state.
  useEffect(() => {
    setOnline(navigator.onLine)
  }, [])

  // event listeners to update the state
  useEffect(() => {
    const handleOnline = () => {
      setOnline(true)
    }

    const handleOffline = () => {
      setOnline(false)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return isOnline
}
