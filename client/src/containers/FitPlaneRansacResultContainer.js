import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getError } from '../selectors/ErrorSelectors/getErrorSelector';
import {
  getIsCalculating,
  getFitPlaneRansacResult,
} from '../selectors/FitPlaneRansacSelectors/getFitPlaneRansacResultDataSelector/getFitPlaneRansacResultDataSelector';
import { removeError } from '../actions/errorHandling/errorHandlingActions';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import ErrorScreen from '../components/ErrorScreen/ErrorScreen';
import Navbar from '../components/Navbar/Navbar';
import FitPlaneRansacResult from '../components/FitPlaneRansacResult/FitPlaneRansacResult';

const mapDispatchToProps = dispatch => ({
  onRemoveError: () => dispatch(removeError()),
});

const mapStateToProps = state => ({
  error: getError(state),
  isCalculating: getIsCalculating(state),
  result: getFitPlaneRansacResult(state),
});

/**
 * page to display results of fit plane
 * @class FitPlaneRansacResultContainer
 * @extends {Component}
 */
class FitPlaneRansacResultContainer extends Component {
  /**
   * Creates an instance of FitPlaneRansacResultContainer.
   * @param {Object} props
   * @memberof FitPlaneRansacResultContainer
   */
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  /**
   * Navigates back to input page of the current transformation
   * @memberof FitPlaneRansacResultContainer
   */
  goBack = () => {
    this.props.onRemoveError();
    this.props.history.push('/geometry/fit-plane-ransac/data-input');
  };

  render() {
    if (this.props.isCalculating) {
      return <LoadingScreen />;
    } else if (this.props.error) {
      return <ErrorScreen error={this.props.error} handleClick={this.goBack} />;
    }
    return (
      <div>
        <Navbar currentMenu='geometry' />
        <FitPlaneRansacResult params={this.props.result} handleReturnClick={this.goBack} />
      </div>
    );
  }
}

FitPlaneRansacResultContainer.propTypes = {
  onRemoveError: PropTypes.func.isRequired,
  error: PropTypes.string,
  isCalculating: PropTypes.bool.isRequired,
  result: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])),
  history: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(FitPlaneRansacResultContainer);
