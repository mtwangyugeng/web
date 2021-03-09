import React from 'react';

export default class StringAnimation extends React.Component{
    /**
     * @ props.strings : list of strings
     * 
     * @ returns react component that plays 
     *  slide-show on given list of strings.
     */

    state = {
        currstring: 0, // current slide
        content: "",
        da: false, // deleting = true, adding = false
    }
    
    render() {
        return(
        <div>
            {this.state.content + "_"}
        </div>
        )
    }

    tick = null
    componentDidMount() {
        this.tick = setInterval(this.handletick, 300)
    }
    
    handletick = () => {
        if(this.state.da){
            if (this.state.content === ""){
                this.setState({da: false, currstring: (this.state.currstring + 1) % this.props.strings.length})
            }else{
                this.setState({content: this.state.content.slice(0,-1)})
            }
        }else{
            if (this.state.content === this.props.strings[this.state.currstring]){
                clearInterval(this.tick)
                setTimeout(() => {
                    this.tick = setInterval(this.handletick, 300)
                }, 2000);
                this.setState({da: true})
            }else{
                this.setState({content: this.state.content + this.props.strings[this.state.currstring][this.state.content.length]})
            }
        }
    }


}