import { useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import Image from 'next/image'
import RankMedal1 from '/public/static/images/dibs/ranks/rankMedal1.png'
import RankMedal2 from '/public/static/images/dibs/ranks/rankMedal2.png'
import RankMedal3 from '/public/static/images/dibs/ranks/rankMedal3.png'
import DefaultRankMedal from '/public/static/images/dibs/ranks/rankMedal.png'
import SuperSkullDefault from '/public/static/images/dibs/SuperSkullDefault.svg'
import Sniper from '/public/static/images/badges/sniper.svg'
import Charger from '/public/static/images/badges/charger.svg'
import Medalist from '/public/static/images/badges/medalist.svg'
import Archer from '/public/static/images/badges/hunter.svg'
import { formatAmount, formatDollarAmount } from 'utils/numbers'
import { truncateAddress } from 'utils/address'
import useLeaderBoardData from 'hooks/useLeaderBoardData'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import CardPagination from 'components/CardPagination'
import { Row, RowFixed } from 'components/Row'
import ShimmerAnimation from 'components/ShimmerAnimation'
import ArrowRight from 'components/Icons/ArrowRight'
import { useRouter } from 'next/router'
import { useIsMobile, useIsUpToSmall } from 'lib/hooks/useWindowSize'

interface IRowData {
  topBorder?: boolean
  myRank: string
  rank: string
  accountName: string
  badges?: string[]
  accountAddress: string
  tradeVolume: string
  potentialReward: string
}

const Wrapper = styled.div`
  margin: 20px 40px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin: 10px 10px;
  `}
`

const Container = styled.div`
  display: grid;
  align-items: center;

  grid-template-columns: 80px 1.2fr 1fr 1fr 1fr 100px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    grid-template-columns: 60px 1.2fr 1fr 1fr 100px;
  }`};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    grid-template-columns: 60px 1.2fr 1fr 1fr;
  }`};
`

const HeaderWrapper = styled(Container)`
  margin: 10px 0px 15px;
  color: ${({ theme }) => theme.coolGrey};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin: 10px 0px 10px;
  `}
`

const HeaderText = styled.div`
  font-size: 14px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 13px;
  `}
`

const DotsWrapper = styled(Row)`
  justify-content: center;
  margin: 20px 0;
  gap: 6px;
`

const Dot = styled.div`
  background-color: ${({ theme }) => theme.color5};
  border-radius: 50%;
  width: 5px;
  height: 5px;
`

const RowWrapper = styled(Container)<{ currentAccount?: boolean }>`
  height: 60px;
  border-radius: 6px;
  margin-bottom: 10px;
`

const RowText = styled.div`
  font-size: 16px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 14px;
  `}
`

const Rank = styled.div`
  position: relative;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    transform-origin: center left;
    scale: 0.8;
  `}
`

const NftWrapper = styled.div`
  margin-right: 12px;
  height: 42px;
  min-width: 42px;
  width: 42px;
`

const AccountName = styled.span`
  color: ${({ theme }) => theme.almostWhite};
  font-size: 14px;
  font-weight: 600;
  margin-right: 8px;

  overflow-wrap: break-word;
  hyphens: auto;
`

const Badges = styled(Row)`
  width: initial;
  gap: 6px;
`

const PaginationWrapper = styled.div`
  padding: 12px 0;
  margin-top: 20px;
`

const WrapperIconDefault = styled.div`
  width: 56px;
  height: 56px;
  position: relative;
`

const NumberContainer = styled.div<{ length: number }>`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ length }) => (length === 1 ? '30px' : length === 2 ? '28px' : '24px')};
  font-weight: bold;
  background: linear-gradient(to bottom, #f0a7eb 30%, #78beff 70%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent; /* This makes the text transparent, showing only the background */
  -webkit-text-fill-color: transparent; /* For Safari */
  ${({ length }) => length > 1 && 'transform: scaleX(0.8)'}
`

const NavigateButton = styled(RowFixed)`
  padding: 7px 16px 7px 16px;
  background: ${({ theme }) => theme.blue};
  border-radius: 4px;
  color: ${({ theme }) => theme.dark2};
  gap: 8px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.lightSkyBlue};
  }
`

interface RowData {
  rank: string
  accountAddress: string
  tradeVolume: string
  potentialReward: string
  accountName: string
}

function Header() {
  const isMobile = useIsMobile()

  return (
    <HeaderWrapper>
      <HeaderText style={{ marginLeft: isMobile ? 6 : 12 }}>Rank</HeaderText>
      {!isMobile && <HeaderText>Trader</HeaderText>}
      <HeaderText>{isMobile ? 'Address' : 'Account Address'}</HeaderText>
      <HeaderText>{isMobile ? 'Volume' : 'Trade Volume'}</HeaderText>
      <HeaderText>Potential Reward</HeaderText>
    </HeaderWrapper>
  )
}

function ThreeDots() {
  return (
    <DotsWrapper>
      <Dot />
      <Dot />
      <Dot />
    </DotsWrapper>
  )
}

function TableRow({ myRank, ...data }: IRowData) {
  const { rank, accountName, badges, accountAddress, tradeVolume, potentialReward } = data as IRowData
  const isCurrentAccount = rank === myRank
  const { dark2 } = useTheme()
  const router = useRouter()
  const isMobile = useIsMobile()
  const isSmall = useIsUpToSmall()

  const getRankImage = (rank: string) => {
    switch (rank) {
      case '1':
        return (
          <WrapperIconDefault>
            <Image src={RankMedal1} width={56} height={56} alt={'rank medal'} />
          </WrapperIconDefault>
        )
      case '2':
        return (
          <WrapperIconDefault>
            <Image src={RankMedal2} width={56} height={56} alt={'rank medal'} />
          </WrapperIconDefault>
        )
      case '3':
        return (
          <WrapperIconDefault>
            <Image src={RankMedal3} width={56} height={56} alt={'rank medal'} />
          </WrapperIconDefault>
        )
      default:
        return (
          <WrapperIconDefault>
            <Image src={DefaultRankMedal} height={57} alt={'rank medal'} />
            <NumberContainer length={rank.length}>{rank}</NumberContainer>
          </WrapperIconDefault>
        )
    }
  }

  const getBadge = (badgeText: string) => {
    switch (badgeText) {
      case 'sniper':
        return Sniper
      case 'charger':
        return Charger
      case 'medalist':
        return Medalist
      case 'archer':
        return Archer
      default:
        return ''
    }
  }

  return (
    <RowWrapper currentAccount={isCurrentAccount}>
      <Rank>{getRankImage(rank)}</Rank>

      {!isMobile && (
        <Row>
          <NftWrapper>
            <Image src={SuperSkullDefault} width={'42px'} height={'42px'} alt={'super skull - default'} />
          </NftWrapper>
          <AccountName>{accountName}</AccountName>
          <Badges>
            {badges &&
              badges.map((badgeText, index) => (
                <span key={index}>
                  <Image src={getBadge(badgeText)} alt={badgeText} />
                </span>
              ))}
          </Badges>
        </Row>
      )}
      <RowText>{truncateAddress(accountAddress)}</RowText>
      <RowText>{tradeVolume ? formatDollarAmount(tradeVolume) : '-'}</RowText>
      <RowText>{potentialReward ? `${potentialReward} VIBE` : '-'}</RowText>
      {!isSmall && (
        <NavigateButton
          onClick={() => {
            router.push({ pathname: 'account-overview', query: { address: accountAddress } })
          }}
        >
          Go to
          <ArrowRight width={16} height={16} color={dark2} />
        </NavigateButton>
      )}
    </RowWrapper>
  )
}

function Body({
  leaderData,
  myRank,
  page,
  setPage,
}: {
  leaderData: RowData[]
  myRank: string
  page: number
  setPage: (arg0: number) => void
}) {
  const rowsPerPage = 7
  const startRowRank = (page - 1) * rowsPerPage
  const endRowRank = startRowRank + rowsPerPage - 1

  const myData = leaderData.find((data) => data.rank === myRank)
  const pageCount = Math.ceil(leaderData.length / rowsPerPage)

  const onPageChange = (newPage: number) => {
    let localNewPage
    if (newPage > pageCount) localNewPage = pageCount
    else if (newPage < 1) localNewPage = 1
    else localNewPage = newPage
    setPage(localNewPage)
  }
  return (
    <>
      {Number(myRank) < startRowRank && myData && (
        <>
          <TableRow myRank={myRank} {...myData} />
          <ThreeDots />
        </>
      )}
      <div>
        {leaderData.slice(startRowRank, endRowRank + 1).map((data, index) => (
          <TableRow key={index} myRank={myRank} {...data} />
        ))}

        {Number(myRank) > endRowRank + 1 && myData && (
          <>
            <ThreeDots />
            <TableRow myRank={myRank} {...myData} />
          </>
        )}
      </div>
      <PaginationWrapper>
        <CardPagination
          pageCount={pageCount}
          itemsQuantity={leaderData.length}
          currentPage={page}
          rowsPerPage={rowsPerPage}
          onPageChange={onPageChange}
        />
      </PaginationWrapper>
    </>
  )
}

export default function LeaderboardTable({ activeDay }: { activeDay: number }) {
  const { account } = useActiveWeb3React()
  const { epochLeaderBoard: currentData, loading } = useLeaderBoardData(activeDay)
  const [page, setPage] = useState(1)
  useEffect(() => {
    setPage(1)
  }, [activeDay])
  const resultData = currentData.map((item, index) => {
    return {
      rank: (index + 1).toString(),
      accountAddress: item.user,
      accountName: item.name,
      tradeVolume: formatAmount(item.volume),
      potentialReward: formatAmount(item.reward),
    }
  })

  let myRank = (resultData.findIndex((inputData) => inputData.accountAddress === account?.toLowerCase()) + 1).toString()
  if (resultData.length > 0 && myRank === '0') {
    resultData.push({
      rank: (resultData.length + 1).toString(),
      accountAddress: account ?? ' ',
      accountName: 'Your Account',
      tradeVolume: '',
      potentialReward: '-',
    })
    myRank = resultData.length.toString()
  } else {
    const rankTarget = parseInt(myRank) - 1
    resultData[rankTarget] = { ...resultData[rankTarget], accountName: 'Your Account' }
  }

  return (
    <Wrapper>
      <Header />
      {loading ? (
        <div style={{ margin: '20px 20px 22px 15px' }}>
          <ShimmerAnimation width="auto" height="40px" />
        </div>
      ) : (
        <Body leaderData={resultData} myRank={myRank} page={page} setPage={setPage} />
      )}
    </Wrapper>
  )
}
