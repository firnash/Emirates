import * as types from "./FlightStatusTypes";

export const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_STATUS_RECEIVE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};