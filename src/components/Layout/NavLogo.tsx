import React from 'react'
import styled from 'styled-components'

import { ExternalLink } from 'components/Link'
import { RowCenter } from 'components/Row'
import { APP_URL } from 'constants/misc'
import { Logo } from 'components/Icons'

const Wrapper = styled(RowCenter)`
  width: fit-content;

  &:hover {
    cursor: pointer;
  }

  & > div {
    &:first-child {
      margin-right: 10px;
    }
  }
`

export default function NavLogo() {
  return (
    <Wrapper>
      <ExternalLink href={APP_URL} target="_self" passHref>
        <Logo width={112} height={43} />
      </ExternalLink>
    </Wrapper>
  )
}
