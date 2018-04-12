import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import InfoBtn from '../InfoBtn/InfoBtn';
import InputInfoPanel from '../InputInfoPanel/InputInfoPanel';
import PointsInputDropzone from '../PointsInputDropzone/PointsInputDropzone';
import PointsTable from '../PointsTable/PointsTable';
import './FitCylinderInput.css';

const FitCylinderInput = ({
  isInfoOpen,
  handleInfoClick,
  infoPanelText,
  handleDeleteClick,
  handleFileDrop,
  handleSubmitClick,
  cylinderPoints,
  clickAnywhere,
}) => (
  <div className='fit-cylinder-input' onClick={clickAnywhere}>
    <h1>
      <FormattedMessage id='FitCylinderInput.label.caption' defaultMessage='Cylinder' />
    </h1>
    <PointsInputDropzone onDrop={handleFileDrop} className='dropzone' />
    <PointsTable systemPoints={cylinderPoints} handleDeleteDataInput={handleDeleteClick} />
    <InfoBtn className='info-btn' handleClick={handleInfoClick} />
    <InputInfoPanel isDisplayed={isInfoOpen} body={infoPanelText} />
    <SubmitBtn handleClick={handleSubmitClick} />
  </div>
);

FitCylinderInput.propTypes = {
  handleInfoClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  handleFileDrop: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  clickAnywhere: PropTypes.func.isRequired,
  isInfoOpen: PropTypes.bool.isRequired,
  infoPanelText: PropTypes.object.isRequired,
  cylinderPoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
};

export default FitCylinderInput;
