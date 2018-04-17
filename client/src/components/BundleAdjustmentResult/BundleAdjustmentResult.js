import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import BundleAdjustmentResultTable from '../BundleAdjustmentResultTable/BundleAdjustmentResultTable';
import BackToInputBtn from '../BackToInputBtn/BackToInputBtn';
import './BundleAdjustmentResult.css';

const BundleAdjustmentResult = ({ params, handleReturnClick }) => (
  <div className='bundle-adjustment-result'>
    <h1>
      <FormattedMessage
        id='BundleAdjustmentResult.label.caption'
        defaultMessage='Bundle Adjustment Result'
      />
    </h1>
    <h2 className='bundle-adjustment-result-base-station'>
      <FormattedMessage
        id='BundleAdjustmentResult.label.baseStation'
        defaultMessage='Base Station: '
      />
      params[0];
    </h2>
    <BundleAdjustmentResultTable params={params} />
    <BackToInputBtn handleClick={handleReturnClick} />
  </div>
);

BundleAdjustmentResult.propTypes = {
  handleReturnClick: PropTypes.func.isRequired,
  params: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))])),
};

export default BundleAdjustmentResult;
