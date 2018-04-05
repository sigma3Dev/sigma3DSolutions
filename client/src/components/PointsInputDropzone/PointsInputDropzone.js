import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Dropzone from 'react-dropzone';
import './PointsInputDropzone.css';

/**
 * component that holds react-dropzone to drop .txt files and handle them
 * @param {function} onDrop - functionality when file is dropped
 * @returns {*} PointsInputDropzone - .jsx Element
 */
const PointsInputDropzone = ({ onDrop }) => {
  const activeStyle = { backgroundColor: 'white', border: '4px dashed gray' };

  return (
    <div className='points-input'>
      <Dropzone className='dropzone' onDrop={onDrop} activeStyle={activeStyle}>
        <p>
          <FormattedMessage
            id='PointsInputDropzone.label.inputTxtFile'
            defaultMessage='Drop .txt file in here'
          />
        </p>
      </Dropzone>
    </div>
  );
};

PointsInputDropzone.propTypes = {
  onDrop: PropTypes.func.isRequired,
};

export default PointsInputDropzone;
