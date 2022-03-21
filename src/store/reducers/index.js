import { combineReducers } from "redux";
import loader from "../Loader/LoaderReducer";
import airports from "../Airports/AirportsReducer";
import flightStatus from "../FlightStatus/FlightStatusReducer";

export default combineReducers({
  loader,
  airports,
  flightStatus
});