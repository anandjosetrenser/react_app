import { PaginationActions } from '../components/Pagination/interface'

const changePageSize = (
  action: PaginationActions,
  offset: number,
  limit: number,
  totalRecords: number
) => {
  let updatedOffset = offset
  if (action === 'next') {
    updatedOffset = offset + limit
    if (updatedOffset > totalRecords) updatedOffset = totalRecords
  } else if (action === 'previous' && offset === totalRecords) {
    updatedOffset = offset - (totalRecords % limit)
  } else {
    updatedOffset = offset - limit
  }

  return updatedOffset
}

export default changePageSize
