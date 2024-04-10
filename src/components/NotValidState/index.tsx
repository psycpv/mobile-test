import styled from 'styled-components'
import { ColumnCenter } from 'components/Column'
import { SadComponent } from 'components/SadComponent'
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  background: ${({ theme }) => theme.color2};
`
export function NotValidState({ text }: { text: string }) {
  return (
    <Wrapper>
      <ColumnCenter style={{ marginTop: '25px' }}>
        <SadComponent text={text} mode={false} iconSize={200} />
      </ColumnCenter>
    </Wrapper>
  )
}
