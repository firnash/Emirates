
import * as types from "./FlightStatusTypes";

export const actionStatusRequest = (data) => ({
  type: types.GET_STATUS_REQUEST,
  data
});

export const actionStatusReceive = payload => ({
  type: types.GET_STATUS_RECEIVE,
  payload
});