import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getError } from '../selectors/ErrorSelectors/getErrorSelector';
import {
  getIsCalculating,
  getBundleAdjustmentResult,
} from '../selectors/BundleAdjustmentSelectors/getBundleAdjustmentResultDataSelector/getBundleAdjustmentResultDataSelector';
import { removeError } from '../actions/errorHandling/errorHandlingActions';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import ErrorScreen from '../components/ErrorScreen/ErrorScreen';
import Navbar from '../components/Navbar/Navbar';
import BundleAdjustmentResult from '../components/BundleAdjustmentResult/BundleAdjustmentResult';

const mapDispatchToProps = dispatch => ({
  onRemoveError: () => dispatch(removeError()),
});

const mapStateToProps = state => ({
  error: getError(state),
  isCalculating: getIsCalculating(state),
  result: getBundleAdjustmentResult(state),
});

/**
 * page to display results of bundle adjustment
 * @class BundleAdjustmentResultContainer
 * @extends {Component}
 */
class BundleAdjustmentResultContainer extends Component {
  /**
   * Creates an instance of BundleAdjustmentResultContainer.
   * @param {Object} props
   * @memberof BundleAdjustmentResultContainer
   */
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  /**
   * Navigates back to input page of the current transformation
   * @memberof BundleAdjustmentResultContainer
   */
  goBack = () => {
    this.props.onRemoveError();
    this.props.history.push('/transformations/bundle-adjustment/data-input');
  };

  render() {
    if (this.props.isCalculating) {
      return <LoadingScreen />;
    } else if (this.props.error) {
      return <ErrorScreen error={this.props.error} handleClick={this.goBack} />;
    }
    return (
      <div>
        <Navbar currentMenu='transformations' />
        <BundleAdjustmentResult params={this.props.result} handleReturnClick={this.goBack} />
      </div>
    );
  }
}

BundleAdjustmentResultContainer.propTypes = {
  onRemoveError: PropTypes.func.isRequired,
  error: PropTypes.string,
  isCalculating: PropTypes.bool.isRequired,
  result: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number))])),
  history: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(BundleAdjustmentResultContainer);
