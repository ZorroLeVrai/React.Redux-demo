import { createSlice } from '@reduxjs/toolkit'

export const secondSlice = createSlice({
  name: 'second',
  initialState: {
    b1: [],
    b2: []
  },
  reducers: {
    incb1: (state) => {
      state.b1 = [...state.b1, state.b1.length + 1]
    },
    incb2: (state) => {
      state.b2 = [...state.b2, state.b2.length + 1]
    },
  },
});

// Action creators are generated for each reducer function
export const { incb1, incb2 } = secondSlice.actions;

export default secondSlice.reducer;