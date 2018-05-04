import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import FitPointResultTable from '../FitPointResultTable/FitPointResultTable';
import Footer from '../Footer/Footer';
import FittingErrorBarGraph from '../FittingErrorBarGraph/FittingErrorBarGraph';
import './FitPointResult.css';

const FitPointResult = ({ params, handleReturnClick }) => {
  const paramsNoErrors = params.slice(0, -1);
  const copyText = paramsNoErrors.join('	');
  return (
    <div className='fit-point-result'>
      <h1>
        <FormattedMessage id='FitPointResult.label.caption' defaultMessage='Fit Point Result' />
      </h1>
      <FitPointResultTable params={params} copyText={copyText} />
      <div className='bar-graph'>
        <FittingErrorBarGraph errors={params[4]} />
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

FitPointResult.propTypes = {
  handleReturnClick: PropTypes.func.isRequired,
  params: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])),
};

export default FitPointResult;
