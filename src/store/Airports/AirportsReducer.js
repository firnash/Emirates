import * as types from "./AirportsTypes";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_AIRPORTS_RECEIVE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};