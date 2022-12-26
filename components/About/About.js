import React from 'react'; 
import Tilt from 'react-tilt';
import './About.css';
import {NavLink, Link} from "react-router-dom";
class About extends React.Component{
    render(){
        return(
            <div>
            <div class="topnav">
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink exact activeClassName="active" to="/Signin">Login</NavLink>
        <NavLink exact activeClassName="active" to="/About">About</NavLink>
                
            </div>
            <div class= "center-top">
            <h1>TOGETHER WE CAN ENVISION, INSPIRE AND HELP SAVE THE PLANET</h1>
            <h4>Founders of The Electric Grid Monitorting Website</h4>
            </div>
            <div class= "left">
                <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 300, width: 300 }} >
                     <div className="Tilt-inner"> <h3>Mutaz Al Disi</h3> 
<h4>I am a fourth year Software Engineernig Student. I am one of the founders. I worked on the development of the front end and backend of this website. If you have any question regarding the functions of the website or any general inquiries, please contact me at:
mutazaldisi@cmail.carleton.ca </h4></div>
                </Tilt>
            </div>

            <div class= "middle">
                <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 300, width: 300 }} >
                     <div className="Tilt-inner"> <h3>Ahmed El Madhoun</h3>
<h4>I am a fourth year Sustainable Renewable Energy Engineering student. If you have any questoins regarding the information portrayed one the website or any general inquistions please contact me at: ahmedelmadhoun@cmaill.carleton.ca</h4> </div>
                </Tilt>
            </div>

            <div class= "right">
                <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 300, width: 300 }} >
                     <div className="Tilt-inner"> 
                        <h3>Albara'a Salem</h3> <h4>I am a fourth year Software Engineernig Student. I am one of the founders. I worked on the development of the front end and backend of this website. If you have any question regarding the functions of the website or any general inquiries, please contact me at:
albaraasalem@cmail.carleton.ca</h4>
                     </div>
                </Tilt>
            </div>

            </div>
        )

    }

}

export default About; 