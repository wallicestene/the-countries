import React, { useState } from 'react'
import "./Search.css"
import { Search } from '@mui/icons-material'


const SearchInput = ({searchInput}) => {
    const [input, setInput] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        searchInput(input)
        setInput("")
    }
  return (
    <div className='search'>
      
        <form onSubmit={handleSubmit}>
          <Search/>
        <input type='text' 
        placeholder='Search for a Country' 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        </form>
    </div>
  )
}

export default SearchInput