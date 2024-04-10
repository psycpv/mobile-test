import { useCallback, useEffect, useState } from 'react'
import { BigNumber } from '@ethersproject/bignumber'
import BigNumberJS from 'bignumber.js'
import { AddressZero } from '@ethersproject/constants'

import { fromWeiBN } from 'utils/numbers'

import { DailyData, AccountsNameData } from 'apollo/queries'
import { dibsClient } from 'apollo/client/balanceHistory'

import useRefresh from 'hooks/useRefresh'
import { useDibsContract } from 'hooks/useContract'
import { useIsRewardMinted } from './useDibsRewards'
import { getR2eApolloClient } from 'apollo/client/r2e'
import { SupportedChainId } from 'constants/chains'

export interface DailyGeneratedVolumesRecord {
  amountAsUser: string
  user: string
  name: string
}

export interface LeaderBoardRecord extends DailyGeneratedVolumesRecord {
  volume: BigNumberJS
  reward: BigNumberJS
}

export interface LeaderBoardData {
  [day: number]: LeaderBoardRecord[]
}

const useLeaderBoardData = (selectedDay: number | null) => {
  const { fastRefresh } = useRefresh()
  const DibsContract = useDibsContract()
  const [loading, setLoading] = useState(false)
  const [epochLeaderBoard, setEpochLeaderBoard] = useState<LeaderBoardData>({})
  const [totalReward, setTotalReward] = useState<BigNumber | null>(null)

  const isMinted = useIsRewardMinted(selectedDay)
  useEffect(() => {
    if (selectedDay !== null && selectedDay >= 0) {
      DibsContract?.totalReward(selectedDay).then(setTotalReward)
    }
  }, [DibsContract, selectedDay])

  const [totalVolume, setTotalVolume] = useState<BigNumber | null>(null)

  const getDailyLeaderboardData = useCallback(
    async (epoch: number): Promise<LeaderBoardRecord[]> => {
      if (!totalReward) return []

      let offset = 0
      const result: DailyGeneratedVolumesRecord[] = []
      let chunkResult: DailyGeneratedVolumesRecord[] = []
      do {
        chunkResult = (
          await dibsClient.query({
            query: DailyData,
            variables: { day: epoch, skip: offset },
            fetchPolicy: 'cache-first',
          })
        ).data.dailyGeneratedVolumes
        offset += chunkResult.length
        result.push(...chunkResult)
      } while (chunkResult.length)
      const [totalVolumeObject] = result.filter((ele) => ele.user === AddressZero.toLowerCase())
      const totalVolumeBN = BigNumber.from(totalVolumeObject?.amountAsUser ?? 0)
      setTotalVolume(totalVolumeBN)
      return result
        .filter((ele) => ele.user !== AddressZero.toLowerCase())
        .map((ele) => {
          return {
            ...ele,
            volume: fromWeiBN(ele.amountAsUser),
            reward: fromWeiBN(BigNumber.from(ele.amountAsUser).mul(totalReward).div(totalVolumeBN).toString()),
          }
        })
    },
    [totalReward]
  )

  const getAccountNames = useCallback(async (users: string[]): Promise<string[]> => {
    const client = getR2eApolloClient(SupportedChainId.BASE)
    if (!client) return []

    const accounts = (
      await client.query({
        query: AccountsNameData,
        variables: { users },
      })
    ).data.accounts

    if (!accounts) return []

    return users.map((user) => {
      const target = accounts.find((account: any) => account.user === user)
      return target?.name
    })
  }, [])

  useEffect(() => {
    const fetchInfo = async () => {
      if (selectedDay === null) return
      try {
        setLoading(true)
        const leader_day = await getDailyLeaderboardData(selectedDay)
        const accountNames = await getAccountNames(leader_day.map((item) => item.user))
        const result = leader_day.map((item, index) => ({ ...item, name: accountNames[index] }))
        setEpochLeaderBoard((prev) => ({ ...prev, [selectedDay]: result }))
        setLoading(false)
      } catch (error) {
        console.log('leaderboard get error :>> ', error)
        setLoading(false)
      }
    }
    fetchInfo()
  }, [selectedDay, getDailyLeaderboardData, fastRefresh, isMinted])

  return {
    epochLeaderBoard: selectedDay !== null && epochLeaderBoard[selectedDay] ? epochLeaderBoard[selectedDay] : [],
    totalReward,
    loading,
  }
}
export default useLeaderBoardData
