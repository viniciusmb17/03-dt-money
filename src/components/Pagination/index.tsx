import { CaretLeft, CaretRight } from 'phosphor-react'
import { usePagination, DOTS } from '../../hooks/usePagination'
import { PaginationContainer, PaginationItem } from './style'

interface IPaginationProps {
  onPageChange: (page: number) => void
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
}

export function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: IPaginationProps) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || (paginationRange && paginationRange?.length < 2)) {
    return null
  }

  function onNext() {
    onPageChange(currentPage + 1)
  }

  function onPrevious() {
    onPageChange(currentPage - 1)
  }

  const lastPage =
    paginationRange && paginationRange[paginationRange?.length - 1]

  return (
    <PaginationContainer>
      <PaginationItem
        isArrowIcon
        disabled={currentPage === 1}
        onClick={onPrevious}
      >
        <CaretLeft size={24} />
      </PaginationItem>
      {paginationRange?.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <PaginationItem key={pageNumber + index}>{DOTS}</PaginationItem>
          )
        }

        return (
          <PaginationItem
            key={pageNumber}
            selected={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationItem>
        )
      })}
      <PaginationItem
        isArrowIcon
        disabled={currentPage === lastPage}
        onClick={onNext}
      >
        <CaretRight size={24} />
      </PaginationItem>
    </PaginationContainer>
  )
}
