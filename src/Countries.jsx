import React, { useState, useEffect } from 'react';
import './Countries.css'; // Import the CSS file
import {Link} from "react-router-dom"
import SearchInput from './SearchInput';
import Filter from './Filter';
import { PulseLoader } from 'react-spinners';
import { motion } from "framer-motion";
const CountryData = () => {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('');

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => {
        setCountries(data)
        setLoading(true)
      })
      .catch(error => console.error('Error:', error));
      setError(error)
  }, []);

  const getCountryByName =(name)=>{
     fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then(response => response.json())
      .then(data => {
        setCountries(data)
        setLoading(true)
      })
      .catch(error => console.error('Error:', error));
      setError(error.message)
  }
  const filterByRegion =(region)=>{

      if (region === "Filter by Region") {
        fetch("https://restcountries.com/v3.1/all")
          .then(response => response.json())
          .then(data => {
            setCountries(data)
            setLoading(true)
          })
          .catch(error => console.error('Error:', error));
          setError(error.message)
      }else{
        fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then(response => response.json())
      .then(data => {
        setCountries(data)
       console.log(data)
       setLoading(true)
     })
     .catch(error => console.error('Error:', error));
     setError(error.message)
 }
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
            <motion.div
              initial={{
                opacity: 0,
                translateX: -500,
                rotate: 10,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
                rotate: 0,
              }}
              transition={{
                delay: index * 0.02,
              }}
              whileHover={{
                translateY: -10,
              }}
            >
            <div className="flag">
              <img src={country.flags.svg} alt="" />
            </div>
            <div className="country-details">
              <h2>{country.name.common}</h2>
              <p> <strong>Population: </strong>{country.population.toLocaleString()}</p>
              <p><strong>Region: </strong>{country.region}</p>
              <p><strong>Capital: </strong>{country.capital}</p>
              </div>
              </motion.div>
              </Link> 
          </div>
           ))}
           </div> 
      ) : (
        <p className='loader'>{loading ? "" : <PulseLoader
        color="#398f7d"
        margin={2}
        size={70}
        speedMultiplier={0.5}
      />}</p>
      )}
    </div>
  );
};

export default CountryData;
