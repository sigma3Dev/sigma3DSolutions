import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import FitPlaneRansacResultTable from '../FitPlaneRansacResultTable/FitPlaneRansacResultTable';
import Footer from '../Footer/Footer';
import './FitPlaneRansacResult.css';

const FitPlaneRansacResult = ({ params, handleReturnClick }) => {
  const copyText = params.join('	');
  return (
    <div className='fit-plane-ransac-result'>
      <h1>
        <FormattedMessage
          id='FitPlaneRansacResult.label.caption'
          defaultMessage='Fit Plane Ransac Result'
        />
      </h1>
      <FitPlaneRansacResultTable params={params} copyText={copyText} />
      <Footer
        handleReturnClick={handleReturnClick}
        isReturnBtnDisplayed
        isInfoBtnDisplayed={false}
        isSubmitBtnDisplayed={false}
      />
    </div>
  );
};

FitPlaneRansacResult.propTypes = {
  handleReturnClick: PropTypes.func.isRequired,
  params: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])),
};

export default FitPlaneRansacResult;
