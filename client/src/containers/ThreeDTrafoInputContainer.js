import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  pushStartSystemCoordinates,
  pushTargetSystemCoordinates
} from '../actions/pushTrafoCoords/pushTrafoCoordsActions';
import  {
  checkboxUpdate,
  submitCoords
} from '../actions/submitCoords/submitCoordsActions';
import {
  clearStartInput,
  clearTargetInput
} from '../actions/clearInput/clearInputActions';
import { 
  getStartSystemPoints,
  getTargetSystemPoints 
} from '../selectors/TrafoSelectors/getTrafoInputDataSelector';
import ThreeDTrafoInput from '../components/ThreeDTrafoInput/ThreeDTrafoInput';

var cdi = require('coordinatedataimporter');

const mapDispatchToProps = dispatch => ({
  onPushStartSystemCoordinates: (file) => dispatch(pushStartSystemCoordinates(file)),
  onPushTargetSystemCoordinates: (file) => dispatch(pushTargetSystemCoordinates(file)),
  onCheckboxUpdate: (id) => dispatch(checkboxUpdate(id)),
  onSubmitCoords: () => dispatch(submitCoords()),
  onClearStartInput: () => dispatch(clearStartInput()),
  onClearTargetInput: () => dispatch(clearTargetInput()),
});

const mapStateToProps = (state, props) => ({
  startSystemPoints: getStartSystemPoints(state),
  targetSystemPoints: getTargetSystemPoints(state),
});

/**
 * Page where file input functionality is displayed
 * @class ThreeDTrafoInputContainer
 * @extends {Component}
 */
class ThreeDTrafoInputContainer extends Component {

  /**
   * Creates an instance of ThreeDTrafoInputContainer.
   * @memberof ThreeDTrafoInputContainer
   */
  constructor() {
    super();
    this.parseStartCoords = this.parseStartCoords.bind(this);
    this.parseTargetCoords = this.parseTargetCoords.bind(this);
    this.checkboxUpdate = this.checkboxUpdate.bind(this);
    this.submitCoords = this.submitCoords.bind(this);
    this.clearStartInput = this.clearStartInput.bind(this);
    this.clearTargetInput = this.clearTargetInput.bind(this);
  }

  /**
   * Uses cdi module to transform .txt file into an array of start points
   * @param {*} file - .txt file with point coordinates
   * @memberof ThreeDTrafoInputContainer
   */
  parseStartCoords = (file) => {
    cdi.startCoordinateDataImport(file, coords => {
      this.props.onPushStartSystemCoordinates(coords);
    }); 
  }

  /**
   * Uses cdi module to transform .txt file into an array of target points
   * @param {*} file - .txt file with point coordinates
   * @memberof ThreeDTrafoInputContainer
   */
  parseTargetCoords = (file) => {
    cdi.targetCoordinateDataImport(file, coords => {
      this.props.onPushTargetSystemCoordinates(coords);
    }); 
  }

  /**
   * Handles checkbox update
   * @param {Object} e - Click event
   * @memberof ThreeDTrafoInputContainer
   */
  checkboxUpdate = (e) => {
    const id = e.target.name;
    this.props.onCheckboxUpdate(id);
  }

  /**
   * Handles coords submit, navigates to "result" page
   * @memberof ThreeDTrafoInputContainer
   */
  submitCoords = () => {
    this.props.onSubmitCoords();
    this.props.history.push('/three-d-transformation/result');
  }

  /**
   * deletes all start system points, updates input display
   * @memberof ThreeDTrafoInputContainer
   */
  clearStartInput = () => {
    this.props.onClearStartInput();
  }

  /**
   * deletes all target system points, updates input display
   * @memberof ThreeDTrafoInputContainer
   */
  clearTargetInput = () => {
    this.props.onClearTargetInput();
  }

  render() { 
    return (
      <ThreeDTrafoInput 
        onStartFileDrop={ this.parseStartCoords } 
        onTargetFileDrop={ this.parseTargetCoords } 
        startSystemPoints={ this.props.startSystemPoints }
        targetSystemPoints={ this.props.targetSystemPoints }
        checkboxUpdate={ this.checkboxUpdate }
        handleSubmitClick={ this.submitCoords }
        handleStartDeleteClick= { this.clearStartInput }
        handleTargetDeleteClick= { this.clearTargetInput }
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreeDTrafoInputContainer);