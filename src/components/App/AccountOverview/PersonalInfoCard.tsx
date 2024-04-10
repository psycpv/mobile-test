import React, { useEffect, useState } from 'react'
import { Card } from 'components/Card'
import { ThemedText } from 'components/Text'
import { RowData } from 'components/BalanceCard/RowData'
import { AutoColumn } from 'components/Column'
import Image from 'next/image'
import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'
import styled from 'styled-components'
import { useActiveAccount, useActiveAccountAddress } from 'state/user/hooks'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { getAccountsNameData, getTotalSymbolTradesHistoriesQueryCall } from 'apollo/service'
import { AccountNameData, totalSymbolTradesHistories } from 'types/user'
import { formatTimestampUTC_date } from 'utils/time'
import { useMarket } from 'hooks/useMarkets'

const TradedAmount = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const CardWithBackground = styled(Card)`
  background: url('/static/images/card/cardBTCBackground.svg');
  background-size: cover;
  background-position: center center;
  align-self: stretch;
  flex: 1;
`

function findSymbolWithMostTrades(tradeHistories: totalSymbolTradesHistories[]): totalSymbolTradesHistories | null {
  if (tradeHistories.length === 0) return null

  let record = tradeHistories[0]
  let maxTrades = Number(tradeHistories[0].totalTrades)
  let maxPlatformFeePaid = Number(tradeHistories[0].platformFeePaid)

  for (const history of tradeHistories) {
    const trades = Number(history.totalTrades)
    const platformFeePaid = Number(history.platformFeePaid)

    if (trades > maxTrades || (trades === maxTrades && platformFeePaid > maxPlatformFeePaid)) {
      maxTrades = trades
      maxPlatformFeePaid = platformFeePaid
      record = history
    }
  }

  return record
}

export const PersonalInfoCard = () => {
  const { name } = useActiveAccount() || {}
  const { chainId } = useActiveWeb3React()
  const activeAccountAddress = useActiveAccountAddress()

  const [accountsNameData, setAccountsNameData] = useState<AccountNameData | null>(null)
  const [totalSymbolTradesHistories, setTotalSymbolTradesHistories] = useState<totalSymbolTradesHistories | null>(null)

  useEffect(() => {
    if (!chainId || !activeAccountAddress) return
    getTotalSymbolTradesHistoriesQueryCall({
      chainId,
      account: activeAccountAddress,
      skip: 0,
    }).then((res) => {
      const recordWithMostTrades = findSymbolWithMostTrades(res)
      setTotalSymbolTradesHistories(recordWithMostTrades)
    })

    getAccountsNameData({
      chainId,
      accountAddress: activeAccountAddress,
    }).then((res) => setAccountsNameData(res))
  }, [activeAccountAddress, chainId])

  const { symbol } = useMarket(Number(totalSymbolTradesHistories?.symbolId)) || {}
  const tokenLogo = useCurrencyLogo(symbol)

  const professionValue = symbol ? (
    <TradedAmount>
      <Image src={tokenLogo} width={16} height={18} alt="icon" /> {symbol} Dealer
    </TradedAmount>
  ) : null

  return (
    <CardWithBackground>
      <ThemedText.P2 marginBottom="18px">Personal Info</ThemedText.P2>
      <AutoColumn gap="8px">
        <RowData label={'Name:'} value={name?.toUpperCase()} />
        <RowData label={'Created at:'} value={formatTimestampUTC_date(accountsNameData?.timestamp)} />
        <RowData label="Profession:" value={professionValue} />
        <RowData label={'Trades:'} value={totalSymbolTradesHistories?.totalTrades} />
      </AutoColumn>
    </CardWithBackground>
  )
}
