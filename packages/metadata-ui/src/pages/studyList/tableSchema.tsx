import _ from 'lodash'

import { formatStudyDate } from './dataFormatFunctions'
import { StudyDataResponse, TableSchema } from './interface'

const studyListSchema: TableSchema[] = [
  {
    header: () => 'Patient Name',
    pathToValue: 'data.[00100010].Value[0].Alphabetic',
    searchField: 'input',
    isSortable: true,
    fieldName: 'PatientName'
  },
  {
    header: () => 'MRN',
    pathToValue: 'data.[00100020].Value[0]',
    searchField: 'input',
    isSortable: true,
    fieldName: 'PatientID'
  },
  {
    header: () => 'Study Date',
    pathToValue: '',
    searchField: 'DatePicker',
    isSortable: true,
    fieldName: 'StudyDate',
    dataFormatFunction: (rowData: unknown) => {
      const studyData = rowData as StudyDataResponse
      return <>{formatStudyDate(studyData.data)}</>
    }
  },
  {
    header: () => 'Modality',
    pathToValue: '',
    searchField: '',
    isSortable: true,
    fieldName: 'Modality',
    dataFormatFunction: (rowData: unknown) => {
      const studyData = rowData as StudyDataResponse
      const modalitiesInStudy = _.get(studyData, 'data.[00080060]', null)

      return modalitiesInStudy?.Value !== undefined &&
        modalitiesInStudy?.Value != null ? (
        <>{modalitiesInStudy.Value?.join()}</>
      ) : (
        <></>
      )
    }
  },
  {
    header: () => 'Accession',
    pathToValue: 'data.[00080050].Value[0]',
    searchField: 'input',
    isSortable: true,
    fieldName: 'AccessionNumber'
  },
  {
    header: () => 'Action',
    pathToValue: '',
    searchField: 'Action',
    fieldName: '',
    isSortable: false,
    dataFormatFunction: (rowData: unknown, actionFunction?: Function) => {
      const studyData = rowData as StudyDataResponse
      return (
        <>
          <span
            style={{ cursor: 'pointer', color: 'blue' }}
            onClick={() => {
              if (actionFunction != null) {
                actionFunction('showHeader', studyData)
              }
            }}
          >
            View
          </span>
        </>
      )
    }
  }
]

const studyListFields: Record<string, any> = {}
studyListSchema.forEach(schema => {
  if (schema.fieldName != null) {
    _.set(studyListFields, schema.fieldName, '')
  }
})

export { studyListSchema, studyListFields }
