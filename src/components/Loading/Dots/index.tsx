import styled, { keyframes } from 'styled-components'

const dots_1 = keyframes`
  100% {
    transform: translateX(18px);
  }
`

const dots_2 = keyframes`
  100% {
    transform: rotate(-180deg) translateX(18px);
  }
`

const LoadingDots = styled.div<{ color?: string }>`
  width: 9px;
  height: 9px;
  aspect-ratio: 1;
  position: relative;
  margin: 10px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${({ color, theme }) => color ?? theme.almostWhite};
  }

  &::before {
    box-shadow: ${({ theme }) => `${theme.almostWhite} -18px 0`};
    animation: ${dots_1} 0.75s infinite normal;
  }

  &::after {
    transform: rotate(0deg) translateX(25px);
    animation: ${dots_2} 0.75s infinite normal;
  }
`

export default LoadingDots
