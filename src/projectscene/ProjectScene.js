import React from 'react';
import SceneTitle from '../assets/scenetitle/SceneTitle';
import SkillCard from '../assets/skillcard/SkillCard';
import './ProjectScene.css';

export default class ProjectScene extends React.Component{
    render() {
        return(
        <div className="ProjectScene-main">
            <div style={{color: 'white', paddingTop: "5vmin"}}><SceneTitle title = 'My Deck'/></div>
            <SkillCard 
                title = 'React Master (kappa)' 
                image = 'https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png'
                tag = 'Front-end'
                progress = {10}
                description = 'For example, this website.'
                footer = 'Click on me to view my projects related to react.js.'
                projects = 'Test Projects'
            />
            <SkillCard 
                title = 'Monster Hunter' 
                image = 'https://img.game8.co/3277849/73953a85412dad6ed3528b008201051d.png/show'
                tag = 'Gaming'
                progress = {8}
                description = 'Bodied Fatalis.'
                footer = 'Click on me to view acheivments related to MHW.'
                projects = 'Test Projects'
            />
        </div>
        )
    }

}