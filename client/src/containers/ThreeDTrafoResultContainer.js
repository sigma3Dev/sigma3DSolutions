import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { getError }         from '../selectors/ErrorSelectors/getErrorSelector';
import { 
  getTrafoParams,
  getTrafoDifference,
  getIsCalculating, 
  getTransformedStartPoints,
}                           from '../selectors/TrafoSelectors/getTrafoResultDataSelector/getTrafoResultDataSelector';
import { 
  getStartSystemPoints,
  getTargetSystemPoints,
  getListOfUsedCoords
}                           from '../selectors/TrafoSelectors/getTrafoInputDataSelector/getTrafoInputDataSelector';
import {
  calculateTrafoDifference
}                           from '../actions/submitCoords/submitCoordsActions';
import { removeError }      from '../actions/errorHandling/errorHandlingActions';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import ErrorScreen from '../components/ErrorScreen/ErrorScreen';
import ThreeDTrafoResult    from '../components/ThreeDTrafoResult/ThreeDTrafoResult';

const mapDispatchToProps = dispatch => ({
  onRemoveError: () => dispatch(removeError()),
  oncalculateTrafoDifference: (startPoints, targetPoints, trafoParams) => dispatch(calculateTrafoDifference(startPoints, targetPoints, trafoParams)),
});

const mapStateToProps = (state, props) => ({
  transformedStartPoints: getTransformedStartPoints(state),
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
   * runs calculateTrafoDifference when the page is first loaded and when trafoParams are updated
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
        this.props.oncalculateTrafoDifference(startPoints, targetPoints, trafoParams);
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
    if (this.props.isCalculating) {
      return (
        <LoadingScreen />
      )
    } else if (this.props.error) {
      return (
        <ErrorScreen error={this.props.error} handleClick={this.goBack} />
      )
    } else  {
      return(
        <div>
          <ThreeDTrafoResult
            trafoParams={ this.props.trafoParams }
            trafoDifference={ this.props.trafoDifference }
            handleClick={this.goBack}
          />
        </div>
      );
    }  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreeDTrafoResultContainer);