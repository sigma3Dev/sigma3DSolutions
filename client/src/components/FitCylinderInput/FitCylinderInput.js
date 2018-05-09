import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
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
  handleReturn,
  handleSubmitClick,
  cylinderPoints,
  clickAnywhere,
}) => {
  const isPointsInput = !(cylinderPoints.length === 0);
  return (
    <div className='fit-cylinder-input' onClick={clickAnywhere}>
      <h1>
        <FormattedMessage id='FitCylinderInput.label.caption' defaultMessage='Cylinder' />
      </h1>
      <div className='fit-cylinder-dropzone-and-table'>
        <PointsInputDropzone onDrop={handleFileDrop} className='dropzone' />
        <div className='fit-cylinder-points-table'>
          <PointsTable systemPoints={cylinderPoints} handleDeleteDataInput={handleDeleteClick} />
        </div>
      </div>
      <Footer
        handleSubmitClick={handleSubmitClick}
        handleInfoClick={handleInfoClick}
        handleReturnClick={handleReturn}
        isSubmitBtnDisplayed={isPointsInput}
        isReturnBtnDisplayed
        isInfoBtnDisplayed
        isCopyBtnDisplayed={false}
        isDownloadBtnDisplayed={false}
      />
      <InputInfoPanel isDisplayed={isInfoOpen} body={infoPanelText} />
    </div>
  );
};

FitCylinderInput.propTypes = {
  handleInfoClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  handleFileDrop: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  handleReturn: PropTypes.func.isRequired,
  clickAnywhere: PropTypes.func.isRequired,
  isInfoOpen: PropTypes.bool.isRequired,
  infoPanelText: PropTypes.object.isRequired,
  cylinderPoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
};

export default FitCylinderInput;
