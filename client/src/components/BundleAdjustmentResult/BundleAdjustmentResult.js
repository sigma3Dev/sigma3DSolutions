import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import BundleAdjustmentResultTable from '../BundleAdjustmentResultTable/BundleAdjustmentResultTable';
import Footer from '../Footer/Footer';
import './BundleAdjustmentResult.css';

const BundleAdjustmentResult = ({ params, handleReturnClick }) => (
  <div className='bundle-adjustment-result'>
    <h1>
      <FormattedMessage
        id='BundleAdjustmentResult.label.caption'
        defaultMessage='Bundle Adjustment Result'
      />
    </h1>
    <BundleAdjustmentResultTable result={params} className='bundle-adjustment-result-table' />
    <Footer
      handleReturnClick={handleReturnClick}
      isReturnBtnDisplayed
      isInfoBtnDisplayed={false}
      isSubmitBtnDisplayed={false}
      isDownloadBtnDisplayed={false}
      isCopyBtnDisplayed={false}
    />
  </div>
);

BundleAdjustmentResult.propTypes = {
  handleReturnClick: PropTypes.func.isRequired,
  params: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number))])),
};

export default BundleAdjustmentResult;
