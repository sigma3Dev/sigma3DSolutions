import React from 'react';
import { FormattedMessage } from 'react-intl';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Sidebar from '../Sidebar/Sidebar';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import BackToInputBtn from '../BackToInputBtn/BackToInputBtn';
import './ChebyshevCFResult.css';

const FaSpinner = require('react-icons/lib/fa/spinner');
const spinnerIcon = React.createElement(FaSpinner, null);

const GoClippy = require('react-icons/lib/go/clippy');
const ClipboardIcon = React.createElement(GoClippy, null);

/**
 * page to show the results of Chebyshev Circle Fit Adjustment
 * @param {boolean} isCalculating - true if response is currently being calculated
 * @param {Object} chebyshevParams - response that is returned from backend after successful calculation
 * @param {Object} error - error that is returned from backend after unsuccessful calculation
 * @param {function} handleClick - functionality to navigate back to start screen
 * @returns {*} ChebyshevCFResult - .jsx Element
 */
const ChebyshevCFResult = ({
  chebyshevParams,
  error,
  isCalculating,
  handleClick,
}) => {
  if (isCalculating) {
    return (
      <div className="chebyshev-circle-fit-result">
        <h1>
          <FormattedMessage
            id="ChebyshevCFResult.label.calculating"
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
    const copyText = chebyshevParams.join(" ");
    return (
      <div className="chebyshev-circle-fit-result">
        <h1>
          <FormattedMessage
            id="ChebyshevCFResult.label.caption"
            defaultMessage="Chebyshev Circle Fit Parameters"
          />
        </h1>
        <table className="result-table">
          <thead>
            <tr className="caption">
              <th>x</th>
              <th>y</th>
              <th>z</th>
              <th>i</th>
              <th>j</th>
              <th>k</th>
              <th>Radius</th>
              <th><FormattedMessage
                id="ChebyshevCFResult.table.chebyshevDist"
                defaultMessage="Chebyshev Distance"
                />
              </th>
              <th><FormattedMessage
                id="ChebyshevCFResult.table.Stdev"
                defaultMessage="Standard deviation"
                />
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                { chebyshevParams[0] }
              </th>
              <th>
                { chebyshevParams[1] }
              </th>
              <th>
                { chebyshevParams[2] }
              </th>
              <th>
                { chebyshevParams[3] }
              </th>
              <th>
                { chebyshevParams[4] }
              </th>
              <th>
                { chebyshevParams[5] }
              </th>
              <th>
                { chebyshevParams[6] }
              </th>
              <th>
                { chebyshevParams[7] }
              </th>
              <th>
                { chebyshevParams[8] }
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
        <BackToInputBtn handleClick={ handleClick } />
        <Sidebar />
      </div>
    )
  }
}

export default ChebyshevCFResult;