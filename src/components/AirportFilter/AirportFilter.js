import React, { useState } from "react";

import { InputField } from "../Controls/InputField/InputField";
import './AirportFilter.scss';
import { AirportFilterList } from "./AirportFilterList";

export const AirportFilter = ({ label, name, data, selectedAirport, error, helperText }) => {

  let filteredData = data.results ? Object.values(data.results) : [];

  const [inputText, setInputText] = useState("");
  const [isShowList, setShowList] = useState(false);
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    setShowList(true);
  };

  let focusHandler = () => {
    setShowList(true);
  }

  filteredData = filteredData.filter((el) => {
    if (inputText === '') {
      return el;
    } else {
      return el.city.longName.toLowerCase().includes(inputText) ||
        el.longName.toLowerCase().includes(inputText) ||
        el.iataCode.toLowerCase().includes(inputText) ||
        el.country.longName.toLowerCase().includes(inputText)
    }
  });

  const getSelectedCity = (index) => {
    const selectedData = filteredData[index];
    selectedAirport(selectedData);
    setShowList(false);
    setInputText(selectedData.city.longName + ` (${selectedData.iataCode})`);
  }

  return (
    <div className="airport-filter">
      <InputField 
        error={error} 
        helperText={helperText} 
        handleFocus={focusHandler} 
        handleChange={inputHandler} 
        label={label} 
        name={name} 
        value={inputText} 
      />

      {
        filteredData.length && isShowList ?
          <div className="airport-filter-dropdown">
            {
              filteredData.map((item, index) => {
                return <AirportFilterList 
                          handleItem={() => getSelectedCity(index)} 
                          key={index} 
                          city={item.city.longName} 
                          airport={item.longName} 
                          code={item.iataCode} 
                        />
              })
            }
          </div> : <></>
      }

    </div>
  );
};