import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value : ''
}
export const newSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    EnterTxt: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { EnterTxt } = newSlice.actions

export default newSlice.reducer