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
const InfoBtn = ({
  handleClick
}) => (
  <div className="info-btn" onClick={handleClick}>    
    <div className="info-sign">{ infoSign }</div>
  </div>
);

InfoBtn.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default InfoBtn;