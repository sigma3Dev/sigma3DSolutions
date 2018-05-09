import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import FitPlaneGaussResultTable from '../FitPlaneGaussResultTable/FitPlaneGaussResultTable';
import Footer from '../Footer/Footer';
import FittingErrorBarGraph from '../FittingErrorBarGraph/FittingErrorBarGraph';
import './FitPlaneGaussResult.css';

const FitPlaneGaussResult = ({ params, handleReturnClick }) => {
  const paramsNoErrors = params.slice(0, -1);
  const copyText = paramsNoErrors.join('	');
  return (
    <div className='fit-plane-gauss-result'>
      <h1>
        <FormattedMessage
          id='FitPlaneGaussResult.label.caption'
          defaultMessage='Fit Plane Result'
        />
      </h1>
      <FitPlaneGaussResultTable params={params} />
      <div className='bar-graph'>
        <FittingErrorBarGraph errors={params[7]} />
      </div>
      <Footer
        handleReturnClick={handleReturnClick}
        isReturnBtnDisplayed
        isInfoBtnDisplayed={false}
        isSubmitBtnDisplayed={false}
        isDownloadBtnDisplayed={false}
        isCopyBtnDisplayed
        copyText={copyText}
      />
    </div>
  );
};

FitPlaneGaussResult.propTypes = {
  handleReturnClick: PropTypes.func.isRequired,
  params: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])),
};

export default FitPlaneGaussResult;
