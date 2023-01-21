export interface StudyData {
  [x: string]: any
  vr?: string
  Value?: any[]
  BulkDataURI?: any
}

export type StudyResults = Record<string, StudyData>

export interface StudyDataResponse {
  data: Record<string, StudyData>
  meta_store_id: string
  createAt: number
}

export interface StudyDataApiResponse {
  result: StudyDataResponse[]
}

export interface TableSchema {
  header: () => string
  pathToValue: string
  searchField?: 'input' | 'Action' | 'MultiSelect' | '' | 'DatePicker'
  fieldName?: string
  dataFormatFunction?: (data: unknown, actionFunction?: Function) => JSX.Element
  isSortable?: boolean
}
