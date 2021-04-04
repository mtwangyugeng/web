import React from 'react';

import './ContactInfo.css';



export default class ContactInfo extends React.Component{
    pos = React.createRef()
    state = {show: ""}

    render() {
        return(
        <div ref = {this.pos} className= {"ContactInfo-main " + this.state.show} style={{animationDelay: this.props.delay}}>
            <div className="ContactInfo-icon-container">
                <img className="ContactInfo-icon" src = {this.props.icon} height = '100%' />
            </div>
            <div className="ContactInfo-title">
                {this.props.title}
            </div>
            <div className="ContactInfo-description">
                {this.props.description}
            </div>
        </div>
        )
    }

    componentDidMount() {
        this.handlevisible()
        window.addEventListener('scroll', this.handlevisible);
    } componentWillUnmount() {
        window.removeEventListener('scroll', this.handlevisible)
    }

    handlevisible = () => {
        if(!this.show && (this.pos.current.offsetTop + this.pos.current.offsetHeight/2) < (window.scrollY + window.innerHeight) && this.pos.current.offsetTop + this.pos.current.offsetHeight > window.scrollY)
            this.setState({show: "ContactInfo-show"})
        else
            this.setState({show: ""})
    }

}