import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getError } from '../selectors/ErrorSelectors/getErrorSelector';
import {
  getChebyshevCircleFitInput,
  getIsCalculating,
} from '../selectors/ChebyshevCircleFitSelector/getChebyshevCircleFitResultDataSelector/getChebyshevCircleFitResultDataSelector';
import { removeError } from '../actions/errorHandling/errorHandlingActions';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import ErrorScreen from '../components/ErrorScreen/ErrorScreen';
import ChebyshevCFResult from '../components/ChebyshevCFResult/ChebyshevCFResult';

const mapDispatchToProps = dispatch => ({
  onRemoveError: () => dispatch(removeError()),
});

const mapStateToProps = state => ({
  chebyshevParams: getChebyshevCircleFitInput(state),
  error: getError(state),
  isCalculating: getIsCalculating(state),
});

/**
 * Displays the calculation results
 * @class ChebyshevCFResultContainer
 * @extends {Component}
 */
class ChebyshevCFResultContainer extends Component {
  /**
   * Creates an instance of ChebyshevCFResultContainer.
   * @param {Object} props
   * @memberof ChebyshevCFResultContainer
   */
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  /**
   * Navigates back to input page of the current chebyshev circle fit adjustment
   * @memberof ChebyshevCFResultContainer
   */
  goBack = () => {
    this.props.onRemoveError();
    this.props.history.push('/geometry/chebyshev-circle-fit/data-input');
  };

  render() {
    if (this.props.isCalculating) {
      return <LoadingScreen />;
    } else if (this.props.error) {
      return <ErrorScreen error={this.props.error} handleClick={this.goBack} />;
    }
    return (
      <div>
        <ChebyshevCFResult chebyshevParams={this.props.chebyshevParams} handleClick={this.goBack} />
      </div>
    );
  }
}

ChebyshevCFResultContainer.propTypes = {
  onRemoveError: PropTypes.func.isRequired,
  chebyshevParams: PropTypes.arrayOf(PropTypes.number),
  history: PropTypes.any,
  error: PropTypes.string,
  isCalculating: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChebyshevCFResultContainer);
