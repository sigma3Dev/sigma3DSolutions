import React from 'react';
import { Popover } from 'react-bootstrap';
import './InputInfoPanel.css';

const InputInfoPanel = ({
  body,
  isDisplayed,
}) => {
  const show = isDisplayed ? {
    whiteSpace: 'pre-wrap',
    fontSize: 0.51 + 'em'
  } : {
    display: 'none'
  }; 
  return (
    <Popover 
      id="popover-basic" 
      style={show}
      title="Input Info"
      placement="right"
      className="info-panel"
      positionLeft={ 80 + '%' }
      positionTop={17}
      arrowOffsetTop={ 30 + 'px'}
    >
      { body }
    </Popover>
  )
}

export default InputInfoPanel;