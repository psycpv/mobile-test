import { ThemedText } from 'components/Text'
import { Row } from 'components/Row'
import { ThemedButton } from 'components/Button'
import Withdraw from 'components/Icons/Withdraw'
import Deposit from 'components/Icons/Deposit'
import { ThemedModal } from 'components/Modal'
import React, { useEffect, useMemo, useState } from 'react'
import { ThemedTables } from 'components/Table'
import styled, { useTheme } from 'styled-components'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useActiveAccountAddress, useUpnlWebSocketStatus } from 'state/user/hooks'
import { BalanceHistoryData, BalanceHistoryType } from 'state/user/types'
import { getBalanceHistoryQueryCall } from 'apollo/service'
import useWithdrawCooldownTimeRemaining from 'hooks/useWithdrawCooldownTimeRemaining'

const TableWrapper = styled.div`
  overflow: auto;
  max-height: 40vh;
`

export const TransactionsHistoryModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) => {
  const visibleItemCount = 7
  const { chainId } = useActiveWeb3React()
  const activeAccountAddress = useActiveAccountAddress()

  const upnlWebSocketStatus = useUpnlWebSocketStatus()
  const [balanceHistoryItems, setBalanceHistoryItems] = useState<BalanceHistoryData[] | null>(null)

  const [pageIndex, setPageIndex] = useState(0)
  const [isWithdrawTab, setIsWithdrawTab] = useState<boolean>(true)

  useEffect(() => {
    async function getAllBalanceHistory() {
      if (!chainId || !activeAccountAddress) return
      let skip = 0
      const result: BalanceHistoryData[] = []
      let chunkResult: BalanceHistoryData[] = []
      do {
        chunkResult = await getBalanceHistoryQueryCall({
          chainId,
          account: activeAccountAddress,
          skip,
          first: 1000,
        })
        result.push(...chunkResult)
        skip += chunkResult.length
      } while (chunkResult.length === 1000 && skip <= 5000)
      setBalanceHistoryItems(result)
    }

    getAllBalanceHistory()
  }, [activeAccountAddress, chainId])

  const balanceHistoryItemsFiltered = useMemo(() => {
    return balanceHistoryItems?.filter((b) =>
      isWithdrawTab ? b.type !== BalanceHistoryType.DEPOSIT_PARTY_A : b.type === BalanceHistoryType.DEPOSIT_PARTY_A
    )
  }, [balanceHistoryItems, isWithdrawTab])

  const balanceHistoryItemsVisible = useMemo(() => {
    const startIndex = pageIndex * visibleItemCount
    return balanceHistoryItemsFiltered?.slice(startIndex, startIndex + visibleItemCount)
  }, [balanceHistoryItemsFiltered, pageIndex])

  const cooldownTimeRemaining = useWithdrawCooldownTimeRemaining()

  const withdrawPendingItemIndex = useMemo(() => {
    if (!isWithdrawTab || pageIndex > 1) return undefined
    const index = balanceHistoryItemsFiltered?.findIndex((b) => b.type === BalanceHistoryType.DEALLOCATE_PARTY_A)
    return cooldownTimeRemaining > 0 ? index : undefined
  }, [balanceHistoryItemsFiltered, cooldownTimeRemaining, isWithdrawTab, pageIndex])

  const theme = useTheme()

  return (
    <ThemedModal.Simple size="md" isOpen={isOpen} toggleModal={() => setIsOpen(false)}>
      <ThemedText.P4 marginBottom={'20px'}>Transaction History</ThemedText.P4>
      <Row gap={'16px'} marginBottom={'16px'}>
        <ThemedButton.SelectText isSelect={isWithdrawTab} onClick={() => setIsWithdrawTab(true)}>
          <Withdraw
            width="14px"
            height="14px"
            smWidth="18px"
            smHeight="18px"
            color={isWithdrawTab ? theme.pink1 : theme.coolGrey}
            marginRight="4px"
          />
          <ThemedText.P5 color={theme.pink1}>Withdraw</ThemedText.P5>
        </ThemedButton.SelectText>
        <ThemedButton.SelectText isSelect={!isWithdrawTab} onClick={() => setIsWithdrawTab(false)}>
          <Deposit
            width="14px"
            height="14px"
            smWidth="18px"
            smHeight="18px"
            color={!isWithdrawTab ? theme.blue6 : theme.coolGrey}
            marginRight="4px"
          />

          <ThemedText.P5 color={theme.blue6}>Deposit</ThemedText.P5>
        </ThemedButton.SelectText>
      </Row>
      <TableWrapper>
        {balanceHistoryItemsVisible && (
          <ThemedTables.TransactionHistory
            data={balanceHistoryItemsVisible}
            withdrawPendingItemIndex={withdrawPendingItemIndex}
            paginationProps={{
              onPageChange({ selected }) {
                setPageIndex(selected)
              },
              pageCount: Math.ceil((balanceHistoryItemsFiltered?.length ?? 0) / visibleItemCount),
            }}
          />
        )}
      </TableWrapper>
    </ThemedModal.Simple>
  )
}
