import React from 'react';
import './FooterScene.css';

export default class FooterScene extends React.Component{
    
    render() {
        return(
        <div className="FooterScene-main" >
            <div style={{color: "grey", margin: "auto", fontSize: "1.6vmin"}}>
                Code: Yu Geng Wang • Design: Yu Geng Wang • © Copyright 2021
            </div>
        </div>
        )
    }

}