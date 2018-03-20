import React from 'react';
import { FormattedMessage } from 'react-intl';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Sidebar from '../Sidebar/Sidebar';
import BarGraph from '../BarGraph/BarGraph';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import BackToInputBtn from '../BackToInputBtn/BackToInputBtn';
import './ThreeDTrafoResult.css';

const FaSpinner = require('react-icons/lib/fa/spinner');
const spinnerIcon = React.createElement(FaSpinner, null);

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
  error,
  isCalculating,
  handleClick,
}) => {
  if (isCalculating) {
    return (
      <div className="three-d-trafo-result">
        <h1>
          <FormattedMessage
            id="ThreeDTrafoResult.label.calculating"
            defaultMessage="Calculating..."
          />
        </h1>
        <div className="fa-spinner">{ spinnerIcon }</div>
      </div>
    )
  } else if (error) {
    return (
      <ErrorScreen error={error} handleClick={handleClick} />
    )
  } else  {
    const copyText = trafoParams.join(" ");
    return (
      <div className="three-d-trafo-result">
        <h1>
          <FormattedMessage
            id="ThreeDTrafoResult.label.caption"
            defaultMessage="Transformation Parameters"
          />
        </h1>
        <table className="result-table">
          <thead>
            <tr className="caption">
              <th>Tx</th>
              <th>Ty</th>
              <th>Tz</th>
              <th>Q0</th>
              <th>Q1</th>
              <th>Q2</th>
              <th>Q3</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                { trafoParams[0] }
              </th>
              <th>
                { trafoParams[1] }
              </th>
              <th>
                { trafoParams[2] }
              </th>
              <th>
                { trafoParams[3] }
              </th>
              <th>
                { trafoParams[4] }
              </th>
              <th>
                { trafoParams[5] }
              </th>
              <th>
                { trafoParams[6] }
              </th>
              <th>
                <CopyToClipboard text={ copyText }>
                  <button className="copy" title="Copy to clipboard">
                    { ClipboardIcon }
                  </button>
                </CopyToClipboard>
              </th>
            </tr>
          </tbody>
        </table>
        <BarGraph values={trafoDifference} className="bar-graph" />
        <BackToInputBtn handleClick={ handleClick } />
        <Sidebar />
      </div>
    )
  }
}

export default ThreeDTrafoResult;