import { createSlice } from "@reduxjs/toolkit";

export const fakeSlice = createSlice({
  name: "fake",
  initialState: {},
  reducers: {
    simpleAction: (state, action) => console.log("simpleAction", action),
    errorAction: (state, action) => console.log("Error", action),
  }
});

// Action creators are generated for each case reducer function
export const { simpleAction, errorAction } = fakeSlice.actions;

export default fakeSlice.reducer;