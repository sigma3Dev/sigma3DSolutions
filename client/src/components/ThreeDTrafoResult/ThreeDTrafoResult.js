import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Sidebar from '../Sidebar/Sidebar';
import './ThreeDTrafoResult.css';

const FaSpinner = require('react-icons/lib/fa/spinner');
const spinnerIcon = React.createElement(FaSpinner, null);

const GoClippy = require('react-icons/lib/go/clippy');
const ClipboardIcon = React.createElement(GoClippy, null);

// page to show the results of 3D Transformation
const ThreeDTrafoResult = ({
  response,
  error,
  isCalculating,
  handleClick
}) => {
  if (isCalculating) {
    return (
      <div className="three-d-trafo-result">
        <h1>Calculating...</h1>
        <div className="fa-spinner">{ spinnerIcon }</div>
      </div>
    )
  } else if (response) { 
    const copyText = response.join(" ");
    return (
      <div className="three-d-trafo-result">
        <h1>Transformation Parameters</h1>
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
                { response[4] }
              </th>
              <th>
                { response[5] }
              </th>
              <th>
                { response[6] }
              </th>
              <th>
                { response[0] }
              </th>
              <th>
                { response[1] }
              </th>
              <th>
                { response[2] }
              </th>
              <th>
                { response[3] }
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
        <button className="home-btn" onClick={ handleClick }>Go back to homepage</button>
        <Sidebar />
      </div>
    )
  } else {
    return (
      <div className="three-d-trafo-result">
        <h1>Error!</h1>
        <button className="home-btn" onClick={ handleClick }>Go back to homepage</button>
      </div>
    )
  }
}

export default ThreeDTrafoResult;