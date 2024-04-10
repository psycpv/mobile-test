/* eslint-disable react-hooks/exhaustive-deps */
import BigNumber from 'bignumber.js'
import AnimationLoader from 'components/Animation/AnimationLoader'
import { ContextError, useInvalidContext } from 'components/InvalidContext'
import useAccountData from 'hooks/useAccountData'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
// @ts-ignore
import { Textfit } from '@ayushmw/react-textfit'
import { useShowFlash } from 'state/application/hooks'
import { usePositionsQuotes } from 'state/quotes/hooks'
import { useAllTransactions } from 'state/transactions/hooks'
import styled from 'styled-components'
import useSound from 'use-sound'
import { formatAmount, toBN } from 'utils/numbers'
import Flash from 'components/Layout/Flash'
import { useActiveAccount, useSoundEffects } from 'state/user/hooks'

const AccountHealthWrapper = styled.div<{ color: string }>`
  align-items: center;
  border: solid 3px ${(props) => props.color};
  border-radius: 6px;
  color: white;
  display: flex;
  flex-direction: row;
  margin: 0 12px 6px;
  position: relative;

  & > div {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 10px;
`

const TitleWrapper = styled.div<{ color: string }>`
  background: linear-gradient(183deg, ${(props) => props.color} 28.97%, #fff 73.54%);
  font-family: Londrina Solid;
  font-style: normal;
  display: flex;
  height: 80px;
  line-height: 80px;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  & > div {
    width: calc(100% - 8px);
    padding: 0 4px;
  }
`

const SubtitleWrapper = styled.span`
  font-family: Londrina Solid;
  font-size: 28px;
  font-style: normal;
  line-height: 28px;
  height: 50px;
  display: flex;
  align-items: center;
`

const AnimationWrapper = styled.div<{ color: string }>`
  height: 150px;
  display: flex;
  justify-content: center;
  border-left: solid 3px ${(props) => props.color};
  border-right: solid 3px ${(props) => props.color};
  overflow: visible !important;
  pointer-events: none;
`

export default function AccountOverview() {
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

  const validatedContext = useInvalidContext()
  if (validatedContext !== ContextError.VALID) return <></>

  return (
    <AccountHealthWrapper color={healthStatus.color}>
      <Wrapper>
        <TitleWrapper color={healthStatus.color}>
          <Textfit mode="single" forceSingleModeWidth>
            {accountHealth === 'NaN'
              ? 'Loading'
              : formatAmount(accountHealth, toBN(accountHealth).gt(100) ? 4 : 3) + '%'}
          </Textfit>
        </TitleWrapper>
        <SubtitleWrapper>HEALTH</SubtitleWrapper>
      </Wrapper>
      {healthStatus.face && (
        <AnimationWrapper color={healthStatus.color}>
          {faceType === 'image' ? (
            <Image src={require(`/public/static/images/faces/${face}`)} alt={face} width={120} height={120} />
          ) : (
            <>
              <AnimationLoader
                name={face}
                style={{
                  width: '100%',
                  position: 'relative',
                  top: face === '_loading' ? -8 : -17,
                }}
              />
            </>
          )}
        </AnimationWrapper>
      )}
      <Wrapper>
        <TitleWrapper color={healthStatus.color}>
          <Textfit mode="single" forceSingleModeWidth max={90}>
            {healthStatus.state}
          </Textfit>
        </TitleWrapper>
        <SubtitleWrapper>STATE</SubtitleWrapper>
      </Wrapper>
      <Flash />
    </AccountHealthWrapper>
  )
}
