import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import FitPlaneResultTable from '../FitPlaneResultTable/FitPlaneResultTable';
import BackToInputBtn from '../BackToInputBtn/BackToInputBtn';
import FitPlaneErrorBarGraph from '../FitPlaneErrorBarGraph/FitPlaneErrorBarGraph';
import './FitPlaneResult.css';

const FitPlaneResult = ({ params, handleReturnClick }) => {
  const copyText = params.join('	');
  return (
    <div className='fit-plane-result'>
      <h1>
        <FormattedMessage id='FitPlaneResult.label.caption' defaultMessage='Fit Plane Result' />
      </h1>
      <FitPlaneResultTable params={params} copyText={copyText} />
      <div className='bar-graph'>
        <FitPlaneErrorBarGraph errors={params[7]} />
      </div>
      <BackToInputBtn handleClick={handleReturnClick} />
    </div>
  );
};

FitPlaneResult.propTypes = {
  handleReturnClick: PropTypes.func.isRequired,
  params: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])),
};

export default FitPlaneResult;
