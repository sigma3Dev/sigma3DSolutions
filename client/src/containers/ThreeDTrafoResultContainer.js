import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl, defineMessages } from 'react-intl';
import fileSaver from 'file-saver';
import { getError } from '../selectors/ErrorSelectors/getErrorSelector';
import {
  getTrafoParams,
  getTrafoDifference,
  getIsCalculating,
  getTransformedStartPoints,
} from '../selectors/ThreeDTrafoSelectors/getTrafoResultDataSelector/getTrafoResultDataSelector';
import {
  getStartSystemPoints,
  getTargetSystemPoints,
} from '../selectors/ThreeDTrafoSelectors/getTrafoInputDataSelector/getTrafoInputDataSelector';
import { calculateThreeDTrafoDifference } from '../actions/submitThreeDTrafoCoords/submitThreeDTrafoCoordsActions';
import { removeError } from '../actions/errorHandling/errorHandlingActions';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import ErrorScreen from '../components/ErrorScreen/ErrorScreen';
import Sidebar from '../components/Sidebar/Sidebar';
import ThreeDTrafoResult from '../components/ThreeDTrafoResult/ThreeDTrafoResult';

const messages = defineMessages({
  filename: {
    id: 'ThreeDTrafoResultContainer.prompt.filename',
    defaultMessage: 'Please enter a file name: ',
  },
});

const mapDispatchToProps = dispatch => ({
  onRemoveError: () => dispatch(removeError()),
  onCalculateTrafoDifference: (startPoints, targetPoints, trafoParams) => {
    dispatch(calculateThreeDTrafoDifference(startPoints, targetPoints, trafoParams));
  },
});

const mapStateToProps = state => ({
  transformedStartPoints: getTransformedStartPoints(state),
  startSystemPoints: getStartSystemPoints(state),
  targetSystemPoints: getTargetSystemPoints(state),
  trafoParams: getTrafoParams(state),
  trafoDifference: getTrafoDifference(state),
  error: getError(state),
  isCalculating: getIsCalculating(state),
});

/**
 * Displays the calculation results
 * @class ThreeDTrafoResultContainer
 * @extends {Component}
 */
class ThreeDTrafoResultContainer extends Component {
  /**
   * Creates an instance of ThreeDTrafoResultContainer.
   * @param {Object} props
   * @memberof ThreeDTrafoResultContainer
   */
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.downloadFile = this.downloadFile.bind(this);
  }

  /**
   * runs calculateThreeDTrafoDifference when the page is first loaded
   * and when trafoParams are updated
   * @param {Object} prevProps - previous Props
   * @memberof ThreeDTrafoResultContainer
   */
  componentDidUpdate = (prevProps) => {
    if (
      prevProps.trafoDifference.length === 0 ||
      prevProps.trafoParams !== this.props.trafoParams
    ) {
      const startPoints = this.props.startSystemPoints;
      const targetPoints = this.props.targetSystemPoints;
      const { trafoParams } = this.props;
      if (!this.props.isCalculating) {
        this.props.onCalculateTrafoDifference(startPoints, targetPoints, trafoParams);
      }
    }
  };

  /**
   * Navigates back to input page of the current transformation
   * @memberof ThreeDTrafoResultContainer
   */
  goBack = () => {
    this.props.onRemoveError();
    this.props.history.push('/transformations/three-d-transformation/data-input');
  };

  downloadFile = () => {
    const askFilename = this.props.intl.formatMessage(messages.filename);
    const fileName = prompt(askFilename);
    const coords = this.props.transformedStartPoints;
    const coordsAsText = coords.reduce((acc, val, i) => {
      if (i < coords.length - 1) {
        return `${acc}${val[0]} ${val[1]} ${val[2]}\r\n`;
      }
      return `${acc}${val[0]} ${val[1]} ${val[2]}`;
    }, '');

    // turns string into blob and then into .txt
    const blobVar = new Blob([coordsAsText], { type: 'text/plain;charset=utf-8' });
    fileSaver(blobVar, fileName, '.txt');
  };

  render() {
    if (this.props.isCalculating) {
      return <LoadingScreen />;
    } else if (this.props.error) {
      return <ErrorScreen error={this.props.error} handleClick={this.goBack} />;
    }
    return (
      <div>
        <Sidebar />
        <ThreeDTrafoResult
          trafoParams={this.props.trafoParams}
          trafoDifference={this.props.trafoDifference}
          handleClick={this.goBack}
          translationDecimalPlaces={2}
          rotationDecimalPlaces={4}
          handleDownloadClick={this.downloadFile}
        />
      </div>
    );
  }
}

ThreeDTrafoResultContainer.propTypes = {
  onRemoveError: PropTypes.func.isRequired,
  onCalculateTrafoDifference: PropTypes.func.isRequired,
  transformedStartPoints: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  startSystemPoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)).isRequired,
  targetSystemPoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  trafoParams: PropTypes.arrayOf(PropTypes.number).isRequired,
  trafoDifference: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)).isRequired,
  error: PropTypes.string,
  isCalculating: PropTypes.bool.isRequired,
  history: PropTypes.any,
  intl: PropTypes.any,
};

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(ThreeDTrafoResultContainer));
