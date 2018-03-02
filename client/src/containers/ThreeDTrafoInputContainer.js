import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushStartSystemCoordinates, pushTargetSystemCoordinates, checkboxUpdate, submitCoords } from '../actions/pushTrafoCoords/pushTrafoCoordsActions';
import { getStartSystemPoints, getTargetSystemPoints } from '../selectors/TrafoSelectors/getTrafoInputDataSelector'
import ThreeDTrafoInput from '../components/ThreeDTrafoInput/ThreeDTrafoInput';

var cdi = require('coordinatedataimporter');

const mapDispatchToProps = dispatch => ({
  onPushStartSystemCoordinates: (file) => dispatch(pushStartSystemCoordinates(file)),
  onPushTargetSystemCoordinates: (file) => dispatch(pushTargetSystemCoordinates(file)),
  onCheckboxUpdate: (id) => dispatch(checkboxUpdate(id)),
  onSubmitCoords: () => dispatch(submitCoords()),
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
  }

  render() { 
    return (
      <ThreeDTrafoInput 
        onStartFileDrop={ this.parseStartCoords } 
        onTargetFileDrop={ this.parseTargetCoords } 
        startSystemPoints={ this.props.startSystemPoints }
        targetSystemPoints={ this.props.targetSystemPoints }
        checkboxUpdate={ this.checkboxUpdate }
        handleClick={ this.submitCoords }
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreeDTrafoInputContainer);