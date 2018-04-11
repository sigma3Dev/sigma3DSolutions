import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { pushFitPointCoords } from '../actions/pushCoords/pushCoordsActions';
import { submitFitPointCoords } from '../actions/submitFitPointCoords/submitFitPointCoordsActions';
import { clearPointInput } from '../actions/clearInput/clearInputActions';
import { getPoints } from '../selectors/FitPointSelectors/getFitPointInputDataSelector/getFitPointInputDataSelector';
import Sidebar from '../components/Sidebar/Sidebar';
import InfoModal from '../components/InfoModal/InfoModal';
import FitPointInput from '../components/FitPointInput/FitPointInput';

const cdi = require('coordinatedataimporter');

const mapDispatchToProps = dispatch => ({
  onPushCoords: file => dispatch(pushFitPointCoords(file)),
  onSubmitCoords: coords => dispatch(submitFitPointCoords(coords)),
  onClearPointInput: () => dispatch(clearPointInput()),
});

const mapStateToProps = state => ({
  points: getPoints(state),
});

/**
 * container for Point input
 * @class FitPointInputContainer
 * @extends {Component}
 */
class FitPointInputContainer extends Component {
  /**
   * Creates an instance of FitPointInputContainer.
   * @param {Object} props
   * @memberof FitPointInputContainer
   */
  constructor(props) {
    super(props);
    this.state = {
      notification: null,
      isInfoOpen: false,
    };
    this.displayInfoPanel = this.displayInfoPanel.bind(this);
    this.parseCoords = this.parseCoords.bind(this);
    this.clearPointInput = this.clearPointInput.bind(this);
    this.submitFitPointCoords = this.submitFitPointCoords.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  /**
   * Uses cdi module to transform .txt file into an array of points
   * @param {*} file - .txt file with point coordinates
   * @memberof FitPointInputContainer
   */
  parseCoords = (file) => {
    cdi.startCoordinateDataImport(file, (coords) => {
      this.props.onPushCoords(coords);
    });
  };

  /**
   * Closes the Modal-window
   * @memberof FitPointInputContainer
   */
  closeModal = () => {
    this.setState({ ...this.state, notification: null });
  };

  /**
   * Handles coords submit, navigates to "result" page
   * @memberof FitPointInputContainer
   */
  submitFitPointCoords = () => {
    if (!this.props.points || this.props.points.length === 0) {
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
        points: this.props.points,
      };
      this.props.onSubmitCoords(coords);
      this.props.history.push('/geometry/fit-point/result');
    }
  };

  /**
   * deletes all start system points, updates input display
   * @memberof FitPointInputContainer
   */
  clearPointInput = () => {
    this.props.onClearPointInput();
  };

  /**
   * Decides wheter InfoPanel is displayed or not
   * @memberof FitPointInputContainer
   */
  displayInfoPanel = () => {
    this.setState({ ...this.state, isInfoOpen: !this.state.isInfoOpen });
  };

  render() {
    const infoPanelText = (
      <FormattedMessage
        id='InputInfoPanel.panel.infoPanelTextOne'
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
        <FitPointInput
          isInfoOpen={this.state.isInfoOpen}
          infoPanelText={infoPanelText}
          handleInfoClick={this.displayInfoPanel}
          handleDeleteClick={this.clearPointInput}
          handleFileDrop={this.parseCoords}
          handleSubmitClick={this.submitFitPointCoords}
          points={this.props.points}
        />
      </div>
    );
  }
}

FitPointInputContainer.propTypes = {
  onPushCoords: PropTypes.func.isRequired,
  onClearPointInput: PropTypes.func.isRequired,
  onSubmitCoords: PropTypes.func.isRequired,
  points: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  history: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(FitPointInputContainer);
