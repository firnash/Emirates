import { call, put } from "redux-saga/effects";
import API from "./FlightStatusApi";
import * as ACTIONS from "./FlightStatusAction";
import * as LoaderActions from "../Loader/LoaderAction";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "./FlightStatusTypes";

export function* sagasRequestFlightStatus(data) {
  try {
    yield put(LoaderActions.loader(true));
    let response = null
    if (data && data.data) {
      response = yield call(API.apiFlightStatustRequest, data.data);
    } 
    console.log('response flight status in saga: ', response);
    yield put(LoaderActions.loader(false));
    yield put(ACTIONS.actionStatusReceive(response.data));
  } catch (err) {
    console.log('errrrr saga: ', err);
    alert(err);
  }
}

export function* FlightStatusSaga() {
  yield takeLatest(TYPES.GET_STATUS_REQUEST, sagasRequestFlightStatus);
}