import React from 'react';
import PropTypes from 'prop-types';
import './BackToInputBtn.css';

const FaArrowLeft = require('react-icons/lib/fa/arrow-left');

const arrowLeft = React.createElement(FaArrowLeft, null);

/**
 * Navigates back to the previous input page
 * @returns {*} BackToInputBtn - .jsx Element
 */
const BackToInputBtn = ({ handleClick }) => (
  <button className='back-to-input-btn' onClick={handleClick}>
    <div className='arrow-left'>{arrowLeft}</div>
  </button>
);

BackToInputBtn.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default BackToInputBtn;
