import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar/Navbar';
import SelectAppsScreen from '../components/SelectAppsScreen/SelectAppsScreen';

/**
 * shows all the geometry fitting apps
 * @class GeometryScreenContainer
 * @extends {Component}
 */
class GeometryScreenContainer extends Component {
  /**
   * Creates an instance of GeometryScreenContainer.
   * @param {Object} props
   * @memberof GeometryScreenContainer
   */
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  /**
   * Navigates back to start screen
   * @memberof GeometryScreenContainer
   */
  goBack = () => {
    this.props.history.push('/');
  };

  render() {
    const buttons = [
      {
        type: 'fitCircleChebyshev',
        link: '/geometry/fit-circle-chebyshev/data-input',
      },
      {
        type: 'fitCircleL2',
        link: '/geometry/fit-circle-l-two/data-input',
      },
      {
        type: 'fitPlaneGauss',
        link: '/geometry/fit-plane-gauss/data-input',
      },
      {
        type: 'fitPlaneRansac',
        link: '/geometry/fit-plane-ransac/data-input',
      },
      {
        type: 'fitCylinder',
        link: '/geometry/fit-cylinder/data-input',
      },
      {
        type: 'fitPoint',
        link: '/geometry/fit-point/data-input',
      },
      {
        type: 'fitLineL2',
        link: '/geometry/fit-line-l-two/data-input',
      },
      {
        type: 'fitLineRansac',
        link: '/geometry/fit-line-ransac/data-input',
      },
      // {
      //   type: 'fitSphere',
      //   link: '/geometry/fit-sphere/data-input',
      // },
    ];
    return (
      <div>
        <Navbar currentMenu='geometry' />
        <SelectAppsScreen buttons={buttons} handleReturn={this.goBack} />
      </div>
    );
  }
}

GeometryScreenContainer.propTypes = {
  history: PropTypes.any,
};

export default GeometryScreenContainer;
