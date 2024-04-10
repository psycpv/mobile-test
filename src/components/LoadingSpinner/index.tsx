import React from 'react'
import styled, { keyframes } from 'styled-components'

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const LoadingSpinnerComponent = styled.div<{ size?: number }>`
  width: ${({ size }) => size ?? 50}px;
  height: ${({ size }) => size ?? 50}px;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #383636; /* Black */
  border-radius: 50%;
  animation: ${spinner} 1.5s linear infinite;
`

export default function LoadingSpinner({ size }: { size?: number }) {
  return (
    <div>
      <LoadingSpinnerComponent size={size} />
    </div>
  )
}

const l81 = keyframes`
  100% {
    transform: translateX(25px);
  }
`

const l82 = keyframes`
  100% {
    transform: rotate(-180deg) translateX(25px);
  }
`
const LoadingSpinnerComponent2 = styled.div`
  width: 15px;
  aspect-ratio: 1;
  position: relative;

  color: white;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: #fff;
  }

  &::before {
    box-shadow: -25px 0;
    animation: ${l81} 1s infinite linear;
  }

  &::after {
    transform: rotate(0deg) translateX(25px);
    animation: ${l82} 1s infinite linear;
  }
`

export function LoadingSpinner2() {
  return (
    <div>
      <LoadingSpinnerComponent2 />
    </div>
  )
}
