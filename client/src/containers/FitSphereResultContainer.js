import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getError } from '../selectors/ErrorSelectors/getErrorSelector';
import {
  getIsCalculating,
  getFitSphereResult,
} from '../selectors/FitSphereSelectors/getFitSphereResultDataSelector/getFitSphereResultDataSelector';
import { removeError } from '../actions/errorHandling/errorHandlingActions';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import ErrorScreen from '../components/ErrorScreen/ErrorScreen';
import Navbar from '../components/Navbar/Navbar';
import FitSphereResult from '../components/FitSphereResult/FitSphereResult';

const mapDispatchToProps = dispatch => ({
  onRemoveError: () => dispatch(removeError()),
});

const mapStateToProps = state => ({
  error: getError(state),
  isCalculating: getIsCalculating(state),
  result: getFitSphereResult(state),
});

/**
 * page to display results of fit plane
 * @class FitSphereResultContainer
 * @extends {Component}
 */
class FitSphereResultContainer extends Component {
  /**
   * Creates an instance of FitSphereResultContainer.
   * @param {Object} props
   * @memberof FitSphereResultContainer
   */
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  /**
   * Navigates back to input page of the current transformation
   * @memberof FitSphereResultContainer
   */
  goBack = () => {
    this.props.onRemoveError();
    this.props.history.push('/geometry/fit-sphere/data-input');
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
        <FitSphereResult params={this.props.result} handleReturnClick={this.goBack} />
      </div>
    );
  }
}

FitSphereResultContainer.propTypes = {
  onRemoveError: PropTypes.func.isRequired,
  error: PropTypes.string,
  isCalculating: PropTypes.bool.isRequired,
  result: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])),
  history: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(FitSphereResultContainer);
