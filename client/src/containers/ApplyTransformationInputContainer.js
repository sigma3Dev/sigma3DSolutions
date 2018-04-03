import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { pushCoordinates } from '../actions/pushTrafoCoords/pushTrafoCoordsActions';
import { clearApplyTrafoInput } from '../actions/clearInput/clearInputActions';
import { changeApplyTrafoParamInputField } from '../actions/changeApplyTrafoParamInputField/changeApplyTrafoParamInputFieldActions';
import { submitApplyTrafoValues } from '../actions/submitApplyTransformationValuesActions/submitApplyTransformationValuesActions';
import {
  getParams,
  getPoints,
} from '../selectors/ApplyTrafoSelectors/getApplyTrafoInputDataSelector/getApplyTrafoInputDataSelector';
import ApplyTrafoInput from '../components/ApplyTrafoInput/ApplyTrafoInput';
import InfoModal from '../components/InfoModal/InfoModal';

const cdi = require('coordinatedataimporter');

const mapDispatchToProps = dispatch => ({
  onPushCoordinates: file => dispatch(pushCoordinates(file)),
  onSubmitValues: values => dispatch(submitApplyTrafoValues(values)),
  onClearApplyTrafoInput: () => dispatch(clearApplyTrafoInput()),
  onChangeParamInputField: (name, val) => dispatch(changeApplyTrafoParamInputField(name, val)),
});

const mapStateToProps = state => ({
  transformation: getParams(state),
  points: getPoints(state),
});

/**
 * input container for applyTransformation
 * @class ApplyTransformationInputContainer
 * @extends {Component}
 */
class ApplyTransformationInputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: null,
      isInfoOpen: false,
    };
    this.parseTrafoParamInput = this.parseTrafoParamInput.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.submitApplyTrafoCoords = this.submitApplyTrafoCoords.bind(this);
    this.displayInfoPanel = this.displayInfoPanel.bind(this);
  }

  /**
   * sets local state to current input value
   * @params {Object} e - event object
   * @memberof ApplyTransformationContainer
   */
  parseTrafoParamInput = (e) => {
    e.persist();
    this.props.onChangeParamInputField(e.target.name, e.target.value);
  };

  /**
   * Closes the Modal-window
   * @memberof ApplyTransformationInputContainer
   */
  closeModal = () => {
    this.setState({ ...this.state, notification: null });
  };

  /**
   * deletes all points, updates input display
   * @memberof ApplyTransformationInputContainer
   */
  clearApplyTrafoInput = () => {
    this.props.onClearApplyTrafoInput();
  };

  /**
   * Decides wheter InfoPanel is displayed or not
   * @memberof ApplyTransformationInputContainer
   */
  displayInfoPanel = () => {
    this.setState({ ...this.state, isInfoOpen: !this.state.isInfoOpen });
  };

  /**
   * Uses cdi module to transform .txt file into an array of start points
   * @param {*} file - .txt file with point coordinates
   * @memberof ApplyTransformationInputContainer
   */
  parseCoords = (file) => {
    cdi.startCoordinateDataImport(file, (coords) => {
      this.props.onPushCoordinates(coords);
    });
  };

  /**
   * Handles coords submit, navigates to "result" page
   * @memberof ApplyTransformationInputContainer
   */
  submitApplyTrafoCoords = () => {
    if (this.props.points.length === 0) {
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
      const values = {
        points: this.props.points,
        transformation: [
          Number(this.props.transformation.tx) || 0,
          Number(this.props.transformation.ty) || 0,
          Number(this.props.transformation.tz) || 0,
          Number(this.props.transformation.q0) || 0,
          Number(this.props.transformation.q1) || 0,
          Number(this.props.transformation.q2) || 0,
          Number(this.props.transformation.q3) || 0,
        ],
      };
      this.props.onSubmitValues(values);
      this.props.history.push('/transformations/transform/result');
    }
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
        <ApplyTrafoInput
          handleSubmit={this.submitApplyTrafoCoords}
          handleChange={this.parseTrafoParamInput}
          handleDrop={this.parseCoords}
          handleDeleteDataInput={this.clearApplyTrafoInput}
          handleInfoClick={this.displayInfoPanel}
          isInfoOpen={this.state.isInfoOpen}
          transformation={this.props.transformation}
          points={this.props.points}
          infoPanelText={infoPanelText}
        />
      </div>
    );
  }
}

ApplyTransformationInputContainer.propTypes = {
  onPushCoordinates: PropTypes.func.isRequired,
  onClearApplyTrafoInput: PropTypes.func.isRequired,
  onChangeParamInputField: PropTypes.func.isRequired,
  onSubmitValues: PropTypes.func.isRequired,
  transformation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
    .isRequired,
  points: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  history: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplyTransformationInputContainer);
