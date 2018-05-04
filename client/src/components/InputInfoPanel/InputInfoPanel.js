import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'react-bootstrap';
import './InputInfoPanel.css';

const InputInfoPanel = ({ body, isDisplayed }) => {
  const show = isDisplayed
    ? {
      whiteSpace: 'pre-wrap',
      fontSize: '1.2em',
    }
    : {
      display: 'none',
    };
  return (
    <Popover
      id='popover-bottom'
      style={show}
      title='Input Info'
      placement='bottom'
      className='input-info-panel'
      positionLeft='42vw'
      positionTop='1vh'
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
