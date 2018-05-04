import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
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
  handleReturn,
  planePoints,
  clickAnywhere,
}) => {
  const isPointsInput = !(planePoints.length === 0);
  return (
    <div className='fit-plane-gauss-input' onClick={clickAnywhere}>
      <h1>
        <FormattedMessage id='FitPlaneGaussInput.label.caption' defaultMessage='Gauss Plane' />
      </h1>
      <div className='fit-plane-gauss-dropzone-and-table'>
        <PointsInputDropzone onDrop={handleFileDrop} className='dropzone' />
        <div className='fit-plane-gauss-points-table'>
          <PointsTable systemPoints={planePoints} handleDeleteDataInput={handleDeleteClick} />
        </div>
      </div>
      <Footer
        handleSubmitClick={handleSubmitClick}
        handleInfoClick={handleInfoClick}
        handleReturnClick={handleReturn}
        isSubmitBtnDisplayed={isPointsInput}
        isReturnBtnDisplayed
        isInfoBtnDisplayed
      />
      <InputInfoPanel isDisplayed={isInfoOpen} body={infoPanelText} />
    </div>
  );
};

FitPlaneGaussInput.propTypes = {
  handleInfoClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  handleFileDrop: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  handleReturn: PropTypes.func.isRequired,
  clickAnywhere: PropTypes.func.isRequired,
  isInfoOpen: PropTypes.bool.isRequired,
  infoPanelText: PropTypes.object.isRequired,
  planePoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
};

export default FitPlaneGaussInput;
