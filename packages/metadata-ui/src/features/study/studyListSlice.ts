import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { StudySliceState } from './interface'
import { RootState } from '../../app/store'
import { ASYNC_THUNK_STATUS } from '../../constants'
import fetchStudyList from '../../services/apiStudies/studyListApis'

const initialState: StudySliceState = {
  studyList: [],
  status: ASYNC_THUNK_STATUS.IDLE,
  count: 0
}

export const getStudyList = createAsyncThunk(
  'studySlice/getStudyList',
  async (arg: { queryParam: Record<string, any> }, { rejectWithValue }) => {
    try {
      const response = await fetchStudyList(arg.queryParam)
      return { data: response.data, count: response.count }
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

const studyListSlice = createSlice({
  name: 'studySlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getStudyList.pending, state => {
        const prevState = state
        prevState.status = ASYNC_THUNK_STATUS.LOADING
      })
      .addCase(getStudyList.rejected, state => {
        const prevState = state
        prevState.status = ASYNC_THUNK_STATUS.FAILED
      })
      .addCase(getStudyList.fulfilled, (state, action) => {
        const prevState = state
        prevState.studyList = action.payload.data.result
        prevState.count = action.payload.count
        prevState.status = ASYNC_THUNK_STATUS.IDLE
      })
  }
})

export const studyData = (state: RootState) => state.studyListSlice
export default studyListSlice.reducer
