import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { getError } from '../selectors/ErrorSelectors/getErrorSelector';
import { getTranslatePointAlongAxis } from '../selectors/TranslatePointAlongAxisSelectors/getTranslatePointAlongAxisSelector';
import { removeError } from '../actions/errorHandling/errorHandlingActions';
import { submitTranslatePointAlongAxisCoords } from '../actions/translatePointAlongAxisCoords/translatePointAlongAxisCoordsActions';
import ErrorScreen from '../components/ErrorScreen/ErrorScreen';
import InfoModal from '../components/InfoModal/InfoModal';
import Navbar from '../components/Navbar/Navbar';
import TranslatePointAlongAxis from '../components/TranslatePointAlongAxis/TranslatePointAlongAxis';

const mapDispatchToProps = dispatch => ({
  onRemoveError: () => dispatch(removeError()),
  onSubmitTranslatePointAlongAxisCoords: coords =>
    dispatch(submitTranslatePointAlongAxisCoords(coords)),
});

const mapStateToProps = state => ({
  translatePointAlongAxis: getTranslatePointAlongAxis(state),
  error: getError(state),
});

/**
 * Page where parameter inversion functionality is displayed
 * @class TranslatePointAlongAxisContainer
 * @extends {Component}
 */
class TranslatePointAlongAxisContainer extends Component {
  /**
   * Creates an instance of TranslatePointAlongAxis.
   * @param {Object} props
   * @memberof TranslatePointAlongAxisContainer
   */
  constructor(props) {
    super(props);
    this.state = {
      input: {
        x: '0',
        y: '0',
        z: '0',
        i: '0',
        j: '0',
        k: '0',
        amount: '0',
      },
      notification: null,
      submitted: false,
    };
    this.parseInput = this.parseInput.bind(this);
    this.submitTranslatePointAlongAxisCoords = this.submitTranslatePointAlongAxisCoords.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.backToPrevPage = this.backToPrevPage.bind(this);
  }

  /**
   * Handles coords submit
   * @memberof TranslatePointAlongAxisContainer
   */
  submitTranslatePointAlongAxisCoords = () => {
    if (this.state.input.amount === '0') {
      this.setState({
        notification: (
          <InfoModal
            header={
              <FormattedMessage id='InfoModal.caption.wrongInput' defaultMessage='Wrong Input' />
            }
            body={
              <FormattedMessage
                id='InfoModal.label.amountCantBeZero'
                defaultMessage='Amount cannot be zero!'
              />
            }
            handleClick={this.closeModal}
          />
        ),
      });
    } else {
      const coords = { ...this.state.input };
      for (const key in coords) {
        if (Object.prototype.hasOwnProperty.call(coords, key)) {
          coords[key] = Number(coords[key]);
        }
      }
      this.props.onSubmitTranslatePointAlongAxisCoords(coords);
      this.setState({ submitted: true });
    }
  };

  /**
   * goes back to previous page
   * @memberof TranslatePointAlongAxisContainer
   */
  backToPrevPage = () => {
    this.props.history.push('/transformations/');
  };

  /**
   * sets local state to current input value
   * @params {Object} e - event object
   * @memberof TranslatePointAlongAxisContainer
   */
  parseInput = (e) => {
    e.persist();
    this.setState(prevState => ({
      input: {
        ...prevState.input,
        [e.target.name]: e.target.value.replace(',', '.'),
      },
    }));
  };

  /**
   * Closes the Modal-window
   * @memberof TranslatePointAlongAxisContainer
   */
  closeModal = () => {
    this.setState({ ...this.state, notification: null });
  };

  /**
   * Navigates back to input page of the current transformation
   * @memberof TranslatePointAlongAxisContainer
   */
  goBack = () => {
    this.props.onRemoveError();
  };

  render() {
    let textAreaDisplay;
    if (this.state.submitted) {
      textAreaDisplay = JSON.stringify({
        X: ` ${this.props.translatePointAlongAxis[0]}`,
        Y: ` ${this.props.translatePointAlongAxis[1]}`,
        Z: ` ${this.props.translatePointAlongAxis[2]}`,
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
        <TranslatePointAlongAxis
          handleSubmit={this.submitTranslatePointAlongAxisCoords}
          handleChange={this.parseInput}
          handleReturn={this.backToPrevPage}
          values={this.state.input}
          textAreaDisplay={textAreaDisplay}
        />
      </div>
    );
  }
}

TranslatePointAlongAxisContainer.propTypes = {
  onSubmitTranslatePointAlongAxisCoords: PropTypes.func.isRequired,
  onRemoveError: PropTypes.func.isRequired,
  translatePointAlongAxis: PropTypes.arrayOf(PropTypes.string).isRequired,
  error: PropTypes.string,
  history: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(TranslatePointAlongAxisContainer);
