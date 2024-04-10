import Column from 'components/Column'
import { RowEnd } from 'components/Row'
import React, { useEffect, useRef } from 'react'
import { useSoundEffects } from 'state/user/hooks'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 16px;
  text-align: center;
`
const DigitsWrapper = styled(RowEnd)`
  align-items: flex-end;
  height: 25px;
  margin-top: 7px;
  overflow: hidden;
  line-height: 2;
  $d: 0;
  $inc: 0.375;
  @for $i from 1 through 20 {
    &:nth-child(#{$i}) > span {
      transition-delay: #{$d * 1s};
    }
    $d: $d + $inc;
  }
`
const DigitWrapper = styled(Column)`
  height: 18px;
  transition: transform 0.5s ease;
  transform: translateY(0);
  gap: 10px;
`
const SingleDigit = styled.div`
  height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const DigitList = Array.from({ length: 10 }, (_, i) => <SingleDigit key={i}>{i}</SingleDigit>)
function constructListValue(size: number) {
  const FinalList = []
  for (let i = 0; i < size; i++) {
    FinalList.push(<DigitWrapper key={i}>{DigitList}</DigitWrapper>)
  }
  return FinalList
}

const CounterNumber = ({ targetNumber, duration = 2 }: { targetNumber: string | undefined; duration: number }) => {
  const numberPartition = targetNumber ? targetNumber.split('.') : ['']
  const isFractional = numberPartition.length > 1
  const numberOfInt = numberPartition[0].split('').length
  const numberOfFrac = isFractional ? numberPartition[1].split('').length : 0
  const digitsRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const soundEffectEnabled = useSoundEffects()

  const intComponent = constructListValue(numberOfInt)
  const fracComponent = constructListValue(numberOfFrac)

  useEffect(() => {
    const digitRef = digitsRef?.current?.children
    if (!digitRef) return
    if (audioRef?.current?.play && Number(targetNumber) > 0 && soundEffectEnabled) audioRef.current.play()
    const newInt = numberPartition[0].split('').map(Number) || []
    const newFrac = isFractional ? numberPartition[1].split('').map(Number) : []
    let fracMode = false
    let numberIndex = 0
    for (let i = 0; i < digitRef.length; i += 1) {
      const digitElement = digitRef[i] as HTMLDivElement
      const dv = digitElement.textContent
      if (dv === '.') {
        fracMode = true
        numberIndex = 0
        continue
      }
      const targetNewValue = fracMode ? newFrac : newInt
      const numTransform = targetNewValue[numberIndex] * -28
      numberIndex += 1
      setTimeout(() => {
        digitElement.style.transition = `transform ${duration}s ease`
        digitElement.style.transform = `translateY(${numTransform}px)`
      }, 500)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetNumber])

  return (
    <Container>
      {targetNumber ? (
        <DigitsWrapper ref={digitsRef}>
          {intComponent.map((value) => value)}
          <SingleDigit>{fracComponent.length > 0 ? '.' : ''}</SingleDigit>
          {fracComponent.map((value) => value)}
        </DigitsWrapper>
      ) : (
        <div>---</div>
      )}

      <audio ref={audioRef}>
        <source src="/static/audio/KaChing.mp3" type="audio/mpeg" />
      </audio>
    </Container>
  )
}
export default React.memo(CounterNumber)
