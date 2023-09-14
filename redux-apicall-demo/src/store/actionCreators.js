import { createAction } from "@reduxjs/toolkit";

export const apiRequested =  createAction("apiRequested");
export const apiCallSucceeded = createAction("apiCallSucceeded");
export const apiCallFailed =  createAction("apiCallFailed");

//example of manually define your action creator
export const myActionCreatorSendApiRequest = (payload) => ({
  type: "apiRequested",
  payload,
});