import React from 'react';
import Dropzone from 'react-dropzone';
import './PointsInput.css';

const PointsInput = () => {
  return (
    <div className="points-input">
      <Dropzone className="dropzone">
        <p>Drop .txt file in here</p>
      </Dropzone>
    </div>
  );
}

export default PointsInput;