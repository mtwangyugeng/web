import React from 'react';
import './Namecard.css';

export default class Namecard extends React.Component{
    render(){
        return (
            <div className = "Namecard-main">
                <img className = "Namecard-profilepic" alt = 'Profile pic' src = {this.props.profilepic}/>
                <div className = "Namecard-rightcol">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.location}</p>
                    <div className = "Namecard-bio">{this.props.bio}</div>
                </div>
            </div>
        );
    }
}