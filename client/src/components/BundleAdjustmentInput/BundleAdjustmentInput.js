import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import InfoBtn from '../InfoBtn/InfoBtn';
import InputInfoPanel from '../InputInfoPanel/InputInfoPanel';
import PointsInputDropzone from '../PointsInputDropzone/PointsInputDropzone';
import BundleAdjustmentInputPointsTable from '../BundleAdjustmentInputPointsTable/BundleAdjustmentInputPointsTable';
import './BundleAdjustmentInput.css';

const BundleAdjustmentInput = ({
  isInfoOpen,
  handleInfoClick,
  infoPanelText,
  handleDeleteClick,
  handleFileDrop,
  handleSubmitClick,
  bundlePoints,
  clickAnywhere,
}) => (
  <div className='bundle-adjustment-input' onClick={clickAnywhere}>
    <h1>
      <FormattedMessage
        id='BundleAdjustmentInput.label.caption'
        defaultMessage='Bundle Adjustment'
      />
    </h1>
    <PointsInputDropzone onDrop={handleFileDrop} className='dropzone' />
    <BundleAdjustmentInputPointsTable
      bundlePoints={bundlePoints}
      handleDeleteDataInput={handleDeleteClick}
    />
    <InfoBtn className='info-btn' handleClick={handleInfoClick} />
    <InputInfoPanel isDisplayed={isInfoOpen} body={infoPanelText} />
    <SubmitBtn handleClick={handleSubmitClick} />
  </div>
);

BundleAdjustmentInput.propTypes = {
  handleInfoClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  handleFileDrop: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  clickAnywhere: PropTypes.func.isRequired,
  isInfoOpen: PropTypes.bool.isRequired,
  infoPanelText: PropTypes.object.isRequired,
  bundlePoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
};

export default BundleAdjustmentInput;
