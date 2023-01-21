export interface DICOMHeaderProps {
  /** Boolean field to set the visibility of the modal */
  isShowingDICOMHeaders: boolean
  /** Function execute on close button click */
  onClose: () => void
  dicomInfo: any
}

export interface PopupStyle {
  visibility: boolean
  size?: string
  popupType?: string
  isScroll?: 1 | 0
  paddingTop?: string
  backgroundColor?: string
  top?: string
  paddingLeft?: string
}

/* eslint-disable @typescript-eslint/consistent-indexed-object-style */

export interface DICOMAttributeListProps {
  /** Dicom data to display */
  dicomInfo: any
}

export type SearchFieldTypes =
  | 'Select'
  | 'Input'
  | 'Date'
  | 'DateRange'
  | 'MultiSelect'
  | 'Checkbox'
  | 'alertCircle'
  | 'text'

export type ActionFunction = (
  event: string,
  data: unknown,
  payload?: unknown
) => void

export interface TableSchema {
  header: string
  pathToValue: string
  headerDescription: string
  width: number
  searchField?: SearchFieldTypes
  fieldName?: string
  options?: any
  isSort?: boolean
  isPixel?: boolean
  isNonAppFieldInt?: boolean
  isStatus?: 'boolean' | 'check'
  action?: 'echo' | 'edit'
  dataFormatFunction?: (
    data: unknown,
    actionFunction?: ActionFunction,
    payload?: unknown
  ) => JSX.Element
  type?: 'text' | 'number' | 'email' | 'textarea' | 'Checkbox'
  sortField?: string
  titleShow?: boolean
  tooltip?: (data: unknown) => string
  hideSearchForSelect?: boolean
  textAlign?: 'center' | 'left' | 'right'
  isWildCardDisabled?: boolean
}
