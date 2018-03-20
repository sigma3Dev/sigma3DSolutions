import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { getError }         from '../selectors/ErrorSelectors/getErrorSelector';
import { 
  getTrafoParams,
  getIsCalculating, }              from '../selectors/TrafoSelectors/getTrafoResultDataSelector/getTrafoResultDataSelector';
import { removeError }      from '../actions/errorHandling/errorHandlingActions';
import ThreeDTrafoResult    from '../components/ThreeDTrafoResult/ThreeDTrafoResult';

const mapDispatchToProps = dispatch => ({
  onRemoveError: () => dispatch(removeError()),
});

const mapStateToProps = (state, props) => ({
  trafoParams: getTrafoParams(state),
  error: getError(state),
  isCalculating: getIsCalculating(state),
});

/**
 * Displays the calculation results
 * @class ThreeDTrafoResultContainer
 * @extends {Component}
 */
class ThreeDTrafoResultContainer extends Component {

  /**
   * Creates an instance of ThreeDTrafoResultContainer.
   * @param {Object} props 
   * @memberof ThreeDTrafoResultContainer
   */
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  
  /**
   * Navigates back to input page of the current transformation
   * @memberof ThreeDTrafoResultContainer
   */
  goBack = () => {
    this.props.onRemoveError();
    this.props.history.push('/transformations/three-d-transformation/data-input');
  }

  render() {
    return(
      <div>
        <ThreeDTrafoResult
          trafoParams={ this.props.trafoParams }
          error={ this.props.error }
          isCalculating = { this.props.isCalculating }
          handleClick = { this.goBack }
        />
      </div>
    )
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreeDTrafoResultContainer);