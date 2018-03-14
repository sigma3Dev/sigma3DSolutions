import React, { Component } from 'react';
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
        type: "chebyshev_circle_fit",
        link: '/geometry/chebyshev-circle/data-input'
      } 
    ];
    return (
      <SelectAppsScreen buttons={ buttons } /> 
    )
  }
}

export default GeometryScreenContainer;