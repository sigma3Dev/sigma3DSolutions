import React from 'react';
import PointsInput from '../PointsInput/PointsInput';
import PointsTable from '../PointsTable/PointsTable';
import Sidebar from '../Sidebar/Sidebar';
import './ThreeDTrafoInput.css';

// page for 3D-Transformation data inputs
const ThreeDTrafoInput = ({
  onStartFileDrop,
  onTargetFileDrop,
  startSystemPoints,
  targetSystemPoints
}) => {

  return (
    <div>
      <Sidebar />
      <div className="three-d-trafo-input">
        <div className="start-input">
          <h1>Start System Points:</h1>
          <PointsInput onDrop={onStartFileDrop} />
          <PointsTable systemPoints={startSystemPoints} />
        </div>
        <div className="target-input">
          <h1>Target System Points:</h1>
          <PointsInput onDrop={onTargetFileDrop} />
          <PointsTable systemPoints={targetSystemPoints} />
        </div>
      </div>
    </div>
  );
}

export default ThreeDTrafoInput;