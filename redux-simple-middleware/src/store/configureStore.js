import { configureStore, } from '@reduxjs/toolkit'
import fakeReducer from './slices/fakeSlice';
import logger from './middlewares/logger';
import func from './middlewares/func';

export const store = configureStore({
  reducer: {
    fake: fakeReducer
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    logger({test: 1})
  ]
});