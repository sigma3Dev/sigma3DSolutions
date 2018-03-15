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
          <input type="text" value={values.Tx} onChange={handleChange} name="Tx" />
        </label>
        <label>
          Ty:
          <input type="text" value={values.Ty} onChange={handleChange} name="Ty" />
        </label>
        <label>
          Tz:
          <input type="text" value={values.Tz} onChange={handleChange} name="Tz" />
        </label>
        <label>
          Q0:
          <input type="text" value={values.Q0} onChange={handleChange} name="Q0" />
        </label>
        <label>
          Q1:
          <input type="text" value={values.Q1} onChange={handleChange} name="Q1" />
        </label>
        <label>
          Q2:
          <input type="text" value={values.Q2} onChange={handleChange} name="Q2" />
        </label>
        <label>
          Q3:
          <input type="text" value={values.Q3} onChange={handleChange} name="Q3" />
        </label>
        <label>
          M:
          <input type="text" value={values.M} onChange={handleChange} name="M" />
        </label>
      </form>
      <textarea spellcheck="false" value={textAreaDisplay} />
    </div>
    <SubmitBtn handleClick={handleSubmit} />
  </div>
)

export default ParamInversion;