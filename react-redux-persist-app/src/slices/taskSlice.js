import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
    currentId: 1,
  },
  reducers: {
    addTask: (state, action) => {
      const { payload } = action;
      if (!payload) return;

      state.tasks.push({ id: state.currentId++, title: payload });
    },

    removeTask: (state, action) => {
      const { payload } = action;
      if (!payload) return;

      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
