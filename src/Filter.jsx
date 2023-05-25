import React from 'react'
import "./Filter.css"
import { useHistory } from 'react-router-dom'
const Filter = ({regionName}) => {

  const history = useHistory()
  const handleOnchange = (e) =>{
    const region = e.target.value
    
    console.log(region)
    regionName(region)
  }
  return (
    <div className='filter'>
      <select id="region" onChange={handleOnchange}>
            <option value="Filter by Region">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}

export default Filter