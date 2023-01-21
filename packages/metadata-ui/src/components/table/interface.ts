import { AsyncThunkStatus } from '../../constants'
import { TableSchema } from '../../pages/studyList/interface'

export interface TableProps<T> {
  tableSchema: TableSchema[]
  data: T[]
  loadingStatus: AsyncThunkStatus
  defaultQuires: Record<string, any>
  searchQuires: Record<string, string>
  noDataMessage?: string
  onChange?: (name: string, value: string) => void
  actionFunction?: Function
  totalRecordCount: number
  setQuires: Function
}

export interface NoDataProps {
  isLoading: boolean
  isDataAvailable: boolean
}
