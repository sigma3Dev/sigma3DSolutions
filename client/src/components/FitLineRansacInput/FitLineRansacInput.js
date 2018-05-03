import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
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
  handleReturn,
  handleToleranceChange,
  linePoints,
  lineTolerance,
  clickAnywhere,
}) => {
  const isPointsInput = !(linePoints.length === 0);
  return (
    <div className='fit-line-ransac-input' onClick={clickAnywhere}>
      <h1>
        <FormattedMessage id='FitLineRansacInput.label.caption' defaultMessage='Ransac Line' />
      </h1>
      <div className='fit-line-ransac-dropzone-and-table'>
        <div className='fit-line-ransac-dropzone-and-tolerance'>
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
        </div>
        <div className='fit-line-ransac-points-table'>
          <PointsTable
            systemPoints={linePoints}
            handleDeleteDataInput={handleDeleteClick}
            style={{ 'max-height': '55vh !important' }}
          />
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

FitLineRansacInput.propTypes = {
  handleInfoClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  handleFileDrop: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  handleReturn: PropTypes.func.isRequired,
  handleToleranceChange: PropTypes.func.isRequired,
  clickAnywhere: PropTypes.func.isRequired,
  isInfoOpen: PropTypes.bool.isRequired,
  infoPanelText: PropTypes.object.isRequired,
  linePoints: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  lineTolerance: PropTypes.number,
};

export default FitLineRansacInput;
