import React from 'react';
import PointsInput from '../PointsInput/PointsInput';
import Sidebar from '../Sidebar/Sidebar';
import './ThreeDTrafoInput.css';

// page for 3D-Transformation data inputs
const ThreeDTrafoInput = (props) => {
  return (
    <div>
      <Sidebar />
      <div className="three-d-trafo-input">
        <div className="start-input">
          <h1>Start System Points:</h1>
          <PointsInput />
        </div>
        <div className="target-input">
          <h1>Target System Points:</h1>
          <PointsInput />
        </div>
      </div>
    </div>
  );
}

export default ThreeDTrafoInput;