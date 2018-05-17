import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Footer from '../Footer/Footer';
import './TranslatePointAlongAxis.css';

/**
 * Shows input as well as results of parameter inversions
 * @param {*} - create on of these for each input, specify type in the braces
 * @returns {*} TranslatePointAlongAxis - .jsx Element
 */
const TranslatePointAlongAxis = ({
  handleSubmit,
  handleChange,
  handleReturn,
  values,
  textAreaDisplay,
}) => (
  <div className='translate-point-along-axis'>
    <h1>
      <FormattedMessage
        id='TranslatePointAlongAxis.caption.translatePointAlongAxisHeader'
        defaultMessage='Translate Point Along Axis'
      />
    </h1>
    <div className='input-display'>
      <form>
        <label htmlFor='x'>
          X:
          <input type='text' value={values.x} onChange={handleChange} name='x' autoComplete='off' />
        </label>
        <label htmlFor='y'>
          Y:
          <input type='text' value={values.y} onChange={handleChange} name='y' autoComplete='off' />
        </label>
        <label htmlFor='z'>
          Z:
          <input type='text' value={values.z} onChange={handleChange} name='z' autoComplete='off' />
        </label>
        <label htmlFor='i'>
          I:
          <input type='text' value={values.i} onChange={handleChange} name='i' autoComplete='off' />
        </label>
        <label htmlFor='j'>
          J:
          <input type='text' value={values.j} onChange={handleChange} name='j' autoComplete='off' />
        </label>
        <label htmlFor='k'>
          K:
          <input type='text' value={values.k} onChange={handleChange} name='k' autoComplete='off' />
        </label>
        <label htmlFor='amount'>
          Amount:
          <input
            type='text'
            value={values.amount}
            onChange={handleChange}
            name='amount'
            autoComplete='off'
          />
        </label>
      </form>
      <textarea value={textAreaDisplay} readOnly />
    </div>
    <Footer
      handleSubmitClick={handleSubmit}
      handleReturnClick={handleReturn}
      isSubmitBtnDisplayed
      isReturnBtnDisplayed
      isInfoBtnDisplayed={false}
      isCopyBtnDisplayed={false}
      isDownloadBtnDisplayed={false}
    />
  </div>
);

TranslatePointAlongAxis.propTypes = {
  handleSubmit: PropTypes.func,
  handleReturn: PropTypes.func,
  handleChange: PropTypes.func,
  values: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
  textAreaDisplay: PropTypes.string,
};

export default TranslatePointAlongAxis;
