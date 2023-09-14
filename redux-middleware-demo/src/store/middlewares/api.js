//fake axios library
const axios = {
  request: obj => {}
};

//SNA
const api = store => next => async action => {
  if (action.type !== "apiCallBegan") return next(action);

  const { dispatch, getState } = store;
  const { url, method, data, onSuccess, onError } = action.payload;
  try {
    const response = await axios.request({baseURL: "http://localhost:9001/api", url, method, data});
    dispatch({type: onSuccess, payload: response.data});
  }
  catch(error) {
    dispatch({type: onError, payload: error});
  }
}
export default api;