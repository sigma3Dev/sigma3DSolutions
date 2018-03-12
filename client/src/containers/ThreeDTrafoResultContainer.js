import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { getError }         from '../selectors/ErrorSelectors/getErrorSelector';
import { 
  getTrafoParams,
  getTrafoParamsEuler,
  getIsCalculating,
  getIsEuler }              from '../selectors/TrafoSelectors/getTrafoResultDataSelector/getTrafoResultDataSelector';
import { removeError }      from '../actions/errorHandling/errorHandlingActions';
import { switchAngleType }  from '../actions/switchAngleType/switchAngleTypeActions';
import ThreeDTrafoResult    from '../components/ThreeDTrafoResult/ThreeDTrafoResult';

const mapDispatchToProps = dispatch => ({
  onRemoveError: () => dispatch(removeError()),
  onSwitchAngleType: () => dispatch(switchAngleType()),
});

const mapStateToProps = (state, props) => ({
  response: getTrafoParams(state),
  responseEuler: getTrafoParamsEuler(state),
  error: getError(state),
  isCalculating: getIsCalculating(state),
  isEuler: getIsEuler(state),
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
    this.switchAngleType = this.switchAngleType.bind(this);
  }
  
  /**
   * Navigates back to input page of the current transformation
   * @memberof ThreeDTrafoResultContainer
   */
  goBack = () => {
    this.props.onRemoveError();
    this.props.history.push('/three-d-transformation/data-input');
  }

  switchAngleType = () => {
    this.props.onSwitchAngleType();
  }

  render() {
    let response = this.props.response;
    if (this.props.isEuler) {
      response = this.props.responseEuler;
    } else {
      response = this.props.response;
    };
    return(
      <div>
        <ThreeDTrafoResult
          response={ response }
          error={ this.props.error }
          isCalculating = { this.props.isCalculating }
          handleClick = { this.goBack }
          switchAngleType = { this.switchAngleType }
          isEuler = { this.props.isEuler }
        />
      </div>
    )
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreeDTrafoResultContainer);