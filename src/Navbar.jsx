import React, { useState } from 'react'
import "./Navbar.css"
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material'

const Navbar = ({toggleTheme , theme}) => {

  return (
    <nav>
      <div className="navbar-container">
        <h1>Where in the world?</h1>
        <div className="mode-details"onClick={toggleTheme}>
            {theme === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
            <h3>{theme === "light" ? "Dark Mode" : "Light Mode"}</h3>
        </div>
    </div>
    </nav>
    
  )
}

export default Navbar