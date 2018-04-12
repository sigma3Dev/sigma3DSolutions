import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import InfoBtn from '../InfoBtn/InfoBtn';
import InputInfoPanel from '../InputInfoPanel/InputInfoPanel';
import PointsInputDropzone from '../PointsInputDropzone/PointsInputDropzone';
import PointsTable from '../PointsTable/PointsTable';
import './FitPointInput.css';

const FitPointInput = ({
  isInfoOpen,
  handleInfoClick,
  infoPanelText,
  handleDeleteClick,
  handleFileDrop,
  handleSubmitClick,
  points,
  clickAnywhere,
}) => (
  <div className='fit-point-input' onClick={clickAnywhere}>
    <h1>
      <FormattedMessage id='FitPointInput.label.caption' defaultMessage='Point' />
      <div className='info-section'>
        <InfoBtn className='info-btn' handleClick={handleInfoClick} />
        <InputInfoPanel isDisplayed={isInfoOpen} body={infoPanelText} />
      </div>
    </h1>
    <PointsInputDropzone onDrop={handleFileDrop} className='dropzone' />
    <PointsTable systemPoints={points} handleDeleteDataInput={handleDeleteClick} />
    <SubmitBtn handleClick={handleSubmitClick} />
  </div>
);

FitPointInput.propTypes = {
  handleInfoClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  handleFileDrop: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  clickAnywhere: PropTypes.func.isRequired,
  isInfoOpen: PropTypes.bool.isRequired,
  infoPanelText: PropTypes.object.isRequired,
  points: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
};

export default FitPointInput;
