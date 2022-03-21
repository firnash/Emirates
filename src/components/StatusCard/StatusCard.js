import React from "react";
import FlightIcon from '@mui/icons-material/Flight';
import moment from 'moment';

import ekFlag from '../../assets/ek.svg';
import './StatusCard.scss';
import { StatusRibbon } from "../StatusRibbon/StatusRibbon";

export const StatusCard = ({flight, flightRoute, departure, arrival, statusCode}) => {

  const departTime = (format) => moment.utc(flightRoute.departureTime.actual || flightRoute.departureTime.estimated).format(format);
  const arrivalTime = (format) => moment.utc(flightRoute.arrivalTime.actual || flightRoute.arrivalTime.estimated).format(format);
  const isArrived = flightRoute.statusCode === 'ARVD' ? 'status-card-progress-icon-arrived' : 'status-card-progress-icon-default';

  return (
    <div className="container status-card">
      <StatusRibbon text={statusCode} />
      <div className="row">
        <div className="col-12 col-md-9 status-card-column mb-5 mb-md-0 mt-md-0 mt-5">
          <div className="row justify-content-between">
            <div className="col">
              <h5>{departure}</h5>
            </div>
            <div className="col text-end">
              <h5>{arrival}</h5>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col">Departed:</div>
            <div className="col text-end">Arrived:</div>
          </div>
          <div className="row">
            <div className="col">
              <h1>{departTime('LT')}</h1>
            </div>
            <div className="col status-card-progress align-self-center">
              <div className="status-card-progress-line">
                <span className={`status-card-progress-icon ${isArrived}`}>
                  <FlightIcon />
                </span>
              </div>
            </div>
            <div className="col text-end">
              <h1>{arrivalTime('LT')}</h1>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col">
              <span>{departTime('llll')}</span>
            </div>
            <div className="col text-end">
              <span>{arrivalTime('llll')}</span>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col">
              <span>Scheduled Departure: {moment.utc(flightRoute.departureTime.schedule).format('LT')}</span>
            </div>
            <div className="col text-end">
              <span>Scheduled Arrival: {moment.utc(flightRoute.arrivalTime.schedule).format('LT')}</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 align-self-center text-center">
          <img alt="emiratesFlag" src={ekFlag} style={{width: '31px'}} />
          <h5 className="status-card-number">{flight.airlineDesignator} {flight.flightNumber}</h5>
        </div>
      </div>
    </div>
  );
};