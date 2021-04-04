import React from 'react';
import './AboutScene.css';

import NameCard from '../assets/namecard/Namecard'
import selfportret from "./self.png"
import SceneTitle from '../assets/scenetitle/SceneTitle';

export default class AboutScene extends React.Component{
    

    render() {
        return(
        <div className="AboutScene-main">
            <SceneTitle title = "About"/>
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

}