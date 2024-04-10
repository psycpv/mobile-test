import React from 'react'
import styled from 'styled-components'
import ReactPaginate, { ReactPaginateProps } from 'react-paginate'
import { lighten } from 'polished'
import ArrowLeftPagination from 'components/Icons/ArrowLeftPagination'
import ArrowRightPagination from 'components/Icons/ArrowRightPagination'

const Wrapper = styled.div`
  /* margin: 0.8rem auto; */
  font-size: 0.8rem;
  margin-top: auto;

  .page-item {
    width: 36px;
    text-align: center;
  }

  .pagination {
    display: flex;
    justify-content: center;
    list-style-type: none;
    align-items: baseline;
    margin: 0;
    padding: 0;
    overflow: hidden;
    & > li {
      float: left;
    }
    & > li a {
      display: block;
      padding: 10px 0;
      font-size: 14px;
      text-decoration: none;
      color: ${({ theme }) => theme.white};
      :hover {
        cursor: pointer;
      }
      ${({ theme }) => theme.mediaWidth.upToSmall`
        padding: 1rem 0.8rem;
      `}
    }
    .active {
      a {
        color: ${({ theme }) => lighten(0.05, theme.white)};
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
  .break {
    pointer-events: none;
    width: 36px;
    text-align: center;
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 0.7rem;
  `}
`

export default function Pagination(props: ReactPaginateProps) {
  return (
    <Wrapper>
      <ReactPaginate
        previousLabel={<ArrowLeftPagination />}
        nextLabel={<ArrowRightPagination />}
        breakLabel={'...'}
        breakClassName={'break'}
        pageClassName={'page-item'}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        containerClassName={'pagination'}
        activeClassName={'active'}
        {...props}
      />
    </Wrapper>
  )
}
