import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import {
  pushThreeDTrafoStartSystemCoords,
  pushThreeDTrafoTargetSystemCoords,
} from '../actions/pushTrafoCoords/pushTrafoCoordsActions';
import {
  threeDTrafoCheckboxUpdate,
  submitThreeDTrafoCoords,
} from '../actions/submitThreeDTrafoCoords/submitThreeDTrafoCoordsActions';
import {
  clearThreeDTrafo6WStartInput,
  clearThreeDTrafo6WTargetInput,
} from '../actions/clearInput/clearInputActions';
import {
  getStartSystemPoints,
  getTargetSystemPoints,
  getListOfUsedCoords,
} from '../selectors/ThreeDTrafoSelectors/getTrafoInputDataSelector/getTrafoInputDataSelector';
import ThreeDTrafoInput from '../components/ThreeDTrafoInput/ThreeDTrafoInput';
import Sidebar from '../components/Sidebar/Sidebar';
import InfoModal from '../components/InfoModal/InfoModal';

const cdi = require('coordinatedataimporter');

const mapDispatchToProps = dispatch => ({
  onPushStartSystemCoords: file => dispatch(pushThreeDTrafoStartSystemCoords(file)),
  onPushTargetSystemCoords: file => dispatch(pushThreeDTrafoTargetSystemCoords(file)),
  onCheckboxUpdate: id => dispatch(threeDTrafoCheckboxUpdate(id)),
  onSubmitCoords: coords => dispatch(submitThreeDTrafoCoords(coords)),
  onClearStartInput: () => dispatch(clearThreeDTrafo6WStartInput()),
  onClearTargetInput: () => dispatch(clearThreeDTrafo6WTargetInput()),
});

const mapStateToProps = state => ({
  startSystemPoints: getStartSystemPoints(state),
  targetSystemPoints: getTargetSystemPoints(state),
  listOfUsedCoords: getListOfUsedCoords(state),
});

/**
 * Page where 3D transformation file input functionality is displayed
 * @class ThreeDTrafoInputContainer
 * @extends {Component}
 */
class ThreeDTrafoInputContainer extends Component {
  /**
   * Creates an instance of ThreeDTrafoInputContainer.
   * @memberof ThreeDTrafoInputContainer
   */
  constructor() {
    super();
    this.state = {
      notification: null,
      isInfoOpen: false,
    };
    this.parseStartCoords = this.parseStartCoords.bind(this);
    this.parseTargetCoords = this.parseTargetCoords.bind(this);
    this.threeDTrafoCheckboxUpdate = this.threeDTrafoCheckboxUpdate.bind(this);
    this.submitThreeDTrafoCoords = this.submitThreeDTrafoCoords.bind(this);
    this.clearStartInput = this.clearStartInput.bind(this);
    this.clearTargetInput = this.clearTargetInput.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.displayInfoPanel = this.displayInfoPanel.bind(this);
  }

  /**
   * Uses cdi module to transform .txt file into an array of start points
   * @param {*} file - .txt file with point coordinates
   * @memberof ThreeDTrafoInputContainer
   */
  parseStartCoords = (file) => {
    cdi.startCoordinateDataImport(file, (coords) => {
      this.props.onPushStartSystemCoords(coords);
    });
  };

  /**
   * Uses cdi module to transform .txt file into an array of target points
   * @param {*} file - .txt file with point coordinates
   * @memberof ThreeDTrafoInputContainer
   */
  parseTargetCoords = (file) => {
    cdi.targetCoordinateDataImport(file, (coords) => {
      this.props.onPushTargetSystemCoords(coords);
    });
  };

  /**
   * Handles threeDTrafoCheckbox update
   * @param {Object} e - Click event
   * @memberof ThreeDTrafoInputContainer
   */
  threeDTrafoCheckboxUpdate = (e) => {
    const id = e.target.name;
    this.props.onCheckboxUpdate(id);
  };

  /**
   * Closes the Modal-window
   * @memberof ThreeDTrafoInputContainer
   */
  closeModal = () => {
    this.setState({ ...this.state, notification: null });
  };

  /**
   * Decides wheter InfoPanel is displayed or not
   * @memberof ThreeDTrafoInputContainer
   */
  displayInfoPanel = () => {
    this.setState({ ...this.state, isInfoOpen: !this.state.isInfoOpen });
  };

  /**
   * Handles coords submit, navigates to "result" page
   * @memberof ThreeDTrafoInputContainer
   */
  submitThreeDTrafoCoords = () => {
    if (!this.props.startSystemPoints || this.props.startSystemPoints.length === 0) {
      this.setState({
        notification: (
          <InfoModal
            header={
              <FormattedMessage id='InfoModal.caption.wrongInput' defaultMessage='Wrong Input' />
            }
            body={
              <FormattedMessage
                id='InfoModal.label.noStartSystemPoints'
                defaultMessage='Please import start system points!'
              />
            }
            handleClick={this.closeModal}
          />
        ),
      });
    } else if (!this.props.targetSystemPoints || this.props.targetSystemPoints.length === 0) {
      this.setState({
        notification: (
          <InfoModal
            header={
              <FormattedMessage id='InfoModal.caption.wrongInput' defaultMessage='Wrong Input' />
            }
            body={
              <FormattedMessage
                id='InfoModal.label.noTargetSystemPoints'
                defaultMessage='Please import target system points!'
              />
            }
            handleClick={this.closeModal}
          />
        ),
      });
    } else if (this.props.targetSystemPoints.length !== this.props.startSystemPoints.length) {
      this.setState({
        notification: (
          <InfoModal
            header={
              <FormattedMessage id='InfoModal.caption.wrongInput' defaultMessage='Wrong Input' />
            }
            body={
              <FormattedMessage
                id='InfoModal.label.startAndTargetDifferentLengths'
                defaultMessage="Length of start and target system don't match!"
              />
            }
            handleClick={this.closeModal}
          />
        ),
      });
    } else {
      const coords = {
        startSystemPoints: this.props.startSystemPoints,
        targetSystemPoints: this.props.targetSystemPoints,
      };
      this.props.onSubmitCoords(coords);
      this.props.history.push('/transformations/three-d-transformation/result');
    }
  };

  /**
   * deletes all start system points, updates input display
   * @memberof ThreeDTrafoInputContainer
   */
  clearStartInput = () => {
    this.props.onClearStartInput();
  };

  /**
   * deletes all target system points, updates input display
   * @memberof ThreeDTrafoInputContainer
   */
  clearTargetInput = () => {
    this.props.onClearTargetInput();
  };

  render() {
    const infoPanelText = (
      <FormattedMessage
        id='ThreeDTrafoInputContainer.panel.infoPanelText'
        defaultMessage='
          The input should be a simple .txt file.\n

          The file should consist of one or more points, each on its own line.
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
        <ThreeDTrafoInput
          onStartFileDrop={this.parseStartCoords}
          onTargetFileDrop={this.parseTargetCoords}
          startSystemPoints={this.props.startSystemPoints}
          targetSystemPoints={this.props.targetSystemPoints}
          checkboxUpdate={this.threeDTrafoCheckboxUpdate}
          handleInfoClick={this.displayInfoPanel}
          handleSubmitClick={this.submitThreeDTrafoCoords}
          handleStartDeleteClick={this.clearStartInput}
          handleTargetDeleteClick={this.clearTargetInput}
          listOfUsedCoords={this.props.listOfUsedCoords}
          isInfoOpen={this.state.isInfoOpen}
          infoPanelText={infoPanelText}
        />
      </div>
    );
  }
}

ThreeDTrafoInputContainer.propTypes = {
  onPushStartSystemCoords: PropTypes.func.isRequired,
  onPushTargetSystemCoords: PropTypes.func.isRequired,
  onCheckboxUpdate: PropTypes.func.isRequired,
  onSubmitCoords: PropTypes.func.isRequired,
  onClearStartInput: PropTypes.func.isRequired,
  onClearTargetInput: PropTypes.func.isRequired,
  startSystemPoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)).isRequired,
  targetSystemPoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  listOfUsedCoords: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)).isRequired,
  history: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreeDTrafoInputContainer);
