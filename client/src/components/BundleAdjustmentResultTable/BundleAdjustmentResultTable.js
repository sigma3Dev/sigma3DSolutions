import React from 'react';
import PropTypes from 'prop-types';
import './BundleAdjustmentResultTable.css';

const BundleAdjustmentResultTable = ({ result }) => {
  const tableRows = result.map((point, i) => (
    <tr key={`${point.x}:${i}`}>
      <th className='pointId'>{i + 1}</th>
      <th>{point.id.toFixed(0)}</th>
      <th>{point.x.toFixed(3)}</th>
      <th>{point.y.toFixed(3)}</th>
      <th>{point.z.toFixed(3)}</th>
      <th>{point.stdev.toFixed(1)}</th>
    </tr>
  ));

  return (
    <div className='bundle-adjustment-result-table'>
      <table>
        <thead>
          <tr className='caption'>
            <th className='pointId'>ID</th>
            <th>Name</th>
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

BundleAdjustmentResultTable.propTypes = {
  result: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)).isRequired,
};

export default BundleAdjustmentResultTable;
