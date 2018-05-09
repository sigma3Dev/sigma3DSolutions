import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import './QuatCardan.css';

const IoArrow = require('react-icons/lib/io/arrow-swap');

const arrowIcon = React.createElement(IoArrow, null);

const QuatCardan = ({
  handleChange,
  handleReturn,
  quat,
  cardan,
  handleQuatToCardanClick,
  handleCardanToQuatClick,
}) => (
  <div className='quat-cardan'>
    <h1>Quaternion {arrowIcon} Cardan</h1>
    <div className='inputs'>
      <div className='quat-input'>
        <form>
          <label htmlFor='Q0'>
            Q0:
            <input
              type='text'
              name='Q0'
              value={quat[0]}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          <label htmlFor='Q1'>
            Q1:
            <input
              type='text'
              name='Q1'
              value={quat[1]}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          <label htmlFor='Q2'>
            Q2:
            <input
              type='text'
              name='Q2'
              value={quat[2]}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          <label htmlFor='Q3'>
            Q3:
            <input
              type='text'
              name='Q3'
              value={quat[3]}
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
              value={cardan[0]}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          <label htmlFor='Ry'>
            Ry:
            <input
              type='text'
              name='Ry'
              value={cardan[1]}
              onChange={handleChange}
              autoComplete='off'
            />
          </label>
          <label htmlFor='Rz'>
            Rz:
            <input
              type='text'
              name='Rz'
              value={cardan[2]}
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
    <Footer
      handleReturnClick={handleReturn}
      isSubmitBtnDisplayed={false}
      isReturnBtnDisplayed
      isInfoBtnDisplayed={false}
      isCopyBtnDisplayed={false}
      isDownloadBtnDisplayed={false}
    />
  </div>
);

QuatCardan.propTypes = {
  handleQuatToCardanClick: PropTypes.func,
  handleCardanToQuatClick: PropTypes.func,
  handleChange: PropTypes.func,
  handleReturn: PropTypes.func,
  quat: PropTypes.arrayOf(PropTypes.string),
  cardan: PropTypes.arrayOf(PropTypes.string),
};

export default QuatCardan;
