import React from 'react';
import './LandingScene.css';

import StringAnimation from '../assets/stringanimation/StringAnimation'
import Connection from '../assets/connection/Connection'

export default class LandingScene extends React.Component{
    
    render() {
        return(
        <div className="LandingScene-main">
            <div >
                <div className = "LandingScene-intro"><StringAnimation strings = {["Hi, I am Yu Geng.", "You can call me Simon." ,"Let's work together."]}/></div>
                <div className = "LandingScene-connect">
                    <div className = "LandingScene-connect-inner">
                        <Connection linkedin = "https://www.linkedin.com/in/yu-geng-simon-wang/" github = "https://github.com/mtwangyugeng" email = "mtwangyugeng@gmail.com"/>
                    </div>
                </div>
            </div>
            <div className="LandingScene-downbutton-container">
                <div className = "LandingScene-downbutton" onClick = {this.moveDown}/>
            </div>
        </div>
        )
    }

    moveDown = () =>{
        window.scrollTo({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
          })
    }

}