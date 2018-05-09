import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import PointsInputDropzone from '../PointsInputDropzone/PointsInputDropzone';
import PointsTable from '../PointsTable/PointsTable';
import Footer from '../Footer/Footer';
import InputInfoPanel from '../InputInfoPanel/InputInfoPanel';
import './ThreeDTrafoInput.css';

/**
 * page for 3D-Transformation data inputs
 * @param {function} onStartFileDrop - handles functionality of file drop for start system input
 * @param {function} onTargetFileDrop - handles functionality of file drop for target system input
 * @param {function} checkboxUpdate - handles checkbox clicks
 * @param {function} handleInfoClick - handles info button clicks
 * @param {function} handleSubmitClick - handles submit button clicks
 * @param {function} handleStartDeleteClick - handles start system delete button clicks
 * @param {function} handleTargetDeleteClick - handles target system delete button clicks
 * @param {Array} startSystemPoints - array of points from the start system
 * @param {Array} targetSystemPoints - array of points from the target system
 * @param {Array} isInfoOpen - is info panel open?
 * @returns {*} ThreeDTrafoInput - .jsx Element
 */
const ThreeDTrafoInput = ({
  onStartFileDrop,
  onTargetFileDrop,
  startSystemPoints,
  targetSystemPoints,
  checkboxUpdate,
  handleInfoClick,
  handleSubmitClick,
  handleStartDeleteClick,
  handleTargetDeleteClick,
  handleReturn,
  listOfUsedCoords,
  isInfoOpen,
  infoPanelText,
  clickAnywhere,
}) => {
  const isPointsInput = !(startSystemPoints.length === 0) && !(targetSystemPoints.length === 0);
  return (
    <div className='three-d-trafo-input' onClick={clickAnywhere}>
      <div className='inputs'>
        <div className='start-input'>
          <h1>
            <FormattedMessage
              id='ThreeDTrafoInput.label.startSystemPointsCaption'
              defaultMessage='Start System Points:'
            />
          </h1>
          <PointsInputDropzone onDrop={onStartFileDrop} className='three-d-trafo-dropzone' />
          <PointsTable
            systemPoints={startSystemPoints}
            handleDeleteDataInput={handleStartDeleteClick}
          />
        </div>
        <div className='target-input'>
          <h1>
            <FormattedMessage
              id='ThreeDTrafoInput.label.targetSystemPointsCaption'
              defaultMessage='Target System Points:'
            />
          </h1>
          <PointsInputDropzone onDrop={onTargetFileDrop} className='three-d-trafo-dropzone' />
          <PointsTable
            systemPoints={targetSystemPoints}
            handleChange={checkboxUpdate}
            handleDeleteDataInput={handleTargetDeleteClick}
            listOfUsedCoords={listOfUsedCoords}
          />
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

ThreeDTrafoInput.propTypes = {
  onStartFileDrop: PropTypes.func.isRequired,
  onTargetFileDrop: PropTypes.func.isRequired,
  startSystemPoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)).isRequired,
  targetSystemPoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  checkboxUpdate: PropTypes.func.isRequired,
  handleInfoClick: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  handleStartDeleteClick: PropTypes.func.isRequired,
  handleTargetDeleteClick: PropTypes.func.isRequired,
  clickAnywhere: PropTypes.func.isRequired,
  listOfUsedCoords: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)).isRequired,
  isInfoOpen: PropTypes.bool.isRequired,
  infoPanelText: PropTypes.object.isRequired,
};

export default ThreeDTrafoInput;
