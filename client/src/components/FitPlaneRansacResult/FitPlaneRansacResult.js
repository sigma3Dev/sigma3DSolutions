import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import FitPlaneRansacResultTable from '../FitPlaneRansacResultTable/FitPlaneRansacResultTable';
import BackToInputBtn from '../BackToInputBtn/BackToInputBtn';
import './FitPlaneRansacResult.css';

const FitPlaneRansacResult = ({ params, handleReturnClick }) => {
  const copyText = params.join('	');
  return (
    <div className='fit-plane-ransac-result'>
      <h1>
        <FormattedMessage
          id='FitPlaneRansacResult.label.caption'
          defaultMessage='Fit Plane Ransac Result'
        />
      </h1>
      <FitPlaneRansacResultTable params={params} copyText={copyText} />
      <BackToInputBtn handleClick={handleReturnClick} />
    </div>
  );
};

FitPlaneRansacResult.propTypes = {
  handleReturnClick: PropTypes.func.isRequired,
  params: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])),
};

export default FitPlaneRansacResult;
