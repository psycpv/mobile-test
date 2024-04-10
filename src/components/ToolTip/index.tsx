import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'

export const ToolTip = styled(ReactTooltip).attrs({
  place: 'right',
  type: 'info',
  effect: 'solid',
  multiline: true,
})`
  color: ${({ theme }) => theme.text0} !important;
  background: ${({ theme }) => theme.bg6} !important;
  opacity: 1 !important;
  padding: 3px 7px !important;
  font-size: 12px !important;
  &::after {
    background-color: #788795 !important;
    width: 6px !important;
    height: 6px !important;
    left: -3px !important;
    margin-top: -3px !important;
  }
`

export const ToolTipLeft = styled(ReactTooltip).attrs({
  place: 'left',
  type: 'info',
  effect: 'solid',
  multiline: true,
})`
  color: ${({ theme }) => theme.white} !important;
  background: ${({ theme }) => theme.bg6} !important;
  opacity: 1 !important;
  padding: 3px 7px !important;
  font-size: 0.6rem !important;
  &::after {
    background-color: #788795 !important;
    width: 6px !important;
    height: 6px !important;
    left: -3px !important;
    margin-top: -3px !important;
  }
`
export const ToolTipBottom = styled(ReactTooltip).attrs({
  place: 'bottom',
  type: 'info',
  effect: 'solid',
  multiline: true,
})`
  color: ${({ theme }) => theme.white} !important;
  background: ${({ theme }) => theme.bg6} !important;
  opacity: 1 !important;
  padding: 3px 7px !important;
  font-size: 0.6rem !important;
  &::after {
    background-color: #788795 !important;
    width: 6px !important;
    height: 6px !important;
    left: 50% !important;
    transform: translateX(50%);
    margin-top: 2px !important;
  }
`

export const ToolTipTop = styled(ReactTooltip).attrs({
  place: 'top',
  type: 'info',
  effect: 'solid',
  multiline: false,
})<{ width?: number; display?: string; align?: string; color?: string; background?: string }>`
  ${({ width }) => width && `width: ${width}px;`}
  display: ${({ display }) => display ?? 'flex !important'};
  gap: 4px;
  align-items: center;
  ${({ align }) => align && `text-align: ${align}`};
  color: ${({ theme, color }) => color ?? theme.white} !important;
  background: ${({ background }) => background ?? 'black'} !important;
  opacity: 1 !important;
  padding: 10px !important;
  font-size: 13px !important;
  border-radius: 6px !important;
  &::before {
    background-color: #0000 !important;
  }
  &::after {
    background-color: ${({ background }) => background ?? 'black'} !important;
    width: 6px !important;
    height: 6px !important;
    left: 50% !important;
    transform: translateX(50%);
    margin-top: 2px !important;
  }
`
