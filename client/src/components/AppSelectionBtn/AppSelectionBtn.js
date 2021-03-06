import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import './AppSelectionBtn.css';

/**
 * Button for selecting fitting method
 * @param {string} caption - Caption that shows the type of transformation
 * @param {string} description - Displays more details about the transformation
 * @returns {*} AppSelectionBtn - .jsx Element
 */
const AppSelectionBtn = ({ label, link }) => (
  <Link to={link} className='btn-link'>
    <div className='app-selection-btn'>
      <div className='app-selection-btn-caption'>
        <FormattedMessage id={`AppSelectionBtn.caption.${label}`} defaultMessage='caption' />
      </div>
      <div className='s3d-icon' data-category={label} />
      <div className='app-selection-btn-description'>
        <FormattedMessage
          id={`AppSelectionBtn.description.${label}`}
          defaultMessage='description'
        />
      </div>
    </div>
  </Link>
);

AppSelectionBtn.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default AppSelectionBtn;
