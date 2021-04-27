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
                    title = 'Web-design Adapt' 
                    image = 'https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png'
                    tag = 'Front-end'
                    progress = {9}
                    description = 'I use react.js library and its JSX expressions to help me design and code better websites.'
                    footer = 'For example, this website.'
                    projects = {
                        <>
                        <ProjectList
                            projectpic = 'https://image.flaticon.com/icons/png/512/2543/2543737.png'
                            title = 'Web-app Musicbox'
                            description = {<><div>My first web-app/website ever! Create your own awesome beats and save it to share with friends!</div>
                                            <div>As expected from the first of the apps, it is full of spaghetti code and bootleg solutions. But hey, there is a first for everything.</div></>}
                            hlink = 'https://mtwangyugeng.github.io/hbeatbox/'
                            glink = 'https://github.com/mtwangyugeng/hbeatbox'
                        />
                        <ProjectList
                            projectpic = 'https://raw.githubusercontent.com/mtwangyugeng/personalpage/master/public/logo_OtF_icon.ico'
                            title = 'My First Personal Page'
                            description = {<><div>My first attempt of making a portfolio website for myself.</div>
                                            <div>The high reusablity of the components and the use of REST API to bring in the infomation from the Github servers is its highlights. However, there was too much focus on designing the code so that it is useable that not enough effort waws put into the creativity.</div></>}
                            hlink = 'https://mtwangyugeng.github.io/personalpage/'
                            glink = 'https://github.com/mtwangyugeng/personalpage'
                        />
                        <ProjectList
                            projectpic = 'https://raw.githubusercontent.com/mtwangyugeng/web/main/public/logo_Simon.ico'
                            title = 'This Website'
                            description = {<><div>Round two! It is this website. I think I did a pretty good job.</div>
                                            <div>The butterfly scene for background is made by three.js. Like my previous website the high reusablity of the components is still one of the biggest sell point. But this time, more thoughts were put in to allow more rooms for creativity.</div></>}
                            hlink = 'https://mtwangyugeng.github.io/personalpage/'
                            glink = 'https://github.com/mtwangyugeng/personalpage'
                        />
                        </>
                    }
                />
                <SkillCard 
                    title = 'Computer Science & Math Bachelor' 
                    image = 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png'
                    tag = 'Foundations'
                    progress = {10}
                    description = {<div style = {{fontSize:'80%'}}>I have strong knowledge of software fundamentals such as data structures, algorithm design, design patterns in object-oriented programming, functional programming, and operating systems</div>}
                    footer = 'My focus: mathmatic analysis and software development.'
                    projects = {
                        <>
                        <ProjectList
                            projectpic = 'https://raw.githubusercontent.com/mtwangyugeng/web/main/public/logo_Simon.ico'
                            title = 'Algorithms and Data Structures'
                            description = {<><div>I solve problems creatively with the algorithm knowledge I know.</div>
                                            <div>Take a look at my gihub repository on data structures.</div>
                                            </>}
                            glink = 'https://github.com/mtwangyugeng/pythondatastructures'
                        />
                        </>
                    }
                />

                <SkillCard 
                    title = 'Database Novice' 
                    image = 'https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.jpg'
                    tag = 'Backend'
                    progress = {2}
                    description = 'I was in charge of linking MySQL APIs to the front-end of a group project'
                    footer = 'Well, at least I know how MySQL works.'
                    projects = 'Coming soon'
                />
                {/* <SkillCard 
                    title = 'Noob Master' 
                    image = 'https://img.game8.co/3277849/73953a85412dad6ed3528b008201051d.png/show'
                    tag = 'Gaming'
                    progress = {11}
                    description = 'I bodied Fatalis in Monster Hunter World with great-sword. Also did I mention I am diamond in League of Legend?'
                    footer = 'Not with long-sword though; long-sword is kind of hard.'
                    projects = {<img style = {{height: '100%', marginLeft: "30%",borderRadius:'10%'}} alt = 'meme pic' src = 'https://i.redd.it/dp2vyqannrd51.png'/>}
                /> */}
            </div>
        </div>
        )
    }

}