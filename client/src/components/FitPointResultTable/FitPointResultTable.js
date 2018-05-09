import React from 'react';
import PropTypes from 'prop-types';
import './FitPointResultTable.css';

const FitPointResultTable = ({ params }) => (
  <table className='fit-point-result-table'>
    <thead>
      <tr className='caption'>
        <th>X</th>
        <th>Y</th>
        <th>Z</th>
        <th>Radius</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>{params[0].toFixed(1)}</th>
        <th>{params[1].toFixed(1)}</th>
        <th>{params[2].toFixed(1)}</th>
        <th>{params[3].toFixed(1)}</th>
      </tr>
    </tbody>
  </table>
);

FitPointResultTable.propTypes = {
  params: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])).isRequired,
};

export default FitPointResultTable;
