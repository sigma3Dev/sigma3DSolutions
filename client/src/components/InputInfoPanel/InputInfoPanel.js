import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'react-bootstrap';
import './InputInfoPanel.css';

const InputInfoPanel = ({ body, isDisplayed }) => {
  const show = isDisplayed
    ? {
      whiteSpace: 'pre-wrap',
      fontSize: '0.6em',
    }
    : {
      display: 'none',
    };
  return (
    <Popover
      id='popover-basic'
      style={show}
      title='Input Info'
      placement='right'
      className='input-info-panel'
      positionLeft='80%'
      positionTop={17}
      arrowOffsetTop='30px'
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
