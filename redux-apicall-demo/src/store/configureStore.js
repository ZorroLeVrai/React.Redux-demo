import { configureStore, } from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlice';
import errorReducer from './slices/errorSlice';
import api from './middlewares/api';

const baseURL = "https://jsonplaceholder.typicode.com/";
//const baseURL = "https://fake.com/";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    error: errorReducer
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api(baseURL)
  ]
});