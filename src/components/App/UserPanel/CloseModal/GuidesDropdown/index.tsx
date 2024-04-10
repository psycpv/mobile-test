import { useState, memo } from 'react'
import styled from 'styled-components'

import { CloseGuides } from 'types/trade'

import Column from 'components/Column'
import { Row, RowEnd } from 'components/Row'
import { ChevronDown } from 'components/Icons'
import { Card } from 'components/Card'
import GuideOne from './GuideOne'
import GuideTwo from './GuideTwo'
import GuideThree from './GuideThree'

const ContentContainer = styled(Column)`
  gap: 5px;
  border-radius: 6px;
  background: ${({ theme }) => theme.color3};
`

const DropdownHeader = styled(Row)<{ borderBottom?: boolean }>`
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;
  background: ${({ theme }) => theme.color3};
`

const DropdownContent = styled(Card)<{ isOpen: boolean }>`
  gap: 12px;
  padding: 0px 8px 12px;
  max-height: 120px;
  border: none;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  background: ${({ theme }) => theme.color3};
`

const Chevron = styled(ChevronDown)<{ open: boolean }>`
  transform: rotateX(${({ open }) => (open ? '180deg' : '0deg')});
  margin-right: 4px;
  transition: 0.5s;
`

const Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  white-space: nowrap;
  color: ${({ theme }) => theme.almostWhite};
`

export default memo(function GuidesDropDown({
  symbol,
  setSize,
  values,
}: {
  symbol?: string
  setSize: (size: string) => void
  values: {
    maxClose: string
    maxPartiallyClose: string
    minPositionSize: string
    liquidationAfterClose: string
    state: CloseGuides
  }
}) {
  const [border, setBorder] = useState(false)

  function getTriggers(): React.ReactElement<any> | string {
    return (
      <DropdownHeader borderBottom={border} onClick={() => setBorder(!border)}>
        <Text>
          <div>Partial Close</div>
        </Text>
        <RowEnd>
          <Chevron open={border} />
        </RowEnd>
      </DropdownHeader>
    )
  }

  function GetContent(): JSX.Element {
    const { state } = values

    switch (state) {
      case CloseGuides.ONE:
        return <GuideOne values={values} symbol={symbol} setSize={setSize} />
      case CloseGuides.TWO:
        return <GuideTwo values={values} symbol={symbol} setSize={setSize} />
      case CloseGuides.THREE:
        return <GuideThree values={values} symbol={symbol} setSize={setSize} />
      default:
        return <></>
    }
  }

  return (
    <>
      <ContentContainer>
        {getTriggers()}
        <DropdownContent isOpen={border}>
          <GetContent />
        </DropdownContent>
      </ContentContainer>
    </>
  )
})
