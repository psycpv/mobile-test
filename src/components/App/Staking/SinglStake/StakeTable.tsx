import { useState } from 'react'
import styled from 'styled-components'
import CardPagination from 'components/CardPagination'
import Image from 'next/image'
import basedIcon from '/public/static/images/tokens/BASED.svg'
import { useIsMobile } from 'lib/hooks/useWindowSize'
import lockedIcon from '/public/static/images/staking/LockedMobile.svg'
import unStakeIcon from '/public/static/images/staking/UnstakeMobile.svg'

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1fr 1fr 1fr 0.4fr;
  column-gap: 4px;
  align-items: center;
  text-align: center;
  justify-items: center;
`
const HeaderWrapper = styled(Container)`
  color: ${({ theme }) => theme.coolGrey};
  padding: 12px 16px 8px;
`

const HeaderText = styled.div`
  font-size: 12px;
`

const HeaderAction = styled.div`
  justify-self: end;
`

const RowWrapper = styled(Container)<{
  topBorder?: boolean
}>`
  background-color: ${({ theme }) => theme.color3};
  border-radius: 6px;
  padding: 12px 12px 12px 16px;
  color: ${({ theme }) => theme.almostWhite};
  margin-top: 2px;
`

const RowText = styled.div`
  font-size: 14px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
   font-size: 12px; 
   `}
`

const RowButton = styled.button<{
  locked?: boolean
  clicked: boolean
}>`
  width: 75px;
  height: 22px;
  justify-self: center;
  box-shadow: ${({ locked, theme }) => (locked ? ' ' : `0px 2px 0px ${theme.darkBlue}`)};
  border: ${({ locked, theme }) => (locked ? ' ' : `1px solid ${theme.darkBlue}`)};
  background-color: ${({ theme, locked }) => (locked ? theme.color4 : theme.blue)};
  color: ${({ locked, theme }) => (locked ? theme.coolGrey : '#001426')};
  text-align: center;
  line-height: 15.18px;
  font-size: 12px;
  font-weight: 400;
  border-radius: 6px;
  transition: width, transform 0ms ease-in-out;

  ${({ clicked }) =>
    clicked &&
    `
  transform: translateY(2px);
`}
  &:hover {
    background-color: ${({ theme, locked }) => (locked ? theme.color4 : theme.lightSkyBlue)};
    cursor: ${({ locked }) => (locked ? 'default' : 'pointer')};
  }

  ${({ theme, locked }) => theme.mediaWidth.upToMedium`
     display: flex;
     align-items: center;
     justify-content: center;
     ${({}) => (locked ? `width: 24px; height:24px; background-color:${theme.color2};` : `width: 24px; height:23x;`)}
     &:hover {
       background-color: ${locked ? theme.color2 : theme.lightSkyBlue};
    }
   
   `}
`
//TODO (Max): Replace RowButton with MainButton
const PaginationWrapper = styled.div`
  padding: 12px 0;
  color: ${({ theme }) => theme.almostWhite};
`

const AmountWrapper = styled.div`
  display: grid;
  gap: 4px;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  ${({ theme }) => theme.mediaWidth.upToLarge`
    grid-template-columns: 1fr;
  `}
`

const Amount = styled.div`
  justify-self: center;
  word-break: break-word;
`

const AmountIcon = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
  gap: 8px;

  span {
    min-width: 20px;
    min-height: 20px;
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
   gap:0;
   `}
`

export interface StakeData {
  amount: string
  duration: string
  unLockedOn: string
  APRBoost: string
  locked: boolean
  originalDate: Date
}

function Header() {
  const isMobile = useIsMobile()
  return (
    <HeaderWrapper>
      <HeaderText>{isMobile ? 'BASED Locked' : 'Amount Locked'}</HeaderText>
      <HeaderText>Duration</HeaderText>
      <HeaderText>Unlock On</HeaderText>
      <HeaderText>APR Boost</HeaderText>
      <HeaderText>Action</HeaderText>
      <HeaderAction />
    </HeaderWrapper>
  )
}

function TableRow({
  rowClick,
  unStakeSubmitted,
  ...data
}: {
  unLockedOn: string
  amount: string
  rowClick: () => void
  unStakeSubmitted?: boolean
  duration?: string
  APRBoost?: string
  locked: boolean
}) {
  const { amount, duration, APRBoost, locked, unLockedOn } = data
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
    <RowWrapper>
      <RowText>
        <AmountWrapper>
          <Amount>{amount}</Amount>
          {isMobile ? (
            <></>
          ) : (
            <AmountIcon>
              BASED
              <Image src={basedIcon} width={'20px'} height={'20px'} alt={'based-icon'} />
            </AmountIcon>
          )}
        </AmountWrapper>
      </RowText>
      <RowText>{duration ? duration : '-'}</RowText>
      <RowText>{unLockedOn ? unLockedOn : '-'}</RowText>
      <RowText>{APRBoost ? APRBoost : '-'}</RowText>
      <RowButton
        locked={locked || unStakeSubmitted}
        disabled={locked || unStakeSubmitted}
        onClick={() => handleClick()}
        clicked={isClicked}
      >
        {isMobile ? (
          locked ? (
            <Image src={lockedIcon} width={9} height={16} alt={'locked-icon'} priority={true} />
          ) : unStakeSubmitted ? (
            '...'
          ) : (
            <Image src={unStakeIcon} width={16} height={13} alt={'unstake-icon'} priority={true} />
          )
        ) : locked ? (
          'Locked'
        ) : unStakeSubmitted ? (
          'Unstaking...'
        ) : (
          'Unstake'
        )}
      </RowButton>
    </RowWrapper>
  )
}

function Body({ stakeData }: { stakeData: StakeData[] }) {
  const [page, setPage] = useState(1)

  const rowsPerPage = 5
  const pageCount = Math.ceil(stakeData.length / rowsPerPage)
  const onPageChange = (newPage: number) => {
    let localNewPage
    if (newPage > pageCount) localNewPage = pageCount
    else if (newPage < 1) localNewPage = 1
    else localNewPage = newPage
    setPage(localNewPage)
  }

  function rowClick(data: StakeData) {
    console.log('row clicked')
  }

  return (
    <>
      <div>
        {stakeData
          .slice((page - 1) * rowsPerPage, Math.min(page * rowsPerPage, stakeData.length))
          .map((data, index) => (
            <TableRow key={index} rowClick={() => rowClick(data)} {...data} />
          ))}
      </div>
      <PaginationWrapper>
        <CardPagination
          pageCount={pageCount}
          itemsQuantity={stakeData.length}
          currentPage={page}
          onPageChange={onPageChange}
          rowsPerPage={rowsPerPage}
        />
      </PaginationWrapper>
    </>
  )
}

export default function StakeTable() {
  // should fetch data and loading flag here
  return (
    <div>
      <Header />
      <Body
        stakeData={[
          {
            amount: '1000', // 1 ETH in wei
            duration: '30 days',
            unLockedOn: '2023-02-01',
            APRBoost: '5%',
            locked: true,
            originalDate: new Date('2022-12-01'),
          },
          {
            amount: '50', // 0.5 ETH in wei
            duration: '15 days',
            unLockedOn: '2023-01-15',
            APRBoost: '3%',
            locked: false,
            originalDate: new Date('2022-12-10'),
          },
          {
            amount: '200', // 2 ETH in wei
            duration: '60 days',
            unLockedOn: '2023-03-01',
            APRBoost: '7%',
            locked: true,
            originalDate: new Date('2022-11-01'),
          },
          {
            amount: '80000', // 0.8 ETH in wei
            duration: '45 days',
            unLockedOn: '2023-02-15',
            APRBoost: '4%',
            locked: false,
            originalDate: new Date('2022-11-20'),
          },
          {
            amount: '15', // 1.5 ETH in wei
            duration: '75 days',
            unLockedOn: '2023-03-15',
            APRBoost: '6%',
            locked: true,
            originalDate: new Date('2022-10-15'),
          },
        ]}
      ></Body>
    </div>
  )
}
