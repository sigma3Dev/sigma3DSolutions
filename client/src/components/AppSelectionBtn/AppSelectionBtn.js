import React from 'react';
import './AppSelectionBtn.css';

// button for selecting fitting method
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