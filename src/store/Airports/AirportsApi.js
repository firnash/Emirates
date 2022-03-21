import {axiosInstance} from '../../network/apis';
const handlerEnabled = false;

const apiAirportListRequest = async () => {
  return await axiosInstance.get(`/airports?lang=en`, { handlerEnabled });
};

export default {
  apiAirportListRequest
};