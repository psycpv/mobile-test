import React from 'react'
import styled from 'styled-components'
import { ExternalLink as LinkIconFeather } from 'react-feather'
import { ExplorerDataType, getExplorerLink } from 'utils/explorers'
import { outboundLink } from 'components/Analytics'

function handleClickExternalLink(event: React.MouseEvent<HTMLAnchorElement>) {
  const { target, href } = event.currentTarget

  // don't prevent default, don't redirect if it's a new tab
  if (target === '_blank' || event.ctrlKey || event.metaKey) {
    outboundLink({ label: href }, () => {
      console.debug('Fired outbound link event', href)
    })
  } else {
    event.preventDefault()
    // send a ReactGA event and then trigger a location change
    outboundLink({ label: href }, () => {
      window.location.href = href
    })
  }
}

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.blue};
  /* font-weight: 500; */

  :hover {
    cursor: pointer;
    /* color: ${({ theme }) => theme.white}; */
  }
  :focus {
    outline: none;
    text-decoration: underline;
  }
  :active {
    text-decoration: none;
  }
`

const LinkIconWrapper = styled.a`
  text-decoration: none;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  :hover {
    text-decoration: none;
    opacity: 0.7;
  }
  :focus {
    outline: none;
    text-decoration: none;
  }
  :active {
    text-decoration: none;
  }
`

const LinkIcon = styled(LinkIconFeather)`
  height: 16px;
  width: 18px;
  margin-left: 4px;
  stroke: ${({ theme }) => theme.blue1};
`

export function ExternalLink({
  href = '#',
  target = '_blank',
  rel = 'noopener noreferrer',
  children,
  ...rest
}: {
  href: string
  target?: string
  rel?: string
  children?: React.ReactNode
  [x: string]: any
}) {
  return (
    <StyledLink href={href} target={target} rel={rel} {...rest}>
      {children}
    </StyledLink>
  )
}

export function ExternalLinkIcon({
  target = '_blank',
  href,
  rel = 'noopener noreferrer',
  children,
  ...rest
}: {
  href: string
  target?: string
  rel?: string
  children?: React.ReactNode
  [x: string]: any
}) {
  return (
    <LinkIconWrapper target={target} rel={rel} href={href} onClick={handleClickExternalLink} {...rest}>
      {children}
      <LinkIcon />
    </LinkIconWrapper>
  )
}

export const ExplorerLink = ({
  chainId,
  type,
  value,
  children,
  ...rest
}: {
  chainId: number
  type: ExplorerDataType
  value: string
  children: React.ReactNode
  [x: string]: any
}) => {
  return (
    <ExternalLink href={getExplorerLink(chainId, type, value)} onClick={handleClickExternalLink} {...rest}>
      {children}
    </ExternalLink>
  )
}
