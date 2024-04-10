import React from 'react'

export default function Client({
  width = 18,
  height = 20,
  ...rest
}: {
  width?: number
  height?: number
  [x: string]: any
}) {
  return <img width={width} height={height} src={'/static/images/etc/Client.svg'} {...rest} />
}
