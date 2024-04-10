import AnimationLoader from 'components/Animation/AnimationLoader'
import React from 'react'

export default function EmptyPosition({ style }: { style?: React.CSSProperties }) {
  return <AnimationLoader name={'DoomFaces'} style={style} />
}
