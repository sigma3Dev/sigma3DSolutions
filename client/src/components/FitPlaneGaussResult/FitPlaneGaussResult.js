import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import FitPlaneGaussResultTable from '../FitPlaneGaussResultTable/FitPlaneGaussResultTable';
import BackToInputBtn from '../BackToInputBtn/BackToInputBtn';
import FittingErrorBarGraph from '../FittingErrorBarGraph/FittingErrorBarGraph';
import './FitPlaneGaussResult.css';

const FitPlaneGaussResult = ({ params, handleReturnClick }) => {
  const paramsNoErrors = params.slice(0, -1);
  const copyText = paramsNoErrors.join('	');
  return (
    <div className='fit-plane-result'>
      <h1>
        <FormattedMessage
          id='FitPlaneGaussResult.label.caption'
          defaultMessage='Fit Plane Result'
        />
      </h1>
      <FitPlaneGaussResultTable params={params} copyText={copyText} />
      <div className='bar-graph'>
        <FittingErrorBarGraph errors={params[7]} />
      </div>
      <BackToInputBtn handleClick={handleReturnClick} />
    </div>
  );
};

FitPlaneGaussResult.propTypes = {
  handleReturnClick: PropTypes.func.isRequired,
  params: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])),
};

export default FitPlaneGaussResult;
