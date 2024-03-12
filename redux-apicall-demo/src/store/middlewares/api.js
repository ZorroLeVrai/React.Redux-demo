import axios from 'axios';
import { apiRequested, apiCallSucceeded, apiCallFailed } from '../actionCreators';

//SNA
const api = baseURL => store => next => async action => {
  if (action.type !== apiRequested.type ) return next(action);

  //next(action); //call the next middleware only for debugging purposes (Redux DevTools)
  const { dispatch, getState } = store;
  const { url, method, data, onSuccess, onError } = action.payload;
  try {
    const response = await axios.request({baseURL, url, method, data});

    //General success dispatch
    dispatch(apiCallSucceeded(response.data));

    if (onSuccess)
      dispatch({type: onSuccess, payload: response.data});
  }
  catch(error) {
    //General error dispatch
    dispatch(apiCallFailed(error));

    if (onError)
      dispatch({type: onError, payload: error});
  }
}
export default api;