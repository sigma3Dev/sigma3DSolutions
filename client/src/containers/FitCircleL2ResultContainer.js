import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getError } from '../selectors/ErrorSelectors/getErrorSelector';
import {
  getIsCalculating,
  getFitCircleL2Result,
} from '../selectors/FitCircleL2Selectors/getFitCircleL2ResultDataSelector/getFitCircleL2ResultDataSelector';
import { removeError } from '../actions/errorHandling/errorHandlingActions';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import ErrorScreen from '../components/ErrorScreen/ErrorScreen';
import Navbar from '../components/Navbar/Navbar';
import FitCircleL2Result from '../components/FitCircleL2Result/FitCircleL2Result';

const mapDispatchToProps = dispatch => ({
  onRemoveError: () => dispatch(removeError()),
});

const mapStateToProps = state => ({
  error: getError(state),
  isCalculating: getIsCalculating(state),
  result: getFitCircleL2Result(state),
});

/**
 * page to display results of fit plane
 * @class FitCircleL2ResultContainer
 * @extends {Component}
 */
class FitCircleL2ResultContainer extends Component {
  /**
   * Creates an instance of FitCircleL2ResultContainer.
   * @param {Object} props
   * @memberof FitCircleL2ResultContainer
   */
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  /**
   * Navigates back to input page of the current transformation
   * @memberof FitCircleL2ResultContainer
   */
  goBack = () => {
    this.props.onRemoveError();
    this.props.history.push('/geometry/fit-circle-l-two/data-input');
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
        <FitCircleL2Result params={this.props.result} handleReturnClick={this.goBack} />
      </div>
    );
  }
}

FitCircleL2ResultContainer.propTypes = {
  onRemoveError: PropTypes.func.isRequired,
  error: PropTypes.string,
  isCalculating: PropTypes.bool.isRequired,
  result: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])),
  history: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(FitCircleL2ResultContainer);
