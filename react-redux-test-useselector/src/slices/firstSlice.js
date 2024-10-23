import { createSlice } from '@reduxjs/toolkit'

export const firstSlice = createSlice({
  name: 'first',
  initialState: {
    a1: [],
    a2: []
  },
  reducers: {
    inca1: (state) => {
      state.a1 = [...state.a1, state.a1.length + 1]
    },
    inca2: (state) => {
      state.a2 = [...state.a2, state.a2.length + 1]
    },
  },
});

// Action creators are generated for each reducer function
export const { inca1, inca2 } = firstSlice.actions;

export default firstSlice.reducer;