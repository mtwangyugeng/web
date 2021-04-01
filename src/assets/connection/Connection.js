import React from 'react';
import './Connection.css';

export default class Connection extends React.Component{

    render() {
        return ( 
            <>
                <div className = "Connection-linkedin Connection-icons" onClick = {this.golink(this.props.linkedin)}></div>
                <div className = "Connection-github Connection-icons" onClick = {this.golink(this.props.github)}></div>
                <div className = "Connection-email Connection-icons" onClick = {this.golink("mailto:" + this.props.email)}></div>
            </>
        );
    }

    golink = (link) => {
        return () => window.open(link)
    }
}

