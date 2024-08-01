
import React from "react";
import '../styles/App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './home';
import About from './about';


function App () {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/about' element={<About/>}/> 
        </Routes>
    </div>
  )
}

export default App
