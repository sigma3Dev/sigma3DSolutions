import React from 'react';
import PointsInput from '../PointsInput/PointsInput';
import PointsInputTable3D6W from '../PointsInputTable3D6W/PointsInputTable3D6W';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import Sidebar from '../Sidebar/Sidebar';
import './ThreeDTrafoInput.css';

// page for 3D-Transformation data inputs
const ThreeDTrafoInput = ({
  onStartFileDrop,
  onTargetFileDrop,
  startSystemPoints,
  targetSystemPoints,
  checkboxUpdate,
  handleClick
}) => {

  const startStyle = { display: 'none' };
  const targetStyle = {};

  return (
    <div>
      <Sidebar />
      <div className="three-d-trafo-input">
        <div className="start-input">
          <h1>Start System Points:</h1>
          <PointsInput onDrop={onStartFileDrop} />
          <PointsInputTable3D6W 
            systemPoints={startSystemPoints} 
            checkboxesDisplay={startStyle} 
          />
        </div>
        <div className="target-input">
          <h1>Target System Points:</h1>
          <PointsInput onDrop={onTargetFileDrop} />
          <PointsInputTable3D6W
            systemPoints={targetSystemPoints} 
            checkboxesDisplay={targetStyle}
            handleChange={checkboxUpdate}
          />
        </div>
      </div>  
      <SubmitBtn handleClick={handleClick} />
    </div>
  );
}

export default ThreeDTrafoInput;