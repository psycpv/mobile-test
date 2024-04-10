import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import { IconWrapper, GreenCircle } from 'components/Icons'
import { ExternalLink } from 'components/Link'
import { ToolTipTop } from 'components/ToolTip'

const Wrapper = styled.button<{
  disabled?: boolean
  active?: boolean
  clickable?: boolean
  onClick: () => void
}>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem;
  color: ${({ theme }) => theme.almostWhite};
  background: ${({ theme }) => theme.color3};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  outline: none;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.coolGrey};
  width: 100%;
  box-sizing: border-box;

  font-size: 18px;

  &:hover,
  &:focus {
    cursor: pointer;
    border: 1px solid ${({ theme, clickable }) => (clickable ? theme.pink : theme.coolGrey)};
  }

  ${({ theme, clickable }) =>
    !clickable &&
    `
    background: ${theme.color3};
    &:hover,
    &:focus {
      cursor: default;
    }
  `}
`

const WrapperLeft = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100%;
`

const HeaderText = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-size: 1.1rem;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 0.9rem;
  `};
`

const SubHeader = styled.div`
  margin-top: 10px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text2};
`

export default function Option({
  link = null,
  clickable = true,
  size = 30,
  onClick = () => null,
  color,
  header,
  subheader = null,
  icon,
  active = false,
  hint,
  hintId,
}: {
  link?: string | null
  clickable?: boolean
  size?: number
  onClick?: () => void
  color: string
  header: React.ReactNode
  subheader?: React.ReactNode | null
  icon: StaticImageData
  active?: boolean
  hint?: string
  hintId?: string
}) {
  const content = (
    <Wrapper data-for={hintId} data-tip onClick={() => onClick()} clickable={clickable && !active} active={active}>
      <WrapperLeft>
        <HeaderText color={color}>
          {active && (
            <IconWrapper>
              <GreenCircle />
            </IconWrapper>
          )}
          {header}
        </HeaderText>
        {subheader && <SubHeader>{subheader}</SubHeader>}
      </WrapperLeft>
      <Image src={icon} alt={'Icon'} width={size} height={size} />
    </Wrapper>
  )
  if (link) {
    return <ExternalLink href={link}>{content}</ExternalLink>
  }
  if (hint) {
    return (
      <>
        {content}
        <ToolTipTop id={hintId} aria-haspopup="true" width={300}>
          <div>{hint}</div>
        </ToolTipTop>
      </>
    )
  }

  return content
}
