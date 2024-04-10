import styled from 'styled-components'

import { formatDollarAmount, formatPrice } from 'utils/numbers'
import useAccountBalanceStats from 'hooks/useAccountBalanceStats'

export const UpnlValue = styled.div<{ size?: string }>`
  font-weight: 400;
  overflow-y: scroll;
  font-size: ${({ size }) => size ?? '14px'};
  color: ${({ theme }) => theme.blue};
  ${({ theme, size }) => theme.mediaWidth.upToMedium`
    font-size: ${size ?? '12px'};
  `};
`

export default function AccountUpnl({ size }: { size?: string }) {
  const { availableForOrder } = useAccountBalanceStats()

  return <UpnlValue size={size}>{formatDollarAmount(formatPrice(availableForOrder))}</UpnlValue>
}
