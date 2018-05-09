import React from 'react';
import PropTypes from 'prop-types';
import './SubmitBtn.css';

const FaArrowRight = require('react-icons/lib/fa/arrow-right');

const arrowRight = React.createElement(FaArrowRight, null);

/**
 * Submits the input values and triggers submitCoords action
 * @param {function} handleClick - handles SubmitBtn click
 * @returns {*} SubmitBtn - .jsx Element
 */
const SubmitBtn = ({ handleClick, isDisplayed }) => (
  <div
    className='submit-btn'
    onClick={handleClick}
    style={isDisplayed ? { visibility: 'visible' } : { visibility: 'hidden' }}
  >
    <div className='arrow-right'>{arrowRight}</div>
  </div>
);

SubmitBtn.propTypes = {
  handleClick: PropTypes.func,
  isDisplayed: PropTypes.bool.isRequired,
};

export default SubmitBtn;
