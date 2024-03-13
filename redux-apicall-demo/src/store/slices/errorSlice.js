import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: {
    message: ""
  },
  reducers: {
    errorReceived: (state, action) => {
      console.log("Payload received: ", action.payload);
      state.message = action.payload
    }
  }
});

// Action creators are generated for each case reducer function
export const { errorReceived } = errorSlice.actions;

export default errorSlice.reducer;