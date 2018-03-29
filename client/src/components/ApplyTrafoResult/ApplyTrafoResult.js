import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Sidebar from '../Sidebar/Sidebar';
import BackToInputBtn from '../BackToInputBtn/BackToInputBtn';
import './ApplyTrafoResult.css';

const ApplyTrafoResult = ({
  result,
  handleReturnClick,
}) => {
  const tableRows = result.map((point, i) => (
    <tr>
      <th className='pointId'>{ i + 1 }</th>
      <th>{ point.x.toFixed(5) }</th>
      <th>{ point.y.toFixed(5) }</th>
      <th>{ point.z.toFixed(5) }</th>
    </tr>
  ));
  console.log(tableRows);

  return (
    <div className='apply-trafo-result'>
      <h1>
        <FormattedMessage
          id='ApplyTrafoResult.label.caption'
          defaultMessage='Transformation Results'
        />
      </h1>
      <table className='result-table'>
        <thead>
          <tr className='caption'>
            <th className='pointId'>ID</th>
            <th>x</th>
            <th>y</th>
            <th>z</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
      <Sidebar />
      <BackToInputBtn handleClick={handleReturnClick} className='back-to-input-btn' />
    </div>
  );
};

ApplyTrafoResult.propTypes = {
  result: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)).isRequired,
  handleReturnClick: PropTypes.func.isRequired,
};

export default ApplyTrafoResult;
