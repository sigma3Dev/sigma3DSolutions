import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import StartScreen from '../components/StartScreen/StartScreen';

/**
 * shows the homepage of the app
 * @class StartScreenContainer
 * @extends {Component}
 */
class StartScreenContainer extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <StartScreen />
      </div>
    );
  }
}

export default StartScreenContainer;
