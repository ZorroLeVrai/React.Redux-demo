//The thunk middleware - defined implicitly in getDefaultMiddleware()
const func = store => next => action => {
  const {dispatch, getState} = store;
  if (typeof action === 'function')
    action(dispatch, getState);
  else
    next(action);
}

export default func;