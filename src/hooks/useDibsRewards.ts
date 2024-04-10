import { useCallback, useEffect, useState } from 'react'
import { FetchPolicy, DocumentNode } from '@apollo/client'
import { BigNumber } from '@ethersproject/bignumber'

import { getSingleBoolean } from 'utils/multicall'

import { dibsClient } from 'apollo/client/balanceHistory'
import { TotalVolumeForDaysData, UserRewardData, UserRewardDataCustomDay } from 'apollo/queries'

import { useBasedContract, useDibsContract } from 'hooks/useContract'
import { useUserRewardData } from './useUserRewardData'
import { RewardGetData, UserDailyGeneratedVolumesRecord } from 'types/dibs'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useSingleContractMultipleMethods } from 'lib/hooks/multicall'

const useDibsRewards = (selectedDay: number, customDayActive: boolean, periodicUpdate = false) => {
  const DibsContract = useDibsContract()
  const { account } = useActiveWeb3React()
  const [getData, setGetData] = useState<RewardGetData>({ days: [], totalVolumesBN: [], result: [], user: '' })
  const [getDataLoading, setGetDataLoading] = useState(false)
  const getDailyLeaderboardData = useCallback(
    async (user: string) => {
      if (!DibsContract) return []

      let offset = 0
      const result: UserDailyGeneratedVolumesRecord[] = []
      let chunkResult: UserDailyGeneratedVolumesRecord[] = []
      setGetDataLoading(true)
      do {
        const queryParam: {
          query: DocumentNode
          variables: { user: string; skip: number; day?: number }
          fetchPolicy: FetchPolicy
        } = customDayActive
          ? {
              query: UserRewardDataCustomDay,
              variables: { user, skip: offset, day: selectedDay },
              fetchPolicy: 'network-only',
            }
          : {
              query: UserRewardData,
              variables: { user, skip: offset },
              fetchPolicy: 'network-only',
            }
        chunkResult = (await dibsClient.query(queryParam)).data.dailyGeneratedVolumes
        result.push(...chunkResult)
        offset += chunkResult.length
      } while (chunkResult.length)

      const days = result.map((res) => Number(res.day))
      let totalVolumesBN: BigNumber[] = []

      let volumeOffset = 0
      const volumeChunkSize = 100

      do {
        const slicedDays = days.slice(volumeOffset, volumeOffset + volumeChunkSize)

        const { data } = await dibsClient.query({
          query: TotalVolumeForDaysData,
          variables: { days: slicedDays },
          fetchPolicy: 'cache-first',
        })

        const volumes = data.dailyGeneratedVolumes.map((ele: UserDailyGeneratedVolumesRecord) =>
          BigNumber.from(ele.amountAsUser)
        )

        totalVolumesBN = [...totalVolumesBN, ...volumes]

        volumeOffset += volumeChunkSize
      } while (volumeOffset < days.length)

      setGetDataLoading(false)
      setGetData({ days, totalVolumesBN, result, user })
    },
    [DibsContract, customDayActive, selectedDay]
  )

  useEffect(() => {
    const fetchInfo = async () => {
      if (!account) return
      try {
        await getDailyLeaderboardData(account)
      } catch (error) {
        console.log('leaderboard get error :>> ', error)
      }
    }
    const intervalId = periodicUpdate
      ? setInterval(() => {
          fetchInfo()
        }, 10000)
      : undefined
    if (!periodicUpdate) fetchInfo()
    return () => clearInterval(intervalId)
  }, [account, getDailyLeaderboardData, periodicUpdate, selectedDay])

  return useUserRewardData(getData, getDataLoading)
}

export function useIsRewardMinted(day: number | null) {
  const BasedContract = useBasedContract()
  const contractDataCall = day
    ? [
        {
          methodName: 'isRewardMinted',
          callInputs: [day],
        },
      ]
    : []

  const [isRewardMintedData] = useSingleContractMultipleMethods(BasedContract, contractDataCall)
  return getSingleBoolean(isRewardMintedData, 0)
}

export default useDibsRewards
