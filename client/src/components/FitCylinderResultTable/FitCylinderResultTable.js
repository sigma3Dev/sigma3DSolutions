import React from 'react';
import PropTypes from 'prop-types';
import './FitCylinderResultTable.css';

const FitCylinderResultTable = ({ params }) => (
  <table className='fit-cylinder-result-table'>
    <thead>
      <tr className='caption'>
        <th>X</th>
        <th>Y</th>
        <th>Z</th>
        <th>I</th>
        <th>J</th>
        <th>K</th>
        <th>Radius</th>
        <th>StDev</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>{params[0].toFixed(2)}</th>
        <th>{params[1].toFixed(2)}</th>
        <th>{params[2].toFixed(2)}</th>
        <th>{params[3].toFixed(5)}</th>
        <th>{params[4].toFixed(5)}</th>
        <th>{params[5].toFixed(5)}</th>
        <th>{params[6].toFixed(1)}</th>
        <th>{params[7].toFixed(1)}</th>
      </tr>
    </tbody>
  </table>
);

FitCylinderResultTable.propTypes = {
  params: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])).isRequired,
};

export default FitCylinderResultTable;
