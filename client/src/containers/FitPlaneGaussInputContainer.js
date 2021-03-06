import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { pushFitPlaneGaussCoords } from '../actions/pushCoords/pushCoordsActions';
import { submitFitPlaneGaussCoords } from '../actions/submitFitPlaneGaussCoords/submitFitPlaneGaussCoordsActions';
import { clearPlaneGaussInput } from '../actions/clearInput/clearInputActions';
import { getPlaneGaussPoints } from '../selectors/FitPlaneGaussSelectors/getFitPlaneGaussInputDataSelector/getFitPlaneGaussInputDataSelector';
import Navbar from '../components/Navbar/Navbar';
import InfoModal from '../components/InfoModal/InfoModal';
import FitPlaneGaussInput from '../components/FitPlaneGaussInput/FitPlaneGaussInput';

const cdi = require('coordinatedataimporter');

const mapDispatchToProps = dispatch => ({
  onPushCoords: file => dispatch(pushFitPlaneGaussCoords(file)),
  onSubmitCoords: coords => dispatch(submitFitPlaneGaussCoords(coords)),
  onClearPlaneInput: () => dispatch(clearPlaneGaussInput()),
});

const mapStateToProps = state => ({
  planePoints: getPlaneGaussPoints(state),
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
    this.clearPlaneGaussInput = this.clearPlaneGaussInput.bind(this);
    this.submitFitPlaneGaussCoords = this.submitFitPlaneGaussCoords.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.clickAnywhere = this.clickAnywhere.bind(this);
    this.backToPrevPage = this.backToPrevPage.bind(this);
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
   * goes back to previous page
   * @memberof FitPlaneGaussInputContainer
   */
  backToPrevPage = () => {
    this.props.history.push('/geometry/');
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
  clearPlaneGaussInput = () => {
    this.props.onClearPlaneInput();
  };

  /**
   * closes info, if it is open
   * @memberof FitPlaneGaussInputContainer
   */
  clickAnywhere = () => {
    if (this.state.isInfoOpen) {
      this.setState({ ...this.state, isInfoOpen: false });
    }
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
        <Navbar currentMenu='geometry' />
        <FitPlaneGaussInput
          isInfoOpen={this.state.isInfoOpen}
          infoPanelText={infoPanelText}
          handleInfoClick={this.displayInfoPanel}
          handleDeleteClick={this.clearPlaneGaussInput}
          handleFileDrop={this.parseCoords}
          handleReturn={this.backToPrevPage}
          handleSubmitClick={this.submitFitPlaneGaussCoords}
          planePoints={this.props.planePoints}
          clickAnywhere={this.clickAnywhere}
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
