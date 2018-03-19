import React from 'react';
import {FormattedMessage} from 'react-intl';
import Sidebar from '../Sidebar/Sidebar';
import './ParamInversion.css';

/**
 * Shows input as well as results of parameter inversions
 * @param {*} - create on of these for each input, specify type in the braces
 * @returns {*} ParamInversion - .jsx Element
 */
const ParamInversion = ({
  handleSubmit,
  handleChange,
  handlePaste,
  values,
  textAreaDisplay,
  pastedValue,
}) => (
  <div className="param-inversion">
    <Sidebar />
    <h1>
      <FormattedMessage
        id="ParamInversion.caption.paramInversionHeader"
        defaultMessage="Parameter Inversion"
      />
    </h1>
    <div className="paste-box">
      <label>
        Paste here:
        <input type="text" value={pastedValue} onChange={handlePaste} name="paste" autoComplete="off" />
      </label>
    </div>
    <div className="input-display">
      <form>
        <label>
          Tx:
          <input type="text" value={values.tx} onChange={handleChange} name="tx" autoComplete="off" />
        </label>
        <label>
          Ty:
          <input type="text" value={values.ty} onChange={handleChange} name="ty" autoComplete="off" />
        </label>
        <label>
          Tz:
          <input type="text" value={values.tz} onChange={handleChange} name="tz" autoComplete="off" />
        </label>
        <label>
          Q0:
          <input type="text" value={values.q0} onChange={handleChange} name="q0" autoComplete="off" />
        </label>
        <label>
          Q1:
          <input type="text" value={values.q1} onChange={handleChange} name="q1" autoComplete="off" />
        </label>
        <label>
          Q2:
          <input type="text" value={values.q2} onChange={handleChange} name="q2" autoComplete="off" />
        </label>
        <label>
          Q3:
          <input type="text" value={values.q3} onChange={handleChange} name="q3" autoComplete="off" />
        </label>
        <label>
          M:
          <input type="text" value={values.m} onChange={handleChange} name="m" autoComplete="off" />
        </label>
      </form>
      <textarea value={textAreaDisplay} readOnly />
    </div>
    <button onClick={handleSubmit} className="param-submit-btn" autoFocus>
      Submit 
    </button>
  </div>
)

export default ParamInversion;