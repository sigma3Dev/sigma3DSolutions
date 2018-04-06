import React, { Component } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import SelectAppsScreen from '../components/SelectAppsScreen/SelectAppsScreen';

/**
 * lists all transformations
 * @class TransformationsScreenContainer
 * @extends {Component}
 */
class TransformationsScreenContainer extends Component {
  render() {
    const buttons = [
      {
        type: '3Dtransformation',
        link: '/transformations/three-d-transformation/data-input',
      },
      {
        type: 'paramInversion',
        link: '/transformations/parameter-inversion',
      },
      {
        type: 'transform',
        link: '/transformations/transform/data-input',
      },
      {
        type: 'quatCardan',
        link: '/transformations/quat-cardan',
      },
    ];
    return (
      <div>
        <Sidebar />
        <SelectAppsScreen buttons={buttons} />
      </div>
    );
  }
}

export default TransformationsScreenContainer;
