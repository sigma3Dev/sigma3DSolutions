import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './FitLineL2ResultTable.css';

const GoClippy = require('react-icons/lib/go/clippy');

const ClipboardIcon = React.createElement(GoClippy, null);

const FitLineL2ResultTable = ({ params, copyText }) => (
  <table className='fit-line-l2-result-table'>
    <thead>
      <tr className='caption'>
        <th>X</th>
        <th>Y</th>
        <th>Z</th>
        <th>I</th>
        <th>J</th>
        <th>K</th>
        <th>StDev</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>{params[0].toFixed(1)}</th>
        <th>{params[1].toFixed(1)}</th>
        <th>{params[2].toFixed(1)}</th>
        <th>{params[3].toFixed(5)}</th>
        <th>{params[4].toFixed(5)}</th>
        <th>{params[5].toFixed(5)}</th>
        <th>{params[6].toFixed(1)}</th>
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

FitLineL2ResultTable.propTypes = {
  params: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])).isRequired,
  copyText: PropTypes.string.isRequired,
};

export default FitLineL2ResultTable;
