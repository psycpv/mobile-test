import { useAccountPartyAStat, useActiveAccountAddress } from 'state/user/hooks'
import useCurrentTimestamp from 'hooks/useCurrentTimestamp'
import { useMemo } from 'react'

export default function useWithdrawCooldownTimeRemaining() {
  const activeAccountAddress = useActiveAccountAddress()
  const { withdrawCooldown, cooldownMA } = useAccountPartyAStat(activeAccountAddress)
  const currentTimestamp = useCurrentTimestamp()
  return useMemo(
    () => Number(withdrawCooldown) + Number(cooldownMA) - currentTimestamp,
    [withdrawCooldown, cooldownMA, currentTimestamp]
  )
}
