import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import PointsInputDropzone from '../PointsInputDropzone/PointsInputDropzone';
import PointsTable from '../PointsTable/PointsTable';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import InfoBtn from '../InfoBtn/InfoBtn';
import InputInfoPanel from '../InputInfoPanel/InputInfoPanel';
import './FitCircleChebyshevInput.css';

/**
 * page for chebyshev-circle-fit data inputs
 * @param {function} onFileDrop - handles functionality of file drop for points input
 * @param {function} handleInfoClick - handles info button clicks
 * @param {function} handleSubmitClick - handles submit button clicks
 * @param {function} handleDeleteClick - handles delete button clicks
 * @param {Array} circlePoints - array of points from the circle
 * @param {Array} isInfoOpen - is info panel open?
 * @returns {*} chebyshev-circle-fit - .jsx Element
 */
const FitCircleChebyshevInput = ({
  onFileDrop,
  circlePoints,
  handleInfoClick,
  handleSubmitClick,
  handleDeleteClick,
  isInfoOpen,
  infoPanelText,
  clickAnywhere,
}) => (
  <div className='chebyshev-circle-fit-input' onClick={clickAnywhere}>
    <div>
      <h1>
        <FormattedMessage
          id='FitCircleChebyshevInput.label.circlePointsCaption'
          defaultMessage='Circle Points:'
        />
      </h1>
      <PointsInputDropzone onDrop={onFileDrop} />
      <PointsTable systemPoints={circlePoints} handleDeleteDataInput={handleDeleteClick} />
    </div>
    <SubmitBtn handleClick={handleSubmitClick} />
    <InfoBtn className='info-btn' handleClick={handleInfoClick} />
    <InputInfoPanel isDisplayed={isInfoOpen} body={infoPanelText} />
  </div>
);

FitCircleChebyshevInput.propTypes = {
  onFileDrop: PropTypes.func.isRequired,
  handleInfoClick: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  clickAnywhere: PropTypes.func.isRequired,
  isInfoOpen: PropTypes.bool.isRequired,
  circlePoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)).isRequired,
  infoPanelText: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FitCircleChebyshevInput;
