import { ArrowBack, KeyboardBackspace, Language } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import"./Country.css"

const Country = () => {

  const history = useHistory();

  const [country, setCountry] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then(res => res.json())
      .then(data => {
        // if (data.length > 0) {
          setCountry(data);
        // } else {
        //   throw new Error("Country data not found.");
        // }
      })
      .catch(error => {
        console.error(error);
      //  handling the error
      });
  }, []);

  return (
    <>
    {country.length > 0 ? (
<div className="country">
      <div className="back" onClick={() => history.push("/")}  >
        <KeyboardBackspace/>
        <p>Back</p>
      </div>
      {country.map((countryInfo, index) => (
        <div className="country-info" key={index}>
        <div className="country-info-left">
            <img src={countryInfo.flags.svg} alt={countryInfo.flags.alt} />
       </div>
        <div className='right-content'>
           <div className="country-info-right">
            <div className='right-first'>
              <h2>{countryInfo.name.common}</h2>
            <p><strong>Population: </strong>{countryInfo.population.toLocaleString()}</p>
            <p><strong>Region: </strong>{countryInfo.region}</p>
            <p><strong>Subregion: </strong>{countryInfo.subregion}</p>
            <p><strong>Capital: </strong>{countryInfo.capital}</p>
            </div>
            <div className='right-second'>
              <p><strong>Top Level Domain: </strong>{countryInfo.tld}</p>
              { countryInfo.currencies &&  <p><strong>Currencies: </strong>{Object.keys(countryInfo.currencies).map(currency => `${countryInfo.currencies[currency].name} (${countryInfo.currencies[currency].symbol})`).join(', ')}</p>}
              { countryInfo.languages && <p><strong>Languages: </strong>{Object.values(countryInfo.languages).join(', ')}</p>}
            </div>
          </div>
          <div className='right-bottom'>
              <p><strong>Border Countries:</strong></p>
              
              <div className='ttt'>
                { countryInfo.borders && countryInfo.borders.map((border, index) => (
                  <p key={index} className='borders'>{border}</p>
                  ))}
              </div>
             
            </div>
        </div>
        
      </div>
      ))}
    </div>
    ) : (
      <p className="loading">Loading...</p>
    )}
    
    </>
  );
};

export default Country;
