import _ from 'lodash'
import { FloatingInput, CustomDatePicker } from 'tsdx-1'

import { TableProps } from './interface'
import {
  NoDataWrapper,
  PaginationWrapper,
  SortButton,
  StyledTable,
  TableHeading,
  Tbody,
  Td,
  Th,
  Thead,
  THeadRow,
  Tr
} from './style'
import { FaArrowIosDown, FaArrowIosUp } from '../../assets/icons/svgComponents'
import { IconContainer } from '../../common/style'
import { ASYNC_THUNK_STATUS } from '../../constants'
import { TableSchema } from '../../pages/studyList/interface'
import {
  convertDateToString,
  convertStringToDate
} from '../../utils/dateFunctions'
import changePageSize from '../../utils/pagination'
import toggleSort from '../../utils/tableActionsHandlers'
import { PaginationActions } from '../Pagination/interface'
import PaginationWithItemCount from '../Pagination/PaginationWithItemCount'
import Spinner from '../spinner/Spinner'


export default function Table<T>(props: TableProps<T>) {
  const {
    tableSchema,
    data,
    onChange = () => {},
    searchQuires = {},
    loadingStatus,
    noDataMessage,
    defaultQuires,
    actionFunction,
    totalRecordCount,
    setQuires
  } = props
  const isLoading = loadingStatus === ASYNC_THUNK_STATUS.LOADING
  const isNodataAvailable =
    loadingStatus !== ASYNC_THUNK_STATUS.LOADING && data.length === 0
  const isTableContentAvailable =
    loadingStatus !== ASYNC_THUNK_STATUS.LOADING || data.length !== 0

  const getTableHeader = (schema: TableSchema) => {
    if (schema.searchField === 'input') {
      return (
        <FloatingInput
          label={schema.header()}
          name={schema.fieldName ?? ''}
          value={searchQuires[schema.fieldName ?? '']}
          onChange={(value: string) => onChange(schema.fieldName ?? '', value)}
        />
      )
    } else if (schema.searchField === 'DatePicker') {
      return (
        <CustomDatePicker
          date={convertStringToDate(searchQuires[schema.fieldName ?? ''])}
          setDate={(value: Date | null) => {
            let dateStrVal = ''
            if (value !== null) {
              dateStrVal = convertDateToString(value)
            }
            onChange(schema.fieldName ?? '', dateStrVal)
          }}
        />
      )
    }
    return <>{schema.header()}</>
  }

  const onChangePagesize = (type: PaginationActions) => {
    const currentOffset = Number(searchQuires.offset)
    const limit = Number(defaultQuires.limit)
    const updatedOffset = changePageSize(
      type,
      currentOffset,
      limit,
      totalRecordCount
    )
    onChange('offset', String(updatedOffset))
  }

  const isSortActive = (field: string | undefined) => {
    return field === searchQuires.orderby
  }

  const onChangeSort = (field: string) => {
    const orderby = toggleSort(
      searchQuires.orderby,
      field,
      defaultQuires.orderby
    )
    setQuires({ ...searchQuires, orderby, offset: 0 })
  }

  return (
    <>
      <StyledTable>
        <Thead>
          <THeadRow>
            {tableSchema.map((schema: TableSchema, index) => (
              <Th key={`${schema.pathToValue}${index}`}>
                <TableHeading>
                  {getTableHeader(schema)}
                  {schema.isSortable !== undefined &&
                    Boolean(schema.isSortable) && (
                      <SortButton
                        onClick={() => onChangeSort(schema.fieldName ?? '')}
                      >
                        <IconContainer
                          isActive={isSortActive(schema.fieldName)}
                        >
                          <FaArrowIosUp />
                        </IconContainer>
                        <IconContainer
                          isActive={isSortActive(`-${schema.fieldName ?? ''}`)}
                        >
                          <FaArrowIosDown />
                        </IconContainer>
                      </SortButton>
                    )}
                </TableHeading>
              </Th>
            ))}
          </THeadRow>
        </Thead>
        <Tbody>
          {isTableContentAvailable &&
            data.map((value, index) => (
              <Tr key={index}>
                {tableSchema.map((schema: TableSchema, index) => (
                  <Td key={`${schema.header()}${index}`}>
                    {schema.dataFormatFunction != null
                      ? schema.dataFormatFunction(value, actionFunction)
                      : _.get(value, schema.pathToValue)}
                  </Td>
                ))}
              </Tr>
            ))}
        </Tbody>
      </StyledTable>
      {isLoading && (
        <NoDataWrapper>
          <Spinner />
        </NoDataWrapper>
      )}
      {isNodataAvailable && <NoDataWrapper>{noDataMessage}</NoDataWrapper>}
      <PaginationWrapper>
        <PaginationWithItemCount
          limit={parseInt(defaultQuires.limit, 10)}
          offset={parseInt(searchQuires.offset, 10)}
          totalRecords={totalRecordCount}
          hidePagination={isLoading}
          handlePageChange={onChangePagesize}
          changeOffset={(offset: number) => {
            onChange('offset', String(offset))
          }}
        />
      </PaginationWrapper>
    </>
  )
}
