import styled from 'styled-components'
import Image from 'next/image'
import { useRouter } from 'next/router'

import OPEN_WINDOW from '/public/static/images/footer/openwindow.svg'
import SYMMETRIAL_ICON from '/public/static/images/header/SymmetrialX.svg'

import { useIsMobile } from 'lib/hooks/useWindowSize'

import { RowBetween, RowFixed } from 'components/Row'

const Wrapper = styled(RowBetween)`
  position: fixed;
  left: 0;
  bottom: 0;
  height: 32px;
  border-top: 1px solid #fff4;
  width: 100%;
  color: ${({ theme }) => theme.coolGrey};
  background: ${({ theme }) => theme.color1};
  font-size: 13px;
  padding: 0px 8px 0px 8px;
  z-index: 10;
`
const SymmetrialText = styled(RowFixed)`
  gap: 4px;
  font-size: 13px;
  font-weight: 400;
  margin-left: 10px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 10px;
  `};
`
const Separator = styled.div`
  width: 1px;
  height: 13px;
  margin-left: 15px;
  margin-right: 15px;
  background-color: ${({ theme }) => theme.coolGrey};
  opacity: 0.6;
`

const Link = styled.div`
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.almostWhite};
  }
`

const StatusButton = styled(RowFixed)`
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.green};
  padding: 2px 5px 2px 5px;
  background: #0f02;
  gap: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.almostWhite};
  margin-right: 10px;

  &:hover {
    background: #0f05;
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 11px;
  `};
`

const StatusDot = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.green};
  width: 10px;
  height: 10px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    width: 7px;
    height: 7px;
  `};
`

const Symmio = styled.div`
  color: ${({ theme }) => theme.almostWhite};
`

export default function Footer() {
  const router = useRouter()
  const isMobile = useIsMobile()
  return (
    <Wrapper>
      <SymmetrialText>
        Powered by <Image src={SYMMETRIAL_ICON} width={'16px'} height={'12px'} alt="Symmetrial Logo" />{' '}
        <Symmio>SYMMIO</Symmio>
      </SymmetrialText>
      {!isMobile && (
        <RowFixed>
          <Link
            onClick={() => {
              // router.push('/docs')
            }}
          >
            Docs
          </Link>
          <Separator />
          <Link
            onClick={() => {
              // router.push('/contact')
            }}
          >
            Contact
          </Link>
          <Separator />
          <Link
            onClick={() => {
              router.push('/disclaimer')
            }}
          >
            Disclaimer
          </Link>
        </RowFixed>
      )}
      <StatusButton
        onClick={() => {
          window.open('https://vibetrading.statuspage.io/', '_blank')
        }}
      >
        <StatusDot></StatusDot>
        Online
        <Image src={OPEN_WINDOW} alt={'open_window_icon'} />
      </StatusButton>
    </Wrapper>
  )
}
