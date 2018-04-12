import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import InfoBtn from '../InfoBtn/InfoBtn';
import InputInfoPanel from '../InputInfoPanel/InputInfoPanel';
import PointsInputDropzone from '../PointsInputDropzone/PointsInputDropzone';
import PointsTable from '../PointsTable/PointsTable';
import './FitCircleL2Input.css';

const FitCircleL2Input = ({
  isInfoOpen,
  handleInfoClick,
  infoPanelText,
  handleDeleteClick,
  handleFileDrop,
  handleSubmitClick,
  circleL2Points,
  clickAnywhere,
}) => (
  <div className='fit-circle-l2-input' onClick={clickAnywhere}>
    <h1>
      <FormattedMessage id='FitCircleL2Input.label.caption' defaultMessage='CircleL2' />
      <div className='info-section'>
        <InfoBtn className='info-btn' handleClick={handleInfoClick} />
        <InputInfoPanel isDisplayed={isInfoOpen} body={infoPanelText} />
      </div>
    </h1>
    <PointsInputDropzone onDrop={handleFileDrop} className='dropzone' />
    <PointsTable systemPoints={circleL2Points} handleDeleteDataInput={handleDeleteClick} />
    <SubmitBtn handleClick={handleSubmitClick} />
  </div>
);

FitCircleL2Input.propTypes = {
  handleInfoClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  handleFileDrop: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  clickAnywhere: PropTypes.func.isRequired,
  isInfoOpen: PropTypes.bool.isRequired,
  infoPanelText: PropTypes.object.isRequired,
  circleL2Points: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
};

export default FitCircleL2Input;
