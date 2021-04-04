import React from 'react';
import './SceneTitle.css';

export default class SceneTitle extends React.Component{
    
    pos = React.createRef()
    state = {show: false}

    render() {
        return(
        <>
            <div ref = {this.pos} className="SceneTitle-title">{this.props.title}</div>
            <div className = {"SceneTitle-underline " + (this.state.show ? "SceneTitle-underline-show":"")}/>
        </>
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