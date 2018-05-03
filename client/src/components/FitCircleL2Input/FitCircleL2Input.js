import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import InputInfoPanel from '../InputInfoPanel/InputInfoPanel';
import PointsInputDropzone from '../PointsInputDropzone/PointsInputDropzone';
import PointsTable from '../PointsTable/PointsTable';
import './FitCircleL2Input.css';

const FitCircleL2Input = ({
  isInfoOpen,
  handleInfoClick,
  infoPanelText,
  handleDeleteClick,
  handleFileDrop,
  handleReturn,
  handleSubmitClick,
  circleL2Points,
  clickAnywhere,
}) => {
  const isPointsInput = !(circleL2Points.length === 0);
  return (
    <div className='fit-circle-l2-input' onClick={clickAnywhere}>
      <h1>
        <FormattedMessage id='FitCircleL2Input.label.caption' defaultMessage='CircleL2' />
      </h1>
      <div className='fit-circle-l2-dropzone-and-table'>
        <PointsInputDropzone onDrop={handleFileDrop} className='dropzone' />
        <div className='fit-circle-l2-points-table'>
          <PointsTable systemPoints={circleL2Points} handleDeleteDataInput={handleDeleteClick} />
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

FitCircleL2Input.propTypes = {
  handleInfoClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  handleFileDrop: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  handleReturn: PropTypes.func.isRequired,
  clickAnywhere: PropTypes.func.isRequired,
  isInfoOpen: PropTypes.bool.isRequired,
  infoPanelText: PropTypes.object.isRequired,
  circleL2Points: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
};

export default FitCircleL2Input;
