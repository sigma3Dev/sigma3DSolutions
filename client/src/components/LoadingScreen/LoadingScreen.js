import React from 'react';
import { FormattedMessage } from 'react-intl';
import Sidebar from '../Sidebar/Sidebar';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const FaSpinner = require('react-icons/lib/fa/spinner');
  const spinnerIcon = React.createElement(FaSpinner, null);

  return (
    <div className="loading-screen">
      <Sidebar />
      <div className="loading-screen-display">
        <h1>
          <FormattedMessage
            id="LoadingScreen.label.calculating"
            defaultMessage="Calculating..."
          />
        </h1>
        <div className="fa-spinner">{ spinnerIcon }</div>
      </div>
    </div>
  )
}

export default LoadingScreen;