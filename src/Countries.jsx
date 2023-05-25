import React, { useState, useEffect } from 'react';
import './Countries.css'; // Import the CSS file
import {Link} from "react-router-dom"
import SearchInput from './SearchInput';
import Filter from './Filter';

const CountryData = () => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => {
        setCountries(data)
        console.log(data)
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const getCountryByName =(name)=>{
     fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then(response => response.json())
      .then(data => {
        setCountries(data)
        console.log(data)
      })
      .catch(error => console.error('Error:', error));
  }
  const filterByRegion =(region)=>{
    fetch(`https://restcountries.com/v3.1/region/${region}`)
     .then(response => response.json())
     .then(data => {
       setCountries(data)
       console.log(data)
     })
     .catch(error => console.error('Error:', error));
 }
  return (
    <div className="country-container">
      
      <div className="country-upper">
       
        <SearchInput searchInput={getCountryByName}/>
        <Filter regionName={filterByRegion}/>
        
      </div>
      
      {countries.length > 0 ? (
      
        <div className="country-grid">
        {countries.map((country, index) => (
          <div  key={index} className="country-card">
            <Link to={`/country/${country.name.common}`} className="link">
            <div className="flag">
              <img src={country.flags.svg} alt="" />
            </div>
            <div className="country-details">
              <h2>{country.name.common}</h2>
              <p> <strong>Population: </strong>{country.population.toLocaleString()}</p>
              <p><strong>Region: </strong>{country.region}</p>
              <p><strong>Capital: </strong>{country.capital}</p>
              </div>
              </Link> 
          </div>
           ))}
           </div> 
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CountryData;
