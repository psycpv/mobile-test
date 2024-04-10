import { useTheme } from 'styled-components'
import { toBN } from 'utils/numbers'
import { CloseGuides } from 'types/trade'
import { Amount, Label, Wrapper } from './styles'
import Item from 'components/App/UserPanel/CloseModal/Item'

export default function GuideOne({
  values,
  symbol,
  setSize,
}: {
  values: {
    maxClose: string
    maxPartiallyClose: string
    minPositionSize: string
    liquidationAfterClose: string
    state: CloseGuides
  }
  symbol?: string
  setSize: (size: string) => void
}) {
  const theme = useTheme()
  const { maxClose, maxPartiallyClose, minPositionSize } = values

  function getItemLabel(text: string): JSX.Element {
    return (
      <>
        <Label color={theme.almostWhite}>
          <div>{text}</div>
        </Label>
      </>
    )
  }

  function getItemAmount(value: string, symbol: string | undefined, onClick?: (amount: string) => void) {
    const active = onClick ? true : false

    const handleClick = () => {
      if (!onClick || !value) return
      onClick(value)
    }
    return (
      <Amount color={theme.almostWhite} onClick={handleClick} active={active} hoverColor={theme.blue}>
        {`${value} ${symbol}`}
      </Amount>
    )
  }

  return (
    <Wrapper>
      <Item
        label={getItemLabel('Current Position Size:')}
        amount={getItemAmount(maxClose, symbol, () => setSize(maxClose))}
      />

      <Item label={getItemLabel('Minimum Required to be Open:')} amount={getItemAmount(minPositionSize, symbol)} />

      <Item
        label={getItemLabel('Available for Partial Close:')}
        amount={
          toBN(maxPartiallyClose).isLessThanOrEqualTo(0) ? (
            <Amount>
              Use <span onClick={() => setSize(maxClose)}>Full close</span>
            </Amount>
          ) : (
            getItemAmount(maxPartiallyClose, symbol, () => setSize(maxPartiallyClose))
          )
        }
      />
    </Wrapper>
  )
}
