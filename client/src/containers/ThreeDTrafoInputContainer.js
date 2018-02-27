import React, { Component } from 'react';
import ThreeDTrafoInput from '../components/ThreeDTrafoInput/ThreeDTrafoInput';

class ThreeDTrafoInputContainer extends Component {

  constructor(props) {
    super(props);
    this.parseCoordinates = this.parseCoordinates.bind(this);
  }
  
  parseCoordinates = file => {
    console.log(file);
  }

  render() { 

    return (
      <ThreeDTrafoInput 
        onFileDrop={ this.parseCoordinates } 
      />
    )
  }
}

export default ThreeDTrafoInputContainer;