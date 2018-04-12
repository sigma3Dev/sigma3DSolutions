import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import FitCircleChebyshevInput from '../components/FitCircleChebyshevInput/FitCircleChebyshevInput';
import { pushFitChebyCircleCoords } from '../actions/pushCoords/pushCoordsActions';
import { getCirclePoints } from '../selectors/FitCircleChebyshevSelectors/getFitCircleChebyshevInputDataSelector/getFitCircleChebyshevInputDataSelector';
import { submitFitCircleChebyshevCoords } from '../actions/submitFitCircleChebyshevCoords/submitFitCircleChebyshevCoordsActions';
import { clearChebyshevInput } from '../actions/clearInput/clearInputActions';
import Sidebar from '../components/Sidebar/Sidebar';
import InfoModal from '../components/InfoModal/InfoModal';

const cdi = require('coordinatedataimporter');

const mapDispatchToProps = dispatch => ({
  onPushFitCircleChebyshevCoords: file => dispatch(pushFitChebyCircleCoords(file)),
  onSubmitFitCircleChebyshevCoords: coords => dispatch(submitFitCircleChebyshevCoords(coords)),
  onClearChebyshevInput: () => dispatch(clearChebyshevInput()),
});

const mapStateToProps = state => ({
  circlePoints: getCirclePoints(state),
});

/**
 * What does this container do?
 * @class FitCircleChebyshevInputContainer
 * @extends {Component}
 */
class FitCircleChebyshevInputContainer extends Component {
  /**
   * Creates an instance of FitCircleChebyshevInputContainer.
   * @param {Object} props
   * @memberof FitCircleChebyshevInputContainer
   */
  constructor() {
    super();
    this.state = {
      notification: null,
      isInfoOpen: false,
    };
    this.parseCoords = this.parseCoords.bind(this);
    this.submitFitCircleChebyshevCoords = this.submitFitCircleChebyshevCoords.bind(this);
    this.clearChebyshevInput = this.clearChebyshevInput.bind(this);
  }

  /**
   * Uses cdi module to transform .txt file into an array of circle points
   * @param {*} file - .txt file with point coordinates
   * @memberof FitCircleChebyshevInputContainer
   */
  parseCoords = (file) => {
    cdi.startCoordinateDataImport(file, (coords) => {
      this.props.onPushFitCircleChebyshevCoords(coords);
    });
  };

  /**
   * Closes the Modal-window
   * @memberof FitCircleChebyshevInputContainer
   */
  closeModal = () => {
    this.setState({ ...this.state, notification: null });
  };

  /**
   * Decides wheter InfoPanel is displayed or not
   * @memberof FitCircleChebyshevInputContainer
   */
  displayInfoPanel = () => {
    this.setState({ ...this.state, isInfoOpen: !this.state.isInfoOpen });
  };

  /**
   * Handles coords submit, navigates to "result" page
   * @memberof FitCircleChebyshevInputContainer
   */
  submitFitCircleChebyshevCoords = () => {
    if (!this.props.circlePoints || this.props.circlePoints.length === 0) {
      this.setState({
        notification: (
          <InfoModal
            header={
              <FormattedMessage id='InfoModal.caption.wrongInput' defaultMessage='Wrong Input' />
            }
            body={
              <FormattedMessage
                id='InfoModal.label.noCirclePoints'
                defaultMessage='Please import circle points!'
              />
            }
            handleClick={this.closeModal}
          />
        ),
      });
    } else {
      const coords = this.props.circlePoints;
      this.props.onSubmitFitCircleChebyshevCoords(coords);
      this.props.history.push('/geometry/fit-circle-chebyshev/result');
    }
  };

  /**
   * deletes all points, updates input display
   * @memberof FitCircleChebyshevInputContainer
   */
  clearChebyshevInput = () => {
    this.props.onClearChebyshevInput();
  };

  render() {
    const infoPanelText = (
      <FormattedMessage
        id='InputInfoPanel.panel.infoPanelTextThree'
        defaultMessage='
          The input should be a simple .txt file.\n

          The file should consist of three or more points, each on its own line.
          Each point should be made up of three coordinates: x, y and z. These should be simple numbers.\n

          Example:\n
          41.3 11.2 17.1\n
          24.2 33.1 19.8\n
          9.1 5.4 12.9
        '
      />
    );
    return (
      <div>
        {this.state.notification}
        <Sidebar />
        <FitCircleChebyshevInput
          onFileDrop={this.parseCoords}
          circlePoints={this.props.circlePoints}
          handleInfoClick={this.displayInfoPanel}
          handleSubmitClick={this.submitFitCircleChebyshevCoords}
          handleDeleteClick={this.clearChebyshevInput}
          isInfoOpen={this.state.isInfoOpen}
          infoPanelText={infoPanelText}
        />
      </div>
    );
  }
}

FitCircleChebyshevInputContainer.propTypes = {
  onPushFitCircleChebyshevCoords: PropTypes.func.isRequired,
  onSubmitFitCircleChebyshevCoords: PropTypes.func.isRequired,
  onClearChebyshevInput: PropTypes.func.isRequired,
  circlePoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  history: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(FitCircleChebyshevInputContainer);
