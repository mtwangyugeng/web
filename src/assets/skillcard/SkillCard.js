import React from 'react';
import './SkillCard.css';

import ProgressBar from './progressbar/ProgressBar'
import { disableScroll,enableScroll } from '../util/disablescroll/DisableScroll'

export default class SkillCard extends React.Component{
    state = {
        projects_open: false,
        show: ""
    }
    pos = React.createRef()
    wrapper = React.createRef()
    render(){
        return (
            <>
                <div className = {"SkillCard-projects " + (this.state.projects_open?'SkillCard-projects-show':'')} onScroll = {null}>
                    <div style={{height:'50%'}}/>
                    <div ref = {this.wrapper} className = 'SkillCard-projects-wrapper'>
                    {this.props.projects}
                    </div>
                </div>
                <div ref = {this.pos} className = {"SkillCard-wrap " + this.state.show}>
                <div className= {"SkillCard " + (this.state.projects_open?'SkillCard-projects-card':'')} onClick={this.clickedCard}>
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
    componentDidMount() {
        this.handlevisible()
        window.addEventListener('scroll', this.handlevisible);
    } componentWillUnmount() {
        window.removeEventListener('scroll', this.handlevisible)
    }

    handlevisible = () => {
        if(!this.show && (this.pos.current.offsetTop + this.pos.current.offsetHeight/2) < (window.scrollY + window.innerHeight) && this.pos.current.offsetTop + this.pos.current.offsetHeight > window.scrollY)
            this.setState({show: "SkillCard-show"})
        else
            this.setState({show: ""})
    }

    clickedCard = () => {
        if(this.state.projects_open){
            this.setState({projects_open: false})
            enableScroll()
            this.wrapper.current.scrollTo({
                top: 0,
                left: 0,
              })
        }
        else{
            this.setState({projects_open: true})
            disableScroll()
        }
    }

    

}