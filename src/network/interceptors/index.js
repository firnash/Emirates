import store from "../../store";
import { loader } from "../../store/Loader/LoaderAction";

export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

export const requestHandler = request => {
  if (isHandlerEnabled(request)) {
   // Modify request here
    store.dispatch(loader(true));
  }
  return request;
};

export const successHandler = response => {
  if (isHandlerEnabled(response)) {
    // Hanlde Response
    store.dispatch(loader(false));
  }
  return response;
};

export const errorHandler = error => {
  if (isHandlerEnabled(error.config)) {
    store.dispatch(loader(false));
  }
  return Promise.reject({ ...error });
};