import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getError } from '../selectors/ErrorSelectors/getErrorSelector';
import {
  getFitCircleChebyshevResult,
  getIsCalculating,
} from '../selectors/FitCircleChebyshevSelectors/getFitCircleChebyshevResultDataSelector/getFitCircleChebyshevResultDataSelector';
import { removeError } from '../actions/errorHandling/errorHandlingActions';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import ErrorScreen from '../components/ErrorScreen/ErrorScreen';
import Navbar from '../components/Navbar/Navbar';
import FitCircleChebyshevResult from '../components/FitCircleChebyshevResult/FitCircleChebyshevResult';

const mapDispatchToProps = dispatch => ({
  onRemoveError: () => dispatch(removeError()),
});

const mapStateToProps = state => ({
  chebyshevParams: getFitCircleChebyshevResult(state),
  error: getError(state),
  isCalculating: getIsCalculating(state),
});

/**
 * Displays the calculation results
 * @class FitCircleChebyshevResultContainer
 * @extends {Component}
 */
class FitCircleChebyshevResultContainer extends Component {
  /**
   * Creates an instance of FitCircleChebyshevResultContainer.
   * @param {Object} props
   * @memberof FitCircleChebyshevResultContainer
   */
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  /**
   * Navigates back to input page of the current chebyshev circle fit adjustment
   * @memberof FitCircleChebyshevResultContainer
   */
  goBack = () => {
    this.props.onRemoveError();
    this.props.history.push('/geometry/fit-circle-chebyshev/data-input');
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
        <FitCircleChebyshevResult
          chebyshevParams={this.props.chebyshevParams}
          handleReturnClick={this.goBack}
        />
      </div>
    );
  }
}

FitCircleChebyshevResultContainer.propTypes = {
  onRemoveError: PropTypes.func.isRequired,
  chebyshevParams: PropTypes.arrayOf(PropTypes.number),
  history: PropTypes.any,
  error: PropTypes.string,
  isCalculating: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FitCircleChebyshevResultContainer);
