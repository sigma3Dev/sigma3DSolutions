import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import InfoBtn from '../InfoBtn/InfoBtn';
import InputInfoPanel from '../InputInfoPanel/InputInfoPanel';
import PointsInputDropzone from '../PointsInputDropzone/PointsInputDropzone';
import PointsTable from '../PointsTable/PointsTable';
import './FitPlaneRansacInput.css';

const FitPlaneRansacInput = ({
  isInfoOpen,
  handleInfoClick,
  infoPanelText,
  handleDeleteClick,
  handleFileDrop,
  handleSubmitClick,
  handleToleranceChange,
  planePoints,
  planeTolerance,
}) => (
  <div className='fit-plane-ransac-input'>
    <h1>
      <FormattedMessage id='FitPlaneRansacInput.label.caption' defaultMessage='Ransac Plane' />
      <div className='info-section'>
        <InfoBtn className='info-btn' handleClick={handleInfoClick} />
        <InputInfoPanel isDisplayed={isInfoOpen} body={infoPanelText} />
      </div>
    </h1>
    <PointsInputDropzone onDrop={handleFileDrop} className='dropzone' />
    <PointsTable systemPoints={planePoints} handleDeleteDataInput={handleDeleteClick} />
    <div className='tolerance-input'>
      <form>
        <label htmlFor='tolerance'>
          Tolerance:
          <input
            type='number'
            name='tolerance'
            value={planeTolerance}
            onChange={handleToleranceChange}
            step='0.1'
          />
        </label>
      </form>
    </div>
    <SubmitBtn handleClick={handleSubmitClick} />
  </div>
);

FitPlaneRansacInput.propTypes = {
  handleInfoClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  handleFileDrop: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  handleToleranceChange: PropTypes.func.isRequired,
  isInfoOpen: PropTypes.bool.isRequired,
  infoPanelText: PropTypes.object.isRequired,
  planePoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  planeTolerance: PropTypes.number,
};

export default FitPlaneRansacInput;
