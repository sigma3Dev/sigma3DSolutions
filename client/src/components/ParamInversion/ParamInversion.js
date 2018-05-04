import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Footer from '../Footer/Footer';
import './ParamInversion.css';

/**
 * Shows input as well as results of parameter inversions
 * @param {*} - create on of these for each input, specify type in the braces
 * @returns {*} ParamInversion - .jsx Element
 */
const ParamInversion = ({
  handleSubmit, handleChange, handleReturn, values, textAreaDisplay,
}) => (
  <div className='param-inversion'>
    <h1>
      <FormattedMessage
        id='ParamInversion.caption.paramInversionHeader'
        defaultMessage='Parameter Inversion'
      />
    </h1>
    <div className='input-display'>
      <form>
        <label htmlFor='tx'>
          Tx:
          <input
            type='text'
            value={values.tx}
            onChange={handleChange}
            name='tx'
            autoComplete='off'
          />
        </label>
        <label htmlFor='ty'>
          Ty:
          <input
            type='text'
            value={values.ty}
            onChange={handleChange}
            name='ty'
            autoComplete='off'
          />
        </label>
        <label htmlFor='tz'>
          Tz:
          <input
            type='text'
            value={values.tz}
            onChange={handleChange}
            name='tz'
            autoComplete='off'
          />
        </label>
        <label htmlFor='q0'>
          Q0:
          <input
            type='text'
            value={values.q0}
            onChange={handleChange}
            name='q0'
            autoComplete='off'
          />
        </label>
        <label htmlFor='q1'>
          Q1:
          <input
            type='text'
            value={values.q1}
            onChange={handleChange}
            name='q1'
            autoComplete='off'
          />
        </label>
        <label htmlFor='q2'>
          Q2:
          <input
            type='text'
            value={values.q2}
            onChange={handleChange}
            name='q2'
            autoComplete='off'
          />
        </label>
        <label htmlFor='q3'>
          Q3:
          <input
            type='text'
            value={values.q3}
            onChange={handleChange}
            name='q3'
            autoComplete='off'
          />
        </label>
        <label htmlFor='m'>
          M:
          <input type='text' value={values.m} onChange={handleChange} name='m' autoComplete='off' />
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
    />
  </div>
);

ParamInversion.propTypes = {
  handleSubmit: PropTypes.func,
  handleReturn: PropTypes.func,
  handleChange: PropTypes.func,
  values: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
  textAreaDisplay: PropTypes.string,
};

export default ParamInversion;
