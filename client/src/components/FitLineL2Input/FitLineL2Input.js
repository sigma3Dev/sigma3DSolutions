import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import InfoBtn from '../InfoBtn/InfoBtn';
import InputInfoPanel from '../InputInfoPanel/InputInfoPanel';
import PointsInputDropzone from '../PointsInputDropzone/PointsInputDropzone';
import PointsTable from '../PointsTable/PointsTable';
import './FitLineL2Input.css';

const FitLineL2Input = ({
  isInfoOpen,
  handleInfoClick,
  infoPanelText,
  handleDeleteClick,
  handleFileDrop,
  handleSubmitClick,
  lineL2Points,
  clickAnywhere,
}) => (
  <div className='fit-line-l2-input' onClick={clickAnywhere}>
    <h1>
      <FormattedMessage id='FitLineL2Input.label.caption' defaultMessage='LineL2' />
    </h1>
    <PointsInputDropzone onDrop={handleFileDrop} className='dropzone' />
    <PointsTable systemPoints={lineL2Points} handleDeleteDataInput={handleDeleteClick} />
    <InfoBtn className='info-btn' handleClick={handleInfoClick} />
    <InputInfoPanel isDisplayed={isInfoOpen} body={infoPanelText} />
    <SubmitBtn handleClick={handleSubmitClick} />
  </div>
);

FitLineL2Input.propTypes = {
  handleInfoClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  handleFileDrop: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  clickAnywhere: PropTypes.func.isRequired,
  isInfoOpen: PropTypes.bool.isRequired,
  infoPanelText: PropTypes.object.isRequired,
  lineL2Points: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
};

export default FitLineL2Input;
