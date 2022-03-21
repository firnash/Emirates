import React from "react";

import './AirportFilter.scss';

export const AirportFilterList = ({ isEmpty, city, airport, code, handleItem }) => {
  return (
    <div className="row justify-content-between" onClick={handleItem}>
      <div className="airport-filter-list">
        <div className="airport-filter-item col-9">
          <span className="d-block airport-filter-city">{city}</span>
          <span className="d-block airport-filter-airport">{airport}</span>
        </div>
        <div className="airport-filter-item col-3 align-self-center">
          <span className="airport-filter-item-code">{code}</span>
        </div>
      </div>
    </div>
  );
};