export type AsyncThunkStatus = 'idle' | 'loading' | 'failed'

export const ASYNC_THUNK_STATUS: Record<string, AsyncThunkStatus> = {
  IDLE: 'idle',
  LOADING: 'loading',
  FAILED: 'failed'
}

export const LISTING_CONFIG = {
  LIMIT: 8
}
