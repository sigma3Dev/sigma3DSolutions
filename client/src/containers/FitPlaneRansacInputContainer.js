import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { pushFitPlaneRansacCoords } from '../actions/pushCoords/pushCoordsActions';
import { submitFitPlaneRansacCoords } from '../actions/submitFitPlaneRansacCoords/submitFitPlaneRansacCoordsActions';
import { clearPlaneRansacInput } from '../actions/clearInput/clearInputActions';
import { updateFitPlaneRansacTolerance } from '../actions/changeFitPlaneRansacInputField/changeFitPlaneRansacInputFieldActions';
import {
  getPlaneRansacPoints,
  getPlaneRansacTolerance,
} from '../selectors/FitPlaneRansacSelectors/getFitPlaneRansacInputDataSelector/getFitPlaneRansacInputDataSelector';
import Navbar from '../components/Navbar/Navbar';
import InfoModal from '../components/InfoModal/InfoModal';
import FitPlaneRansacInput from '../components/FitPlaneRansacInput/FitPlaneRansacInput';

const cdi = require('coordinatedataimporter');

const mapDispatchToProps = dispatch => ({
  onPushCoords: file => dispatch(pushFitPlaneRansacCoords(file)),
  onSubmitCoords: coords => dispatch(submitFitPlaneRansacCoords(coords)),
  onClearPlaneInput: () => dispatch(clearPlaneRansacInput()),
  onUpdateTolerance: newTolerance => dispatch(updateFitPlaneRansacTolerance(newTolerance)),
});

const mapStateToProps = state => ({
  planePoints: getPlaneRansacPoints(state),
  planeTolerance: getPlaneRansacTolerance(state),
});

/**
 * container for Ransac input
 * @class FitPlaneRansacInputContainer
 * @extends {Component}
 */
class FitPlaneRansacInputContainer extends Component {
  /**
   * Creates an instance of FitPlaneRansacInputContainer.
   * @param {Object} props
   * @memberof FitPlaneRansacInputContainer
   */
  constructor(props) {
    super(props);
    this.state = {
      notification: null,
      isInfoOpen: false,
    };
    this.displayInfoPanel = this.displayInfoPanel.bind(this);
    this.parseCoords = this.parseCoords.bind(this);
    this.clearPlaneRansacInput = this.clearPlaneRansacInput.bind(this);
    this.submitFitPlaneRansacCoords = this.submitFitPlaneRansacCoords.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateTolerance = this.updateTolerance.bind(this);
    this.clickAnywhere = this.clickAnywhere.bind(this);
  }

  /**
   * Uses cdi module to transform .txt file into an array of points
   * @param {*} file - .txt file with point coordinates
   * @memberof FitPlaneRansacInputContainer
   */
  parseCoords = (file) => {
    cdi.startCoordinateDataImport(file, (coords) => {
      this.props.onPushCoords(coords);
    });
  };

  /**
   * Closes the Modal-window
   * @memberof FitPlaneRansacInputContainer
   */
  closeModal = () => {
    this.setState({ ...this.state, notification: null });
  };

  /**
   * Handles coords submit, navigates to "result" page
   * @memberof FitPlaneRansacInputContainer
   */
  submitFitPlaneRansacCoords = () => {
    if (!this.props.planePoints || this.props.planePoints.length === 0) {
      this.setState({
        notification: (
          <InfoModal
            header={
              <FormattedMessage id='InfoModal.caption.wrongInput' defaultMessage='Wrong Input' />
            }
            body={
              <FormattedMessage
                id='InfoModal.label.noPoints'
                defaultMessage='Please import points!'
              />
            }
            handleClick={this.closeModal}
          />
        ),
      });
    } else {
      const coords = {
        planePoints: this.props.planePoints,
        planeTolerance: this.props.planeTolerance,
      };
      this.props.onSubmitCoords(coords);
      this.props.history.push('/geometry/fit-plane-ransac/result');
    }
  };

  /**
   * deletes all start system points, updates input display
   * @memberof FitPlaneRansacInputContainer
   */
  clearPlaneRansacInput = () => {
    this.props.onClearPlaneInput();
  };

  /**
   * Decides wheter InfoPanel is displayed or not
   * @memberof FitPlaneRansacInputContainer
   */
  displayInfoPanel = () => {
    this.setState({ ...this.state, isInfoOpen: !this.state.isInfoOpen });
  };

  /**
   * closes info, if it is open
   * @memberof FitPlaneRansacInputContainer
   */
  clickAnywhere = () => {
    if (this.state.isInfoOpen) {
      this.setState({ ...this.state, isInfoOpen: false });
    }
  };

  updateTolerance = (e) => {
    const newTolerance = e.target.value;
    this.props.onUpdateTolerance(newTolerance);
  };

  render() {
    const infoPanelText = (
      <FormattedMessage
        id='InputInfoPanel.panel.infoPanelTextFour'
        defaultMessage='
          The input should be a simple .txt file.\n

          The file should consist of four or more points, each on its own line.
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
        <Navbar currentMenu='geometry' />
        <FitPlaneRansacInput
          isInfoOpen={this.state.isInfoOpen}
          infoPanelText={infoPanelText}
          handleInfoClick={this.displayInfoPanel}
          handleDeleteClick={this.clearPlaneRansacInput}
          handleFileDrop={this.parseCoords}
          handleSubmitClick={this.submitFitPlaneRansacCoords}
          handleToleranceChange={this.updateTolerance}
          planePoints={this.props.planePoints}
          planeTolerance={this.props.planeTolerance}
          clickAnywhere={this.clickAnywhere}
        />
      </div>
    );
  }
}

FitPlaneRansacInputContainer.propTypes = {
  onPushCoords: PropTypes.func.isRequired,
  onClearPlaneInput: PropTypes.func.isRequired,
  onSubmitCoords: PropTypes.func.isRequired,
  onUpdateTolerance: PropTypes.func.isRequired,
  planePoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  planeTolerance: PropTypes.number,
  history: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(FitPlaneRansacInputContainer);
