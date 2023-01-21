import _ from 'lodash'

import { StudyData } from './interface'
import { convertStringToDateTime } from '../../utils/dateFunctions'

export function formatStudyDate(studyData: Record<string, StudyData>) {
  let formattedStudyDate: string = ''
  if (
    _.get(studyData, '[00080020].Value[0]') !== undefined &&
    _.get(studyData, '[00080030].Value[0]') !== undefined
  ) {
    const studyDate = String(_.get(studyData, '[00080020].Value[0]', ''))
    const studyTime = String(_.get(studyData, '[00080030].Value[0]', ''))

    if (studyDate !== undefined && studyDate.length > 0 && studyDate !== '') {
      formattedStudyDate = convertStringToDateTime(`${studyDate} ${studyTime}`)
    }
  }
  return formattedStudyDate
}
