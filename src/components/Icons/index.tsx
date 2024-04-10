import styled from 'styled-components'

export { default as Download } from './Download'
export { default as TwitterX } from './Twitter'
export { default as CheckMark } from './CheckMark'
export { default as Analytics } from './Analytics'
export { default as Close } from './Close'
export { ConfirmationAnimation } from './Confirmation'
export { default as ChevronDown } from './Chevron'
export { default as DotFlashing } from './DotFlashing'
export { default as Info } from './Info'
export { default as GreenCircle } from './GreenCircle'
export { default as Connected } from './Connected'
export { default as Copy } from './Copy'
export { default as Loader } from './Loader'
export { default as NavToggle } from './NavToggle'
export { default as LongArrow } from './Long'
export { default as PinkIcon } from './PinkIcon'
export { default as EditPencil } from './EditPencil'
export { default as ShortArrow } from './Short'
export { Network } from './Network'
export { Settings } from './Settings'
export { default as ExclamationMark } from './ExclamationMark'
export { Twitter, Telegram, Github } from './Socials'
export { default as Trade } from './Trade'
export { Wallet } from './Wallet'
export { SwitchWallet } from './SwitchWallet'
export { default as Star } from './Star'
export { default as EmptySearch } from './Magnifier'
export { default as Client } from './Client'
export { default as Bell } from './Bell'
export { GradientBell } from './Bell'
export { default as Link } from './Link'
export { default as Error } from './Error'
export { default as Status } from './Status'
export { default as NextIcon } from './Next'
export { default as Rectangle } from './Rectangle'
export { default as Logo } from './Logo'
export { default as LeverageIcon } from './Leverage'
export { default as GradientStar } from './GradientStar'
export { default as EmptyPosition } from './EmptyPosition'
export { default as NotConnectedWallet } from './NotConnectedWallet'
export { default as EmptyPositionDetails } from './EmptyPositionDetails'
export { default as MarketPair } from './MarketPair'
export { default as Enter } from './Enter'
export { WalletNotConnected } from './WalletNotConnected'
export { ChuppyFrown } from './ChuppyFrown'
export { FillRewarder } from './FillRewarder'
export { default as ExitMediumModal } from './ExitMediumModal'
export { default as AdBlockerIcon } from './AdBlocker'
export { default as ShareIcon } from './Share'

// for wrapping react feather icons
export const IconWrapper = styled.div<{
  stroke?: string
  size?: string
  marginTop?: string
  marginRight?: string
  marginLeft?: string
  scale?: number
  disabled?: boolean
  cursor?: string
  width?: string
  height?: string
  smWidth?: string
  smHeight?: string
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size, width }) => size ?? width};
  height: ${({ size, height }) => size ?? height};
  margin-right: ${({ marginRight }) => marginRight ?? 0};
  margin-left: ${({ marginLeft }) => marginLeft ?? 0};
  margin-top: ${({ marginTop }) => marginTop ?? 0};
  transform: scale(${({ scale }) => scale ?? 1});
  cursor: ${({ cursor }) => cursor ?? 'default'};

  ${({ theme, smWidth, width, smHeight, height }) => theme.mobileFirstMediaWidth.fromSmall`
    width: ${smWidth ?? width};
    height: ${smHeight ?? height};  
  `}
  & * {
    fill: ${({ disabled, theme }) => (disabled ? theme.gray1 : '')} !important;
  }
`
