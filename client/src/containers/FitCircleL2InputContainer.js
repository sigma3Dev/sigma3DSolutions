import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { pushFitCircleL2Coords } from '../actions/pushCoords/pushCoordsActions';
import { submitFitCircleL2Coords } from '../actions/submitFitCircleL2Coords/submitFitCircleL2CoordsActions';
import { clearCircleL2Input } from '../actions/clearInput/clearInputActions';
import { getCircleL2Points } from '../selectors/FitCircleL2Selectors/getFitCircleL2InputDataSelector/getFitCircleL2InputDataSelector';
import Sidebar from '../components/Sidebar/Sidebar';
import InfoModal from '../components/InfoModal/InfoModal';
import FitCircleL2Input from '../components/FitCircleL2Input/FitCircleL2Input';

const cdi = require('coordinatedataimporter');

const mapDispatchToProps = dispatch => ({
  onPushCoords: file => dispatch(pushFitCircleL2Coords(file)),
  onSubmitCoords: coords => dispatch(submitFitCircleL2Coords(coords)),
  onClearCircleL2Input: () => dispatch(clearCircleL2Input()),
});

const mapStateToProps = state => ({
  circleL2Points: getCircleL2Points(state),
});

/**
 * container for CircleL2 input
 * @class FitCircleL2InputContainer
 * @extends {Component}
 */
class FitCircleL2InputContainer extends Component {
  /**
   * Creates an instance of FitCircleL2InputContainer.
   * @param {Object} props
   * @memberof FitCircleL2InputContainer
   */
  constructor(props) {
    super(props);
    this.state = {
      notification: null,
      isInfoOpen: false,
    };
    this.displayInfoPanel = this.displayInfoPanel.bind(this);
    this.parseCoords = this.parseCoords.bind(this);
    this.clearCircleL2Input = this.clearCircleL2Input.bind(this);
    this.submitFitCircleL2Coords = this.submitFitCircleL2Coords.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.clickAnywhere = this.clickAnywhere.bind(this);
  }

  /**
   * Uses cdi module to transform .txt file into an array of circleL2Points
   * @param {*} file - .txt file with point coordinates
   * @memberof FitCircleL2InputContainer
   */
  parseCoords = (file) => {
    cdi.startCoordinateDataImport(file, (coords) => {
      this.props.onPushCoords(coords);
    });
  };

  /**
   * closes info, if it is open
   * @memberof FitCircleL2InputContainer
   */
  clickAnywhere = () => {
    if (this.state.isInfoOpen) {
      this.setState({ ...this.state, isInfoOpen: false });
    }
  };

  /**
   * Closes the Modal-window
   * @memberof FitCircleL2InputContainer
   */
  closeModal = () => {
    this.setState({ ...this.state, notification: null });
  };

  /**
   * Handles coords submit, navigates to "result" page
   * @memberof FitCircleL2InputContainer
   */
  submitFitCircleL2Coords = () => {
    if (!this.props.circleL2Points || this.props.circleL2Points.length === 0) {
      this.setState({
        notification: (
          <InfoModal
            header={
              <FormattedMessage id='InfoModal.caption.wrongInput' defaultMessage='Wrong Input' />
            }
            body={
              <FormattedMessage
                id='InfoModal.label.noPoints'
                defaultMessage='Please import Points!'
              />
            }
            handleClick={this.closeModal}
          />
        ),
      });
    } else {
      const coords = {
        circleL2Points: this.props.circleL2Points,
      };
      this.props.onSubmitCoords(coords);
      this.props.history.push('/geometry/fit-circle-l-two/result');
    }
  };

  /**
   * deletes all start system circleL2Points, updates input display
   * @memberof FitCircleL2InputContainer
   */
  clearCircleL2Input = () => {
    this.props.onClearCircleL2Input();
  };

  /**
   * Decides wheter InfoPanel is displayed or not
   * @memberof FitCircleL2InputContainer
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

          The file should consist of three or more points, each on its own circle.
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
        <FitCircleL2Input
          isInfoOpen={this.state.isInfoOpen}
          infoPanelText={infoPanelText}
          handleInfoClick={this.displayInfoPanel}
          handleDeleteClick={this.clearCircleL2Input}
          handleFileDrop={this.parseCoords}
          handleSubmitClick={this.submitFitCircleL2Coords}
          circleL2Points={this.props.circleL2Points}
          clickAnywhere={this.clickAnywhere}
        />
      </div>
    );
  }
}

FitCircleL2InputContainer.propTypes = {
  onPushCoords: PropTypes.func.isRequired,
  onClearCircleL2Input: PropTypes.func.isRequired,
  onSubmitCoords: PropTypes.func.isRequired,
  circleL2Points: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  history: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(FitCircleL2InputContainer);
