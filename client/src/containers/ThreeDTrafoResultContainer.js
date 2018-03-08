import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTrafoParams, getError, getIsCalculating } from '../selectors/TrafoSelectors/getTrafoResultDataSelector';
import { removeError } from '../actions/submitCoords/submitCoordsActions';
import ThreeDTrafoResult from '../components/ThreeDTrafoResult/ThreeDTrafoResult';

const mapDispatchToProps = dispatch => ({
  onRemoveError: () => dispatch(removeError()),
});

const mapStateToProps = (state, props) => ({
  response: getTrafoParams(state),
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
    this.props.history.push('/three-d-transformation/data-input');
  }

  render() {
    return(
      <ThreeDTrafoResult
        response={ this.props.response }
        error={ this.props.error }
        isCalculating = { this.props.isCalculating }
        handleClick = { this.goBack }
      />
    )
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreeDTrafoResultContainer);