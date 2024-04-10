import React from 'react'
import styled from 'styled-components'

import { Row, RowEnd, RowStart } from 'components/Row'
import { Logo } from 'components/Icons'

const AutoSlippageWrapper = styled(Row)<{
  width?: string
  fontSize?: string
  padding?: string
}>`
  align-items: center;
  width: ${({ width }) => width ?? '122px'};
  gap: 3px;
  font-size: ${({ fontSize }) => fontSize ?? '11px'};
  font-weight: 400;
  padding: ${({ padding }) => padding ?? '4px 8px 4px 8px'};
  border-radius: 4px;
  color: ${({ theme }) => theme.almostWhite};
  background: ${({ theme }) => theme.color2};
`

export default function SlippageTolerance({
  width,
  fontSize,
  padding,
}: {
  width?: string
  fontSize?: string
  padding?: string
}) {
  return (
    <AutoSlippageWrapper width={width} fontSize={fontSize} padding={padding}>
      <RowStart>Auto slippage</RowStart>
      <RowEnd width={'20%'}>
        <Logo width={32} height={12} />
      </RowEnd>
    </AutoSlippageWrapper>
  )
}
