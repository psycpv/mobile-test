import { useAccountPartyAStat, useActiveAccount } from 'state/user/hooks'
import useAccountData from 'hooks/useAccountData'

export default function useAccountBalanceStats() {
  const { accountAddress } = useActiveAccount() || {}
  const { loading: statsLoading, ...accountStat } = useAccountPartyAStat(accountAddress)

  const accountData = useAccountData()

  return {
    ...accountStat,
    ...accountData,
    statsLoading,
  }
}
