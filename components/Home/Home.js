import React from 'react';
import {NavLink, Link} from "react-router-dom";


const Home = () => {
	return (
    <div>
      <div class="topnav">
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink exact activeClassName="active" to="/Signin">Login</NavLink>
        <NavLink exact activeClassName="active" to="/About">About</NavLink>
        
      </div>
      <h2 className="f1 fw6 ph0 mh0" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh'}}>Welcome to Electric Grid Monitoring</h2>
     
      <div class = "center-screen"> 
        <h3 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '40vh'}}> We connect users with real-time data from the electric grid 
        to incentivize users to complete and use power-intensive devices during times of surge.  Users will benefit by cutting costs on electricity and power suppliers 
        will benefit by having no power wasted. The users will be notified when it’s the peak time to use power-intensive devices. 
        As a user, you will benifit by saving money, and lower reliance on non-renewable energy.
        </h3>
      </div>
    </div>
	); 
}

export default Home; 