import React from "react";
import './navbar.css'
import Profile from '../images/profile.png';
import Tools from '../images/tools.png';


const Navbar = () => {
    return(
        
        <div className='nav'>
            <div className="right-links">
                <div className="nav-links"><a href="#">Gmail</a></div>
                <div className="nav-links"><a href="#">Images</a></div>
                <div className="nav-links">
                <img src={Tools} alt="tools" />
                </div>
                <div className="icon"><a href="#"><img src={Profile} alt="img"/></a></div>
            </div>
            
        </div>
        
    )
}

export default Navbar;