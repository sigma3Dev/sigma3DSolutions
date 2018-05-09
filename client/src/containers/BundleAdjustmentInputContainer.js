import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { pushBundleAdjustmentCoords } from '../actions/pushCoords/pushCoordsActions';
import { submitBundleAdjustmentCoords } from '../actions/submitBundleAdjustmentCoords/submitBundleAdjustmentCoordsActions';
import { clearBundleInput } from '../actions/clearInput/clearInputActions';
import { changeBundleBaseStation } from '../actions/changeBundleBaseStation/changeBundleBaseStationActions';
import {
  getBundleAdjustmentPoints,
  getBundleAdjustmentBaseStation,
} from '../selectors/BundleAdjustmentSelectors/getBundleAdjustmentInputDataSelector/getBundleAdjustmentInputDataSelector';
import Navbar from '../components/Navbar/Navbar';
import InfoModal from '../components/InfoModal/InfoModal';
import BundleAdjustmentInput from '../components/BundleAdjustmentInput/BundleAdjustmentInput';

const cdi = require('coordinatedataimporter');

const mapDispatchToProps = dispatch => ({
  onPushCoords: file => dispatch(pushBundleAdjustmentCoords(file)),
  onSubmitCoords: coords => dispatch(submitBundleAdjustmentCoords(coords)),
  onSelectBaseStation: station => dispatch(changeBundleBaseStation(station)),
  onClearBundleInput: () => dispatch(clearBundleInput()),
});

const mapStateToProps = state => ({
  bundlePoints: getBundleAdjustmentPoints(state),
  baseStation: getBundleAdjustmentBaseStation(state),
});

/**
 * container for bundle adjustment input
 * @class BundleAdjustmentInputContainer
 * @extends {Component}
 */
class BundleAdjustmentInputContainer extends Component {
  /**
   * Creates an instance of BundleAdjustmentInputContainer.
   * @param {Object} props
   * @memberof BundleAdjustmentInputContainer
   */
  constructor(props) {
    super(props);
    this.state = {
      notification: null,
      isInfoOpen: false,
    };
    this.displayInfoPanel = this.displayInfoPanel.bind(this);
    this.parseCoords = this.parseCoords.bind(this);
    this.clearBundleAdjustmentInput = this.clearBundleAdjustmentInput.bind(this);
    this.submitBundleAdjustmentCoords = this.submitBundleAdjustmentCoords.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.clickAnywhere = this.clickAnywhere.bind(this);
    this.handleSelectBaseStation = this.handleSelectBaseStation.bind(this);
    this.backToPrevPage = this.backToPrevPage.bind(this);
  }

  /**
   * Uses cdi module to transform .txt file into an array of points
   * @param {*} file - .txt file with point coordinates
   * @memberof BundleAdjustmentInputContainer
   */
  parseCoords = (file) => {
    cdi.bundleAdjustmentDataImport(file, (coords) => {
      this.props.onPushCoords(coords);
    });
  };

  /**
   * goes back to previous page
   * @memberof BundleAdjustmentInputContainer
   */
  backToPrevPage = () => {
    this.props.history.push('/transformations/');
  };

  /**
   * handles selection of the base station from dropdown menu
   * @params {Object} e - event object
   * @memberof BundleAdjustmentInputContainer
   */
  handleSelectBaseStation = (e) => {
    this.props.onSelectBaseStation(Number(e.target.innerText));
  };

  /**
   * Closes the Modal-window
   * @memberof BundleAdjustmentInputContainer
   */
  closeModal = () => {
    this.setState({ ...this.state, notification: null });
  };

  /**
   * Handles coords submit, navigates to "result" page
   * @memberof BundleAdjustmentInputContainer
   */
  submitBundleAdjustmentCoords = () => {
    if (!this.props.bundlePoints || this.props.bundlePoints.length === 0) {
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
        bundlePoints: this.props.bundlePoints,
        baseStation: this.props.baseStation,
      };
      this.props.onSubmitCoords(coords);
      this.props.history.push('/transformations/bundle-adjustment/result');
    }
  };

  /**
   * deletes all start system points, updates input display
   * @memberof BundleAdjustmentInputContainer
   */
  clearBundleAdjustmentInput = () => {
    this.props.onClearBundleInput();
  };

  /**
   * closes info, if it is open
   * @memberof BundleAdjustmentInputContainer
   */
  clickAnywhere = () => {
    if (this.state.isInfoOpen) {
      this.setState({ ...this.state, isInfoOpen: false });
    }
  };

  /**
   * Decides wheter InfoPanel is displayed or not
   * @memberof BundleAdjustmentInputContainer
   */
  displayInfoPanel = () => {
    this.setState({ ...this.state, isInfoOpen: !this.state.isInfoOpen });
  };

  render() {
    const infoPanelText = (
      <FormattedMessage
        id='InputInfoPanel.panel.infoPanelTextBundle'
        defaultMessage='
          The input should be a simple .txt file.\n

          The file should consist of two or more points, each on its own line.
          Each point should be made up of a station ID, a geometry ID, three coordinates: x, y and z and a standard deviation. These should be simple numbers.\n

          Example:\n
          1000 3 23.5 33.3 45.7 0.1\n
          1000 2 5.5 3.3 7.7 0.1\n
          2000 3 33.5 43.3 55.7 0.1\n
          1000 5 16.5 44.3 34.7 0.1 \n
          2000 2 15.5 13.3 17.7 0.1\n
          2000 5 26.5 54.3 44.7 0.1
        '
      />
    );
    return (
      <div>
        {this.state.notification}
        <Navbar currentMenu='trafo' />
        <BundleAdjustmentInput
          isInfoOpen={this.state.isInfoOpen}
          infoPanelText={infoPanelText}
          handleInfoClick={this.displayInfoPanel}
          handleDeleteClick={this.clearBundleAdjustmentInput}
          handleSelectBaseStation={this.handleSelectBaseStation}
          handleFileDrop={this.parseCoords}
          handleReturn={this.backToPrevPage}
          handleSubmitClick={this.submitBundleAdjustmentCoords}
          bundlePoints={this.props.bundlePoints}
          baseStation={this.props.baseStation}
          clickAnywhere={this.clickAnywhere}
        />
      </div>
    );
  }
}

BundleAdjustmentInputContainer.propTypes = {
  onPushCoords: PropTypes.func.isRequired,
  onClearBundleInput: PropTypes.func.isRequired,
  onSelectBaseStation: PropTypes.func.isRequired,
  onSubmitCoords: PropTypes.func.isRequired,
  bundlePoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  baseStation: PropTypes.number,
  history: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(BundleAdjustmentInputContainer);
