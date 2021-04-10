import React from 'react';
import ProjectList from '../assets/projectlist/ProjectList';
import SceneTitle from '../assets/scenetitle/SceneTitle';
import SkillCard from '../assets/skillcard/SkillCard';
import './ProjectScene.css';

export default class ProjectScene extends React.Component{
    render() {
        return(
        <div className="ProjectScene-main">
            <div style={{color: 'white', paddingTop: "5vmin"}}><SceneTitle title = 'My Deck'/></div>
            <div className="ProjectScene-cardfield">
                <SkillCard 
                    title = 'React Master (self-proclaimed)' 
                    image = 'https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png'
                    tag = 'Front-end'
                    progress = {10}
                    description = 'For example, this website.'
                    footer = 'For example, this website.'
                    projects = {
                        <ProjectList
                            projectpic = 'https://image.flaticon.com/icons/png/512/2543/2543737.png'
                            title = 'Web-app Musicbox'
                            description = {<><div>My first web-app/website ever! Create your own awesome beats and save it to share with friends!</div>
                                            <div>As expected from the first of the apps, it is full of spaghetti code and bootleg solutions. But hey, there is a first for everything.</div></>}
                            hlink = 'https://mtwangyugeng.github.io/hbeatbox/'
                            glink = 'https://github.com/mtwangyugeng/hbeatbox'
                        />
                    }
                />
                <SkillCard 
                    title = 'Monster Hunter' 
                    image = 'https://img.game8.co/3277849/73953a85412dad6ed3528b008201051d.png/show'
                    tag = 'Gaming'
                    progress = {11}
                    description = 'Bodied Fatalis in Monster Hunter World.'
                    footer = 'Trust me, it is pretty hard.'
                    projects = {<ProjectList/>}
                />
            </div>
        </div>
        )
    }

}