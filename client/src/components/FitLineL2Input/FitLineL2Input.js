import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
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
  handleReturn,
  handleSubmitClick,
  lineL2Points,
  clickAnywhere,
}) => {
  const isPointsInput = !(lineL2Points.length === 0);
  return (
    <div className='fit-line-l2-input' onClick={clickAnywhere}>
      <h1>
        <FormattedMessage id='FitLineL2Input.label.caption' defaultMessage='LineL2' />
      </h1>
      <div className='fit-line-l2-dropzone-and-table'>
        <PointsInputDropzone onDrop={handleFileDrop} className='dropzone' />
        <div className='fit-line-l2-points-table'>
          <PointsTable systemPoints={lineL2Points} handleDeleteDataInput={handleDeleteClick} />
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

FitLineL2Input.propTypes = {
  handleInfoClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  handleFileDrop: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  handleReturn: PropTypes.func.isRequired,
  clickAnywhere: PropTypes.func.isRequired,
  isInfoOpen: PropTypes.bool.isRequired,
  infoPanelText: PropTypes.object.isRequired,
  lineL2Points: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
};

export default FitLineL2Input;
