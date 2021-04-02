import React from 'react';
import './AboutScene.css';

import NameCard from '../assets/namecard/Namecard'
import selfportret from "./self.png"

export default class AboutScene extends React.Component{
    
    pos = React.createRef()
    state = {show: false}

    render() {
        return(
        <div className="AboutScene-main">
            <div ref = {this.pos} className="AboutScene-title">About</div>
            <div className = {"AboutScene-underline " + (this.state.show ? "AboutScene-underline-show":"")}/>
            <div style = {{width: '100vmin', height: '33vmin', fontSize: '2vmin', margin: "auto"}}>
                <NameCard 
                    profilepic = {selfportret}
                    name = "Yu Geng Wang (Simon)"
                    location = "Toronto, ON, CA"
                    bio = "I'm a University of Toronto Scarborough 2019
                            graduate majoring mathmatical analysis and
                            software Engineering. My other passions
                            include video games, Front-end design,
                            nature sight-seeing, and social science.
                            "
                />
            </div>
        </div>
        )
    }

    componentDidMount(){
        this.handlevisible()
        window.addEventListener('scroll', this.handlevisible);
    } componentWillUnmount() {
        window.removeEventListener('scroll', this.handlevisible)
    }    

    handlevisible = () => {
        if(!this.show && (this.pos.current.offsetTop + this.pos.current.offsetHeight) < (window.scrollY + window.innerHeight) && this.pos.current.offsetTop + this.pos.current.offsetHeight > window.scrollY)
            this.setState({show: true})
        else
            this.setState({show: false})
    }

}