// import { FeatureSaga1 } from '../Feature1/FeatureSagas';
import { all } from "redux-saga/effects";
import { AirportSaga } from "../Airports/AirportsSagas";
import { FlightStatusSaga } from "../FlightStatus/FlightStatusSagas";

export function* watchSagas() {
  yield all([AirportSaga(), FlightStatusSaga()]);
}