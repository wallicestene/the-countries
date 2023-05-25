import React, {createContext, useState} from 'react'
import Navbar from './Navbar'
import Countries from "./Countries"
import "./App.css"
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import Country from './Country'


export const ThemeContext = createContext(null)

const App = () => {

 const [theme, setTheme] = useState("light")

 const toggleTheme = () =>{
  setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark")
 }
  return (
    
    <Router>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <div className='app' id={theme}>
        <Navbar toggleTheme={toggleTheme} theme={theme}/>
      <div className='Countries'>
        <Switch>
           <Route exact path="/">
          <Countries/>
        </Route>
        <Route path="/country/:name">
        <Country/>
        </Route>
        </Switch>
      </div> 
      </div>
      </ThemeContext.Provider>
      
    </Router>
     
      
    
  )
}

export default App