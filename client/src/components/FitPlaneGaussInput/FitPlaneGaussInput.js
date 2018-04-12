import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import InfoBtn from '../InfoBtn/InfoBtn';
import InputInfoPanel from '../InputInfoPanel/InputInfoPanel';
import PointsInputDropzone from '../PointsInputDropzone/PointsInputDropzone';
import PointsTable from '../PointsTable/PointsTable';
import './FitPlaneGaussInput.css';

const FitPlaneGaussInput = ({
  isInfoOpen,
  handleInfoClick,
  infoPanelText,
  handleDeleteClick,
  handleFileDrop,
  handleSubmitClick,
  planePoints,
  clickAnywhere,
}) => (
  <div className='fit-plane-gauss-input' onClick={clickAnywhere}>
    <h1>
      <FormattedMessage id='FitPlaneGaussInput.label.caption' defaultMessage='Gauss Plane' />
      <div className='info-section'>
        <InfoBtn className='info-btn' handleClick={handleInfoClick} />
        <InputInfoPanel isDisplayed={isInfoOpen} body={infoPanelText} />
      </div>
    </h1>
    <PointsInputDropzone onDrop={handleFileDrop} className='dropzone' />
    <PointsTable systemPoints={planePoints} handleDeleteDataInput={handleDeleteClick} />
    <SubmitBtn handleClick={handleSubmitClick} />
  </div>
);

FitPlaneGaussInput.propTypes = {
  handleInfoClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  handleFileDrop: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  clickAnywhere: PropTypes.func.isRequired,
  isInfoOpen: PropTypes.bool.isRequired,
  infoPanelText: PropTypes.object.isRequired,
  planePoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
};

export default FitPlaneGaussInput;
