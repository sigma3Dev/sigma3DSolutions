import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { pushFitLineL2Coords } from '../actions/pushCoords/pushCoordsActions';
import { submitFitLineL2Coords } from '../actions/submitFitLineL2Coords/submitFitLineL2CoordsActions';
import { clearLineL2Input } from '../actions/clearInput/clearInputActions';
import { getLineL2Points } from '../selectors/FitLineL2Selectors/getFitLineL2InputDataSelector/getFitLineL2InputDataSelector';
import Sidebar from '../components/Sidebar/Sidebar';
import InfoModal from '../components/InfoModal/InfoModal';
import FitLineL2Input from '../components/FitLineL2Input/FitLineL2Input';

const cdi = require('coordinatedataimporter');

const mapDispatchToProps = dispatch => ({
  onPushCoords: file => dispatch(pushFitLineL2Coords(file)),
  onSubmitCoords: coords => dispatch(submitFitLineL2Coords(coords)),
  onClearLineL2Input: () => dispatch(clearLineL2Input()),
});

const mapStateToProps = state => ({
  lineL2Points: getLineL2Points(state),
});

/**
 * container for LineL2 input
 * @class FitLineL2InputContainer
 * @extends {Component}
 */
class FitLineL2InputContainer extends Component {
  /**
   * Creates an instance of FitLineL2InputContainer.
   * @param {Object} props
   * @memberof FitLineL2InputContainer
   */
  constructor(props) {
    super(props);
    this.state = {
      notification: null,
      isInfoOpen: false,
    };
    this.displayInfoPanel = this.displayInfoPanel.bind(this);
    this.parseCoords = this.parseCoords.bind(this);
    this.clearLineL2Input = this.clearLineL2Input.bind(this);
    this.submitFitLineL2Coords = this.submitFitLineL2Coords.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  /**
   * Uses cdi module to transform .txt file into an array of lineL2Points
   * @param {*} file - .txt file with point coordinates
   * @memberof FitLineL2InputContainer
   */
  parseCoords = (file) => {
    cdi.startCoordinateDataImport(file, (coords) => {
      this.props.onPushCoords(coords);
    });
  };

  /**
   * Closes the Modal-window
   * @memberof FitLineL2InputContainer
   */
  closeModal = () => {
    this.setState({ ...this.state, notification: null });
  };

  /**
   * Handles coords submit, navigates to "result" page
   * @memberof FitLineL2InputContainer
   */
  submitFitLineL2Coords = () => {
    if (!this.props.lineL2Points || this.props.lineL2Points.length === 0) {
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
        lineL2Points: this.props.lineL2Points,
      };
      this.props.onSubmitCoords(coords);
      this.props.history.push('/geometry/fit-line-l-two/result');
    }
  };

  /**
   * deletes all start system lineL2Points, updates input display
   * @memberof FitLineL2InputContainer
   */
  clearLineL2Input = () => {
    this.props.onClearLineL2Input();
  };

  /**
   * Decides wheter InfoPanel is displayed or not
   * @memberof FitLineL2InputContainer
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
        <FitLineL2Input
          isInfoOpen={this.state.isInfoOpen}
          infoPanelText={infoPanelText}
          handleInfoClick={this.displayInfoPanel}
          handleDeleteClick={this.clearLineL2Input}
          handleFileDrop={this.parseCoords}
          handleSubmitClick={this.submitFitLineL2Coords}
          lineL2Points={this.props.lineL2Points}
        />
      </div>
    );
  }
}

FitLineL2InputContainer.propTypes = {
  onPushCoords: PropTypes.func.isRequired,
  onClearLineL2Input: PropTypes.func.isRequired,
  onSubmitCoords: PropTypes.func.isRequired,
  lineL2Points: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  history: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(FitLineL2InputContainer);
