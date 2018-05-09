import React from 'react';
import PropTypes from 'prop-types';
import './FitPlaneGaussResultTable.css';

const FitPlaneGaussResultTable = ({ params }) => (
  <table className='fit-plane-gauss-result-table'>
    <thead>
      <tr className='caption'>
        <th>X</th>
        <th>Y</th>
        <th>Z</th>
        <th>I</th>
        <th>J</th>
        <th>K</th>
        <th>StDev</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>{params[0].toFixed(3)}</th>
        <th>{params[1].toFixed(3)}</th>
        <th>{params[2].toFixed(3)}</th>
        <th>{params[3].toFixed(5)}</th>
        <th>{params[4].toFixed(5)}</th>
        <th>{params[5].toFixed(5)}</th>
        <th>{params[6].toFixed(2)}</th>
      </tr>
    </tbody>
  </table>
);

FitPlaneGaussResultTable.propTypes = {
  params: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])).isRequired,
};

export default FitPlaneGaussResultTable;
