import React from 'react';
import {FormattedMessage} from 'react-intl';
import './SubmitBtn.css';

const FaArrowRight = require('react-icons/lib/fa/arrow-right');
const arrowRight = React.createElement(FaArrowRight, null);

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
      defaultMessage="Submit "
    />
    <div className="arrow-right">{ arrowRight }</div>
  </button>
);

export default SubmitBtn;