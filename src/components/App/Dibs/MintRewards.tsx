import { FillRewarder } from 'components/Icons'
import { useIsRewardMinted } from 'hooks/useDibsRewards'
import { useFillDibsRewarder } from 'callbacks/useFillsDibsRewarder'
import { useCallback, useState } from 'react'
import { SectionHeaderWrapper } from './DibsCalender'
import styled from 'styled-components'

const FillRewardComponent = styled(SectionHeaderWrapper)`
  width: 149px;
  padding: 4px 12px;
  font-size: 16px;
  gap: 6px;
  color: ${({ theme }) => theme.coolGrey};
  --rewarder-color: ${({ theme }) => theme.coolGrey};
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.almostWhite};
    --rewarder-color: ${({ theme }) => theme.almostWhite};
  }
`

export function MintRewards({ day }: { day: number }) {
  const isMinted = useIsRewardMinted(day)
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false)
  const { callback: rewardCallback } = useFillDibsRewarder(day)

  const handleAction = useCallback(async () => {
    if (!rewardCallback || awaitingConfirmation) {
      return
    }

    try {
      setAwaitingConfirmation(true)
      await rewardCallback()
      setAwaitingConfirmation(false)
    } catch (e) {
      setAwaitingConfirmation(false)
      if (e instanceof Error) {
        console.error(e)
      } else {
        console.error(e)
      }
    }
  }, [rewardCallback, awaitingConfirmation])

  return isMinted === false ? (
    <FillRewardComponent onClick={handleAction} disabled={awaitingConfirmation}>
      <div>Fill Rewarder</div>
      <FillRewarder color={'var(--rewarder-color)'} />
    </FillRewardComponent>
  ) : null
}
