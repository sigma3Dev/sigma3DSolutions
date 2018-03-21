import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { getError }         from '../selectors/ErrorSelectors/getErrorSelector';
import { 
  getTrafoParams,
  getTrafoDifference,
  getIsCalculating, 
}                           from '../selectors/TrafoSelectors/getTrafoResultDataSelector/getTrafoResultDataSelector';
import { 
  getStartSystemPoints,
  getTargetSystemPoints,
  getListOfUsedCoords
}                           from '../selectors/TrafoSelectors/getTrafoInputDataSelector/getTrafoInputDataSelector';
import {
  calculateDifference
}                           from '../actions/submitCoords/submitCoordsActions';
import { removeError }      from '../actions/errorHandling/errorHandlingActions';
import ThreeDTrafoResult    from '../components/ThreeDTrafoResult/ThreeDTrafoResult';

const mapDispatchToProps = dispatch => ({
  onRemoveError: () => dispatch(removeError()),
  onCalculateDifference: (startPoints, targetPoints, trafoParams) => dispatch(calculateDifference(startPoints, targetPoints, trafoParams)),
});

const mapStateToProps = (state, props) => ({
  startSystemPoints: getStartSystemPoints(state),
  targetSystemPoints: getTargetSystemPoints(state),
  listOfUsedCoords: getListOfUsedCoords(state),
  trafoParams: getTrafoParams(state),
  trafoDifference: getTrafoDifference(state),
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
   * runs calculateDifference when the page is first loaded and when trafoParams are updated
   * @param {Object} prevProps - previous Props
   * @param {Object} prevState - previous State
   * @memberof ThreeDTrafoResultContainer
   */
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.trafoDifference.length === 0 || prevProps.trafoParams !== this.props.trafoParams) {
      const startPoints = this.props.startSystemPoints;
      const targetPoints = this.props.targetSystemPoints;
      let trafoParams = this.props.trafoParams;
      if (!this.props.isCalculating) {
        this.props.onCalculateDifference(startPoints, targetPoints, trafoParams);
      }
    }
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
          trafoDifference={ this.props.trafoDifference }
          error={ this.props.error }
          isCalculating = { this.props.isCalculating }
          handleClick = { this.goBack }
        />
      </div>
    )
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreeDTrafoResultContainer);