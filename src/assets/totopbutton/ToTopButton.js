import React from 'react';
import './ToTopButton.css';

export default class ToTopButton extends React.Component{
    state = {
        appear: ""
    }
    render() {
        return(
            <div className = {"ToTopButton-main " + this.state.appear} onClick = {this.goto(0)}>↑</div>
        );
    }

    goto = (y) => {
        return () => window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
    }

    componentDidMount(){
        window.addEventListener('scroll', this.mouse_moved, false);
        window.addEventListener('mousemove', this.mouse_moved, false);
    }
    sto = setTimeout(() => this.setState({appear: ""}), 700);
    mouse_moved = () => {
        // console.log("iit moved!!!")
        if(window.scrollY >= window.innerHeight / 2){
            this.setState({appear: "ToTopButton-appear"})
            clearTimeout(this.sto);
            this.sto = setTimeout(() => this.setState({appear: ""}), 700);
        }
        else   
            this.setState({appear: ""})


    }

}