import AnimationLoader from 'components/Animation/AnimationLoader'
import { EmptyRow } from './styles'

export default function EmptyDetails() {
  return (
    <EmptyRow>
      <AnimationLoader name={'DoomFaces'} style={{ width: 130 }} />
      <div>{`You have no open position!`}</div>
    </EmptyRow>
  )
}
