import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ThreeDTrafoResultTable.css';

const GoClippy = require('react-icons/lib/go/clippy');

const ClipboardIcon = React.createElement(GoClippy, null);

const ThreeDTrafoResultTable = ({
  trafoParams,
  translationDecimalPlaces,
  rotationDecimalPlaces,
  copyText,
}) => (
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
);

ThreeDTrafoResultTable.propTypes = {
  trafoParams: PropTypes.arrayOf(PropTypes.number).isRequired,
  translationDecimalPlaces: PropTypes.number.isRequired,
  rotationDecimalPlaces: PropTypes.number.isRequired,
  copyText: PropTypes.string.isRequired,
};

export default ThreeDTrafoResultTable;
