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
  <div className="app-selection-btn">
    <div className="app-selection-btn-caption">{ caption }</div>
    <div className="app-selection-btn-description">{ description }</div>
  </div>
);

export default AppSelectionBtn;