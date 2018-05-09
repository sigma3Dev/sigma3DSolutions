import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
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
  handleReturn,
  handleToleranceChange,
  planePoints,
  planeTolerance,
  clickAnywhere,
}) => {
  const isPointsInput = !(planePoints.length === 0);
  return (
    <div className='fit-plane-ransac-input' onClick={clickAnywhere}>
      <h1>
        <FormattedMessage id='FitPlaneRansacInput.label.caption' defaultMessage='Ransac Plane' />
      </h1>
      <div className='fit-plane-ransac-dropzone-and-table'>
        <div className='fit-plane-ransac-dropzone-and-tolerance'>
          <PointsInputDropzone onDrop={handleFileDrop} className='dropzone' />
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
        </div>
        <div className='fit-plane-ransac-points-table'>
          <PointsTable systemPoints={planePoints} handleDeleteDataInput={handleDeleteClick} />
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
        isCopyBtnDisplayed={false}
        isDownloadBtnDisplayed={false}
      />
    </div>
  );
};

FitPlaneRansacInput.propTypes = {
  handleInfoClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  handleFileDrop: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  handleReturn: PropTypes.func.isRequired,
  handleToleranceChange: PropTypes.func.isRequired,
  clickAnywhere: PropTypes.func.isRequired,
  isInfoOpen: PropTypes.bool.isRequired,
  infoPanelText: PropTypes.object.isRequired,
  planePoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  planeTolerance: PropTypes.number,
};

export default FitPlaneRansacInput;
