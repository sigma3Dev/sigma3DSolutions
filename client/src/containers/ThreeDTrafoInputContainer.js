import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
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
  getTargetSystemPoints,
  getListOfUsedCoords
} from '../selectors/TrafoSelectors/getTrafoInputDataSelector/getTrafoInputDataSelector';
import { getError } from '../selectors/ErrorSelectors/getErrorSelector';
import ThreeDTrafoInput from '../components/ThreeDTrafoInput/ThreeDTrafoInput';
import InfoModal from '../components/InfoModal/InfoModal';

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
  listOfUsedCoords: getListOfUsedCoords(state),
  error: getError(state)
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
    this.state = {
      notification: null
    }
    this.parseStartCoords = this.parseStartCoords.bind(this);
    this.parseTargetCoords = this.parseTargetCoords.bind(this);
    this.checkboxUpdate = this.checkboxUpdate.bind(this);
    this.submitCoords = this.submitCoords.bind(this);
    this.clearStartInput = this.clearStartInput.bind(this);
    this.clearTargetInput = this.clearTargetInput.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  closeModal = () => {
    this.setState({notification: null});
  }

  /**
   * Handles coords submit, navigates to "result" page
   * @memberof ThreeDTrafoInputContainer
   */
  submitCoords = () => {
    if (!this.props.startSystemPoints || this.props.startSystemPoints.length === 0 ) {
      this.setState({
        notification: (<InfoModal 
          header={(     
            <FormattedMessage
              id="InfoModal.caption.wrongInput"
              defaultMessage="Wrong Input"
            /> )}
          body={(<FormattedMessage
            id="InfoModal.label.noStartSystemPoints"
            defaultMessage="Please import start system points!"
          /> )}
          handleClick={this.closeModal}
        />)
      })
    } else if (!this.props.targetSystemPoints || this.props.targetSystemPoints.length === 0 ) {
      this.setState({
        notification: (<InfoModal 
          header={(<FormattedMessage
            id="InfoModal.caption.wrongInput"
            defaultMessage="Wrong Input"
          /> )}
          body={(<FormattedMessage
            id="InfoModal.label.noTargetSystemPoints"
            defaultMessage="Please import target system points!"
          /> )}
          handleClick={this.closeModal}
        />)
      })
    } else if (this.props.targetSystemPoints.length !== this.props.startSystemPoints.length ) {
      this.setState({
        notification: (<InfoModal 
          header={(<FormattedMessage
            id="InfoModal.caption.wrongInput"
            defaultMessage="Wrong Input"
          /> )}
          body={(<FormattedMessage
            id="InfoModal.label.startAndTargetDifferentLengths"
            defaultMessage="Length of start and target system don't match!"
          /> )}
          handleClick={this.closeModal}
        />)
      })
    } else {
      this.props.onSubmitCoords();
      this.props.history.push('/transformations/three-d-transformation/result');
    }
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
      <div>
        {this.state.notification}
        <ThreeDTrafoInput 
          onStartFileDrop={ this.parseStartCoords } 
          onTargetFileDrop={ this.parseTargetCoords } 
          startSystemPoints={ this.props.startSystemPoints }
          targetSystemPoints={ this.props.targetSystemPoints }
          checkboxUpdate={ this.checkboxUpdate }
          handleSubmitClick={ this.submitCoords }
          handleStartDeleteClick= { this.clearStartInput }
          handleTargetDeleteClick= { this.clearTargetInput }
          listOfUsedCoords={ this.props.listOfUsedCoords }
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreeDTrafoInputContainer);