import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Close({
  size = 16,
  color = '#8D90B5',
  onClick,
  ...rest
}: {
  size?: number
  color?: string
  onClick?: () => void
  [x: string]: any
}) {
  const [isHover, setIsHover] = useState(false)
  return (
    <Wrapper onClick={onClick} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
        <path
          d="M16 1.45455L14.5455 0L8 6.54545L1.45455 0L0 1.45455L6.54545 8L0 14.5455L1.45455 16L8 9.45455L14.5455 16L16 14.5455L9.45455 8L16 1.45455Z"
          fill={isHover ? 'white' : color}
        />
      </svg>
    </Wrapper>
  )
}
