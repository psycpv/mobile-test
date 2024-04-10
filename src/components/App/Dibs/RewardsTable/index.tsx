import { useEffect, useState } from 'react'
import { Zero } from '@ethersproject/constants'
import styled from 'styled-components'

import { getFormattedDate } from 'utils/date'
import { formatAmount, formatDollarAmount, formatPrice } from 'utils/numbers'

import useDibsRewards from 'hooks/useDibsRewards'

import ClaimModal from '../Rewards/ClaimModal'
import CardPagination from 'components/CardPagination'
import ShimmerAnimation from 'components/ShimmerAnimation'
import { SadComponent } from 'components/SadComponent'
import { useIsMobile } from 'lib/hooks/useWindowSize'

const Wrapper = styled.div`
  margin: 20px 40px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin: 10px 10px;
  `}
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 200px;
  column-gap: 4px;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}

  ${({ theme }) => theme.mediaWidth.upToSmall`
    grid-template-columns: 1fr 1fr 1fr;
  `}
`
const HeaderWrapper = styled(Container)`
  margin: 10px 0px 15px;
  color: ${({ theme }) => theme.coolGrey};
`

const HeaderText = styled.div`
  font-size: 14px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 13px;
  `}
`

const HeaderAction = styled.div`
  justify-self: end;
`

const RowWrapper = styled(Container)<{ topBorder?: boolean }>`
  height: 60px;
  border-radius: 6px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.almostWhite};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-bottom: 30px;
  `}
`

const RowText = styled.div`
  font-size: 16px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 14px;
  `}
`

const RowButton = styled.button<{ claimed?: boolean; clicked: boolean }>`
  width: 100%;
  margin-bottom: 4px;
  padding: 10px 0;
  background-color: ${({ theme, claimed }) => (claimed ? theme.color4 : theme.blue)};
  color: ${({ claimed }) => (claimed ? '#788EBA' : '#001426')};
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  opacity: ${({ disabled }) => (disabled ? '0.4' : '1')};
  transition: width, transform 0ms ease-in-out;
  ${({ clicked }) =>
    clicked &&
    `
    transform: translateY(4px);
  `}

  ${({ theme }) => theme.mediaWidth.upToSmall`
    grid-column: span 3;
    margin-top: 10px;
  `}
`

const PaginationWrapper = styled.div`
  padding: 12px 0;
  color: ${({ theme }) => theme.almostWhite};
`

export interface RewardData {
  date: string
  dateDay: string
  tradeVolume: string
  myReward: string
  claimed: boolean
  originalDate: Date
  rewardShare: number
}

function Header() {
  const isMobile = useIsMobile()

  return (
    <HeaderWrapper>
      <HeaderText>Date</HeaderText>
      <HeaderText>My Trade Volume</HeaderText>
      <HeaderText>My Reward</HeaderText>
      {!isMobile && <HeaderText>Reward Share</HeaderText>}
      <HeaderAction />
    </HeaderWrapper>
  )
}

function TableRow({
  topBorder,
  rowClick,
  claimSubmitted,
  ...data
}: {
  topBorder?: boolean
  date: string
  rowClick: () => void
  claimSubmitted?: boolean
  tradeVolume?: string
  myReward?: string
  claimed: boolean
  originalDate: Date
  rewardShare: number
}) {
  const { date, tradeVolume, myReward, claimed, originalDate, rewardShare } = data
  const currentDate = new Date()
  const isCurrent = (currentDate.getTime() - originalDate.getTime()) / 86400000 < 1
  const [isClicked, setIsClicked] = useState(false)
  const isMobile = useIsMobile()

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => {
      setIsClicked(false)
      rowClick()
    }, 150) // Reset state after animation duration
  }

  return (
    <RowWrapper topBorder={topBorder}>
      <RowText>{date}</RowText>
      <RowText>{tradeVolume ? formatDollarAmount(tradeVolume) : '-'}</RowText>
      <RowText>{myReward ? `${myReward} VIBE` : '-'}</RowText>
      {!isMobile && <RowText>{formatPrice(rewardShare, 6)}%</RowText>}

      <RowButton
        claimed={claimed || claimSubmitted}
        disabled={claimed || isCurrent || claimSubmitted}
        onClick={() => handleClick()}
        clicked={isClicked}
      >
        {isCurrent ? 'Claim (After Epoch)' : claimed ? 'Claimed' : claimSubmitted ? 'Claiming...' : 'Claim'}
      </RowButton>
    </RowWrapper>
  )
}

function Body({ rewardData }: { rewardData: RewardData[] }) {
  const [page, setPage] = useState(1)
  const [claimModalOpen, setClaimModalOpen] = useState(false)
  const [showSadComponent, setShowSadComponent] = useState(false)
  const [claimsSubmitted, setClaimsSubmitted] = useState<any[]>([])
  const [selectedReward, setSelectedReward] = useState({
    date: '',
    dateDay: '0',
    tradeVolume: '0',
    myReward: '0',
    originalDate: new Date(),
    claimed: false,
    rewardShare: 0,
  })
  const rowsPerPage = 7
  const pageCount = Math.ceil(rewardData.length / rowsPerPage)
  const onPageChange = (newPage: number) => {
    let localNewPage
    if (newPage > pageCount) localNewPage = pageCount
    else if (newPage < 1) localNewPage = 1
    else localNewPage = newPage
    setPage(localNewPage)
  }
  function rowClick(data: RewardData) {
    setSelectedReward(data)
    setClaimModalOpen(true)
  }
  useEffect(() => {
    if (rewardData.length === 0) {
      const timer = setTimeout(() => {
        setShowSadComponent(true)
      }, 100)
      return () => clearTimeout(timer)
    }
    setShowSadComponent(false)
  }, [rewardData])
  return (
    <>
      <div>
        {rewardData
          .slice((page - 1) * rowsPerPage, Math.min(page * rowsPerPage, rewardData.length))
          .map((data, index) => (
            <TableRow
              key={index}
              topBorder={index === 0}
              rowClick={() => rowClick(data)}
              claimSubmitted={claimsSubmitted.includes(data.date)}
              {...data}
            />
          ))}
        {showSadComponent && <SadComponent text="You have no rewards" mode={true} iconSize={250} />}
      </div>
      <ClaimModal
        isOpen={claimModalOpen}
        onDismiss={(isSubmitted) => {
          console.log('isSubmitted', isSubmitted, selectedReward.date)
          if (isSubmitted) {
            setClaimsSubmitted([...claimsSubmitted, selectedReward.date])
          }
          setClaimModalOpen((prev) => !prev)
        }}
        data={selectedReward}
      />
      <PaginationWrapper>
        <CardPagination
          pageCount={pageCount}
          itemsQuantity={rewardData.length}
          currentPage={page}
          onPageChange={onPageChange}
          rowsPerPage={rowsPerPage}
        />
      </PaginationWrapper>
    </>
  )
}

export default function RewardsTable({
  selectedDay,
  customDayActive,
  getCustomDate,
}: {
  selectedDay: number
  customDayActive: boolean
  getCustomDate: (arg0: number) => Date
}) {
  const { rewards, loading } = useDibsRewards(selectedDay, customDayActive)
  const objReward =
    rewards?.map((reward) => {
      const originalDate = getCustomDate(parseInt(reward.day))
      return {
        date: getFormattedDate(originalDate),
        originalDate,
        dateDay: reward.day,
        tradeVolume: formatAmount(reward.volume),
        myReward: formatAmount(reward.reward),
        claimed: reward.unclaimedReward.eq(Zero),
        rewardShare: reward.rewardShare,
      }
    }) || []

  return (
    <Wrapper>
      <Header />
      {loading ? (
        <div style={{ margin: '20px 20px 22px 15px' }}>
          <ShimmerAnimation width="auto" height="40px" />
        </div>
      ) : (
        <Body rewardData={objReward} />
      )}
    </Wrapper>
  )
}
