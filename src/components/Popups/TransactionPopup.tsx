import styled, { useTheme } from 'styled-components'

import { FALLBACK_CHAIN_ID } from 'constants/chains'
import { ExplorerDataType } from 'utils/explorers'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useTransaction } from 'state/transactions/hooks'

import { ExplorerLink } from 'components/Link'
import { Row, RowStart } from 'components/Row'
import TransactionSummary from 'components/Summaries/TransactionSummary '
import { TransactionInfo } from 'state/transactions/types'

const Wrapper = styled(Row)`
  color: ${({ theme }) => theme.almostWhite};

  // & * {
  //   font-size: 14px;
  // }
`

export default function TransactionPopup({
  content,
}: {
  content: {
    txn: {
      hash: string
      success: boolean
      summary?: string
      info?: TransactionInfo
    }
  }
}) {
  const { chainId } = useActiveWeb3React()
  const theme = useTheme()
  const {
    txn: { hash, summary, success },
  } = content
  const tx = useTransaction(hash)
  const status = success ? 'submitted' : 'failed'

  return (
    <Wrapper>
      <RowStart gap="8px">
        <ExplorerLink
          chainId={chainId ?? FALLBACK_CHAIN_ID}
          type={ExplorerDataType.TRANSACTION}
          value={hash}
          style={{
            height: '100%',
            color: success ? theme.almostWhite : theme.warning,
            fontSize: '12px',
            fontWeight: '500',
          }}
        >
          <TransactionSummary info={tx?.info} summary={summary} status={status} />
        </ExplorerLink>
      </RowStart>
    </Wrapper>
  )
}
