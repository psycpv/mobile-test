import React from 'react'
import styled from 'styled-components'
import Pagination from 'components/Pagination'
import { BalanceHistoryData, BalanceHistoryType } from 'state/user/types'
import { ReactPaginateProps } from 'react-paginate'
import { getTokenWithFallbackChainId } from 'utils/token'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { BN_TEN, formatAmount, formatDollarAmount, formatPrice, toBN } from 'utils/numbers'
import { COLLATERAL_DECIMALS } from 'constants/addresses'
import { formatTimestamp } from 'utils/time'
import { ThemedButton } from 'components/Button'
import { ExplorerDataType } from 'utils/explorers'
import { useWithdrawBarModalToggle } from 'state/application/hooks'
import { ExplorerLink } from 'components/Link'
import { ProcessedOpenPosition } from 'types/quote'
import { PositionType } from 'types/trade'
import { LongArrow, ShortArrow } from 'components/Icons'
import { ThemedText } from 'components/Text'
import ArrowRight from 'components/Icons/ArrowRight'
import { getUpnlValueAndColor } from 'hooks/useUpnlValueAndColor'
import { DailyAndCumulativePnlData } from 'types/user'
import GoToPositionLink from 'components/Link/GoToPositionLink'

interface TableProps<T> {
  paginationProps?: ReactPaginateProps
  data: T[]
}

interface TransactionHistoryTableProps extends TableProps<BalanceHistoryData> {
  withdrawPendingItemIndex: number | undefined
}

interface OpenPositionsTableProps extends TableProps<ProcessedOpenPosition> {
  positionsTotalValue: number
}

interface MyRewardsTableProps {
  data: any[]
}

const SimpleTable = styled.table`
  width: 100%;
`

const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    table {
      border: 0;
    }

    table caption {
      font-size: 1.3em;
    }

    table thead {
      border: none;
      clip: rect(0 0 0 0);
      display: none;
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    table tr {
      border-bottom: 1px solid #ddd;
      display: block;
      margin-bottom: 0.625em;
    }

    table td {
      display: block;
      font-size: 14px;
      text-align: right;
      padding-right: 0 !important;

      ${({ theme }) => theme.mobileFirstMediaWidth.fromSmall`
        font-size: 1rem;
      `}
    }

    table td::before {
      content: attr(data-label);
      float: left;
      font-weight: 400;
      color: #8d90b5;
      font-size: 14px;

      ${({ theme }) => theme.mobileFirstMediaWidth.fromSmall`
        font-size: 1rem;
      `}
    }

    table td:last-child {
      border-bottom: 0;
    }
  }
`

const SimpleTableRow = styled.tr``
const SimpleTableHead = styled.thead``

const SimpleTableHeaderItem = styled.th`
  font-weight: 400;
  text-align: left;
  color: #8d90b5;
  font-size: 12px;
  padding: 8px 0;

  ${({ theme }) => theme.mobileFirstMediaWidth.fromSmall`
    font-size: 14px;
  `}
`

const SimpleTableDataItem = styled.td`
  color: #ffffff;
  padding: 4px 0;

  ${({ theme }) => theme.mobileFirstMediaWidth.fromSmall`
    padding: 8px 0;
  `}
`

export const ThemedTables = {
  TransactionHistory({ data, paginationProps, withdrawPendingItemIndex }: TransactionHistoryTableProps) {
    const { chainId } = useActiveWeb3React()
    const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)
    const toggleWithdrawBarModal = useWithdrawBarModalToggle()

    return (
      <TableWrapper>
        <SimpleTable>
          <SimpleTableHead>
            <SimpleTableHeaderItem
              style={{
                paddingRight: '12px',
              }}
            >
              Token
            </SimpleTableHeaderItem>
            <SimpleTableHeaderItem
              style={{
                paddingRight: '24px',
              }}
            >
              Amount
            </SimpleTableHeaderItem>
            <SimpleTableHeaderItem
              style={{
                paddingRight: '24px',
              }}
            >
              Date
            </SimpleTableHeaderItem>
            <SimpleTableHeaderItem
              style={{
                paddingRight: '48px',
              }}
            >
              Status
            </SimpleTableHeaderItem>
            <SimpleTableHeaderItem
              style={{
                maxWidth: '140px !important',
              }}
            ></SimpleTableHeaderItem>
          </SimpleTableHead>

          {data.map(({ type, amount, timestamp, transaction }, index) => {
            return (
              <SimpleTableRow key={transaction}>
                <SimpleTableDataItem
                  style={{
                    paddingRight: '12px',
                  }}
                  data-label={'Token'}
                >
                  {collateralCurrency?.symbol}
                </SimpleTableDataItem>
                <SimpleTableDataItem
                  style={{
                    paddingRight: '24px',
                  }}
                  data-label={'Amount'}
                >
                  {chainId
                    ? type === BalanceHistoryType.DEALLOCATE_PARTY_A
                      ? formatAmount(toBN(amount).div(BN_TEN.pow(18)).toString(), undefined, true)
                      : formatAmount(
                          toBN(amount).div(BN_TEN.pow(COLLATERAL_DECIMALS[chainId])).toString(),
                          undefined,
                          true
                        )
                    : '...'}
                </SimpleTableDataItem>
                <SimpleTableDataItem
                  style={{
                    paddingRight: '24px',
                  }}
                  data-label={'Date'}
                >
                  {formatTimestamp(Number(timestamp) * 1000, 'YYYY-MM-DD HH:mm')}
                </SimpleTableDataItem>
                <SimpleTableDataItem
                  style={{
                    paddingRight: '48px',
                  }}
                  data-label={'Status'}
                >
                  {withdrawPendingItemIndex === index ? 'Pending' : 'Completed'}
                </SimpleTableDataItem>
                <SimpleTableDataItem
                  style={{
                    maxWidth: '140px !important',
                  }}
                >
                  {withdrawPendingItemIndex === index ? (
                    <ThemedButton.Text color={'#F0A7EB'} marginLeft={'auto'} onClick={toggleWithdrawBarModal}>
                      Cancel
                    </ThemedButton.Text>
                  ) : (
                    chainId && (
                      <ExplorerLink type={ExplorerDataType.TRANSACTION} chainId={chainId} value={transaction}>
                        <ThemedButton.Text color={'#F0A7EB'} marginLeft={'auto'}>
                          Details
                        </ThemedButton.Text>
                      </ExplorerLink>
                    )
                  )}
                </SimpleTableDataItem>
              </SimpleTableRow>
            )
          })}
        </SimpleTable>
        {paginationProps && <Pagination {...paginationProps} />}
      </TableWrapper>
    )
  },
  OpenPositions({ data, paginationProps, positionsTotalValue }: OpenPositionsTableProps) {
    const { chainId } = useActiveWeb3React()
    const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)

    return (
      <TableWrapper>
        <SimpleTable>
          <SimpleTableHead>
            <SimpleTableHeaderItem
              style={{
                paddingRight: '12px',
              }}
            >
              Type
            </SimpleTableHeaderItem>
            <SimpleTableHeaderItem
              style={{
                paddingRight: '24px',
              }}
            >
              Symbol
            </SimpleTableHeaderItem>
            <SimpleTableHeaderItem
              style={{
                paddingRight: '24px',
              }}
            >
              Value
            </SimpleTableHeaderItem>
            <SimpleTableHeaderItem
              style={{
                paddingRight: '48px',
              }}
            >
              %
            </SimpleTableHeaderItem>
            <SimpleTableHeaderItem
              style={{
                minWidth: '150px',
                paddingRight: '24px',
              }}
            >
              Unrealized PNL
            </SimpleTableHeaderItem>
            <SimpleTableHeaderItem
              style={{
                maxWidth: '140px !important',
              }}
            ></SimpleTableHeaderItem>
          </SimpleTableHead>

          {data.map((position) => {
            return (
              <SimpleTableRow key={position.id}>
                <SimpleTableDataItem
                  style={{
                    paddingRight: '12px',
                  }}
                  data-label={'Type'}
                >
                  {position.positionType === PositionType.LONG ? (
                    <LongArrow color={'#80BBF2'} width={16} height={12} />
                  ) : (
                    <ShortArrow color={'#F0A7EB'} width={16} height={12} />
                  )}
                </SimpleTableDataItem>
                <SimpleTableDataItem
                  style={{
                    paddingRight: '24px',
                  }}
                  data-label={'Symbol'}
                >
                  {position.symbol}
                </SimpleTableDataItem>
                <SimpleTableDataItem
                  style={{
                    paddingRight: '24px',
                  }}
                  data-label={'Value'}
                >
                  {formatDollarAmount(position.positionValue, { minimumDecimalPlaces: 2 })}
                </SimpleTableDataItem>
                <SimpleTableDataItem
                  style={{
                    paddingRight: '48px',
                  }}
                  data-label={'%'}
                >
                  {((position.positionValue * 100) / positionsTotalValue).toFixed(2)}
                </SimpleTableDataItem>
                <SimpleTableDataItem
                  style={{
                    minWidth: '150px',
                    paddingRight: '24px',
                  }}
                  data-label={'Unrealized PNL'}
                >
                  <ThemedText.White>
                    {getUpnlValueAndColor(String(position.upnl), { toFixedDecimalPlaces: 2 })[0]}
                    {position.upnlPercent > 0 ? (
                      <ThemedText.Green marginLeft={'8px'} display={'inline'}>
                        {position.upnlPercent.toFixed(2)}%
                      </ThemedText.Green>
                    ) : position.upnlPercent < 0 ? (
                      <ThemedText.Red marginLeft={'8px'} display={'inline'}>
                        {position.upnlPercent.toFixed(2)}%
                      </ThemedText.Red>
                    ) : (
                      <ThemedText.White marginLeft={'8px'} display={'inline'}>
                        0.00%
                      </ThemedText.White>
                    )}
                  </ThemedText.White>
                </SimpleTableDataItem>
                <SimpleTableDataItem
                  style={{
                    maxWidth: '140px !important',
                  }}
                >
                  <GoToPositionLink position={position}>
                    <ThemedButton.TextWithHoverIcon color={'#F0A7EB'} marginLeft={'auto'}>
                      Go to Position <ArrowRight width={16} height={12} color={'#F0A7EB'} />
                    </ThemedButton.TextWithHoverIcon>
                  </GoToPositionLink>
                </SimpleTableDataItem>
              </SimpleTableRow>
            )
          })}
        </SimpleTable>
        {paginationProps && <Pagination {...paginationProps} />}
      </TableWrapper>
    )
  },
  MyRewards({ data }: MyRewardsTableProps) {
    return (
      <TableWrapper>
        <SimpleTable>
          <SimpleTableHead>
            <SimpleTableHeaderItem
              style={{
                paddingRight: '12px',
                width: '20%',
              }}
            >
              Date
            </SimpleTableHeaderItem>
            <SimpleTableHeaderItem
              style={{
                paddingRight: '24px',
                width: '20%',
              }}
            >
              Volume Generated
            </SimpleTableHeaderItem>
            <SimpleTableHeaderItem
              style={{
                paddingRight: '24px',
                width: '20%',
              }}
            >
              My Reward
            </SimpleTableHeaderItem>
            <SimpleTableHeaderItem
              style={{
                paddingRight: '48px',
                width: '20%',
              }}
            >
              Current Value
            </SimpleTableHeaderItem>
            <SimpleTableHeaderItem
              style={{
                maxWidth: '140px !important',
                width: '20%',
              }}
            ></SimpleTableHeaderItem>
          </SimpleTableHead>

          {data.map((reward) => {
            return (
              <SimpleTableRow key={reward.id}>
                <SimpleTableDataItem
                  style={{
                    paddingRight: '12px',
                  }}
                  data-label={'Date'}
                >
                  {reward.date}
                </SimpleTableDataItem>
                <SimpleTableDataItem
                  style={{
                    paddingRight: '24px',
                  }}
                  data-label={'Volume Generated'}
                >
                  {reward.volumeGenerated}
                </SimpleTableDataItem>
                <SimpleTableDataItem
                  style={{
                    paddingRight: '24px',
                  }}
                  data-label={'My Reward'}
                >
                  {reward.myReward}
                </SimpleTableDataItem>
                <SimpleTableDataItem
                  style={{
                    paddingRight: '48px',
                  }}
                  data-label={'Current Value'}
                >
                  {reward.currentValue}
                </SimpleTableDataItem>
                <SimpleTableDataItem
                  style={{
                    maxWidth: '140px !important',
                    textAlign: 'right',
                  }}
                >
                  {Math.random() > 0.5 ? (
                    <ThemedButton.Primary marginLeft={'auto'}>Claim</ThemedButton.Primary>
                  ) : (
                    <ThemedButton.Primary disabled marginLeft={'auto'}>
                      Claimed
                    </ThemedButton.Primary>
                  )}
                </SimpleTableDataItem>
              </SimpleTableRow>
            )
          })}
        </SimpleTable>
        {/*{paginationProps && <Pagination {...paginationProps} />}*/}
        <Pagination pageCount={2} />
      </TableWrapper>
    )
  },
  PnlDetails({ data, paginationProps }: TableProps<DailyAndCumulativePnlData>) {
    const { chainId } = useActiveWeb3React()
    const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)

    return (
      <TableWrapper>
        <SimpleTable>
          <SimpleTableHead>
            <SimpleTableHeaderItem
              style={{
                width: '20%',
              }}
            >
              Date
            </SimpleTableHeaderItem>
            <SimpleTableHeaderItem
              style={{
                width: '20%',
              }}
            >
              ≈ Daily PNL
            </SimpleTableHeaderItem>
            <SimpleTableHeaderItem
              style={{
                width: '20%',
              }}
            >
              ≈ Cumulative PNL $
            </SimpleTableHeaderItem>
            <SimpleTableHeaderItem
              style={{
                width: '20%',
              }}
            >
              Cumulative PNL %
            </SimpleTableHeaderItem>
            <SimpleTableHeaderItem
              style={{
                width: '20%',
              }}
            >
              Net Transfer
            </SimpleTableHeaderItem>
          </SimpleTableHead>

          {data.map((dailyData) => {
            return (
              <SimpleTableRow key={dailyData.date.toISOString()}>
                <SimpleTableDataItem data-label={'Date'}>
                  {dailyData.date.getDate()}/{dailyData.date.getMonth() + 1}/{dailyData.date.getFullYear()}
                </SimpleTableDataItem>
                <SimpleTableDataItem data-label={'Daily PNL'}>
                  {formatPrice(formatAmount(dailyData.pnl))} {collateralCurrency?.symbol}
                </SimpleTableDataItem>
                <SimpleTableDataItem data-label={'Cumulative PNL $'}>
                  {formatDollarAmount(dailyData.cumulativePnl, { minimumDecimalPlaces: 2 })}
                </SimpleTableDataItem>
                <SimpleTableDataItem data-label={'Cumulative PNL %'}>
                  {dailyData.cumulativePnlPercent.toFixed(2)}
                </SimpleTableDataItem>
                <SimpleTableDataItem data-label={'Net Transfer'}>
                  {formatAmount(formatPrice(dailyData.netTransfer))} {collateralCurrency?.symbol}
                </SimpleTableDataItem>
              </SimpleTableRow>
            )
          })}
        </SimpleTable>
        {paginationProps && <Pagination {...paginationProps} />}
      </TableWrapper>
    )
  },
  Simple({ columns, data }: any) {
    return (
      <TableWrapper>
        <SimpleTable>
          <SimpleTableHead>
            {columns.map((column: any) => (
              <SimpleTableHeaderItem key={column.name} style={column.columnStyle}>
                {column.name}
              </SimpleTableHeaderItem>
            ))}
          </SimpleTableHead>

          {data.map((row: any) => {
            return (
              <SimpleTableRow key={row}>
                {columns.map((column: any) => (
                  <SimpleTableDataItem data-label={column.name} style={column.columnStyle} key={column.name}>
                    {column.selector(row)}
                  </SimpleTableDataItem>
                ))}
              </SimpleTableRow>
            )
          })}
        </SimpleTable>
        <Pagination pageCount={30} />
      </TableWrapper>
    )
  },
}
