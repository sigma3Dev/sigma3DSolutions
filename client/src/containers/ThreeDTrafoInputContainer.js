import React, { Component } from 'react';
import { connect } from 'react-redux';
import { parseCoordinates } from '../actions/parseCoordinates/parseCoordinatesActions';
import ThreeDTrafoInput from '../components/ThreeDTrafoInput/ThreeDTrafoInput';

const mapDispatchToProps = dispatch => ({
  onParseCoordinates: (file) => dispatch(parseCoordinates(file))
});

const mapStateToProps = (state, props) => ({});

class ThreeDTrafoInputContainer extends Component {

  render() { 
    return (
      <ThreeDTrafoInput 
        onFileDrop={ this.props.onParseCoordinates } 
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreeDTrafoInputContainer);