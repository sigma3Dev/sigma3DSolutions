import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { getError }         from '../selectors/ErrorSelectors/getErrorSelector';
import {getParamInversion}  from '../selectors/ParamInversionSelectors/getParamInversionSelector';
import {
  submitParamInversionCoords,
}                           from '../actions/paramInversionCoords/paramInversionCoordsActions';
import ParamInversion       from '../components/ParamInversion/ParamInversion';
import InfoModal from '../components/InfoModal/InfoModal';

const mapDispatchToProps = dispatch => ({
  onSubmitParamInversionCoords: (coords) => dispatch(submitParamInversionCoords(coords)), 
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
      points: {
        tx: 0,
        ty: 0,
        tz: 0,
        q0: 0,
        q1: 0,
        q2: 0,
        q3: 0,
        m: 1,
      },
      notification: null,
      pastedValue: "",
      submitted: false,
    };
    this.parseInput = this.parseInput.bind(this);
    this.submitParamInversionCoords = this.submitParamInversionCoords.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  /**
   * Handles coords submit
   * @memberof ParamInversionContainer
   */
  submitParamInversionCoords = () => {
    if (this.state.points.m === "0") {
      this.setState({
        notification: (<InfoModal 
          header={(     
            <FormattedMessage
              id="InfoModal.caption.wrongInput"
              defaultMessage="Wrong Input"
            /> )}
          body={(<FormattedMessage
            id="InfoModal.label.mCantBeZero"
            defaultMessage="M cannot be zero!"
          /> )}
          handleClick={this.closeModal}
        />)
      })
    } else {
      let coords = {...this.state.points};
      for (let key in coords) {
        coords[key] = Number(coords[key]);
      }
      this.props.onSubmitParamInversionCoords(coords);
      this.setState({submitted: true});
    }
  }

  /**
   * sets local state to current input value
   * @params {Object} e - event object
   * @memberof ParamInversionContainer
   */
  parseInput = e => {
    e.persist();
    this.setState(prevState => ({
      points: {
          ...prevState.points,
          [e.target.name]: e.target.value.replace(',', '.'),
      }
    }));
  }

  /**
   * Closes the Modal-window
   * @memberof ChebyshevCFInputContainer
   */
  closeModal = () => {
    this.setState({...this.state, notification: null});
  }

  render() {
    let textAreaDisplay;
    if (this.state.submitted) {
      textAreaDisplay = JSON.stringify({
        Tx: " " + this.props.paramInversion[0],
        Ty: " " + this.props.paramInversion[1],
        Tz: " " + this.props.paramInversion[2],
        Q0: " " + this.props.paramInversion[3],
        Q1: " " + this.props.paramInversion[4],
        Q2: " " + this.props.paramInversion[5],
        Q3: " " + this.props.paramInversion[6],
        M: " " + this.props.paramInversion[7],
      }).split(',').join(' \n').slice(1,-1).replace(/"/g, '');
    } else { 
      textAreaDisplay = "";
    }

    return(
      <div>
        {this.state.notification}
        <ParamInversion 
          handleSubmit={ this.submitParamInversionCoords }
          handleChange={ this.parseInput }
          values={ this.state.points }
          textAreaDisplay={ textAreaDisplay }
        />
      </div>
    )
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ParamInversionContainer);