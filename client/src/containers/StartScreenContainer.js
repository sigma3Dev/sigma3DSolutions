import React, { Component } from 'react';
import SelectAppsScreen from '../components/SelectAppsScreen/SelectAppsScreen';
/**
 * start screen of the app
 * @class StartScreenContainer
 * @extends {Component}
 */
class StartScreenContainer extends Component {
  render() { 
    const buttons = ["3Dtransformation",  "eulerQuat" ];
    return (
      <SelectAppsScreen buttons={ buttons } /> 
    )
  }
}

export default StartScreenContainer;