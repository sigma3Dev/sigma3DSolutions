import React from 'react';
import Dropzone from 'react-dropzone';
import './PointsInput.css';

const PointsInput = ({
  onDrop
}) => {

  const activeStyle = { backgroundColor: "white", border: "4px dashed gray" };

  return (
    <div className="points-input">
      <Dropzone 
        className="dropzone" 
        onDrop={ onDrop }
        activeStyle={ activeStyle }
      >
        <p>Drop .txt file in here</p>
      </Dropzone>
    </div>
  );

}

export default PointsInput;