import {axiosInstance} from '../../network/apis';
const handlerEnabled = false;

const apiFlightStatustRequest = async ({date, origin, destination}) => {
  return await axiosInstance.get(`/flight-status`, { handlerEnabled, params: {
    departureDate: date,
    origin,
    destination
  }});
};

export default {
  apiFlightStatustRequest
};