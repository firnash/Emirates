import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AirportFilter } from '../../components/AirportFilter/AirportFilter';

import { Btn } from '../../components/Controls/Button/Button';
import { InputField } from '../../components/Controls/InputField/InputField';
import { StatusCard } from '../../components/StatusCard/StatusCard';
import { actionRequest } from '../../store/Airports/AirportsAction';
import { actionStatusRequest } from '../../store/FlightStatus/FlightStatusAction';
import moment from 'moment';
import './Home.scss';

export default function Home() {

  const dispatch = useDispatch();

  const today = moment.utc().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [departure, setDeparture] = useState(null);
  const [arrival, setArrival] = useState(null);
  const [isDepartureError, setDepartureError] = useState(false);
  const [isArrivalError, setArrivalError] = useState(false);
  const [showCard, setShowCard] = useState(false);
  
  const airports = useSelector((state) => state.airports);
  const flightStatus = useSelector((state) => state.flightStatus);
  const isLoading = useSelector((state) => state.loader);

  useEffect(() => {
    dispatch(actionRequest());
  }, [dispatch]);

  let dateHandler = (e) => {
    setDate(e.target.value);
  };

  const getDepartureAirport = (airport) => {
    setDeparture(airport);
    setDepartureError(false);
    setShowCard(false);
  }

  const getArrivalAirport = (airport) => {
    setArrival(airport);
    setArrivalError(false);
    setShowCard(false);
  }

  const getStatus = () => {
    if (departure !== null || arrival !== null) {
      dispatch(actionStatusRequest({
        date: moment.utc(date).format('YYYY-MM-DD'),
        origin: departure.iataCode,
        destination: arrival.iataCode
      }));
      setShowCard(true);
    } else {
      setDepartureError(true);
      setArrivalError(true);
    }
  }
  
  return(
    <div className="container">
      <div className="row filter-row p-2 mb-3">
        <div className="col-12 col-md-3">  
          <AirportFilter helperText={'Please Choose an Origin'} error={isDepartureError} selectedAirport={getDepartureAirport} data={airports} label='Departure Airport' name='departure' />
        </div>
        <div className="col-12 col-md-3">
          <AirportFilter helperText={'Please Choose a Destination'} error={isArrivalError} selectedAirport={getArrivalAirport} data={airports} label='Arrival Airport' name='arrival' />
        </div>
        <div className="col-12 col-md-3">
          <InputField handleChange={dateHandler} value={date} label='Departing' name='date' isDate={true} />
        </div>
        <div className="col-12 col-md-3 align-self-center">
          <Btn text='View Details' handleClick={getStatus}  />
        </div>
      </div>

      <div className="row">
        {
          !isLoading && showCard ? 
            flightStatus && flightStatus.results ? flightStatus.results.map((flights, i) => {
              const flightRoute = flights.flightRoute[0];
              const depCity = departure.city.shortName + ` (${departure.iataCode})`;
              const arrivalCity = arrival.city.shortName + ` (${arrival.iataCode})`;
              const status = flightRoute.statusCode;
              const statusCode = 
              status === 'ARVD' ? 'Arrived' 
              : 
              status === 'PDEP' ? 'Not yet Departed' 
              : 
              status === 'ENRT' ? 'In Flight'
              :
              status

              return <StatusCard 
                        statusCode={statusCode} 
                        key={i} 
                        departure={depCity} 
                        arrival={arrivalCity} 
                        flight={flights} 
                        flightRoute={flightRoute} 
                      />
            }) 
            : 
            isLoading ? <></> :
            <div className="col status-card">
              No available flight statuses
            </div>
          : <></>
        }
      </div>
    </div>
  )
}