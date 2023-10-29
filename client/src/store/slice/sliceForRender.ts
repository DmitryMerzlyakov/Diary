import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  visible: false,
  sortOld: false,
  sortNew: false
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
        sortOld: payload.sortOld,
        sortNew: payload.sortNew
      }
    }
  }
})
export const { setVisible, setSort } = renderSlice.actions

export default renderSlice.reducer
