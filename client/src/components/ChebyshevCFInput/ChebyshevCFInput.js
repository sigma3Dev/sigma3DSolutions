import React from 'react';
import {FormattedMessage} from 'react-intl';
import PointsInput from '../PointsInput/PointsInput';
// hier die richtige component noch einsetzen und unten einfügen??
import PointsInputTable3D6W from '../PointsInputTable3D6W/PointsInputTable3D6W';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import Sidebar from '../Sidebar/Sidebar';
import InfoBtn from '../InfoBtn/InfoBtn';
import InputInfoPanel from '../InputInfoPanel/InputInfoPanel';
import './ChebyshevCFInput.css';

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
const ChebyshevCFInput = ({
  onFileDrop,
  circlePoints,
  handleInfoClick,
  handleSubmitClick,
  handleDeleteClick,
  isInfoOpen,
  infoPanelText
}) => {
  return (
    <div>
      <Sidebar />
      <div className="chebyshev-circle-fit-input">
        <div className="circle-input">
          <h1>
            <FormattedMessage
              id="ChebyshevCFInput.label.circlePointsCaption"
              defaultMessage="Circle Points:"
            />
            <div className="info-section">
              <InfoBtn className="info-btn" handleClick={ handleInfoClick } />
              <InputInfoPanel 
                isDisplayed={ isInfoOpen }
                body={ infoPanelText }
              />
            </div>
          </h1>
          <PointsInput onDrop={onFileDrop} />
          <PointsInputTable3D6W 
            systemPoints={circlePoints} 
            handleDeleteDataInput={handleDeleteClick}
          />
        </div>
        <SubmitBtn handleClick={handleSubmitClick} />
      </div>
    </div>
  );
}

export default ChebyshevCFInput;