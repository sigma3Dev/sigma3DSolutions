import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'react-bootstrap';
import './InputInfoPanel.css';

const InputInfoPanel = ({ body, isDisplayed }) => {
  const show = isDisplayed
    ? {
      whiteSpace: 'pre-wrap',
      fontSize: '1em',
    }
    : {
      display: 'none',
    };
  return (
    <Popover
      id='popover-basic'
      style={show}
      title='Input Info'
      placement='left'
      className='input-info-panel'
      positionLeft='76%'
      positionTop={14}
      arrowOffsetTop='10px'
    >
      {body}
    </Popover>
  );
};

InputInfoPanel.propTypes = {
  body: PropTypes.object.isRequired,
  isDisplayed: PropTypes.bool.isRequired,
};

export default InputInfoPanel;
