import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import InfoBtn from '../InfoBtn/InfoBtn';
import InputInfoPanel from '../InputInfoPanel/InputInfoPanel';
import PointsInputDropzone from '../PointsInputDropzone/PointsInputDropzone';
import PointsTable from '../PointsTable/PointsTable';
import './FitLineRansacInput.css';

const FitLineRansacInput = ({
  isInfoOpen,
  handleInfoClick,
  infoPanelText,
  handleDeleteClick,
  handleFileDrop,
  handleSubmitClick,
  handleToleranceChange,
  linePoints,
  lineTolerance,
}) => (
  <div className='fit-line-ransac-input'>
    <h1>
      <FormattedMessage id='FitLineRansacInput.label.caption' defaultMessage='Ransac Line' />
      <div className='info-section'>
        <InfoBtn className='info-btn' handleClick={handleInfoClick} />
        <InputInfoPanel isDisplayed={isInfoOpen} body={infoPanelText} />
      </div>
    </h1>
    <PointsInputDropzone onDrop={handleFileDrop} className='dropzone' />
    <div className='tolerance-input'>
      <form>
        <label htmlFor='tolerance'>
          Tolerance:
          <input
            type='number'
            name='tolerance'
            value={lineTolerance}
            onChange={handleToleranceChange}
            step='0.1'
          />
        </label>
      </form>
    </div>
    <PointsTable systemPoints={linePoints} handleDeleteDataInput={handleDeleteClick} />
    <SubmitBtn handleClick={handleSubmitClick} />
  </div>
);

FitLineRansacInput.propTypes = {
  handleInfoClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  handleFileDrop: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  handleToleranceChange: PropTypes.func.isRequired,
  isInfoOpen: PropTypes.bool.isRequired,
  infoPanelText: PropTypes.object.isRequired,
  linePoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  lineTolerance: PropTypes.number,
};

export default FitLineRansacInput;
