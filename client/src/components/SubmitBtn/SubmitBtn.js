import React from 'react';
import './SubmitBtn.css';

const SubmitBtn = ({
  handleClick
}) => (
  <button className="submit-btn" onClick={handleClick}>
    Submit 🡆
  </button>
);

export default SubmitBtn;