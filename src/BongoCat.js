import React, { Component } from 'react';
import { Cat } from './Cat';
import { Bongo } from './Bongo';
import { LeftPaw } from './LeftPaw';
import { RightPaw } from './RightPaw';
import './BongoCat.css';

class BongoCat extends Component {
  render() {
    return (
      <div className="BongoCatContainer">
        <div className="BongoCat">
          <Cat />
          <LeftPaw />
          <RightPaw />
          <Bongo />
        </div>
      </div>
    );
  }
}

export default BongoCat;