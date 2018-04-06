import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { pushFitPlaneGaussCoords } from '../actions/pushCoords/pushCoordsActions';
import { submitFitPlaneGaussCoords } from '../actions/submitFitPlaneGaussCoords/submitFitPlaneGaussCoordsActions';
import { clearPlaneInput } from '../actions/clearInput/clearInputActions';
import { getPlanePoints } from '../selectors/FitPlaneGaussSelectors/getFitPlaneGaussInputDataSelector/getFitPlaneGaussInputDataSelector';
import Sidebar from '../components/Sidebar/Sidebar';
import InfoModal from '../components/InfoModal/InfoModal';
import FitPlaneGaussInput from '../components/FitPlaneGaussInput/FitPlaneGaussInput';

const cdi = require('coordinatedataimporter');

const mapDispatchToProps = dispatch => ({
  onPushCoords: file => dispatch(pushFitPlaneGaussCoords(file)),
  onSubmitCoords: coords => dispatch(submitFitPlaneGaussCoords(coords)),
  onClearPlaneInput: () => dispatch(clearPlaneInput()),
});

const mapStateToProps = state => ({
  planePoints: getPlanePoints(state),
});

/**
 * container for Gauss input
 * @class FitPlaneGaussInputContainer
 * @extends {Component}
 */
class FitPlaneGaussInputContainer extends Component {
  /**
   * Creates an instance of FitPlaneGaussInputContainer.
   * @param {Object} props
   * @memberof FitPlaneGaussInputContainer
   */
  constructor(props) {
    super(props);
    this.state = {
      notification: null,
      isInfoOpen: false,
    };
    this.displayInfoPanel = this.displayInfoPanel.bind(this);
    this.parseCoords = this.parseCoords.bind(this);
    this.clearPlaneInput = this.clearPlaneInput.bind(this);
    this.submitFitPlaneGaussCoords = this.submitFitPlaneGaussCoords.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  /**
   * Uses cdi module to transform .txt file into an array of points
   * @param {*} file - .txt file with point coordinates
   * @memberof FitPlaneGaussInputContainer
   */
  parseCoords = (file) => {
    cdi.startCoordinateDataImport(file, (coords) => {
      this.props.onPushCoords(coords);
    });
  };

  /**
   * Closes the Modal-window
   * @memberof FitPlaneGaussInputContainer
   */
  closeModal = () => {
    this.setState({ ...this.state, notification: null });
  };

  /**
   * Handles coords submit, navigates to "result" page
   * @memberof FitPlaneGaussInputContainer
   */
  submitFitPlaneGaussCoords = () => {
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
      };
      this.props.onSubmitCoords(coords);
      this.props.history.push('/geometry/fit-plane-gauss/result');
    }
  };

  /**
   * deletes all start system points, updates input display
   * @memberof FitPlaneGaussInputContainer
   */
  clearPlaneInput = () => {
    this.props.onClearPlaneInput();
  };

  /**
   * Decides wheter InfoPanel is displayed or not
   * @memberof FitPlaneGaussInputContainer
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
        <FitPlaneGaussInput
          isInfoOpen={this.state.isInfoOpen}
          infoPanelText={infoPanelText}
          handleInfoClick={this.displayInfoPanel}
          handleDeleteClick={this.clearPlaneInput}
          handleFileDrop={this.parseCoords}
          handleSubmitClick={this.submitFitPlaneGaussCoords}
          planePoints={this.props.planePoints}
        />
      </div>
    );
  }
}

FitPlaneGaussInputContainer.propTypes = {
  onPushCoords: PropTypes.func.isRequired,
  onClearPlaneInput: PropTypes.func.isRequired,
  onSubmitCoords: PropTypes.func.isRequired,
  planePoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  history: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(FitPlaneGaussInputContainer);
