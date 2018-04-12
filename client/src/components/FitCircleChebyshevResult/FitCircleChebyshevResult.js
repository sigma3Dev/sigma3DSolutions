import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import BackToInputBtn from '../BackToInputBtn/BackToInputBtn';
import FitCircleChebyshevDrawing from '../FitCircleChebyshevDrawing/FitCircleChebyshevDrawing';
import './FitCircleChebyshevResult.css';

const GoClippy = require('react-icons/lib/go/clippy');

const ClipboardIcon = React.createElement(GoClippy, null);

/**
 * page to show the results of Chebyshev Circle Fit Adjustment
 * @param {boolean} isCalculating - true if response is currently being calculated
 * @param {Object} chebyshevParams - response that is returned from backend after successful
 * calculation
 * @param {Object} error - error that is returned from backend after unsuccessful calculation
 * @param {function} handleClick - functionality to navigate back to start screen
 * @returns {*} FitCircleChebyshevResult - .jsx Element
 */
const FitCircleChebyshevResult = ({ chebyshevParams, handleClick }) => {
  const copyText = chebyshevParams.join(' ');
  return (
    <div className='chebyshev-circle-fit-result'>
      <h1>
        <FormattedMessage
          id='FitCircleChebyshevResult.label.caption'
          defaultMessage='Chebyshev Circle Fit Parameters'
        />
      </h1>
      <div className='cheby-cf-result-presentation'>
        <FitCircleChebyshevDrawing
          radius={chebyshevParams[6].toFixed(2)}
          chebyDist={chebyshevParams[7].toFixed(2)}
        />
        <div>
          <table className='result-table'>
            <thead>
              <tr className='caption'>
                <th>
                  <FormattedMessage
                    id='FitCircleChebyshevResult.table.parameter'
                    defaultMessage='Parameter'
                  />
                </th>
                <th>
                  <FormattedMessage id='FitCircleChebyshevResult.table.value' defaultMessage='Value' />
                </th>
                <th className='copy-to-clippi'>
                  <CopyToClipboard text={copyText}>
                    <button className='copy' title='Copy to clipboard'>
                      {ClipboardIcon}
                    </button>
                  </CopyToClipboard>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Mx: </th>
                <th>{chebyshevParams[0].toFixed(2)}</th>
              </tr>
              <tr>
                <th>My: </th>
                <th>{chebyshevParams[1].toFixed(2)}</th>
              </tr>
              <tr>
                <th>Mz: </th>
                <th>{chebyshevParams[2].toFixed(2)}</th>
              </tr>
              <tr>
                <th>i: </th>
                <th>{chebyshevParams[3].toFixed(6)}</th>
              </tr>
              <tr>
                <th>j: </th>
                <th>{chebyshevParams[4].toFixed(6)}</th>
              </tr>
              <tr>
                <th>k: </th>
                <th>{chebyshevParams[5].toFixed(6)}</th>
              </tr>
              <tr>
                <th className='cheby-cf-radius-text'>
                  <FormattedMessage id='FitCircleChebyshevResult.table.radius' defaultMessage='Radius:' />
                </th>
                <th>{chebyshevParams[6].toFixed(2)}</th>
              </tr>
              <tr>
                <th className='cheby-cf-chebyDist-text'>
                  <FormattedMessage
                    id='FitCircleChebyshevResult.table.chebyshevDist'
                    defaultMessage='Chebyshev Distance:'
                  />
                </th>
                <th>{chebyshevParams[7].toFixed(2)}</th>
              </tr>
              <tr>
                <th>
                  <FormattedMessage
                    id='FitCircleChebyshevResult.table.Stdev'
                    defaultMessage='Error value:'
                  />
                </th>
                <th>{chebyshevParams[8].toFixed(2)}</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='cheby-cf-back-button'>
          <BackToInputBtn handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

FitCircleChebyshevResult.propTypes = {
  handleClick: PropTypes.func.isRequired,
  chebyshevParams: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default FitCircleChebyshevResult;
