import React from 'react'

export default function TwitterX({
  size = 21,
  color = '#000',
  ...rest
}: {
  size?: number
  color?: string
  [x: string]: any
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M13.2437 8.2164L20.1939 0.241455H17.9548L12.0853 6.68973L7.83792 0.241455H0.887695L8.22405 10.8621L1.65994 19.207H3.59056L9.38242 12.3794L14.0159 19.207H20.58L16.7188 13.5173L13.2437 8.2164ZM10.4507 10.8785L9.71753 9.82859L3.88419 1.47391H6.3956L11.1032 8.2164L11.8363 9.26636L17.9556 18.0306H15.4442L10.4507 10.8785Z"
        fill={color}
      />
    </svg>
  )
}
