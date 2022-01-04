import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  index: null,
}

export const scrollIndexSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getScrollIndex: (state, action) => {
      state.index = action.payload
    },
  },
})

export const { getScrollIndex } = scrollIndexSlice.actions
export default scrollIndexSlice.reducer
