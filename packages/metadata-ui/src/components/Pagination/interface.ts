export type PaginationActions = 'next' | 'previous' | 'other'
export interface PaginationInterface {
  totalCount: number
  page: number
  setPage: (number: number) => void
  pageSize: string
  setpageSize: (string: string) => void
  handlePageNext: (value: number) => void
}

export interface PaginationWithItemCountProps {
  /** Total number of records */
  totalRecords: number
  /** Pagination limit */
  limit: number
  /** Offset value */
  offset: number
  /** Boolean value to decide whether component should show */
  hidePagination: boolean
  /** Function to handle next and previous button click  */
  handlePageChange: (action: PaginationActions) => void
  /** Function to change the value offset */
  changeOffset: (offset: number) => void
}
