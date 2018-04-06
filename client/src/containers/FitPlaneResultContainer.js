import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getError } from '../selectors/ErrorSelectors/getErrorSelector';
import {
  getIsCalculating,
  getFitPlaneResult,
} from '../selectors/FitPlaneSelectors/getFitPlaneResultDataSelector/getFitPlaneResultDataSelector';
import { removeError } from '../actions/errorHandling/errorHandlingActions';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import ErrorScreen from '../components/ErrorScreen/ErrorScreen';
import Sidebar from '../components/Sidebar/Sidebar';
import FitPlaneResult from '../components/FitPlaneResult/FitPlaneResult';

const mapDispatchToProps = dispatch => ({
  onRemoveError: () => dispatch(removeError()),
});

const mapStateToProps = state => ({
  error: getError(state),
  isCalculating: getIsCalculating(state),
  result: getFitPlaneResult(state),
});

/**
 * page to display results of fit plane
 * @class FitPlaneResultContainer
 * @extends {Component}
 */
class FitPlaneResultContainer extends Component {
  /**
   * Creates an instance of FitPlaneResultContainer.
   * @param {Object} props
   * @memberof FitPlaneResultContainer
   */
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  /**
   * Navigates back to input page of the current transformation
   * @memberof FitPlaneResultContainer
   */
  goBack = () => {
    this.props.onRemoveError();
    this.props.history.push('/geometry/fit-plane/data-input');
  };

  render() {
    if (this.props.isCalculating) {
      return <LoadingScreen />;
    } else if (this.props.error) {
      return <ErrorScreen error={this.props.error} handleClick={this.goBack} />;
    }
    return (
      <div>
        <Sidebar />
        <FitPlaneResult params={this.props.result} handleReturnClick={this.goBack} />
      </div>
    );
  }
}

FitPlaneResultContainer.propTypes = {
  onRemoveError: PropTypes.func.isRequired,
  error: PropTypes.string,
  isCalculating: PropTypes.bool.isRequired,
  result: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])),
  history: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(FitPlaneResultContainer);
