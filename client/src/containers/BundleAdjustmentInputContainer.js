import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { pushBundleAdjustmentCoords } from '../actions/pushCoords/pushCoordsActions';
import { submitBundleAdjustmentCoords } from '../actions/submitBundleAdjustmentCoords/submitBundleAdjustmentCoordsActions';
import { clearBundleInput } from '../actions/clearInput/clearInputActions';
import { getBundleAdjustmentPoints } from '../selectors/BundleAdjustmentSelectors/getBundleAdjustmentInputDataSelector/getBundleAdjustmentInputDataSelector';
import Sidebar from '../components/Sidebar/Sidebar';
import InfoModal from '../components/InfoModal/InfoModal';
import BundleAdjustmentInput from '../components/BundleAdjustmentInput/BundleAdjustmentInput';

const cdi = require('coordinatedataimporter');

const mapDispatchToProps = dispatch => ({
  onPushCoords: file => dispatch(pushBundleAdjustmentCoords(file)),
  onSubmitCoords: coords => dispatch(submitBundleAdjustmentCoords(coords)),
  onClearBundleInput: () => dispatch(clearBundleInput()),
});

const mapStateToProps = state => ({
  bundlePoints: getBundleAdjustmentPoints(state),
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
  }

  /**
   * Uses cdi module to transform .txt file into an array of points
   * @param {*} file - .txt file with point coordinates
   * @memberof BundleAdjustmentInputContainer
   */
  parseCoords = (file) => {
    cdi.startCoordinateDataImport(file, (coords) => {
      this.props.onPushCoords(coords);
    });
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
      };
      this.props.onSubmitCoords(coords);
      this.props.history.push('/geometry/bundle-adjustment/result');
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
        <Sidebar currentMenu='geometry' />
        <BundleAdjustmentInput
          isInfoOpen={this.state.isInfoOpen}
          infoPanelText={infoPanelText}
          handleInfoClick={this.displayInfoPanel}
          handleDeleteClick={this.clearBundleAdjustmentInput}
          handleFileDrop={this.parseCoords}
          handleSubmitClick={this.submitBundleAdjustmentCoords}
          bundlePoints={this.props.bundlePoints}
          clickAnywhere={this.clickAnywhere}
        />
      </div>
    );
  }
}

BundleAdjustmentInputContainer.propTypes = {
  onPushCoords: PropTypes.func.isRequired,
  onClearBundleInput: PropTypes.func.isRequired,
  onSubmitCoords: PropTypes.func.isRequired,
  bundlePoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  history: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(BundleAdjustmentInputContainer);
