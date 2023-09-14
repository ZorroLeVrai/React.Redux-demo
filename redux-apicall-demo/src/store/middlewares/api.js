import axios from 'axios';
import constants from '../../constants';

//SNA
const api = baseURL => store => next => async action => {
  if (action.type !== constants.API_CALL_ACTION_TYPE) return next(action);

  const { dispatch, getState } = store;
  const { url, method, data, onSuccess, onError } = action.payload;
  try {
    const response = await axios.request({baseURL, url, method, data});
    console.log({type: onSuccess, payload: response.data});
    dispatch({type: onSuccess, payload: response.data});
  }
  catch(error) {
    dispatch({type: onError, payload: error});
  }
}
export default api;