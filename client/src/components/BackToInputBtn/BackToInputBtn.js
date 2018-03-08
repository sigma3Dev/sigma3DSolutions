import React from 'react';
import './BackToInputBtn.css';

/**
 * Navigates back to the previous input page
 * @returns {*} BackToInputBtn - .jsx Element
 */
const BackToInputBtn = ({
  handleClick
}) => (
  <button className="back-to-input-btn" onClick={ handleClick }>
    🡄
  </button>
);

export default BackToInputBtn;