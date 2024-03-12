import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

const logger = text => store => next => action => {
  //perform some action here
  console.log({ text: `Logger Middleware ${text}`, action});
  //call the next middleware function

  if (action.payload !== undefined)
    next(action);

  //After 
}

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    logger("Hello2")
  ]
});