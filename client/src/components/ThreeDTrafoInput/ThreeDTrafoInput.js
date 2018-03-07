import React from 'react';
import {FormattedMessage} from 'react-intl';
import PointsInput from '../PointsInput/PointsInput';
import PointsInputTable3D6W from '../PointsInputTable3D6W/PointsInputTable3D6W';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import Sidebar from '../Sidebar/Sidebar';
import './ThreeDTrafoInput.css';

/**
 * page for 3D-Transformation data inputs
 * @param {function} onStartFileDrop - handles functionality of file drop for start system input
 * @param {function} onTargetFileDrop - handles functionality of file drop for target system input
 * @param {function} checkboxUpdate - handles checkbox clicks
 * @param {function} handleSubmitClick - handles submit button clicks
 * @param {function} handleStartDeleteClick - handles start system delete button clicks
 * @param {function} handleTargetDeleteClick - handles target system delete button clicks 
 * @param {Array} startSystemPoints - array of points from the start system
 * @param {Array} targetSystemPoints - array of points from the target system
 * @returns {*} ThreeDTrafoInput - .jsx Element
 */
const ThreeDTrafoInput = ({
  onStartFileDrop,
  onTargetFileDrop,
  startSystemPoints,
  targetSystemPoints,
  checkboxUpdate,
  handleSubmitClick,
  handleStartDeleteClick,
  handleTargetDeleteClick,
}) => {

  const startStyle = { display: 'none' };
  const targetStyle = {};

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
            checkboxesDisplay={startStyle}
            handleDeleteDataInput={handleStartDeleteClick}
          />
        </div>
        <div className="target-input">
          <h1>
            <FormattedMessage
                id="ThreeDTrafoInput.label.targetSystemPointsCaption"
                defaultMessage="Target System Points:"
            />
          </h1>
          <PointsInput onDrop={onTargetFileDrop} />
          <PointsInputTable3D6W
            systemPoints={targetSystemPoints} 
            checkboxesDisplay={targetStyle}
            handleChange={checkboxUpdate}
            handleDeleteDataInput={handleTargetDeleteClick}
          />
        </div>
      </div>  
      <SubmitBtn handleClick={handleSubmitClick} />
    </div>
  );
}

export default ThreeDTrafoInput;