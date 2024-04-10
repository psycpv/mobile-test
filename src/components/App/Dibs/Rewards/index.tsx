import { useRef, useState } from 'react'
import styled from 'styled-components'
import { truncateAddress } from 'utils/address'
import { useDibs } from 'hooks/useDibs'
import useOnOutsideClick from 'lib/hooks/useOnOutsideClick'
import Copy from 'components/Copy'
import RewardsTable from '../RewardsTable'
import { Row } from 'components/Row'
import { DibsCalender } from '../DibsCalender'
import { SadComponent } from 'components/SadComponent'
import { MintRewards } from '../MintRewards'
import { Timer } from '../Timer'
import { useActiveAccount } from 'state/user/hooks'
import { useIsMobile } from 'lib/hooks/useWindowSize'

const Container = styled.div`
  padding: 20px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 10px 0px;
  `}
`

const LeftWrapper = styled(Row)`
  width: unset;
  color: ${({ theme }) => theme.almostWhite};
  font-size: 22px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 18px;
    justify-content: flex-start;
  `}
`

const AccountAddress = styled(Row)`
  color: ${({ theme }) => theme.pink};
  width: unset;
`

const CopyWrapper = styled.div`
  margin-left: 2px;
  margin-top: 4px;
`

const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;

  ${({ theme }) => theme.mediaWidth.upToLarge`
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
  `}
`

const SadWrapper = styled.div`
  margin-top: 30px;
`

export default function Rewards() {
  const activeAccount = useActiveAccount()
  const [showCalender, setShowCalender] = useState(false)
  const [customDay, setCustomDay] = useState(false)
  const { activeDay, setCustomActiveDay, getActiveDate, getCustomDate } = useDibs()
  const ref_calender = useRef(null)
  const isMobile = useIsMobile()

  const { accountAddress, name } = activeAccount || {}

  useOnOutsideClick(ref_calender, () => setShowCalender(false))
  return (
    <Container>
      <TopWrap>
        <LeftWrapper>
          {accountAddress && (
            <>
              {name && name.toUpperCase()} &nbsp;
              <AccountAddress>
                {`(${truncateAddress(accountAddress)})`}
                <CopyWrapper>
                  <Copy toCopy={accountAddress} text={''} />
                </CopyWrapper>
              </AccountAddress>
            </>
          )}
        </LeftWrapper>
        <Row width="unset" gap="10px">
          {!isMobile && <MintRewards day={activeDay} />}
          <Timer />
          <DibsCalender
            showCalender={showCalender}
            setShowCalender={setShowCalender}
            ref_calender={ref_calender}
            getActiveDate={getActiveDate}
            setCustomActiveDay={setCustomActiveDay}
            setCustomDay={setCustomDay}
            initialDate={true}
          />
        </Row>
      </TopWrap>
      {accountAddress ? (
        <RewardsTable selectedDay={activeDay} customDayActive={customDay} getCustomDate={getCustomDate} />
      ) : (
        <SadWrapper>
          <SadComponent text={'Wallet is not connected'} mode={false} iconSize={150} />
        </SadWrapper>
      )}
    </Container>
  )
}
