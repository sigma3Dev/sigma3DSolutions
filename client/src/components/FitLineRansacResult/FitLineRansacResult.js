import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import FitLineRansacResultTable from '../FitLineRansacResultTable/FitLineRansacResultTable';
import BackToInputBtn from '../BackToInputBtn/BackToInputBtn';
import './FitLineRansacResult.css';

const FitLineRansacResult = ({ params, handleReturnClick }) => {
  const copyText = params.join('	');
  return (
    <div className='fit-line-ransac-result'>
      <h1>
        <FormattedMessage
          id='FitLineRansacResult.label.caption'
          defaultMessage='Fit Line Ransac Result'
        />
      </h1>
      <FitLineRansacResultTable params={params} copyText={copyText} />
      <BackToInputBtn handleClick={handleReturnClick} />
    </div>
  );
};

FitLineRansacResult.propTypes = {
  handleReturnClick: PropTypes.func.isRequired,
  params: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])),
};

export default FitLineRansacResult;
