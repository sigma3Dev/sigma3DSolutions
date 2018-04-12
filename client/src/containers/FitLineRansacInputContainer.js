import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { pushFitLineRansacCoords } from '../actions/pushCoords/pushCoordsActions';
import { submitFitLineRansacCoords } from '../actions/submitFitLineRansacCoords/submitFitLineRansacCoordsActions';
import { clearLineRansacInput } from '../actions/clearInput/clearInputActions';
import { updateFitLineRansacTolerance } from '../actions/changeFitLineRansacInputField/changeFitLineRansacInputFieldActions';
import {
  getLineRansacPoints,
  getLineRansacTolerance,
} from '../selectors/FitLineRansacSelectors/getFitLineRansacInputDataSelector/getFitLineRansacInputDataSelector';
import Sidebar from '../components/Sidebar/Sidebar';
import InfoModal from '../components/InfoModal/InfoModal';
import FitLineRansacInput from '../components/FitLineRansacInput/FitLineRansacInput';

const cdi = require('coordinatedataimporter');

const mapDispatchToProps = dispatch => ({
  onPushCoords: file => dispatch(pushFitLineRansacCoords(file)),
  onSubmitCoords: coords => dispatch(submitFitLineRansacCoords(coords)),
  onClearLineInput: () => dispatch(clearLineRansacInput()),
  onUpdateTolerance: newTolerance => dispatch(updateFitLineRansacTolerance(newTolerance)),
});

const mapStateToProps = state => ({
  linePoints: getLineRansacPoints(state),
  lineTolerance: getLineRansacTolerance(state),
});

/**
 * container for Ransac input
 * @class FitLineRansacInputContainer
 * @extends {Component}
 */
class FitLineRansacInputContainer extends Component {
  /**
   * Creates an instance of FitLineRansacInputContainer.
   * @param {Object} props
   * @memberof FitLineRansacInputContainer
   */
  constructor(props) {
    super(props);
    this.state = {
      notification: null,
      isInfoOpen: false,
    };
    this.displayInfoPanel = this.displayInfoPanel.bind(this);
    this.parseCoords = this.parseCoords.bind(this);
    this.clearLineRansacInput = this.clearLineRansacInput.bind(this);
    this.submitFitLineRansacCoords = this.submitFitLineRansacCoords.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateTolerance = this.updateTolerance.bind(this);
  }

  /**
   * Uses cdi module to transform .txt file into an array of points
   * @param {*} file - .txt file with point coordinates
   * @memberof FitLineRansacInputContainer
   */
  parseCoords = (file) => {
    cdi.startCoordinateDataImport(file, (coords) => {
      this.props.onPushCoords(coords);
    });
  };

  /**
   * Closes the Modal-window
   * @memberof FitLineRansacInputContainer
   */
  closeModal = () => {
    this.setState({ ...this.state, notification: null });
  };

  /**
   * Handles coords submit, navigates to "result" page
   * @memberof FitLineRansacInputContainer
   */
  submitFitLineRansacCoords = () => {
    if (!this.props.linePoints || this.props.linePoints.length === 0) {
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
        linePoints: this.props.linePoints,
        lineTolerance: this.props.lineTolerance,
      };
      this.props.onSubmitCoords(coords);
      this.props.history.push('/geometry/fit-line-ransac/result');
    }
  };

  /**
   * deletes all start system points, updates input display
   * @memberof FitLineRansacInputContainer
   */
  clearLineRansacInput = () => {
    this.props.onClearLineInput();
  };

  /**
   * Decides wheter InfoPanel is displayed or not
   * @memberof FitLineRansacInputContainer
   */
  displayInfoPanel = () => {
    this.setState({ ...this.state, isInfoOpen: !this.state.isInfoOpen });
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
        <Sidebar />
        <FitLineRansacInput
          isInfoOpen={this.state.isInfoOpen}
          infoPanelText={infoPanelText}
          handleInfoClick={this.displayInfoPanel}
          handleDeleteClick={this.clearLineRansacInput}
          handleFileDrop={this.parseCoords}
          handleSubmitClick={this.submitFitLineRansacCoords}
          handleToleranceChange={this.updateTolerance}
          linePoints={this.props.linePoints}
          lineTolerance={this.props.lineTolerance}
        />
      </div>
    );
  }
}

FitLineRansacInputContainer.propTypes = {
  onPushCoords: PropTypes.func.isRequired,
  onClearLineInput: PropTypes.func.isRequired,
  onSubmitCoords: PropTypes.func.isRequired,
  onUpdateTolerance: PropTypes.func.isRequired,
  linePoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  lineTolerance: PropTypes.number,
  history: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(FitLineRansacInputContainer);
