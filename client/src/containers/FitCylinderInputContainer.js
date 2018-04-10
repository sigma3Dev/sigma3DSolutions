import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { pushFitCylinderCoords } from '../actions/pushCoords/pushCoordsActions';
import { submitFitCylinderCoords } from '../actions/submitFitCylinderCoords/submitFitCylinderCoordsActions';
import { clearCylinderInput } from '../actions/clearInput/clearInputActions';
import { getCylinderPoints } from '../selectors/FitCylinderSelectors/getFitCylinderInputDataSelector/getFitCylinderInputDataSelector';
import Sidebar from '../components/Sidebar/Sidebar';
import InfoModal from '../components/InfoModal/InfoModal';
import FitCylinderInput from '../components/FitCylinderInput/FitCylinderInput';

const cdi = require('coordinatedataimporter');

const mapDispatchToProps = dispatch => ({
  onPushCoords: file => dispatch(pushFitCylinderCoords(file)),
  onSubmitCoords: coords => dispatch(submitFitCylinderCoords(coords)),
  onClearCylinderInput: () => dispatch(clearCylinderInput()),
});

const mapStateToProps = state => ({
  cylinderPoints: getCylinderPoints(state),
});

/**
 * container for Cylinder input
 * @class FitCylinderInputContainer
 * @extends {Component}
 */
class FitCylinderInputContainer extends Component {
  /**
   * Creates an instance of FitCylinderInputContainer.
   * @param {Object} props
   * @memberof FitCylinderInputContainer
   */
  constructor(props) {
    super(props);
    this.state = {
      notification: null,
      isInfoOpen: false,
    };
    this.displayInfoPanel = this.displayInfoPanel.bind(this);
    this.parseCoords = this.parseCoords.bind(this);
    this.clearCylinderInput = this.clearCylinderInput.bind(this);
    this.submitFitCylinderCoords = this.submitFitCylinderCoords.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  /**
   * Uses cdi module to transform .txt file into an array of points
   * @param {*} file - .txt file with point coordinates
   * @memberof FitCylinderInputContainer
   */
  parseCoords = (file) => {
    cdi.startCoordinateDataImport(file, (coords) => {
      this.props.onPushCoords(coords);
    });
  };

  /**
   * Closes the Modal-window
   * @memberof FitCylinderInputContainer
   */
  closeModal = () => {
    this.setState({ ...this.state, notification: null });
  };

  /**
   * Handles coords submit, navigates to "result" page
   * @memberof FitCylinderInputContainer
   */
  submitFitCylinderCoords = () => {
    if (!this.props.cylinderPoints || this.props.cylinderPoints.length === 0) {
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
        cylinderPoints: this.props.cylinderPoints,
      };
      this.props.onSubmitCoords(coords);
      this.props.history.push('/geometry/fit-cylinder/result');
    }
  };

  /**
   * deletes all start system points, updates input display
   * @memberof FitCylinderInputContainer
   */
  clearCylinderInput = () => {
    this.props.onClearCylinderInput();
  };

  /**
   * Decides wheter InfoPanel is displayed or not
   * @memberof FitCylinderInputContainer
   */
  displayInfoPanel = () => {
    this.setState({ ...this.state, isInfoOpen: !this.state.isInfoOpen });
  };

  render() {
    const infoPanelText = (
      <FormattedMessage
        id='ThreeDTrafoInputContainer.panel.infoPanelText'
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
        <FitCylinderInput
          isInfoOpen={this.state.isInfoOpen}
          infoPanelText={infoPanelText}
          handleInfoClick={this.displayInfoPanel}
          handleDeleteClick={this.clearCylinderInput}
          handleFileDrop={this.parseCoords}
          handleSubmitClick={this.submitFitCylinderCoords}
          cylinderPoints={this.props.cylinderPoints}
        />
      </div>
    );
  }
}

FitCylinderInputContainer.propTypes = {
  onPushCoords: PropTypes.func.isRequired,
  onClearCylinderInput: PropTypes.func.isRequired,
  onSubmitCoords: PropTypes.func.isRequired,
  cylinderPoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  history: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(FitCylinderInputContainer);
