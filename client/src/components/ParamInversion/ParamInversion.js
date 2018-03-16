import React from 'react';
import {FormattedMessage} from 'react-intl';
import Sidebar from '../Sidebar/Sidebar';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import './ParamInversion.css';

/**
 * Shows input as well as results of parameter inversions
 * @param {*} - create on of these for each input, specify type in the braces
 * @returns {*} ParamInversion - .jsx Element
 */
const ParamInversion = ({
  handleSubmit,
  handleChange,
  values,
  textAreaDisplay,
}) => (
  <div className="param-inversion">
    <Sidebar />
    <h1>
      <FormattedMessage
        id="ParamInversion.caption.paramInversionHeader"
        defaultMessage="Parameter Inversion"
      />
    </h1>
    <div className="input-display">
      <form>
        <label>
          Tx:
          <input type="text" value={values.tx} onChange={handleChange} name="tx" />
        </label>
        <label>
          Ty:
          <input type="text" value={values.ty} onChange={handleChange} name="ty" />
        </label>
        <label>
          Tz:
          <input type="text" value={values.tz} onChange={handleChange} name="tz" />
        </label>
        <label>
          Q0:
          <input type="text" value={values.q0} onChange={handleChange} name="q0" />
        </label>
        <label>
          Q1:
          <input type="text" value={values.q1} onChange={handleChange} name="q1" />
        </label>
        <label>
          Q2:
          <input type="text" value={values.q2} onChange={handleChange} name="q2" />
        </label>
        <label>
          Q3:
          <input type="text" value={values.q3} onChange={handleChange} name="q3" />
        </label>
        <label>
          M:
          <input type="text" value={values.m} onChange={handleChange} name="m" />
        </label>
      </form>
      <textarea spellCheck="false" value={textAreaDisplay} />
    </div>
    <SubmitBtn handleClick={handleSubmit} />
  </div>
)

export default ParamInversion;