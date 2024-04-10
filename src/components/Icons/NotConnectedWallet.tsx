import React from 'react'

export default function NotConnectedWallet({
  width = 120,
  height = 'auto',
  ...rest
}: {
  width?: number
  height?: string
  [x: string]: any
}) {
  return <img src={'/static/images/etc/wallet_sad.svg'} width={width} height={height} {...rest} />
}
