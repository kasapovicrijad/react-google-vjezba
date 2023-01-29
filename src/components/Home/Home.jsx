import React from 'react';
import './home.css'
import Google from '../images/googlelogo.png';
import Microphone from '../images/mic-icon.png';
import Search from '../images/search-icon.png';


const Home = () => {
    return(
        <div className='container'>
        <div className='logo-google'>
        <img src={Google} alt='google-logo'/>
        </div> 
        <div className='search'>
           
               <div className='search-bar'>
                    <div className='search-icon'>
                    <img src={Search} alt='src'/>
                </div>
                    <div className='search-input'>
                        <input type="text" name="" id="" />
                    </div> 
                    <div className='mic-icon'>
                    <img src={Microphone} alt='mic'/>
                    </div>
            </div>
            <div className='buttons'>
                <button>Google Search</button>
          
            </div>

        </div>
        </div>
        
        
    )
}

export default Home;