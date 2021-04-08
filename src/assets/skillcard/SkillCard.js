import React from 'react';
import './SkillCard.css';

import ProgressBar from './progressbar/ProgressBar'

export default class SkillCard extends React.Component{
    state = {
        projects_open: false
    }
    cardref = React.createRef()
    render(){
        return (
            <>
                <div className = {"SkillCard-projects " + (this.state.projects_open?'SkillCard-projects-show':'')}>
                    {this.props.projects}
                </div>
                <div>
                <div ref = {this.cardref} className= {"SkillCard " + (this.state.projects_open?'SkillCard-projects-card':'')} onClick={this.clickedCard}>
                    <div className="SkillCard-inner">
                        <div className = "SkillCard-main">
                            <div className = "SkillCard-top">
                                {this.props.title}
                            </div>
                            <img className = "SkillCard-pic" alt = 'Profile pic' src = {this.props.image}/>
                            <div className = "SkillCard-bottom">
                                <div className = "SkillCard-bottom-tag">
                                    {this.props.tag}
                                </div>
                                <div className = "SkillCard-bottom-progression">
                                    <ProgressBar progress = {this.props.progress}/>
                                </div>
                                <div className = "SkillCard-bottom-description">
                                    {this.props.description}
                                </div>
                                <div className = "SkillCard-bottom-footer">
                                    {this.props.footer}
                                </div>
                            </div>
                        </div>
                        <div className = "SkillCard-back"/>
                    </div>
                </div>
                </div>
            </>
        );
    }
    temp = null
    clickedCard = () => {
        if(this.state.projects_open){
            this.cardref.current.style.top = this.temp.top + "px"
            this.cardref.current.style.right = this.temp.right + 'px'
            this.cardref.current.style.left = this.temp.left + "px"
            this.setState({projects_open: false})
        }
        else{
            this.temp = this.cardref.current.getBoundingClientRect()
            this.cardref.current.style.top = this.temp.top + "px"
            this.cardref.current.style.right = this.temp.right + 'px'
            this.cardref.current.style.left = this.temp.left + "px"
            
            // this.cardref.current.style.top = 0 + "px"
            // this.cardref.current.style.right = 0 + 'px'
            // this.cardref.current.style.left = 0 + "px"
            this.setState({projects_open: true})
        }
    }

    componentDidUpdate(prevState){
        if(prevState.projects_open !== this.state.projects_open){
            console.log('reeeeeeee');
            if(this.state.projects_open){
                console.log(this.cardref.current.style.top )
                this.cardref.current.style.top = 0 + "px"
                this.cardref.current.style.right = 0 + 'px'
                this.cardref.current.style.left = 0 + "px"
            }
        }

    }
}