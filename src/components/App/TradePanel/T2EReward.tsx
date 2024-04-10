import { useDibs } from 'hooks/useDibs'
import styled from 'styled-components'
import Image from 'next/image'
import { Row, RowEnd } from 'components/Row'
import useDibsRewards from 'hooks/useDibsRewards'
import CounterNumber from 'components/CounterNumber'
import { useEffect, useState } from 'react'
import { formatAmount } from 'utils/numbers'

const Wrapper = styled(Row)`
  min-height: 56px;
  max-height: 56px;
  padding: 13px 12px 13px 14.5px;
  border: 2px solid #ab73a7;
  border-radius: 6px;
  background: #23273f;
  color: ${({ theme }) => theme.almostWhite};
  margin-bottom: 10px;
`

export function T2EReward() {
  const { activeDay } = useDibs()
  const { rewards } = useDibsRewards(activeDay, true, true)
  const [targetReward, setTargetReward] = useState(0)
  useEffect(() => {
    if (rewards && rewards[0]?.reward.toNumber() !== targetReward) {
      setTargetReward(rewards[0]?.reward.toNumber())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rewards])

  return (
    <Wrapper>
      <Row gap="8px">
        <Image src={'/static/images/etc/BasedHat.svg'} alt="Asset" width={25} height={25} />
        <div>Today&apos;s Rewards</div>
      </Row>

      <RowEnd gap="5px">
        <CounterNumber targetNumber={formatAmount(targetReward, 6)} duration={4} />
        <div>VIBE</div>
      </RowEnd>
    </Wrapper>
  )
}
