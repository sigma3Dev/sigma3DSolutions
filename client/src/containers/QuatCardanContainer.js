import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getError } from '../selectors/ErrorSelectors/getErrorSelector';
import { removeError } from '../actions/errorHandling/errorHandlingActions';
import {
  submitQuatToCardanCoords,
  submitCardanToQuatCoords,
} from '../actions/quatCardanCoords/quatCardanCoordsActions';
import ErrorScreen from '../components/ErrorScreen/ErrorScreen';
import Sidebar from '../components/Sidebar/Sidebar';
import QuatCardan from '../components/QuatCardan/QuatCardan';

const mapDispatchToProps = dispatch => ({
  onRemoveError: () => dispatch(removeError()),
  onSubmitQuatToCardanCoords: coords => dispatch(submitQuatToCardanCoords(coords)),
  onSubmitCardanToQuatCoords: coords => dispatch(submitCardanToQuatCoords(coords)),
});

const mapStateToProps = state => ({
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
    this.state = {
      points: {
        q0: 0,
        q1: 0,
        q2: 0,
        q3: 0,
        Rx: 0,
        Ry: 0,
        Rz: 0,
      },
    };
    this.parseInput = this.parseInput.bind(this);
    this.submitQuatToCardanCoords = this.submitQuatToCardanCoords.bind(this);
    this.submitCardanToQuatCoords = this.submitCardanToQuatCoords.bind(this);
  }

  /**
   * sets local state to current input value
   * @params {Object} e - event object
   * @memberof QuatCardanContainer
   */
  parseInput = (e) => {
    e.persist();
    this.setState(prevState => ({
      points: {
        ...prevState.points,
        [e.target.name]: e.target.value.replace(',', '.'),
      },
    }));
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
    const points = { ...this.state.points };
    const coords = {};
    for (const key in points) {
      if (Object.prototype.hasOwnProperty.call(points, key) && key[0] === 'q') {
        coords[key] = Number(points[key]);
      }
    }
    this.props.onSubmitQuatToCardanCoords(coords);
  };

  /**
   * Handles cardan to quaternion coords submit
   * @memberof QuatCardanContainer
   */
  submitCardanToQuatCoords = () => {
    const points = { ...this.state.points };
    const coords = {};
    for (const key in points) {
      if (Object.prototype.hasOwnProperty.call(points, key) && key[0] === 'R') {
        coords[key] = Number(points[key]);
      }
    }
    this.props.onSubmitCardanToQuatCoords(coords);
  };

  render() {
    if (this.props.error) {
      return <ErrorScreen error={this.props.error} handleClick={this.goBack} />;
    }
    return (
      <div>
        {this.state.notification}
        <Sidebar />
        <QuatCardan
          handleChange={this.parseInput}
          points={this.state.points}
          handleQuatToCardanClick={this.submitQuatToCardanCoords}
          handleCardanToQuatClick={this.submitCardanToQuatCoords}
        />
      </div>
    );
  }
}

QuatCardanContainer.propTypes = {
  onRemoveError: PropTypes.func.isRequired,
  onSubmitQuatToCardanCoords: PropTypes.func.isRequired,
  onSubmitCardanToQuatCoords: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuatCardanContainer);
