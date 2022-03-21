import React from "react";
import './StatusRibbon.scss';

export const StatusRibbon = ({text}) => {
  return (
    <>
      <div className={`status-ribbon ${
            text === 'Arrived' ? 'status-ribbon-green' 
            : 
            text === 'Not yet Departed' ? 'status-ribbon-blue' 
            : 
            'status-ribbon-amber'
      }`}>
        <span className="status-ribbon-content">{text}</span>
      </div>
      <div className="status-ribbon-triangle"></div>
    </>
  );
};