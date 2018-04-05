import React, { Component } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import SelectAppsScreen from '../components/SelectAppsScreen/SelectAppsScreen';

/**
 * shows all the geometry fitting apps
 * @class GeometryScreenContainer
 * @extends {Component}
 */
class GeometryScreenContainer extends Component {
  render() {
    const buttons = [
      {
        type: 'chebyshevCircleFit',
        link: '/geometry/chebyshev-circle-fit/data-input',
      },
      {
        type: 'fitPlane',
        link: '/geometry/fit-plane/data-input',
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

export default GeometryScreenContainer;
