import styled from 'styled-components'

import { Row, RowBetween } from 'components/Row'
import Column from 'components/Column'
import { ChevronDown } from 'components/Icons'

const TableStructure = styled(RowBetween)`
  font-size: 1.1rem;
  text-align: left;

  & > * {
    width: 40%;

    &:nth-child(1) {
      width: 65%;
    }
  }
`

const HeaderBar = styled(TableStructure)`
  color: ${({ theme }) => theme.text4};
  background-color: ${({ theme }) => theme.color3};
  padding: 12px 6px 12px 6px;
`

const Header = styled(Row)<{ isSymbol: boolean }>`
  cursor: pointer;
`

const ChevronSort = styled(ChevronDown)<{ desc: boolean }>`
  transform: rotateX(${({ desc }) => (desc ? '180deg' : '0deg')});
`

const SortButton = styled(Column)`
  margin-left: 4px;
  margin-top: 2px;
  gap: 1px;
`

const SortField = styled.div<{ active: boolean }>`
  color: ${({ active, theme }) => (active ? theme.text4 : theme.text3)};
`

const HEADERS = ['Symbol', 'Last Price']
const FIELDS = ['symbol', 'price']

export default function CurrencyHeader({
  sortField,
  sortOrder,
  setSortField,
  setSortOrder,
}: {
  sortField: string
  sortOrder: boolean
  setSortField: any
  setSortOrder: any
}): JSX.Element | null {
  return (
    <HeaderBar>
      {HEADERS.map((item, key) => {
        return (
          <Header
            isSymbol={key == 0}
            key={key}
            onClick={() => {
              setSortOrder(sortField !== FIELDS[key] ? true : !sortOrder)
              setSortField(sortField === FIELDS[key] && !sortOrder ? '' : FIELDS[key])
            }}
          >
            {item !== '' && (
              <>
                <SortField active={sortField === FIELDS[key]}>{item}</SortField>
                <SortButton>
                  <ChevronSort
                    width={7}
                    color={sortField === FIELDS[key] && sortOrder ? '#fff' : '#8D90B5'}
                    desc="true"
                  />
                  <ChevronSort width={7} color={sortField === FIELDS[key] && !sortOrder ? '#fff' : '#8D90B5'} />
                </SortButton>
              </>
            )}
          </Header>
        )
      })}
    </HeaderBar>
  )
}
