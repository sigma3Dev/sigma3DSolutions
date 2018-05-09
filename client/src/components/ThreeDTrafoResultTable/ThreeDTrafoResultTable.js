import React from 'react';
import PropTypes from 'prop-types';
import './ThreeDTrafoResultTable.css';

const ThreeDTrafoResultTable = ({
  trafoParams,
  translationDecimalPlaces,
  rotationDecimalPlaces,
}) => (
  <table className='three-d-trafo-result-table'>
    <thead>
      <tr className='caption'>
        <th>Tx</th>
        <th>Ty</th>
        <th>Tz</th>
        <th>Q0</th>
        <th>Q1</th>
        <th>Q2</th>
        <th>Q3</th>
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
      </tr>
    </tbody>
  </table>
);

ThreeDTrafoResultTable.propTypes = {
  trafoParams: PropTypes.arrayOf(PropTypes.number).isRequired,
  translationDecimalPlaces: PropTypes.number.isRequired,
  rotationDecimalPlaces: PropTypes.number.isRequired,
};

export default ThreeDTrafoResultTable;
