import React, { Component } from 'react';
import { Bongo } from './Bongo';
import { LeftPaw } from './LeftPaw';
import { RightPaw } from './RightPaw';
import bongocat from './images/cat_table.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="AppContainer">
      <div className="App">
        <img src={bongocat} className="App-logo" alt="logo" />
        <LeftPaw />
        <RightPaw />
        <Bongo />
      </div>
      </div>
    );
  }
}

export default App;