import React from 'react';
import {FormattedMessage} from 'react-intl';
import './SubmitBtn.css';

const SubmitBtn = ({
  handleClick
}) => (
  <button className="submit-btn" onClick={handleClick}>    
    <FormattedMessage
      id="SubmitBtn.label.caption"
      defaultMessage="Submit 🡆"
    />
  </button>
);

export default SubmitBtn;