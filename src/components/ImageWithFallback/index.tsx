import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import styled from 'styled-components'

import NotFound from '/public/static/images/fallback/not-found-eth.svg'

const Wrapper = styled.div<{
  round?: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ round }) => (round ? '50%' : '0px')};
  overflow: hidden;
  padding: 2px;
`

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  loading = false,
  round = false,
  ...rest
}: {
  src: StaticImageData | string
  alt: string
  width: number
  height: number
  loading?: boolean
  round?: boolean
  [x: string]: any
}) {
  const [imgSrc, setImgSrc] = useState<string | StaticImageData>('/static/images/fallback/loader.gif')

  useEffect(() => {
    if (loading) {
      setImgSrc('/static/images/fallback/loader.gif')
    } else {
      setImgSrc(src)
    }
  }, [src, loading])

  return (
    <Wrapper round={round}>
      <Image
        src={imgSrc}
        alt={alt}
        width={width - 2}
        height={height - 2}
        onError={() => setImgSrc(NotFound)}
        {...rest}
      />
    </Wrapper>
  )
}
