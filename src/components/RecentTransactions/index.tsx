import { FlexColumn } from 'components/Column'
import { Row } from 'components/Row'
import { ThemedText } from 'components/Text'
import { ThemedButton } from 'components/Button'
import ArrowRight from 'components/Icons/ArrowRight'
import { Card } from 'components/Card'
import { TransactionList } from 'components/RecentTransactions/TransactionList'
import { useTheme } from 'styled-components'
import List from 'components/Icons/List'
import { useActiveAccountAddress, useUpnlWebSocketStatus } from 'state/user/hooks'
import { BalanceHistoryData, ConnectionStatus } from 'state/user/types'
import { useEffect, useState } from 'react'
import { getBalanceHistoryQueryCall } from 'apollo/service'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

export const RecentTransactions = ({ onMoreClick }: { onMoreClick: () => void }) => {
  const theme = useTheme()
  const { chainId } = useActiveWeb3React()

  const activeAccountAddress = useActiveAccountAddress()

  const upnlWebSocketStatus = useUpnlWebSocketStatus()
  const loading = upnlWebSocketStatus === ConnectionStatus.CLOSED
  const [balanceHistoryItems, setBalanceHistoryItems] = useState<BalanceHistoryData[] | null>(null)

  useEffect(() => {
    if (!chainId || !activeAccountAddress) return
    getBalanceHistoryQueryCall({
      chainId,
      account: activeAccountAddress,
      skip: 0,
      first: 4,
    }).then((res) => setBalanceHistoryItems(res))
  }, [activeAccountAddress, chainId])

  return (
    <Card flex={1} alignSelf={'stretch'}>
      <FlexColumn gap="20px">
        <Row justify="space-between" width="100%">
          <ThemedText.P2>Recent Transactions</ThemedText.P2>
          <ThemedButton.TextWithHoverIcon disabled={!balanceHistoryItems} color={theme.pink} onClick={onMoreClick}>
            More
            <ArrowRight
              width={17}
              height={17}
              marginLeft={'4px'}
              color={balanceHistoryItems ? theme.pink : theme.gray3}
            />
          </ThemedButton.TextWithHoverIcon>
        </Row>
        {balanceHistoryItems ? (
          <TransactionList loading={loading} balanceHistoryItems={balanceHistoryItems} />
        ) : (
          <FlexColumn gap="16px" align="center" justifyContent="center" flex={1}>
            <List scale={2} height={20} width={20} marginTop={'60px'} />
            <ThemedText.P5 color={theme.gray1} marginBottom={'60px'}>
              No Transaction
            </ThemedText.P5>
          </FlexColumn>
        )}
      </FlexColumn>
    </Card>
  )
}
