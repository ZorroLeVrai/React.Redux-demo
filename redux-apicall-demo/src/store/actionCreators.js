import constants from "../constants";

export const sendApiRequest = (payload) => ({
  type: constants.API_CALL_ACTION_TYPE,
  payload,
});