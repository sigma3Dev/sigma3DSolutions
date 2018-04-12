import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { pushFitSphereCoords } from '../actions/pushCoords/pushCoordsActions';
import { submitFitSphereCoords } from '../actions/submitFitSphereCoords/submitFitSphereCoordsActions';
import { clearSphereInput } from '../actions/clearInput/clearInputActions';
import { getSpherePoints } from '../selectors/FitSphereSelectors/getFitSphereInputDataSelector/getFitSphereInputDataSelector';
import Sidebar from '../components/Sidebar/Sidebar';
import InfoModal from '../components/InfoModal/InfoModal';
import FitSphereInput from '../components/FitSphereInput/FitSphereInput';

const cdi = require('coordinatedataimporter');

const mapDispatchToProps = dispatch => ({
  onPushCoords: file => dispatch(pushFitSphereCoords(file)),
  onSubmitCoords: coords => dispatch(submitFitSphereCoords(coords)),
  onClearSphereInput: () => dispatch(clearSphereInput()),
});

const mapStateToProps = state => ({
  spherePoints: getSpherePoints(state),
});

/**
 * container for Sphere input
 * @class FitSphereInputContainer
 * @extends {Component}
 */
class FitSphereInputContainer extends Component {
  /**
   * Creates an instance of FitSphereInputContainer.
   * @param {Object} props
   * @memberof FitSphereInputContainer
   */
  constructor(props) {
    super(props);
    this.state = {
      notification: null,
      isInfoOpen: false,
    };
    this.displayInfoPanel = this.displayInfoPanel.bind(this);
    this.parseCoords = this.parseCoords.bind(this);
    this.clearSphereInput = this.clearSphereInput.bind(this);
    this.submitFitSphereCoords = this.submitFitSphereCoords.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  /**
   * Uses cdi module to transform .txt file into an array of points
   * @param {*} file - .txt file with point coordinates
   * @memberof FitSphereInputContainer
   */
  parseCoords = (file) => {
    cdi.startCoordinateDataImport(file, (coords) => {
      this.props.onPushCoords(coords);
    });
  };

  /**
   * Closes the Modal-window
   * @memberof FitSphereInputContainer
   */
  closeModal = () => {
    this.setState({ ...this.state, notification: null });
  };

  /**
   * Handles coords submit, navigates to "result" page
   * @memberof FitSphereInputContainer
   */
  submitFitSphereCoords = () => {
    if (!this.props.spherePoints || this.props.spherePoints.length === 0) {
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
        spherePoints: this.props.spherePoints,
      };
      this.props.onSubmitCoords(coords);
      this.props.history.push('/geometry/fit-sphere/result');
    }
  };

  /**
   * deletes all start system points, updates input display
   * @memberof FitSphereInputContainer
   */
  clearSphereInput = () => {
    this.props.onClearSphereInput();
  };

  /**
   * Decides wheter InfoPanel is displayed or not
   * @memberof FitSphereInputContainer
   */
  displayInfoPanel = () => {
    this.setState({ ...this.state, isInfoOpen: !this.state.isInfoOpen });
  };

  render() {
    const infoPanelText = (
      <FormattedMessage
        id='InputInfoPanel.panel.infoPanelTextFive'
        defaultMessage='
          The input should be a simple .txt file.\n

          The file should consist of five or more points, each on its own line.
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
        <FitSphereInput
          isInfoOpen={this.state.isInfoOpen}
          infoPanelText={infoPanelText}
          handleInfoClick={this.displayInfoPanel}
          handleDeleteClick={this.clearSphereInput}
          handleFileDrop={this.parseCoords}
          handleSubmitClick={this.submitFitSphereCoords}
          spherePoints={this.props.spherePoints}
        />
      </div>
    );
  }
}

FitSphereInputContainer.propTypes = {
  onPushCoords: PropTypes.func.isRequired,
  onClearSphereInput: PropTypes.func.isRequired,
  onSubmitCoords: PropTypes.func.isRequired,
  spherePoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  history: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(FitSphereInputContainer);
