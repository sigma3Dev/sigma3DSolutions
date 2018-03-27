import React from 'react';
import { FormattedMessage } from 'react-intl';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Sidebar from '../Sidebar/Sidebar';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import BackToInputBtn from '../BackToInputBtn/BackToInputBtn';
import ChebyshevCFDrawing from '../ChebyshevCFDrawing/ChebyshevCFDrawing';
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
        <div className="cheby-cf-result-presentation">
          <ChebyshevCFDrawing
            radius={ chebyshevParams[6] }
            chebyDist={ chebyshevParams[7] } 
          />
          <div>
            <table className="result-table">
              <thead>
                <tr className="caption">  
                  <th>
                    <FormattedMessage
                      id="ChebyshevCFResult.table.parameter"
                      defaultMessage="Parameter"
                    />
                  </th>
                  <th>
                    <FormattedMessage
                      id="ChebyshevCFResult.table.value"
                      defaultMessage="Value"
                    />
                  </th>
                  <th className="copy-to-clippi">
                    <CopyToClipboard text={ copyText }>
                      <button className="copy" title="Copy to clipboard">
                        { ClipboardIcon }
                      </button>
                    </CopyToClipboard>
                  </th>  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Mx: </th>
                  <th>
                    { chebyshevParams[0] }
                  </th>
                </tr>
                <tr>
                  <th>My: </th>
                  <th>
                    { chebyshevParams[1] }
                  </th>
                </tr>
                <tr>
                  <th>Mz: </th>
                  <th>
                    { chebyshevParams[2] }
                  </th>
                </tr>
                <tr>
                  <th>i: </th>
                  <th>
                    { chebyshevParams[3] }
                  </th>
                </tr>
                <tr>
                  <th>j: </th>
                  <th>
                    { chebyshevParams[4] }
                  </th>
                </tr>
                <tr>
                  <th>k: </th>
                  <th>
                    { chebyshevParams[5] }
                  </th>
                </tr>
                <tr>
                  <th className="cheby-cf-radius-text">
                    <FormattedMessage
                      id="ChebyshevCFResult.table.radius"
                      defaultMessage="Radius:"
                    />
                  </th>
                  <th>
                    { chebyshevParams[6] }
                  </th>
                </tr>
                <tr>
                  <th className="cheby-cf-chebyDist-text">
                    <FormattedMessage
                      id="ChebyshevCFResult.table.chebyshevDist"
                      defaultMessage="Chebyshev Distance:"
                    />
                  </th>
                  <th>
                    { chebyshevParams[7] }
                  </th>
                </tr>
                <tr>
                  <th>
                    <FormattedMessage
                      id="ChebyshevCFResult.table.Stdev"
                      defaultMessage="Error value:"
                    />
                  </th>
                  <th>
                    { chebyshevParams[8] }
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="cheby-cf-back-button">
            <BackToInputBtn handleClick={ handleClick } />
          </div>
        </div >
        <Sidebar />
      </div>
    )
  }
}

export default ChebyshevCFResult;