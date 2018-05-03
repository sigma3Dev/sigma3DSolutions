import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import FitCircleL2ResultTable from '../FitCircleL2ResultTable/FitCircleL2ResultTable';
import Footer from '../Footer/Footer';
import FittingErrorBarGraph from '../FittingErrorBarGraph/FittingErrorBarGraph';
import './FitCircleL2Result.css';

const FitCircleL2Result = ({ params, handleReturnClick }) => {
  const paramsNoErrors = params.slice(0, -1);
  const copyText = paramsNoErrors.join('	');
  return (
    <div className='fit-circle-l2-result'>
      <h1>
        <FormattedMessage
          id='FitCircleL2Result.label.caption'
          defaultMessage='Fit CircleL2 Result'
        />
      </h1>
      <FitCircleL2ResultTable params={params} copyText={copyText} />
      <div className='bar-graph'>
        <FittingErrorBarGraph errors={params[8]} />
      </div>
      <Footer
        handleReturnClick={handleReturnClick}
        isReturnBtnDisplayed
        isInfoBtnDisplayed={false}
        isSubmitBtnDisplayed={false}
      />
    </div>
  );
};

FitCircleL2Result.propTypes = {
  handleReturnClick: PropTypes.func.isRequired,
  params: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])),
};

export default FitCircleL2Result;
