import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import './QuatCardan.css';

const IoArrow = require('react-icons/lib/io/arrow-swap');

const arrowIcon = React.createElement(IoArrow, null);

const QuatCardan = ({
  handleChange, points, handleQuatToCardanClick, handleCardanToQuatClick,
}) => (
  <div className='quat-cardan'>
    <h1>Quaternion {arrowIcon} Cardan</h1>
    <div className='inputs'>
      <div className='quat-input'>
        <form>
          <label htmlFor='q0'>
            Q0:
            <input
              type='text'
              name='q0'
              value={points.q0}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          <label htmlFor='q1'>
            Q1:
            <input
              type='text'
              name='q1'
              value={points.q1}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          <label htmlFor='q2'>
            Q2:
            <input
              type='text'
              name='q2'
              value={points.q2}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          <label htmlFor='q3'>
            Q3:
            <input
              type='text'
              name='q3'
              value={points.q3}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
        </form>
        <button onClick={handleQuatToCardanClick}>
          <FormattedMessage
            id='QuatCardan.button.quatToCardan'
            defaultMessage='Quaternion to Cardan'
          />
        </button>
      </div>
      <div className='cardan-input'>
        <form>
          <label htmlFor='Rx'>
            Rx:
            <input
              type='text'
              name='Rx'
              value={points.Rx}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          <label htmlFor='Ry'>
            Ry:
            <input
              type='text'
              name='Ry'
              value={points.Ry}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          <label htmlFor='Rz'>
            Rz:
            <input
              type='text'
              name='Rz'
              value={points.Rz}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
        </form>
        <button onClick={handleCardanToQuatClick}>
          <FormattedMessage
            id='QuatCardan.button.cardanToQuat'
            defaultMessage='Cardan to Quaternion'
          />
        </button>
      </div>
    </div>
  </div>
);

QuatCardan.propTypes = {
  handleQuatToCardanClick: PropTypes.func.isRequired,
  handleCardanToQuatClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  points: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
};

export default QuatCardan;
