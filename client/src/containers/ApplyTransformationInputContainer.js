import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { pushCoordinates }  from '../actions/pushTrafoCoords/pushTrafoCoordsActions';
import {
  clearApplyTrafoInput,
}                           from '../actions/clearInput/clearInputActions';
import ApplyTrafoInput      from '../components/ApplyTrafoInput/ApplyTrafoInput';
import InfoModal            from '../components/InfoModal/InfoModal';

const cdi = require('coordinatedataimporter');

const mapDispatchToProps = dispatch => ({
  onPushCoordinates: (file) => dispatch(pushCoordinates(file)),
  onClearApplyTrafoInput: () => dispatch(clearApplyTrafoInput()),
});

const mapStateToProps = (state, props) => ({});

/**
 * input container for applyTransformation
 * @class ApplyTransformationInputContainer
 * @extends {Component}
 */
class ApplyTransformationInputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        params: {
          tx: 0,
          ty: 0,
          tz: 0,
          q0: 0,
          q1: 0,
          q2: 0,
          q3: 0,
          m: 1,
        },
        points: []
      },
      notification: null
    }
    this.parseTrafoParamInput = this.parseTrafoParamInput.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.submitApplyTrafoCoords = this.submitApplyTrafoCoords.bind(this);
  }

  /**
   * sets local state to current input value
   * @params {Object} e - event object
   * @memberof ApplyTransformationContainer
   */
  parseTrafoParamInput = e => {
    e.persist();
    this.setState(prevState => ({
      values: {
        params: {
          ...prevState.values.params,
          [e.target.name]: e.target.value.replace(',', '.'),
        },
        points: {
          ...prevState.values.points
        }
      }
    }));
  };

  /**
   * Closes the Modal-window
   * @memberof ApplyTransformationInputContainer
   */
  closeModal = () => {
    this.setState({...this.state, notification: null});
  };

  /**
   * Uses cdi module to transform .txt file into an array of start points
   * @param {*} file - .txt file with point coordinates
   * @memberof ThreeDTrafoInputContainer
   */
  parseCoords = (file) => {
    cdi.startCoordinateDataImport(file, coords => {
      this.props.onPushCoordinates(coords);
    }); 
  }

    /**
   * Handles coords submit, navigates to "result" page
   * @memberof ApplyTransformationInputContainer
   */
  submitApplyTrafoCoords = () => {
    if (this.state.values.points.length === 0) {
      this.setState({
        notification: (<InfoModal 
          header={(     
            <FormattedMessage
              id="InfoModal.caption.wrongInput"
              defaultMessage="Wrong Input"
            /> )}
          body={(<FormattedMessage
            id="InfoModal.label.noPoints"
            defaultMessage="Please import points!"
          /> )}
          handleClick={this.closeModal}
        />)
      })
    } else {
      // const values = {
      //   values: this.state.values,
      // }
      // this.props.onSubmitCoords(coords);
      this.props.history.push('/transformations/transform/result');
    }
  };

  render() {
    return (
      <div>
        {this.state.notification}
        <ApplyTrafoInput 
          handleSubmit={ this.submitApplyTrafoCoords }
          handleChange={ this.parseTrafoParamInput }
          handleDrop={ this.parseCoords }
          values={ this.state.values }
        />
      </div>
    )
  }
}

ApplyTransformationInputContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(ApplyTransformationInputContainer);