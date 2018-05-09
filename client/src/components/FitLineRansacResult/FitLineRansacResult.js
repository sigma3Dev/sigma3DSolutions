import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import FitLineRansacResultTable from '../FitLineRansacResultTable/FitLineRansacResultTable';
import Footer from '../Footer/Footer';
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
      <FitLineRansacResultTable params={params} />
      <Footer
        copyText={copyText}
        handleReturnClick={handleReturnClick}
        isReturnBtnDisplayed
        isDownloadBtnDisplayed={false}
        isCopyBtnDisplayed
        isInfoBtnDisplayed={false}
        isSubmitBtnDisplayed={false}
      />
    </div>
  );
};

FitLineRansacResult.propTypes = {
  handleReturnClick: PropTypes.func.isRequired,
  params: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])),
};

export default FitLineRansacResult;
