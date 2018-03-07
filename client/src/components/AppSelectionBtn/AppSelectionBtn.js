import React from 'react';
import './AppSelectionBtn.css';

/**
 * Button for selecting fitting method
 * @param {string} caption - Caption that shows the type of transformation
 * @param {string} description - Displays more details about the transformation
 * @returns {*} AppSelectionBtn - .jsx Element
 * } 
 */
const AppSelectionBtn = ({
  caption,
  description
}) => (
  <div className="btn">
    <div className="btn-caption">{ caption }</div>
    <div className="btn-description">{ description }</div>
  </div>
);

export default AppSelectionBtn;