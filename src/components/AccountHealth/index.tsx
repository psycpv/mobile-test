/* eslint-disable react-hooks/exhaustive-deps */
import BigNumber from 'bignumber.js'
import AnimationLoader from 'components/Animation/AnimationLoader'
import { ContextError, useInvalidContext } from 'components/InvalidContext'
import useAccountData from 'hooks/useAccountData'
import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
// @ts-ignore
import { useShowFlash } from 'state/application/hooks'
import { usePositionsQuotes } from 'state/quotes/hooks'
import { useAllTransactions } from 'state/transactions/hooks'
import styled from 'styled-components'
import useSound from 'use-sound'
import { formatAmount, toBN } from 'utils/numbers'
import Flash from 'components/Layout/Flash'
import { useActiveAccount, useSoundEffects } from 'state/user/hooks'
import useWindowSize from 'lib/hooks/useWindowSize'

const AccountHealthWrapper = styled.div<{ color: string }>`
  display: flex;
  height: 100%;
  align-items: center;
  border: solid 2px ${(props) => props.color};
  border-radius: 6px;
  color: white;
  flex-direction: row;
  position: relative;

  & > div {
    align-items: center;
    display: flex;
    flex: 1;
    overflow: hidden;
  }
`
const Wrapper = styled.div<{ orientation: 'horizontal' | 'vertical' }>`
  display: flex;
  flex: ${(props) => (props.orientation === 'horizontal' ? 2 : 1)} !important;
  flex-direction: ${(props) => (props.orientation === 'horizontal' ? 'row-reverse' : 'column')};
  height: 100%;
  padding: 2.5%;
  align-items: center;
  gap: ${(props) => (props.orientation === 'horizontal' ? '12px' : '0px')};
  justify-content: center;
`

const TitleWrapper = styled.div<{ color: string; orientation: 'horizontal' | 'vertical' }>`
  background: linear-gradient(183deg, ${(props) => props.color} 28.97%, #fff 73.54%);
  font-family: Londrina Solid, sans-serif;
  font-style: normal;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: ${(props) => (props.orientation === 'horizontal' ? 'clamp(28px,3vw,48px)' : 'clamp(24px,3vw,48px)')};

  ${({ theme, orientation }) => theme.mediaWidth.upToMedium`
    font-size: ${orientation === 'horizontal' ? 'clamp(32px,6vw,36px)' : 'clamp(40px,10vw,52px)'};    
  `}
`

const SubtitleWrapper = styled.span<{
  orientation: 'horizontal' | 'vertical'
}>`
  font-family: Londrina Solid, sans-serif;
  font-size: ${(props) => (props.orientation === 'horizontal' ? 'clamp(18px,1.5vw,20px)' : 'clamp(16px,1vw,24px)')};

  ${({ theme, orientation }) => theme.mediaWidth.upToMedium`
    font-size: ${orientation === 'horizontal' ? 'clamp(14px,4.5vw,24px)' : 'clamp(16px,5vw,20px)'};    
  `}
`

const AnimationWrapper = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0 !important;
  border-left: solid 2px ${(props) => props.color};
  border-right: solid 2px ${(props) => props.color};
  overflow: hidden !important;
  align-self: stretch;
`

export default function AccountHealth({ orientation = 'horizontal' }: { orientation: 'horizontal' | 'vertical' }) {
  const { quotes } = usePositionsQuotes()
  const { name } = useActiveAccount() || {}
  const soundEffectEnabled = useSoundEffects()

  const {
    accountHealthData: { health: accountHealth, healthStatus },
  } = useAccountData()

  const [redFace, showRedFace] = useState('default')
  const [forceNoRedFace, setForceNoRedFace] = useState(false)
  const [actionsPlay] = useSound('/static/audio/actions.mp3')
  const [downUnder100Play] = useSound('/static/audio/down-under-100.mp3')
  const [upUnder100Play] = useSound('/static/audio/up-under100.mp3')
  const [up125_250Play] = useSound('/static/audio/up-125-250.mp3')
  const [up250_500Play] = useSound('/static/audio/up-250-500.mp3')
  const [up500Play] = useSound('/static/audio/up-500.mp3')

  const faceType = useMemo(() => {
    if (redFace !== 'default') return 'animation'
    return healthStatus.type
  }, [healthStatus, redFace])

  const face = useMemo(() => {
    if (redFace !== 'default') return redFace
    return healthStatus.face
  }, [healthStatus, redFace])

  const playAndShow = (face: string, soundPlay?: any) => {
    if (!forceNoRedFace) {
      if (soundPlay && soundEffectEnabled) soundPlay()
      showRedFace(face)
      setForceNoRedFace(true)
      setTimeout(() => {
        showRedFace('default')
        setForceNoRedFace(false)
      }, 3000)
    }
  }
  const showFlash = useShowFlash()

  useEffect(() => {
    setForceNoRedFace(true)
    setTimeout(() => {
      setForceNoRedFace(false)
    }, 3000)
  }, [name])

  const [prevTxCount, setNewTxCount] = useState(0)
  const allTransactions = useAllTransactions()
  useEffect(() => {
    let newTxCount = 0
    for (const txHash in allTransactions) {
      const tx = allTransactions[txHash]
      if (tx.summary == 'depositAndAllocateForAccount') newTxCount++
    }
    if (prevTxCount !== newTxCount) {
      playAndShow(healthStatus.smile, actionsPlay)
    }
    setNewTxCount(newTxCount)
  }, [allTransactions])

  const breakpoints = [0, 5, 25, 50, 75, 125, 250, 500, 1000]

  const [prevAccountHealth, setNewAccountHealth] = useState<BigNumber | undefined>(undefined)
  const [minHealth, setMinHealth] = useState(toBN(accountHealth))
  const [maxHealth, setMaxHealth] = useState(toBN(accountHealth))
  useEffect(() => {
    let i
    const newAccountHealth = toBN(accountHealth)

    if (prevAccountHealth === undefined) {
      i = breakpoints.length - 1
    } else {
      const lower = prevAccountHealth.lt(newAccountHealth) ? prevAccountHealth : newAccountHealth
      const higher = prevAccountHealth.gt(newAccountHealth) ? prevAccountHealth : newAccountHealth
      const isGrowing = prevAccountHealth.lt(newAccountHealth) ? true : false

      for (i = 1; i < breakpoints.length - 1; i++) {
        const ptIdx = isGrowing ? breakpoints.length - 1 - i : i
        const it = breakpoints[ptIdx]
        if (lower.lte(it) && higher.gte(it)) {
          if (minHealth.lte((it + breakpoints[ptIdx - 1]) / 2) || maxHealth.gte((it + breakpoints[ptIdx + 1]) / 2)) {
            setMinHealth(newAccountHealth)
            setMaxHealth(newAccountHealth)
            if (isGrowing) {
              if (it < 100) {
                playAndShow(healthStatus.smile, upUnder100Play)
              } else if (it < 250) {
                playAndShow(healthStatus.smile, up125_250Play)
              } else if (it < 500) {
                playAndShow(healthStatus.smile, up250_500Play)
              } else {
                playAndShow(healthStatus.smile, up500Play)
              }
              showFlash(Date.now(), 'increase', healthStatus.color)
            } else {
              if (it < 100) {
                playAndShow(healthStatus.frown, downUnder100Play)
              }
              showFlash(Date.now(), 'decrease', healthStatus.color)
            }
            break
          }
        }
      }
    }

    if (i === breakpoints.length - 1) {
      const min = minHealth.lt(newAccountHealth) ? minHealth : newAccountHealth
      const max = maxHealth.gt(newAccountHealth) ? maxHealth : newAccountHealth
      setMinHealth(min)
      setMaxHealth(max)
    }

    setNewAccountHealth(newAccountHealth)
  }, [accountHealth])

  const [prevQuoteCount, setNewQuoteCount] = useState(0)
  useEffect(() => {
    const newQuoteCount = quotes.length
    if (prevQuoteCount !== newQuoteCount) {
      playAndShow(healthStatus.smile, actionsPlay)
    }
    setNewQuoteCount(newQuoteCount)
  }, [quotes])

  const { width } = useWindowSize()
  const faceAnimationWrapperRef = useRef<HTMLDivElement>(null)

  const [gifWidth, setGifWidth] = useState('0')

  useEffect(() => {
    if (faceAnimationWrapperRef.current) {
      const wrapperWidth = faceAnimationWrapperRef.current.clientWidth
      setGifWidth(`${wrapperWidth * 0.6}px`)
    }
  }, [width, faceAnimationWrapperRef.current])

  const validatedContext = useInvalidContext()
  if (validatedContext !== ContextError.VALID) return <></>

  return (
    <AccountHealthWrapper color={healthStatus.color}>
      <Wrapper orientation={orientation}>
        <TitleWrapper orientation={orientation} color={healthStatus.color}>
          {/*<Textfit mode="single" forceSingleModeWidth>*/}
          {accountHealth === 'NaN' ? 'Loading' : formatAmount(accountHealth, toBN(accountHealth).gt(100) ? 4 : 3) + '%'}
          {/*</Textfit>*/}
        </TitleWrapper>
        <SubtitleWrapper orientation={orientation}>HEALTH</SubtitleWrapper>
      </Wrapper>
      {healthStatus.face && (
        <AnimationWrapper ref={faceAnimationWrapperRef} color={healthStatus.color}>
          {faceType === 'image' ? (
            <Image src={require(`/public/static/images/faces/${face}`)} alt={face} width={120} height={120} />
          ) : (
            <>
              <AnimationLoader
                name={face}
                style={{
                  width: gifWidth,
                  position: 'relative',
                  transform: 'translateY(-5%)',
                }}
              />
            </>
          )}
        </AnimationWrapper>
      )}
      <Wrapper orientation={orientation}>
        <TitleWrapper orientation={orientation} color={healthStatus.color}>
          {/*<Textfit mode="single" forceSingleModeWidth max={90}>*/}
          {healthStatus.state}
          {/*</Textfit>*/}
        </TitleWrapper>
        <SubtitleWrapper orientation={orientation}>STATE</SubtitleWrapper>
      </Wrapper>
      <Flash />
    </AccountHealthWrapper>
  )
}
