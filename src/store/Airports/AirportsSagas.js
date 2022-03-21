import { call, put } from "redux-saga/effects";
import API from "./AirportsApi";
import * as ACTIONS from "./AirportsAction";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "./AirportsTypes";

export function* sagasRequestAirports() {
  try {
    const response = yield call(API.apiAirportListRequest);
    yield put(ACTIONS.actionReceive(response.data));
  } catch (err) {
    alert(err);
  }
}

export function* AirportSaga() {
  yield takeLatest(TYPES.GET_AIRPORTS_REQUEST, sagasRequestAirports);
}