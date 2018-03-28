import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import PointsInput from '../PointsInput/PointsInput';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import Sidebar from '../Sidebar/Sidebar';
import './ApplyTrafoInput.css';

const FaTrash = require('react-icons/lib/fa/trash-o');
const trashIcon = React.createElement(FaTrash, null);

const ApplyTrafoInput = ({
  handleSubmit,
  handleChange,
  handleDrop,
  handleDeleteDataInput,
  values,
}) => (
  <div className="apply-trafo">
    <Sidebar />
    <h1>
      <FormattedMessage
        id="ApplyTrafoInput.caption.applyTrafoHeader"
        defaultMessage="Apply Transformation"
      />
    </h1>
    <div className="input-area">
      <div className="trafo-params-input">
        <form>
          <label>
            Tx:
            <input type="text" value={values.params.tx} onChange={handleChange} name="tx" autoComplete="off" />
          </label>
          <label>
            Ty:
            <input type="text" value={values.params.ty} onChange={handleChange} name="ty" autoComplete="off" />
          </label>
          <label>
            Tz:
            <input type="text" value={values.params.tz} onChange={handleChange} name="tz" autoComplete="off" />
          </label>
          <label>
            Q0:
            <input type="text" value={values.params.q0} onChange={handleChange} name="q0" autoComplete="off" />
          </label>
          <label>
            Q1:
            <input type="text" value={values.params.q1} onChange={handleChange} name="q1" autoComplete="off" />
          </label>
          <label>
            Q2:
            <input type="text" value={values.params.q2} onChange={handleChange} name="q2" autoComplete="off" />
          </label>
          <label>
            Q3:
            <input type="text" value={values.params.q3} onChange={handleChange} name="q3" autoComplete="off" />
          </label>
          <label>
            M:
            <input type="text" value={values.params.m} onChange={handleChange} name="m" autoComplete="off" />
          </label>
        </form>
      </div>
      <PointsInput onDrop={handleDrop} className="dropzone" />
    </div>
    <div className="points-table">
      <table>
        <thead>
            <tr className="grey"> 
            <th> 
              <button  
                className="trash-icon grey"  
                title="Clear input" 
                onClick={ handleDeleteDataInput } 
              > 
                { trashIcon } 
              </button> 
            </th>
            <th>x</th>
            <th>y</th>
            <th>z</th>
          </tr>
        </thead>
        <tbody>
          {/*{ tableRows }*/}
        </tbody>
      </table>
    </div>
    <SubmitBtn handleClick={handleSubmit} autoFocus />
  </div>
)

ApplyTrafoInput.propTypes = {
  // handleSubmit: PropTypes.func.isRequired,
  // handleChange: PropTypes.func.isRequired,
  // handleDeleteDataInput: PropTypes.func.isRequired,
  // handleDrop: PropTypes.func.isRequired,
  // values: PropTypes.objectOf(PropTypes.oneOfType([
  //   PropTypes.number,
  //   PropTypes.string
  // ])).isRequired,
};

export default ApplyTrafoInput;
