import React from 'react';
import {FormattedMessage} from 'react-intl';
import './SubmitBtn.css';

/**
 * Submits the input values and triggers submitCoords action
 * @param {function} handleClick - handles SubmitBtn click
 * @returns {*} SubmitBtn - .jsx Element
 */
const SubmitBtn = ({
  handleClick
}) => (
  <button className="submit-btn" onClick={handleClick}>    
    <FormattedMessage
      id="SubmitBtn.label.caption"
      defaultMessage="Submit 🡆"
    />
  </button>
);

export default SubmitBtn;