import React from 'react';
import './ProjectList.css';

import hlink from './hyperlink.png'
import gitlink from './GitHub-Mark-Light-64px.png'

export default class ProjectList extends React.Component{
    render(){
        return (
            <div className = "ProjectList-project">
                <img className = "ProjectList-image" alt = 'project pic' src = {this.props.projectpic}/>
                <div className = "ProjectList-words">
                    <div className = "ProjectList-title">
                        {this.props.title}
                    </div>
                    <div className = "ProjectList-description">
                        {this.props.description}
                    </div>
                </div>
                <div className = "ProjectList-links">
                    {(this.props.hlink) ? <img className = "ProjectList-links-image" alt = 'project pic' src = {hlink} onClick = {this.golink(this.props.hlink)}/> : ''}
                    {(this.props.glink) ? <img className = "ProjectList-links-image" alt = 'project pic' src = {gitlink} onClick = {this.golink(this.props.glink)}/> : ''}
                </div>
            </div>
        );
    }
    golink = (link) => {
        return () => window.open(link)
    }
}