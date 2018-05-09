import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import ThreeDTrafoResultTable from '../ThreeDTrafoResultTable/ThreeDTrafoResultTable';
import Footer from '../Footer/Footer';
import CoordinateDifferenceBarGraph from '../CoordinateDifferenceBarGraph/CoordinateDifferenceBarGraph';
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
  handleReturnClick,
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
      />
      <div className='bar-graph'>
        <CoordinateDifferenceBarGraph values={trafoDifference} />
      </div>
      <Footer
        handleReturnClick={handleReturnClick}
        isReturnBtnDisplayed
        isInfoBtnDisplayed={false}
        isSubmitBtnDisplayed={false}
        isCopyBtnDisplayed
        isDownloadBtnDisplayed
        copyText={copyText}
        handleDownloadClick={handleDownloadClick}
      />
    </div>
  );
};

ThreeDTrafoResult.propTypes = {
  trafoParams: PropTypes.arrayOf(PropTypes.number).isRequired,
  trafoDifference: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)).isRequired,
  handleReturnClick: PropTypes.func.isRequired,
  handleDownloadClick: PropTypes.func.isRequired,
  translationDecimalPlaces: PropTypes.number.isRequired,
  rotationDecimalPlaces: PropTypes.number.isRequired,
};

export default ThreeDTrafoResult;
