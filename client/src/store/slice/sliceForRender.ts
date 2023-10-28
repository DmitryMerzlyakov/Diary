import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  visible: false,
  sort: false
}

const renderSlice = createSlice({
  name: 'render',
  initialState,
  reducers: {
    setVisible: (state, { payload }) => {
      return {
        ...state,
        visible: payload.visible
      }
    },
    setSort: (state, { payload }) => {
      return {
        ...state,
        sort: payload.sort
      }
    }
  }
})
export const { setVisible, setSort } = renderSlice.actions

export default renderSlice.reducer
