import React from 'react';
import { FormattedMessage } from 'react-intl';
import Navbar from '../Navbar/Navbar';
import './LoadingScreen.css';

const FaSpinner = require('react-icons/lib/fa/spinner');

const spinnerIcon = React.createElement(FaSpinner, null);

const LoadingScreen = () => (
  <div className='loading-screen'>
    <Navbar />
    <h1>
      <FormattedMessage id='LoadingScreen.label.calculating' defaultMessage='Calculating...' />
    </h1>
    <div className='fa-spinner'>{spinnerIcon}</div>
  </div>
);

export default LoadingScreen;
