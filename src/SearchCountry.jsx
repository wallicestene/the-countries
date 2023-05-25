import React from 'react';
import "./SearchCountries.css"
import { useHistory } from 'react-router-dom';
const SearchCountry = ({ country }) => {
    if (!country || Object.keys(country).length === 0) {
        return null; // or render a loading spinner, error message, or placeholder content
      }
  return (
    <div className="country-container">
        <div className="country-grid">
    <div className="country-card">
        <div className="flag">
          <img src={country.flags.png} alt="" />
        </div>
        <div className="country-details">
          <h2>{country.name.common}</h2>
          <p> <strong>Population: </strong>{country.population.toLocaleString()}</p>
          <p><strong>Region: </strong>{country.region}</p>
          <p><strong>Capital: </strong>{country.capital}</p>
        </div>
      </div>
       </div> 
    </div>
  );
};

export default SearchCountry;
