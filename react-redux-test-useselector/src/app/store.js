import { configureStore } from '@reduxjs/toolkit'
import firstReducer from '../slices/firstSlice'
import secondReducer from '../slices/secondSlice';

export default configureStore({
  reducer: {
    first: firstReducer,
    second: secondReducer
  }
});