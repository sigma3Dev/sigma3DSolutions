import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar/Navbar';
import SelectAppsScreen from '../components/SelectAppsScreen/SelectAppsScreen';

/**
 * lists all transformations
 * @class TransformationsScreenContainer
 * @extends {Component}
 */
class TransformationsScreenContainer extends Component {
  /**
   * Creates an instance of TransformationsScreenContainer.
   * @param {Object} props
   * @memberof TransformationsScreenContainer
   */
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  /**
   * Navigates back to start screen
   * @memberof TransformationsScreenContainer
   */
  goBack = () => {
    this.props.history.push('/');
  };

  render() {
    const buttons = [
      {
        type: '3Dtransformation',
        link: '/transformations/three-d-transformation/data-input',
      },
      {
        type: 'bundleAdjustment',
        link: '/transformations/bundle-adjustment/data-input',
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
      {
        type: 'translatePointAlongAxis',
        link: '/transformations/translate-point-along-axis',
      },
    ];
    return (
      <div>
        <Navbar currentMenu='trafo' />
        <SelectAppsScreen buttons={buttons} handleReturn={this.goBack} />
      </div>
    );
  }
}

TransformationsScreenContainer.propTypes = {
  history: PropTypes.any,
};

export default TransformationsScreenContainer;
