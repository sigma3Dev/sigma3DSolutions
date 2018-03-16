import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { getError }         from '../selectors/ErrorSelectors/getErrorSelector';
import {getParamInversion}  from '../selectors/ParamInversionSelectors/getParamInversionSelector';
import { clearInput }       from '../actions/clearInput/clearInputActions';
import {
  submitParamInversionCoords,
  pushParamInversionCoords,
}                           from '../actions/paramInversionCoords/paramInversionCoordsActions';
import ParamInversion       from '../components/ParamInversion/ParamInversion';

const mapDispatchToProps = dispatch => ({
  onSubmitParamInversionCoords: (coords) => dispatch(submitParamInversionCoords(coords)), 
  onClearInput: () => dispatch(clearInput()),
  onPushParamInversionCoords: (coords) => dispatch(pushParamInversionCoords(coords)),
});

const mapStateToProps = (state, props) => ({
  paramInversion: getParamInversion(state),
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
      tx: 0,
      ty: 0,
      tz: 0,
      q0: 0,
      q1: 0,
      q2: 0,
      q3: 0,
      m: 1,
    };
    this.parseInput = this.parseInput.bind(this);
    this.submitParamInversionCoords = this.submitParamInversionCoords.bind(this);
  }

  /**
   * Handles coords submit
   * @memberof ParamInversionContainer
   */
  submitParamInversionCoords = () => {
    const coords = {...this.state};
    this.props.onSubmitParamInversionCoords(coords);
  }

  /**
   * sets local state to current input value
   * params {Object} e - event object
   * @memberof ParamInversionContainer
   */
  parseInput = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: Number(e.target.value)
    });
    const coords = {...this.state};
    this.props.onPushParamInversionCoords(coords);
  }

  render() {
    const textAreaDisplay = JSON.stringify(this.props.paramInversion).split(',').join(' \n').slice(1,-1).replace(/"/g, '');
    return(
      <div>
        <ParamInversion 
          handleSubmit={ this.submitParamInversionCoords }
          handleChange={ this.parseInput }
          values={ this.state }
          textAreaDisplay={ textAreaDisplay }
        />
      </div>
    )
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ParamInversionContainer);