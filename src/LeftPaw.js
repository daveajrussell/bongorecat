import React, { Component } from 'react';
import unpressed from './images/unpressed_left.png';
import pressed from './images/pressed_left_wave.png';
import './LeftPaw.css';

export class LeftPaw extends Component  {

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
            paw = <img src={pressed} alt="left paw pressed" />
        } else {
            paw = <img src={unpressed} alt="left paw unpressed" />
        }
        
        return (
            <div onMouseDown={this.bongoDown} onMouseUp={this.bongoUp} className={isBonged ? "LeftPaw Pressed" : "LeftPaw Unpressed"}>
                {paw}
            </div>
        )
    }
}