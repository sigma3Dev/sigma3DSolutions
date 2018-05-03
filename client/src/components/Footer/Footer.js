import React from 'react';
import PropTypes from 'prop-types';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import InfoBtn from '../InfoBtn/InfoBtn';
import BackToInputBtn from '../BackToInputBtn/BackToInputBtn';
import './Footer.css';

/**
 * footer bar for buttons
 * @returns {*} Footer - .jsx Element
 */
const Footer = ({
  handleSubmitClick,
  handleReturnClick,
  handleInfoClick,
  isReturnBtnDisplayed,
  isSubmitBtnDisplayed,
  isInfoBtnDisplayed,
}) => (
  <div className='footer'>
    <BackToInputBtn handleClick={handleReturnClick} isDisplayed={isReturnBtnDisplayed} />
    <InfoBtn handleClick={handleInfoClick} isDisplayed={isInfoBtnDisplayed} />
    <SubmitBtn handleClick={handleSubmitClick} isDisplayed={isSubmitBtnDisplayed} />
  </div>
);

Footer.propTypes = {
  handleSubmitClick: PropTypes.func,
  handleReturnClick: PropTypes.func,
  handleInfoClick: PropTypes.func,
  isReturnBtnDisplayed: PropTypes.bool.isRequired,
  isSubmitBtnDisplayed: PropTypes.bool.isRequired,
  isInfoBtnDisplayed: PropTypes.bool.isRequired,
};

export default Footer;
