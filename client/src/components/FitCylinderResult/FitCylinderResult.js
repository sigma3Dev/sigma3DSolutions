import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import FitCylinderResultTable from '../FitCylinderResultTable/FitCylinderResultTable';
import Footer from '../Footer/Footer';
import FittingErrorBarGraph from '../FittingErrorBarGraph/FittingErrorBarGraph';
import './FitCylinderResult.css';

const FitCylinderResult = ({ params, handleReturnClick }) => {
  const paramsNoErrors = params.slice(0, -1);
  const copyText = paramsNoErrors.join('	');
  return (
    <div className='fit-cylinder-result'>
      <h1>
        <FormattedMessage
          id='FitCylinderResult.label.caption'
          defaultMessage='Fit Cylinder Result'
        />
      </h1>
      <FitCylinderResultTable params={params} />
      <div className='bar-graph'>
        <FittingErrorBarGraph errors={params[8]} />
      </div>
      <Footer
        handleReturnClick={handleReturnClick}
        isReturnBtnDisplayed
        isInfoBtnDisplayed={false}
        isSubmitBtnDisplayed={false}
        isCopyBtnDisplayed
        isDownloadBtnDisplayed={false}
        copyText={copyText}
      />
    </div>
  );
};

FitCylinderResult.propTypes = {
  handleReturnClick: PropTypes.func.isRequired,
  params: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])),
};

export default FitCylinderResult;
