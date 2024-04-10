import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import LOGO from '/public/static/images/header/logo.svg'

const Wrapper = styled.div<{ minHeight?: number; minWidth?: number }>`
  min-width: ${({ minWidth }) => `${minWidth}px`};
  min-height: ${({ minHeight }) => `${minHeight}px`};
  max-height: ${({ minHeight }) => `${minHeight}px`};
`

export default function Logo({ width = 800, height = 330 }: { width?: number; height?: number }) {
  return (
    <Wrapper minHeight={height} minWidth={width}>
      <Image src={LOGO} width={width} height={height} alt="Vibe Logo" />
    </Wrapper>
  )
}
