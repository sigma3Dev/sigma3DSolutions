import React from 'react';
import PropTypes from 'prop-types';
import './FitLineRansacResultTable.css';

const FitLineRansacResultTable = ({ params }) => (
  <table className='fit-line-ransac-result-table'>
    <tbody>
      <tr>
        <th>X</th>
        <td>{params[0].toFixed(1)}</td>
      </tr>
      <tr>
        <th>Y</th>
        <td>{params[1].toFixed(1)}</td>
      </tr>
      <tr>
        <th>Z</th>
        <td>{params[2].toFixed(1)}</td>
      </tr>
      <tr>
        <th>I</th>
        <td>{params[3].toFixed(1)}</td>
      </tr>
      <tr>
        <th>J</th>
        <td>{params[4].toFixed(1)}</td>
      </tr>
      <tr>
        <th>K</th>
        <td>{params[5].toFixed(1)}</td>
      </tr>
      <tr>
        <th>StDev</th>
        <td>{params[6].toFixed(1)}</td>
      </tr>
      <tr>
        <th>numPoints</th>
        <td>{params[7].toFixed(1)}</td>
      </tr>
    </tbody>
  </table>
);

FitLineRansacResultTable.propTypes = {
  params: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])).isRequired,
};

export default FitLineRansacResultTable;
