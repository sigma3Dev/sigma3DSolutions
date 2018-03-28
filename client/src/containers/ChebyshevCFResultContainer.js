import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { getError }         from '../selectors/ErrorSelectors/getErrorSelector';
import { 
  getChebyshevCircleFitInput,
  getIsCalculating, }              from '../selectors/ChebyshevCircleFitSelector/getChebyshevCircleFitResultDataSelector/getChebyshevCircleFitResultDataSelector';
import { removeError }      from '../actions/errorHandling/errorHandlingActions';
import ChebyshevCFResult    from '../components/ChebyshevCFResult/ChebyshevCFResult';

const mapDispatchToProps = dispatch => ({
  onRemoveError: () => dispatch(removeError()),
});

const mapStateToProps = (state, props) => ({
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
  }

  render() {
    return(
      <div>
        <ChebyshevCFResult
          chebyshevParams={ this.props.chebyshevParams }
          error={ this.props.error }
          isCalculating = { this.props.isCalculating }
          handleClick = { this.goBack }
        />
      </div>
    )
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ChebyshevCFResultContainer);