import React from 'react';
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
const ErrorScreen = ({
  error,
  handleClick
}) => {
  return (
    <div className="error-screen">
      <h1 className="error-header">
        <span className="error-span">⚠ </span> 
        <FormattedMessage
          id="ErrorScreen.label.error"
          defaultMessage="Error!"
        />
      </h1>
      <p className="error-message">{ error }</p>
      <BackToInputBtn handleClick={ handleClick } />
      <Sidebar />
    </div>
  );
}

export default ErrorScreen;