import React, { Component } from 'react';
import SelectAppsScreen from '../components/SelectAppsScreen/SelectAppsScreen';
/**
 * start screen of the app
 * @class StartScreenContainer
 * @extends {Component}
 */
class TransformationsScreenContainer extends Component {
  render() { 
    const buttons = [ 
      {
        type: "3Dtransformation",
        link: '/transformations/three-d-transformation/data-input'
      },
      {
        type: "paramInversion",
        link: '/transformations/parameter-inversion'
      } 
    ];
    return (
      <SelectAppsScreen buttons={ buttons } /> 
    )
  }
}

export default TransformationsScreenContainer;