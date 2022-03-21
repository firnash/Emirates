
import * as types from "./AirportsTypes";

export const actionRequest = () => ({
  type: types.GET_AIRPORTS_REQUEST
});

export const actionReceive = payload => ({
  type: types.GET_AIRPORTS_RECEIVE,
  payload
});