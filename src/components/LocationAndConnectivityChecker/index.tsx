import React, { useState, useEffect, useCallback } from 'react'
import styled, { useTheme } from 'styled-components'

import { makeHttpRequest } from 'utils/http'
import useCheckInternetConnection from 'lib/hooks/useCheckInternetConnection'

import { useWebSocketStatus } from 'state/hedger/hooks'
import { ConnectionStatus } from 'state/user/types'

import { Banner } from 'components/Banner'
import { Info } from 'components/Icons'
import { ExternalLink } from 'components/Link'
import { Row } from 'components/Row'
import { ThemedText } from 'components/Text'

const Link = styled(ExternalLink)`
  margin-left: 4px;
  color: ${({ theme }) => theme.color2};
  text-decoration: underline;
`

const IconWrapper = styled.div`
  min-width: 20px;
`

export default function LocationAndConnectivityChecker() {
  const theme = useTheme()
  const [showLocationWarning, setShowLocationWarning] = useState(false)
  const priceWebSocketStatus = useWebSocketStatus()
  const isOnline = useCheckInternetConnection()

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (priceWebSocketStatus === ConnectionStatus.CLOSED) {
        setShowLocationWarning(true)
      } else {
        setShowLocationWarning(false)
      }
    }, 5000) // 5000 milliseconds = 5 seconds

    return () => {
      clearTimeout(timerId)
    }
  }, [priceWebSocketStatus])

  if (showLocationWarning && isOnline) {
    return (
      <Banner
        bg={theme.bakerMillerPink}
        text={
          <Row gap={'17px'}>
            <IconWrapper>
              <Info size={18} />
            </IconWrapper>
            <div>
              The location of your IP address is restricted and the app will not work as expected. Please access the
              site from an
              <Link href={'https://www.binance.com/en/country-region-selector'}>allowed location</Link>.
            </div>
          </Row>
        }
      />
    )
  } else if (!isOnline) {
    return (
      <Banner
        bg={theme.bakerMillerPink}
        text={
          <Row gap={'17px'}>
            <IconWrapper>
              <Info size={18} />
            </IconWrapper>
            <div>You are currently offline. Please reconnect to the internet to use Vibe</div>
          </Row>
        }
      />
    )
  }

  return null
}

export function GetLocationInfo() {
  const [ipAddress, setIPAddress] = useState('')
  const [country, setCountry] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  const getIpAddress = async () => {
    const { href } = new URL('https://api.ipify.org/?format=json')
    try {
      const res = await makeHttpRequest(href)
      setIPAddress(res.ip)
    } catch (error) {
      console.error('Error fetching ip address:', error)
    }
  }

  const fetchLocationInfo = useCallback(async () => {
    const { href } = new URL(`https://ipapi.co/${ipAddress}/json`)
    try {
      const response = await makeHttpRequest(href)
      setLatitude(response.latitude)
      setLongitude(response.longitude)
      setCountry(response.country)
    } catch (error) {
      console.error('Error fetching location data:', error)
    }
  }, [ipAddress])

  useEffect(() => {
    getIpAddress()
  }, [])

  useEffect(() => {
    fetchLocationInfo()
  }, [fetchLocationInfo])

  return (
    <ThemedText.White>
      <p>Your IP Address is: {ipAddress}</p>
      <p>Your country is: {country}</p>
      <p>Your latitude is: {latitude}</p>
      <p>Your longitude is: {longitude}</p>
    </ThemedText.White>
  )
}
