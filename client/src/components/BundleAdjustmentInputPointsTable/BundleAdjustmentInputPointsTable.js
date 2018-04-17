import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import './BundleAdjustmentInputPointsTable.css';

const FaTrash = require('react-icons/lib/fa/trash-o');

const trashIcon = React.createElement(FaTrash, null);

/**
 * Table to display the input values from BundleAdjustmentInput,
 * @param {Array} bundlePoints - array of points
 * @param {function} handleDeleteDataInput - handles deletion of points input
 * @returns {*} BundleAdjustmentInputPointsTable - .jsx Element
 */
const BundleAdjustmentInputPointsTable = ({ bundlePoints, handleDeleteDataInput }) => {
  const tableRows = bundlePoints.map((line, i) => (
    <tr key={`${line.x}:${i}`}>
      <th className='grey'>{i + 1}</th>
      <th>{line.stationId.toFixed(0)}</th>
      <th>{line.geometryId.toFixed(0)}</th>
      <th>{line.x.toFixed(2)}</th>
      <th>{line.y.toFixed(2)}</th>
      <th>{line.z.toFixed(2)}</th>
      <th>{line.stdev.toFixed(1)}</th>
    </tr>
  ));

  return (
    <div className='bundle-adjustment-input-points-table'>
      <table>
        <thead>
          <tr className='grey'>
            <th>
              <button
                className='trash-icon grey'
                title='Clear input'
                onClick={handleDeleteDataInput}
              >
                {trashIcon}
              </button>
            </th>
            <th>Station ID</th>
            <th>
              <FormattedMessage
                id='BundleAdjustmentInputPointsTable.label.geometryId'
                defaultMessage='Geometry ID'
              />
            </th>
            <th>x</th>
            <th>y</th>
            <th>z</th>
            <th>StDev</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};

BundleAdjustmentInputPointsTable.propTypes = {
  bundlePoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  handleDeleteDataInput: PropTypes.func.isRequired,
};

export default BundleAdjustmentInputPointsTable;
