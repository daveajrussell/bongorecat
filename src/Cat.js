import React, { Component } from 'react';
import bongocat from './images/cat_table.png';

export class Cat extends Component {
    render() {
        return (
            <img src={bongocat} alt="cat" />
        )
    }
}