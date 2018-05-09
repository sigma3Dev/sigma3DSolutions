import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { getError } from '../selectors/ErrorSelectors/getErrorSelector';
import { getParamInversion } from '../selectors/ParamInversionSelectors/getParamInversionSelector';
import { removeError } from '../actions/errorHandling/errorHandlingActions';
import { submitParamInversionCoords } from '../actions/paramInversionCoords/paramInversionCoordsActions';
import ErrorScreen from '../components/ErrorScreen/ErrorScreen';
import InfoModal from '../components/InfoModal/InfoModal';
import Navbar from '../components/Navbar/Navbar';
import ParamInversion from '../components/ParamInversion/ParamInversion';

const mapDispatchToProps = dispatch => ({
  onRemoveError: () => dispatch(removeError()),
  onSubmitParamInversionCoords: coords => dispatch(submitParamInversionCoords(coords)),
});

const mapStateToProps = state => ({
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
      submitted: false,
    };
    this.parseInput = this.parseInput.bind(this);
    this.submitParamInversionCoords = this.submitParamInversionCoords.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.backToPrevPage = this.backToPrevPage.bind(this);
  }

  /**
   * Handles coords submit
   * @memberof ParamInversionContainer
   */
  submitParamInversionCoords = () => {
    if (this.state.points.m === '0') {
      this.setState({
        notification: (
          <InfoModal
            header={
              <FormattedMessage id='InfoModal.caption.wrongInput' defaultMessage='Wrong Input' />
            }
            body={
              <FormattedMessage
                id='InfoModal.label.mCantBeZero'
                defaultMessage='M cannot be zero!'
              />
            }
            handleClick={this.closeModal}
          />
        ),
      });
    } else {
      const coords = { ...this.state.points };
      for (const key in coords) {
        if (Object.prototype.hasOwnProperty.call(coords, key)) {
          coords[key] = Number(coords[key]);
        }
      }
      this.props.onSubmitParamInversionCoords(coords);
      this.setState({ submitted: true });
    }
  };

  /**
   * goes back to previous page
   * @memberof ParamInversionContainer
   */
  backToPrevPage = () => {
    this.props.history.push('/transformations/');
  };

  /**
   * sets local state to current input value
   * @params {Object} e - event object
   * @memberof ParamInversionContainer
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
   * Closes the Modal-window
   * @memberof FitCircleChebyshevInputContainer
   */
  closeModal = () => {
    this.setState({ ...this.state, notification: null });
  };

  /**
   * Navigates back to input page of the current transformation
   * @memberof ParamInversionContainer
   */
  goBack = () => {
    this.props.onRemoveError();
  };

  render() {
    let textAreaDisplay;
    if (this.state.submitted) {
      textAreaDisplay = JSON.stringify({
        Tx: ` ${this.props.paramInversion[0]}`,
        Ty: ` ${this.props.paramInversion[1]}`,
        Tz: ` ${this.props.paramInversion[2]}`,
        Q0: ` ${this.props.paramInversion[3]}`,
        Q1: ` ${this.props.paramInversion[4]}`,
        Q2: ` ${this.props.paramInversion[5]}`,
        Q3: ` ${this.props.paramInversion[6]}`,
        M: ` ${this.props.paramInversion[7]}`,
      })
        .split(',')
        .join(' \n')
        .slice(1, -1)
        .replace(/"/g, '');
    } else {
      textAreaDisplay = '';
    }

    if (this.props.error) {
      return <ErrorScreen error={this.props.error} handleClick={this.goBack} />;
    }
    return (
      <div>
        {this.state.notification}
        <Navbar currentMenu='trafo' />
        <ParamInversion
          handleSubmit={this.submitParamInversionCoords}
          handleChange={this.parseInput}
          handleReturn={this.backToPrevPage}
          values={this.state.points}
          textAreaDisplay={textAreaDisplay}
        />
      </div>
    );
  }
}

ParamInversionContainer.propTypes = {
  onSubmitParamInversionCoords: PropTypes.func.isRequired,
  onRemoveError: PropTypes.func.isRequired,
  paramInversion: PropTypes.arrayOf(PropTypes.string).isRequired,
  error: PropTypes.string,
  history: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(ParamInversionContainer);
