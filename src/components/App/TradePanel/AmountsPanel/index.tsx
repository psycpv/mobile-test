import MinPositionInfo from '../MinPositionInfo'
import AmountBox from './AmountBox'
import ReceiveBox from './ReceiveBox'
import GuideTour from './GuideTour'

export default function AmountsPanel() {
  return (
    <>
      <GuideTour />
      <MinPositionInfo />
      <AmountBox />
      <ReceiveBox />
    </>
  )
}
