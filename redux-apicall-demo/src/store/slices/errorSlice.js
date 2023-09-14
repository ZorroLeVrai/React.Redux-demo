import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: {
    message: ""
  },
  reducers: {
    errorReceived: (state, action) => state.message = action.payload
  }
});

// Action creators are generated for each case reducer function
export const { errorReceived } = errorSlice.actions;

export default errorSlice.reducer;