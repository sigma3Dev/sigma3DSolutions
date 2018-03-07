import React from 'react';
import {FormattedMessage} from 'react-intl';
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
        <p>
          <FormattedMessage
            id="PointsInput.label.inputTxtFile"
            defaultMessage="Drop .txt file in here"
          />
        </p>
      </Dropzone>
    </div>
  );

}

export default PointsInput;