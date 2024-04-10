import React, { useEffect, useState } from 'react'
import { useFlash } from 'state/application/hooks'
import styled from 'styled-components'

const FlashWrapper = styled.div<{ show: boolean; type: 'increase' | 'decrease'; color: string }>`
  background: rgba(23, 23, 183, 0.15);
  box-shadow: 0 0 0 10px ${(props) => props.color};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  filter: blur(15px);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  opacity: ${(props) => (props.show ? '100%' : '0%')};
  ${(props) => !props.show && 'transition: all 2s ease-in-out;'}
`

export default function Flash() {
  const { flashTime, flashType, flashColor } = useFlash()
  const [flash, showFlash] = useState(false)
  useEffect(() => {
    const interval = flashTime + 2000 - Date.now()
    if (interval <= 0) return
    setTimeout(() => {
      showFlash(false)
    }, interval)
    showFlash(true)
  }, [flashTime])
  return <FlashWrapper show={flash} type={flashType} color={flashColor}></FlashWrapper>
}
