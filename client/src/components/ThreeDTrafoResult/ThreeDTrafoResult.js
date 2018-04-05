import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import ThreeDTrafoResultTable from '../ThreeDTrafoResultTable/ThreeDTrafoResultTable';
import CoordinateDifferenceBarGraph from '../CoordinateDifferenceBarGraph/CoordinateDifferenceBarGraph';
import BackToInputBtn from '../BackToInputBtn/BackToInputBtn';
import './ThreeDTrafoResult.css';

/**
 * page to show the results of 3D Transformation
 * @param {boolean} isCalculating - true if response is currently being calculated
 * @param {Object} trafoParams - response that is returned from backend after successful calculation
 * @param {Object} error - error that is returned from backend after unsuccessful calculation
 * @param {function} handleClick - functionality to navigate back to start screen
 * @returns {*} ThreeDTrafoResult - .jsx Element
 */
const ThreeDTrafoResult = ({
  trafoParams,
  trafoDifference,
  handleClick,
  handleDownloadClick,
  translationDecimalPlaces,
  rotationDecimalPlaces,
}) => {
  const copyText = trafoParams.join('	');
  return (
    <div className='three-d-trafo-result'>
      <h1>
        <FormattedMessage
          id='ThreeDTrafoResult.label.caption'
          defaultMessage='Transformation Parameters'
        />
      </h1>
      <ThreeDTrafoResultTable
        trafoParams={trafoParams}
        translationDecimalPlaces={translationDecimalPlaces}
        rotationDecimalPlaces={rotationDecimalPlaces}
        copyText={copyText}
      />
      <button className='download-link' onClick={handleDownloadClick}>
        <FormattedMessage
          id='ThreeDTrafoResult.link.downloadFile'
          defaultMessage='Download transformed start points as .txt file'
        />
      </button>
      <div className='bar-graph'>
        <CoordinateDifferenceBarGraph values={trafoDifference} />
      </div>
      <BackToInputBtn handleClick={handleClick} />
    </div>
  );
};

ThreeDTrafoResult.propTypes = {
  trafoParams: PropTypes.arrayOf(PropTypes.number).isRequired,
  trafoDifference: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)).isRequired,
  handleClick: PropTypes.func.isRequired,
  handleDownloadClick: PropTypes.func.isRequired,
  translationDecimalPlaces: PropTypes.number.isRequired,
  rotationDecimalPlaces: PropTypes.number.isRequired,
};

export default ThreeDTrafoResult;
