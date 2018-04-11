import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import FitLineL2ResultTable from '../FitLineL2ResultTable/FitLineL2ResultTable';
import BackToInputBtn from '../BackToInputBtn/BackToInputBtn';
import './FitLineL2Result.css';

const FitLineL2Result = ({ params, handleReturnClick }) => {
  const paramsNoErrors = params.slice(0, -1);
  const copyText = paramsNoErrors.join('	');
  return (
    <div className='fit-line-l2-result'>
      <h1>
        <FormattedMessage id='FitLineL2Result.label.caption' defaultMessage='Fit LineL2 Result' />
      </h1>
      <FitLineL2ResultTable params={params} copyText={copyText} />
      <BackToInputBtn handleClick={handleReturnClick} />
    </div>
  );
};

FitLineL2Result.propTypes = {
  handleReturnClick: PropTypes.func.isRequired,
  params: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])),
};

export default FitLineL2Result;
