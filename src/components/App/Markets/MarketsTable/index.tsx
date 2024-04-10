import styled from 'styled-components'

import { useMarketsSearch } from 'hooks/useMarkets'

import TableBody from './Body'
import TableHeader from './Header'
import { RowBetween } from 'components/Row'
import { InputField } from 'components/App/MarketBar/InputField'

const TableWrapper = styled.div`
  border-radius: 4px;
`

const Title = styled(RowBetween)`
  padding: 8px 12px 0 16px;
  border-radius: 4px 4px 0 0;
  background-color: ${({ theme }) => theme.bg0};
`

const InputWrapper = styled.div`
  width: 244px;

  & > * {
    &:first-child {
      & > * {
        &:first-child {
          border-right: none;
        }
        &:last-child::placeholder {
          color: ${({ theme }) => theme.text4};
          font-size: 12px;
        }
      }
    }
  }
`

export default function Table() {
  const { markets, searchValue, setSearchValue } = useMarketsSearch()

  return (
    <TableWrapper>
      <Title>
        <div>Markets</div>
        <InputWrapper>
          <InputField searchValue={searchValue} setSearchValue={setSearchValue} placeholder={'Search Name'} />
        </InputWrapper>
      </Title>
      <TableHeader HEADERS={['', 'Name', 'Price', '24h Change', '24h Volume', 'Notional Cap', 'Action']} />
      <TableBody markets={markets} searchValue={searchValue} />
    </TableWrapper>
  )
}
