import React, { Component } from 'react'; 
import Signin from './components/Signin/Signin.js'; 
import Home from './components/Home/Home.js';
import './components/Home/Home.css';
import './components/About/About.css';
import About from './components/About/About.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Particles from 'react-particles-js';


const particlesOptions = {
  particles: {
    number:{
      value: 80,
      density:{
        enable: true, 
        value_area: 800
      }
    }
  }
}

function App(){
  return(
    <div className="App">

    <Router>
        <Routes>
          <Route exact path= "/" element= {<Home/>}/>
          <Route path= "/About" element= {<About/>}/>
          <Route path= "/Signin" element= {<Signin/>}/>
        </Routes>  
      </Router> 
      

    </div>
  );

}
export default App;