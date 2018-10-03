import React, { Component } from 'react';
import bongo from './images/bongo.png';
import './Bongo.css';

export class Bongo extends Component {    
    render() {
        return (
            <div className="Bongo">
                <img src={bongo} alt="" />
            </div>
        )
    }
}