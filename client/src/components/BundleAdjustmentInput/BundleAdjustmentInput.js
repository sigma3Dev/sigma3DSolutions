import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import InfoBtn from '../InfoBtn/InfoBtn';
import InputInfoPanel from '../InputInfoPanel/InputInfoPanel';
import PointsInputDropzone from '../PointsInputDropzone/PointsInputDropzone';
import BundleAdjustmentInputPointsTable from '../BundleAdjustmentInputPointsTable/BundleAdjustmentInputPointsTable';
import './BundleAdjustmentInput.css';

const IoArrowDropdown = require('react-icons/lib/io/android-arrow-dropdown');

const arrowDropdown = React.createElement(IoArrowDropdown, null);

const BundleAdjustmentInput = ({
  isInfoOpen,
  handleInfoClick,
  infoPanelText,
  handleDeleteClick,
  handleFileDrop,
  handleSelectBaseStation,
  handleSubmitClick,
  bundlePoints,
  baseStation,
  clickAnywhere,
}) => {
  const stationIdsArr = [];
  const stationIds = bundlePoints.map((point) => {
    if (stationIdsArr.indexOf(point.stationId) === -1) {
      stationIdsArr.push(point.stationId);
      return (
        <div className='dropdown-link' key={point.stationId} onClick={handleSelectBaseStation}>
          {point.stationId}
        </div>
      );
    }
    return false;
  });
  const dropdownBtnCaption = baseStation ? baseStation.toString() : 'Default ';
  return (
    <div className='bundle-adjustment-input' onClick={clickAnywhere}>
      <h1>
        <FormattedMessage
          id='BundleAdjustmentInput.label.caption'
          defaultMessage='Bundle Adjustment'
        />
      </h1>
      <PointsInputDropzone onDrop={handleFileDrop} className='dropzone' />
      <div className='bundle-input-table-and-dropdown'>
        <BundleAdjustmentInputPointsTable
          bundlePoints={bundlePoints}
          handleDeleteDataInput={handleDeleteClick}
          className='bundle-input-table'
        />
        <div className='bundle-dropdown-with-caption'>
          <div className='bundle-dropdown-caption'>
            <FormattedMessage
              id='BundleAdjustmentInput.dropdown.caption'
              defaultMessage='Base Station: '
            />
          </div>
          <div className='bundle-dropdown'>
            <button className='bundle-dropdown-btn'>
              {dropdownBtnCaption} {arrowDropdown}
            </button>
            <div className='bundle-dropdown-content'>{stationIds}</div>
          </div>
        </div>
      </div>
      <InfoBtn className='info-btn' handleClick={handleInfoClick} />
      <InputInfoPanel isDisplayed={isInfoOpen} body={infoPanelText} />
      <SubmitBtn handleClick={handleSubmitClick} />
    </div>
  );
};

BundleAdjustmentInput.propTypes = {
  handleInfoClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  handleFileDrop: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  handleSelectBaseStation: PropTypes.func.isRequired,
  clickAnywhere: PropTypes.func.isRequired,
  isInfoOpen: PropTypes.bool.isRequired,
  infoPanelText: PropTypes.object.isRequired,
  bundlePoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  baseStation: PropTypes.number,
};

export default BundleAdjustmentInput;
