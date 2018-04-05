import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import PointsInputDropzone from '../PointsInputDropzone/PointsInputDropzone';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import InfoBtn from '../InfoBtn/InfoBtn';
import InputInfoPanel from '../InputInfoPanel/InputInfoPanel';
import './ApplyTrafoInput.css';

const FaTrash = require('react-icons/lib/fa/trash-o');

const trashIcon = React.createElement(FaTrash, null);

const ApplyTrafoInput = ({
  handleSubmit,
  handleChange,
  handleDrop,
  handleInfoClick,
  handleDeleteDataInput,
  isInfoOpen,
  infoPanelText,
  points,
  transformation,
}) => {
  const tableRows = points.map((line, i) => (
    <tr key={`${line.x}:${i}`}>
      <th className='grey'>{i + 1}</th>
      <th>{line.x.toFixed(2)}</th>
      <th>{line.y.toFixed(2)}</th>
      <th>{line.z.toFixed(2)}</th>
    </tr>
  ));
  return (
    <div className='apply-trafo'>
      <h1>
        <FormattedMessage
          id='ApplyTrafoInput.caption.applyTrafoHeader'
          defaultMessage='Apply Transformation'
        />
        <div className='info-section'>
          <InfoBtn className='info-btn' handleClick={handleInfoClick} />
          <InputInfoPanel isDisplayed={isInfoOpen} body={infoPanelText} />
        </div>
      </h1>
      <div className='input-area'>
        <div className='trafo-params-input'>
          <form>
            <label htmlFor='tx'>
              Tx:
              <input
                type='text'
                value={transformation.tx ? transformation.tx : (0).toFixed(2)}
                onChange={handleChange}
                name='tx'
                autoComplete='off'
              />
            </label>
            <label htmlFor='ty'>
              Ty:
              <input
                type='text'
                value={transformation.ty ? transformation.ty : (0).toFixed(2)}
                onChange={handleChange}
                name='ty'
                autoComplete='off'
              />
            </label>
            <label htmlFor='tz'>
              Tz:
              <input
                type='text'
                value={transformation.tz ? transformation.tz : (0).toFixed(2)}
                onChange={handleChange}
                name='tz'
                autoComplete='off'
              />
            </label>
            <label htmlFor='q0'>
              Q0:
              <input
                type='text'
                value={transformation.q0 ? transformation.q0 : (0).toFixed(6)}
                onChange={handleChange}
                name='q0'
                autoComplete='off'
              />
            </label>
            <label htmlFor='q1'>
              Q1:
              <input
                type='text'
                value={transformation.q1 ? transformation.q1 : (0).toFixed(6)}
                onChange={handleChange}
                name='q1'
                autoComplete='off'
              />
            </label>
            <label htmlFor='q2'>
              Q2:
              <input
                type='text'
                value={transformation.q2 ? transformation.q2 : (0).toFixed(6)}
                onChange={handleChange}
                name='q2'
                autoComplete='off'
              />
            </label>
            <label htmlFor='q3'>
              Q3:
              <input
                type='text'
                value={transformation.q3 ? transformation.q3 : (0).toFixed(6)}
                onChange={handleChange}
                name='q3'
                autoComplete='off'
              />
            </label>
            <label htmlFor='m'>
              M:
              <input
                type='text'
                value={transformation.m ? transformation.m : (1).toFixed(6)}
                onChange={handleChange}
                name='m'
                autoComplete='off'
              />
            </label>
          </form>
        </div>
        <PointsInputDropzone onDrop={handleDrop} className='dropzone' />
      </div>
      <div className='points-table'>
        <table>
          <thead>
            <tr className='grey'>
              <th>
                <button
                  className='trash-icon grey'
                  title='Clear input'
                  onClick={handleDeleteDataInput}
                >
                  {trashIcon}
                </button>
              </th>
              <th>x</th>
              <th>y</th>
              <th>z</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
      <SubmitBtn handleClick={handleSubmit} autoFocus />
    </div>
  );
};

ApplyTrafoInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleInfoClick: PropTypes.func.isRequired,
  handleDeleteDataInput: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
  isInfoOpen: PropTypes.bool.isRequired,
  infoPanelText: PropTypes.object.isRequired,
  points: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)).isRequired,
  transformation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
    .isRequired,
};

export default ApplyTrafoInput;
