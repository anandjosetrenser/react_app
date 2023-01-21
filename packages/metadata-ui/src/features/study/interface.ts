import { AsyncThunkStatus } from '../../constants'
import { StudyDataResponse } from '../../pages/studyList/interface'

export interface StudySliceState {
  studyList: StudyDataResponse[]
  status: AsyncThunkStatus
  count: number
}
