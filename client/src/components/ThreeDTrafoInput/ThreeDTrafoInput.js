import React from 'react';
import {FormattedMessage} from 'react-intl';
import PointsInput from '../PointsInput/PointsInput';
import PointsInputTable3D6W from '../PointsInputTable3D6W/PointsInputTable3D6W';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import Sidebar from '../Sidebar/Sidebar';
import InfoBtn from '../InfoBtn/InfoBtn';
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
  listOfUsedCoords,
  isInfoOpen,
  infoPanelText
}) => {
  
  return (
    <div>
      <Sidebar />
      <div className="three-d-trafo-input">
        <div className="start-input">
          <h1>
            <FormattedMessage
              id="ThreeDTrafoInput.label.startSystemPointsCaption"
              defaultMessage="Start System Points:"
            />
          </h1>
          <PointsInput onDrop={onStartFileDrop} />
          <PointsInputTable3D6W 
            systemPoints={startSystemPoints} 
            handleDeleteDataInput={handleStartDeleteClick}
          />
        </div>
        <div className="target-input">
          <h1>
            <FormattedMessage
                id="ThreeDTrafoInput.label.targetSystemPointsCaption"
                defaultMessage="Target System Points:"
            />
            <div className="info-section">
              <InfoBtn className="info-btn" handleClick={ handleInfoClick } />
              <InputInfoPanel 
                isDisplayed={ isInfoOpen }
                body={ infoPanelText }
              />
            </div>
          </h1>
          <PointsInput onDrop={onTargetFileDrop} />
          <PointsInputTable3D6W
            systemPoints={targetSystemPoints} 
            handleChange={checkboxUpdate}
            handleDeleteDataInput={handleTargetDeleteClick}
            listOfUsedCoords={listOfUsedCoords}
          />
        </div>
        <SubmitBtn handleClick={handleSubmitClick} />
      </div>
    </div>
  );
}

export default ThreeDTrafoInput;