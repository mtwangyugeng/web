import React from 'react';
import ContactInfo from '../assets/contactinfo/ContactInfo';
import SceneTitle from '../assets/scenetitle/SceneTitle';
import './ContactScene.css';

import discord from './Discord-Logo-White.png'
import email from './email.png'
import linkedin from './linkedin.png'

export default class ContactScene extends React.Component{
    
    render() {
        return(
        <div className="ContactScene-main">
            <div style={{color: 'white'}}><SceneTitle title = "Contact Me"/></div>
            <div style={{width:'100vmin', margin: "auto", display: 'flex', justifyContent: 'center', marginTop: '2vmin'}}>
                <ContactInfo delay = '0s' icon = {discord} title = 'Add me on Discord' description = 'My user name is Simon (Lockhan)#3157'/>
                <ContactInfo delay = '0.1s' icon = {email} title = 'Send an email to me' description = {<a href = "mailto:mtwangyugeng@gmail.com" style = {{color: 'lightblue'}}>mtwangyugeng@gmail.com</a>}/>
                <ContactInfo delay = '0.2s' icon = {linkedin} title = 'Connect with me on LinkedIn' description = {<a href = "https://www.linkedin.com/in/yu-geng-simon-wang/" style = {{color: 'lightblue'}} target="_blank">Go to my LinkedIn profile</a>}/>
            </div>
        </div>
        )
    }

}