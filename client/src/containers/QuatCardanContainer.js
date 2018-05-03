import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getError } from '../selectors/ErrorSelectors/getErrorSelector';
import { getQuat, getCardan } from '../selectors/QuatCardanSelectors/getQuatCardanSelector';
import { removeError } from '../actions/errorHandling/errorHandlingActions';
import {
  submitQuatToCardanCoords,
  submitCardanToQuatCoords,
  changeQuatCardanInputField,
} from '../actions/quatCardanCoords/quatCardanCoordsActions';
import ErrorScreen from '../components/ErrorScreen/ErrorScreen';
import Navbar from '../components/Navbar/Navbar';
import QuatCardan from '../components/QuatCardan/QuatCardan';

const mapDispatchToProps = dispatch => ({
  onChangeInputField: (name, val) => dispatch(changeQuatCardanInputField(name, val)),
  onRemoveError: () => dispatch(removeError()),
  onSubmitQuatToCardanCoords: coords => dispatch(submitQuatToCardanCoords(coords)),
  onSubmitCardanToQuatCoords: coords => dispatch(submitCardanToQuatCoords(coords)),
});

const mapStateToProps = state => ({
  quat: getQuat(state),
  cardan: getCardan(state),
  error: getError(state),
});

/**
 * Page where quat-cardan functionality is displayed
 * @class QuatCardanContainer
 * @extends {Component}
 */
class QuatCardanContainer extends Component {
  /**
   * Creates an instance of QuatCardanContainer.
   * @param {Object} props
   * @memberof QuatCardanContainer
   */
  constructor(props) {
    super(props);
    this.parseInput = this.parseInput.bind(this);
    this.submitQuatToCardanCoords = this.submitQuatToCardanCoords.bind(this);
    this.submitCardanToQuatCoords = this.submitCardanToQuatCoords.bind(this);
  }

  /**
   * sets state to current input value
   * @params {Object} e - event object
   * @memberof QuatCardanContainer
   */
  parseInput = (e) => {
    e.persist();
    this.props.onChangeInputField(e.target.name, e.target.value);
  };

  /**
   * Navigates back to input page of the current transformation
   * @memberof QuatCardanContainer
   */
  goBack = () => {
    this.props.onRemoveError();
  };

  /**
   * Handles quaternion to cardan coords submit
   * @memberof QuatCardanContainer
   */
  submitQuatToCardanCoords = () => {
    this.props.onSubmitQuatToCardanCoords({
      q0: Number(this.props.quat[0]),
      q1: Number(this.props.quat[1]),
      q2: Number(this.props.quat[2]),
      q3: Number(this.props.quat[3]),
    });
  };

  /**
   * Handles cardan to quaternion coords submit
   * @memberof QuatCardanContainer
   */
  submitCardanToQuatCoords = () => {
    this.props.onSubmitCardanToQuatCoords({
      Rx: Number(this.props.cardan[0]),
      Ry: Number(this.props.cardan[1]),
      Rz: Number(this.props.cardan[2]),
    });
  };

  render() {
    if (this.props.error) {
      return <ErrorScreen error={this.props.error} handleClick={this.goBack} />;
    }
    return (
      <div>
        <Navbar currentMenu='trafo' />
        <QuatCardan
          quat={this.props.quat}
          cardan={this.props.cardan}
          handleChange={this.parseInput}
          handleQuatToCardanClick={this.submitQuatToCardanCoords}
          handleCardanToQuatClick={this.submitCardanToQuatCoords}
        />
      </div>
    );
  }
}

QuatCardanContainer.propTypes = {
  onRemoveError: PropTypes.func.isRequired,
  onChangeInputField: PropTypes.func.isRequired,
  onSubmitQuatToCardanCoords: PropTypes.func.isRequired,
  onSubmitCardanToQuatCoords: PropTypes.func.isRequired,
  quat: PropTypes.arrayOf(PropTypes.string),
  cardan: PropTypes.arrayOf(PropTypes.string),
  error: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuatCardanContainer);
