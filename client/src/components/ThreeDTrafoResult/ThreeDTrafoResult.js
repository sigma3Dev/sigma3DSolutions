import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Sidebar from '../Sidebar/Sidebar';
import CoordinateDifferenceBarGraph from '../CoordinateDifferenceBarGraph/CoordinateDifferenceBarGraph';
import BackToInputBtn from '../BackToInputBtn/BackToInputBtn';
import './ThreeDTrafoResult.css';

const GoClippy = require('react-icons/lib/go/clippy');

const ClipboardIcon = React.createElement(GoClippy, null);

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
  const copyText = trafoParams.join(' ');
  return (
    <div className='three-d-trafo-result'>
      <h1>
        <FormattedMessage
          id='ThreeDTrafoResult.label.caption'
          defaultMessage='Transformation Parameters'
        />
      </h1>
      <table className='result-table'>
        <thead>
          <tr className='caption'>
            <th>Tx</th>
            <th>Ty</th>
            <th>Tz</th>
            <th>Q0</th>
            <th>Q1</th>
            <th>Q2</th>
            <th>Q3</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{trafoParams[0].toFixed(translationDecimalPlaces)}</th>
            <th>{trafoParams[1].toFixed(translationDecimalPlaces)}</th>
            <th>{trafoParams[2].toFixed(translationDecimalPlaces)}</th>
            <th>{trafoParams[3].toFixed(rotationDecimalPlaces)}</th>
            <th>{trafoParams[4].toFixed(rotationDecimalPlaces)}</th>
            <th>{trafoParams[5].toFixed(rotationDecimalPlaces)}</th>
            <th>{trafoParams[6].toFixed(rotationDecimalPlaces)}</th>
            <th>
              <CopyToClipboard text={copyText}>
                <button className='copy' title='Copy to clipboard'>
                  {ClipboardIcon}
                </button>
              </CopyToClipboard>
            </th>
          </tr>
        </tbody>
      </table>
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
      <Sidebar />
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
