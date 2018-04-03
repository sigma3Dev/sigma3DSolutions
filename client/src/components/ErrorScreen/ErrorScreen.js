import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import BackToInputBtn from '../BackToInputBtn/BackToInputBtn';
import Sidebar from '../Sidebar/Sidebar';
import './ErrorScreen.css';

/**
 * Shows up if there's an error in the calculation. Displays error message
 * @param {Object} error - error message
 * @param {function} handleClick - handles clicks on the BackToInputBtn
 * @returns {*} ErrorScreen - .jsx Element
 */
const ErrorScreen = ({ error, handleClick }) => (
  <div className='error-screen'>
    <h1 className='error-header'>
      <span className='error-span'>⚠ </span>
      <FormattedMessage id='ErrorScreen.label.error' defaultMessage='Error!' />
    </h1>
    <p className='error-message'>{error}</p>
    <div className='s3d-info'>
      <FormattedMessage
        id='ErrorScreen.label.s3dinfo'
        defaultMessage="
          Maybe you don't have the service for mathematical operations by sigma3D running.\n\n
          If you don't own the service, please contact sigma3D:
        "
      />
      <div className='s3d-contact-info'>
        <p>+49 (0) 2542 - 91898 0</p>
        <div className='links'>
          <a href='mailto:info@sigma3d.de'>info@sigma3d.de</a>
          <p> | </p>
          <a href='http://sigma3d.de/'>http://www.sigma3d.de</a>
        </div>
      </div>
    </div>
    <BackToInputBtn handleClick={handleClick} />
    <Sidebar />
  </div>
);

ErrorScreen.propTypes = {
  error: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ErrorScreen;
