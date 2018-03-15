import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { getError }         from '../selectors/ErrorSelectors/getErrorSelector';
import ParamInversion       from '../components/ParamInversion/ParamInversion';

const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = (state, props) => ({
  error: getError(state),
});

/**
 * Page where parameter inversion functionality is displayed
 * @class ParamInversionContainer
 * @extends {Component}
 */
class ParamInversionContainer extends Component {

  /**
   * Creates an instance of ParamInversion.
   * @param {Object} props 
   * @memberof ParamInversionContainer
   */
  constructor(props) {
    super(props);
    this.state = {
      Tx: null,
      Ty: null,
      Tz: null,
      Q0: null,
      Q1: null,
      Q2: null,
      Q3: null,
      M: null,
    };
    this.parseInput = this.parseInput.bind(this);
    this.submitCoords = this.submitCoords.bind(this);
  }

  submitCoords = () => {
    console.log("It worked");
  }

  parseInput = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  render() {
    const textAreaDisplay = ;
    return(
      <div>
        <ParamInversion 
          handleSubmit={ this.submitCoords }
          handleChange={ this.parseInput }
          values={ this.state }
          textAreaDisplay={ textAreaDisplay }
        />
      </div>
    )
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ParamInversionContainer);