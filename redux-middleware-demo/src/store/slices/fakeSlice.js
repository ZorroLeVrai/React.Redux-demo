import { createSlice } from "@reduxjs/toolkit";

export const fakeSlice = createSlice({
  name: "fake",
  initialState: {},
  reducers: {
    simpleAction: (state, action) => console.log("simpleAction", action)
  }
});

// Action creators are generated for each case reducer function
export const { simpleAction } = fakeSlice.actions;

export default fakeSlice.reducer;