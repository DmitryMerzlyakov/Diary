import { configureStore } from '@reduxjs/toolkit'
import { repordsApi } from './servises/api'
import renderReducer from './slice/sliceForRender'

export const store = configureStore({
  reducer: {
    render: renderReducer,
    [repordsApi.reducerPath]: repordsApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([repordsApi.middleware])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
