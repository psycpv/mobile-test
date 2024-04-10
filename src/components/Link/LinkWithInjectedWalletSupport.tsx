import React, { ForwardedRef } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useInjectedAddress } from 'lib/hooks/useInjectedAddress'
import { LinkProps } from 'next/dist/client/link'

const StyledAnchor = styled.a`
  display: inline;
  color: inherit;
  cursor: default;
  text-decoration: none;
`

const LinkWithInjectedWalletSupport = React.forwardRef<HTMLAnchorElement, React.PropsWithChildren<LinkProps>>(
  (props, ref: ForwardedRef<HTMLAnchorElement>) => {
    const walletAddress = useInjectedAddress()
    return (
      // eslint-disable-next-line react/prop-types
      <Link {...props} href={props.href + (walletAddress ? `?address=${walletAddress}` : '')} passHref>
        {/* Forward the ref to the anchor element */}
        <StyledAnchor ref={ref}>{props.children}</StyledAnchor>
      </Link>
    )
  }
)

LinkWithInjectedWalletSupport.displayName = 'LinkWithInjectedWalletSupport'

export default LinkWithInjectedWalletSupport
