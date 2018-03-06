import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  pushStartSystemCoordinates,
  pushTargetSystemCoordinates,
  checkboxUpdate,
  submitCoords,
  clearStartInput,
  clearTargetInput 
} from '../actions/pushTrafoCoords/pushTrafoCoordsActions';
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

class ThreeDTrafoInputContainer extends Component {
  constructor() {
    super();
    this.parseStartCoords = this.parseStartCoords.bind(this);
    this.parseTargetCoords = this.parseTargetCoords.bind(this);
    this.checkboxUpdate = this.checkboxUpdate.bind(this);
    this.submitCoords = this.submitCoords.bind(this);
    this.clearStartInput = this.clearStartInput.bind(this);
    this.clearTargetInput = this.clearTargetInput.bind(this);
  }

  parseStartCoords = (file) => {
    cdi(file, coords => {
      this.props.onPushStartSystemCoordinates(coords);
    }); 
  }

  parseTargetCoords = (file) => {
    cdi(file, coords => {
      this.props.onPushTargetSystemCoordinates(coords);
    }); 
  }

  checkboxUpdate = (e) => {
    const id = e.target.name;
    this.props.onCheckboxUpdate(id);
  }

  submitCoords = () => {
    this.props.onSubmitCoords();
    this.props.history.push('/three-d-transformation/result');
  }

  clearStartInput = () => {
    this.props.onClearStartInput();
  }

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