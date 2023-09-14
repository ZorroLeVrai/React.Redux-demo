import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: []
  },
  reducers: {
    todosReceived: (state, action) => {
      state.todos = action.payload;
      console.log("State updated", state.todos);
    }
  }
});

// Action creators are generated for each case reducer function
export const { todosReceived } = todoSlice.actions;

export default todoSlice.reducer;