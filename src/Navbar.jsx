import React, { useState } from 'react'
import "./Navbar.css"
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material'

const Navbar = ({toggleTheme , theme}) => {
  const[mode, setMode] =useState(true)

  return (
    <nav>
      <div className="navbar-container">
        <h1>Where in the world?</h1>
        <div className="mode-details"onClick={toggleTheme}>
            {theme === "dark" ? <DarkModeOutlined /> : <LightModeOutlined />}
            <h3>{theme === "light" ? "Light Mode" : "Dark Mode"}</h3>
        </div>
    </div>
    </nav>
    
  )
}

export default Navbar