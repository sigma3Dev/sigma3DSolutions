import React, { Component } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
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
        <Sidebar />
        <StartScreen />
      </div>
    );
  }
}

export default StartScreenContainer;
