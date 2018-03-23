import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { connect }          from 'react-redux';
import {
  injectIntl,
  defineMessages,
}                           from 'react-intl';
import { getError }         from '../selectors/ErrorSelectors/getErrorSelector';
import { 
  getTrafoParams,
  getTrafoDifference,
  getIsCalculating, 
  getTransformedStartPoints,
}                           from '../selectors/TrafoSelectors/getTrafoResultDataSelector/getTrafoResultDataSelector';
import { 
  getStartSystemPoints,
  getTargetSystemPoints,
  getListOfUsedCoords
}                           from '../selectors/TrafoSelectors/getTrafoInputDataSelector/getTrafoInputDataSelector';
import {
  calculateTrafoDifference
}                           from '../actions/submitCoords/submitCoordsActions';
import { removeError }      from '../actions/errorHandling/errorHandlingActions';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import ErrorScreen from '../components/ErrorScreen/ErrorScreen';
import ThreeDTrafoResult    from '../components/ThreeDTrafoResult/ThreeDTrafoResult';
import fileSaver from 'file-saver';

const messages = defineMessages({
  filename: {
    id: "ThreeDTrafoResultContainer.prompt.filename",
    defaultMessage: "Please enter a file name: ",
  },
});

const mapDispatchToProps = dispatch => ({
  onRemoveError: () => dispatch(removeError()),
  oncalculateTrafoDifference: (startPoints, targetPoints, trafoParams) => dispatch(calculateTrafoDifference(startPoints, targetPoints, trafoParams)),
});

const mapStateToProps = (state, props) => ({
  transformedStartPoints: getTransformedStartPoints(state),
  startSystemPoints: getStartSystemPoints(state),
  targetSystemPoints: getTargetSystemPoints(state),
  listOfUsedCoords: getListOfUsedCoords(state),
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
   * runs calculateTrafoDifference when the page is first loaded and when trafoParams are updated
   * @param {Object} prevProps - previous Props
   * @param {Object} prevState - previous State
   * @memberof ThreeDTrafoResultContainer
   */
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.trafoDifference.length === 0 || prevProps.trafoParams !== this.props.trafoParams) {
      const startPoints = this.props.startSystemPoints;
      const targetPoints = this.props.targetSystemPoints;
      let trafoParams = this.props.trafoParams;
      if (!this.props.isCalculating) {
        this.props.oncalculateTrafoDifference(startPoints, targetPoints, trafoParams);
      }
    }
  }

  /**
   * Navigates back to input page of the current transformation
   * @memberof ThreeDTrafoResultContainer
   */
  goBack = () => {
    this.props.onRemoveError();
    this.props.history.push('/transformations/three-d-transformation/data-input');
  }

  downloadFile = () => {
    const askFilename = this.props.intl.formatMessage(messages.filename);
    const fileName = prompt(askFilename);
    const coords = this.props.transformedStartPoints;

    const coordsAsText = coords.reduce((acc, val, i) => {
      if (i < coords.length - 1) {
        return acc + val[0].toFixed(2) + " " + val[1].toFixed(2) + " " + val[2].toFixed(2) + "\r\n";
      } else {
        return acc + val[0].toFixed(2) + " " + val[1].toFixed(2) + " " + val[2].toFixed(2);
      }
    }, "")

    // turns string into blob and then into .txt
    const blobVar = new Blob([coordsAsText], {type: "text/plain;charset=utf-8"});
    fileSaver(blobVar, fileName + ".txt");
  }

  render() {
    if (this.props.isCalculating) {
      return (
        <LoadingScreen />
      )
    } else if (this.props.error) {
      return (
        <ErrorScreen error={this.props.error} handleClick={this.goBack} />
      )
    } else  {
      return(
        <div>
          <ThreeDTrafoResult
            trafoParams={ this.props.trafoParams }
            trafoDifference={ this.props.trafoDifference }
            handleClick={this.goBack}
            translationDecimalPlaces={2}
            rotationDecimalPlaces={4}
            handleDownloadClick={this.downloadFile}
          />
        </div>
      );
    }  
  }
}

ThreeDTrafoResultContainer.propTypes = {
  onRemoveError: PropTypes.func.isRequired,
  oncalculateTrafoDifference: PropTypes.func.isRequired,
  transformedStartPoints: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  startSystemPoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)).isRequired,
  targetSystemPoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool
  ]))).isRequired,
  listOfUsedCoords: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)).isRequired,
  trafoParams: PropTypes.arrayOf(PropTypes.number).isRequired,
  trafoDifference: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)).isRequired,
  error: PropTypes.string,
  isCalculating: PropTypes.bool.isRequired,
}

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(ThreeDTrafoResultContainer));