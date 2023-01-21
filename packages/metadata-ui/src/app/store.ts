import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import studyListSlice from './../features/study/studyListSlice'

export const store = configureStore({
  reducer: {
    studyListSlice
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
