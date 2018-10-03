import React, { Component } from 'react';
import unpressed from './images/unpressed_right.png';
import pressed from './images/pressed_right_wave.png';
import './RightPaw.css';

export class RightPaw extends Component {
    constructor(props) {
        super(props);
        this.state = {isBonged: false};
    }

    bongoDown = () => {
        this.setState({isBonged: true});
    }

    bongoUp = () => {
        this.setState({isBonged: false});
    }
    
    render() {
        let isBonged = this.state.isBonged,
            paw;

        if (isBonged) {
            paw = <img src={pressed} alt="" />
        } else {
            paw = <img src={unpressed} alt="" />
        }
        
        return (
            <div onMouseDown={this.bongoDown} onMouseUp={this.bongoUp} className={isBonged ? "RightPaw Pressed" : "RightPaw Unpressed"}>
                {paw}
            </div>
        )
    }
}