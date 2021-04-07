import React from 'react';
import './SkillCard.css';

import ProgressBar from './progressbar/ProgressBar'

export default class SkillCard extends React.Component{
    render(){
        return (
            <div className="SkillCard">
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
        );
    }
}