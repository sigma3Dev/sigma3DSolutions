import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
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
  handleReturn,
  handleSubmitClick,
  points,
  clickAnywhere,
}) => {
  const isPointsInput = !(points.length === 0);
  return (
    <div className='fit-point-input' onClick={clickAnywhere}>
      <h1>
        <FormattedMessage id='FitPointInput.label.caption' defaultMessage='Point' />
      </h1>
      <div className='fit-point-dropzone-and-table'>
        <PointsInputDropzone onDrop={handleFileDrop} className='dropzone' />
        <div className='fit-point-points-table'>
          <PointsTable systemPoints={points} handleDeleteDataInput={handleDeleteClick} />
        </div>
      </div>
      <InputInfoPanel isDisplayed={isInfoOpen} body={infoPanelText} />
      <Footer
        handleSubmitClick={handleSubmitClick}
        handleInfoClick={handleInfoClick}
        handleReturnClick={handleReturn}
        isSubmitBtnDisplayed={isPointsInput}
        isReturnBtnDisplayed
        isInfoBtnDisplayed
      />
    </div>
  );
};

FitPointInput.propTypes = {
  handleInfoClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  handleFileDrop: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  handleReturn: PropTypes.func.isRequired,
  clickAnywhere: PropTypes.func.isRequired,
  isInfoOpen: PropTypes.bool.isRequired,
  infoPanelText: PropTypes.object.isRequired,
  points: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
};

export default FitPointInput;
