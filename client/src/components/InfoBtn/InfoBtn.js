import React from 'react';
import PropTypes from 'prop-types';
import './InfoBtn.css';

const MdInfoOutline = require('react-icons/lib/md/info-outline');

const infoSign = React.createElement(MdInfoOutline, null);

/**
 * Opens up info panel
 * @param {function} handleClick - handles SubmitBtn click
 * @returns {*} SubmitBtn - .jsx Element
 */
const InfoBtn = ({ handleClick, isDisplayed }) => (
  <button
    className='info-btn'
    onClick={handleClick}
    style={isDisplayed ? { visibility: 'visible' } : { visibility: 'hidden' }}
  >
    <div className='info-sign'>{infoSign}</div>
  </button>
);

InfoBtn.propTypes = {
  handleClick: PropTypes.func,
  isDisplayed: PropTypes.bool.isRequired,
};

export default InfoBtn;
