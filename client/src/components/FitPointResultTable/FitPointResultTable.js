import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './FitPointResultTable.css';

const GoClippy = require('react-icons/lib/go/clippy');

const ClipboardIcon = React.createElement(GoClippy, null);

const FitPointResultTable = ({ params, copyText }) => (
  <table className='fit-point-result-table'>
    <thead>
      <tr className='caption'>
        <th>X</th>
        <th>Y</th>
        <th>Z</th>
        <th>Radius</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>{params[0].toFixed(1)}</th>
        <th>{params[1].toFixed(1)}</th>
        <th>{params[2].toFixed(1)}</th>
        <th>{params[3].toFixed(1)}</th>
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

FitPointResultTable.propTypes = {
  params: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])).isRequired,
  copyText: PropTypes.string.isRequired,
};

export default FitPointResultTable;
