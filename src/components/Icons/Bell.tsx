import React from 'react'

interface IBellProps {
  width?: number
  height?: number
  color?: string
  [x: string]: any
}

export default function Bell({ width = 24, height = 24, color = '#F1F1F1', ...rest }: IBellProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M12 2C7.73954 2 4.28575 5.35787 4.28575 9.50002V13.9823L3.37661 14.8662C3.0089 15.2237 2.89891 15.7613 3.09791 16.2284C3.29691 16.6955 3.76573 17 4.28575 17H19.7142C20.2343 17 20.7031 16.6955 20.9021 16.2284C21.1011 15.7613 20.9911 15.2237 20.6233 14.8662L19.7142 13.9823V9.50002C19.7142 5.35787 16.2604 2 12 2Z"
        fill={color}
      />
      <path
        d="M12.0002 22C9.86997 22 8.14307 20.3211 8.14307 18.25H15.8573C15.8573 20.3211 14.1305 22 12.0002 22Z"
        fill={color}
      />
    </svg>
  )
}

export function GradientBell({ width = 26, height = 26, ...rest }: IBellProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M13 2.16669C8.3845 2.16669 4.64289 5.80438 4.64289 10.2917V15.1475L3.65799 16.105C3.25964 16.4923 3.14048 17.0748 3.35607 17.5808C3.57165 18.0869 4.07954 18.4167 4.64289 18.4167H21.3571C21.9205 18.4167 22.4283 18.0869 22.6439 17.5808C22.8595 17.0748 22.7403 16.4923 22.342 16.105L21.3571 15.1475V10.2917C21.3571 5.80438 17.6155 2.16669 13 2.16669Z"
        fill="url(#paint0_linear_5272_9433)"
      />
      <path
        d="M12.9998 23.8333C10.6921 23.8333 8.82129 22.0145 8.82129 19.7708H17.1784C17.1784 22.0145 15.3077 23.8333 12.9998 23.8333Z"
        fill="url(#paint1_linear_5272_9433)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5272_9433"
          x1="13"
          y1="2.16669"
          x2="13"
          y2="18.4167"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAA0F9" />
          <stop offset="0.217833" stopColor="#DB8CDA" />
          <stop offset="0.432833" stopColor="#C07BC0" />
          <stop offset="0.637833" stopColor="#AB6DAA" />
          <stop offset="0.842833" stopColor="#945F93" />
          <stop offset="1" stopColor="#945F93" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5272_9433"
          x1="12.9998"
          y1="19.7708"
          x2="12.9998"
          y2="23.8333"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAA0F9" />
          <stop offset="0.217833" stopColor="#DB8CDA" />
          <stop offset="0.432833" stopColor="#C07BC0" />
          <stop offset="0.637833" stopColor="#AB6DAA" />
          <stop offset="0.842833" stopColor="#945F93" />
          <stop offset="1" stopColor="#945F93" />
        </linearGradient>
      </defs>
    </svg>
  )
}
