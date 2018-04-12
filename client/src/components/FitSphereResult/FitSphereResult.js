import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import FitSphereResultTable from '../FitSphereResultTable/FitSphereResultTable';
import BackToInputBtn from '../BackToInputBtn/BackToInputBtn';
import FittingErrorBarGraph from '../FittingErrorBarGraph/FittingErrorBarGraph';
import './FitSphereResult.css';

const FitSphereResult = ({ params, handleReturnClick }) => {
  const paramsNoErrors = params.slice(0, -1);
  const copyText = paramsNoErrors.join('	');
  return (
    <div className='fit-sphere-result'>
      <h1>
        <FormattedMessage id='FitSphereResult.label.caption' defaultMessage='Fit Sphere Result' />
      </h1>
      <FitSphereResultTable params={params} copyText={copyText} />
      <div className='bar-graph'>
        <FittingErrorBarGraph errors={params[5]} />
      </div>
      <BackToInputBtn handleClick={handleReturnClick} />
    </div>
  );
};

FitSphereResult.propTypes = {
  handleReturnClick: PropTypes.func.isRequired,
  params: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])),
};

export default FitSphereResult;
