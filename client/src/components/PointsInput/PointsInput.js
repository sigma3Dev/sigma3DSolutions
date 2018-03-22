import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import Dropzone from 'react-dropzone';
import './PointsInput.css';

/**
 * component that holds react-dropzone to drop .txt files and handle them
 * @param {function} onDrop - functionality when file is dropped
 * @returns {*} PointsInput - .jsx Element
 */
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

PointsInput.propTypes = {
  onDrop: PropTypes.func.isRequired,
}

export default PointsInput;