import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushStartSystemCoordinates, pushTargetSystemCoordinates } from '../actions/pushTrafoCoords/pushTrafoCoordsActions';
import { getStartSystemPoints, getTargetSystemPoints } from '../selectors/TrafoSelectors/getTrafoInputDataSelector'
import ThreeDTrafoInput from '../components/ThreeDTrafoInput/ThreeDTrafoInput';

var cdi = require('coordinatedataimporter');

const mapDispatchToProps = dispatch => ({
  onPushStartSystemCoordinates: (file) => dispatch(pushStartSystemCoordinates(file)),
  onPushTargetSystemCoordinates: (file) => dispatch(pushTargetSystemCoordinates(file)),
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

  render() { 
    return (
      <ThreeDTrafoInput 
        onStartFileDrop={ this.parseStartCoords } 
        onTargetFileDrop={ this.parseTargetCoords } 
        startSystemPoints={ this.props.startSystemPoints }
        targetSystemPoints={ this.props.targetSystemPoints }
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreeDTrafoInputContainer);