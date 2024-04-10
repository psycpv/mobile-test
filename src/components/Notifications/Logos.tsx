import React from 'react'
import Image, { StaticImageData } from 'next/image'
import styled from 'styled-components'

import DEFAULT_TOKEN from '/public/static/images/tokens/default-token.svg'

import { RowBetween } from 'components/Row'
import ShimmerAnimation from 'components/ShimmerAnimation'

const Wrapper = styled(RowBetween)<{ bg?: string; border?: string }>`
  width: ${({ width }) => width ?? '46px'};
  height: 24px;
  padding: 2px;
  border-radius: 12px;
  background: ${({ theme, bg }) => (bg ? bg : theme.color5)};

  ${({ border }) =>
    border &&
    `
    border: 1px dashed ${border};
  `}
`

export default function Logos({
  img1,
  img2,
  border,
  imgSize,
  bg,
  width,
  loading,
}: {
  img1?: string | StaticImageData
  img2?: string | StaticImageData
  border?: string
  imgSize?: string
  bg?: string
  width?: string
  loading?: boolean
}) {
  const getImageSize = () => {
    return imgSize ? imgSize : 20
  }
  return loading ? (
    <ShimmerAnimation width={width ?? '46px'} height={'24px'} borderRadius={'12px'} />
  ) : (
    <Wrapper width={width} bg={bg} border={border}>
      <Image src={img1 ?? DEFAULT_TOKEN} width={getImageSize()} height={getImageSize()} alt={`icon`} />
      <Image src={img2 ?? DEFAULT_TOKEN} width={getImageSize()} height={getImageSize()} alt={`icon`} />
    </Wrapper>
  )
}
