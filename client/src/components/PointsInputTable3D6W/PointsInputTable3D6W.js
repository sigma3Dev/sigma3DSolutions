import React from 'react';
import {FormattedMessage} from 'react-intl';
import './PointsInputTable3D6W.css';

/**
 * Table to display the input values from PointsInput, 
 * with checkboxes to select which points to use
 * @param {Array} systemPoints - array of points
 * @param {Object} checkboxesDisplay - style for checkboxes, if start-input: "display: none"
 * @param {function} handleChange - handles checkbox clicks
 * @param {function} handleDeleteDataInput - handles deletion of points input
 * @returns {*} PointsInputTable3D6W - .jsx Element
 */
const PointsInputTable3D6W = ({
  systemPoints,
  handleChange,
  handleDeleteDataInput,
  listOfUsedCoords
}) => {
  const FaTrash = require('react-icons/lib/fa/trash-o');
  const trashIcon = React.createElement(FaTrash, null);
  /** 
   * if there isn't any "useX", "useY" or "useZ", the checkboxes CSS is set to "display: none"
  */
  const showUseFields = () => !listOfUsedCoords || listOfUsedCoords.length === 0 ? {display: 'none'} : {};
  /** 
   * is the checkbox checked? returns true by default if start system, 
   * if target system returns the value for the coordinate 
   * @param {number} index - which point?
   * @param {number} coord - which coordinate of the point (x, y, or z)?
  */
  const isCheckBoxSet = (index, coord) => !listOfUsedCoords || listOfUsedCoords.length === 0 ? true : listOfUsedCoords[index][coord];

  const tableRows = systemPoints.map((line, i) => {
    return (
      <tr key={ i }>
        <th className={'grey'}>{ i + 1 }</th>
        <th>{ line.x.toString() }</th>
        <th>{ line.y.toString() }</th>
        <th>{ line.z.toString() }</th>
        <th style={showUseFields()}>
          <input 
            type="checkbox" 
            name={ 'x' + i } 
            id={ 'x' + i }
            onChange={handleChange}
            defaultChecked={isCheckBoxSet(i, 0)}
          />
        </th>
        <th style={showUseFields()}>
          <input
            type="checkbox"
            name={ 'y' + i }
            id={ 'y' + i }
            onChange={handleChange}
            defaultChecked={isCheckBoxSet(i, 1)}
          />
        </th>
        <th style={showUseFields()}>
          <input
            type="checkbox"
            name={ 'z' + i }
            id={ 'z' + i }
            onChange={handleChange}
            defaultChecked={isCheckBoxSet(i, 2)}
          />
        </th>
      </tr>
    )
  });
  return(
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
            <th style={showUseFields()}>
              <FormattedMessage
                id="PointsInputTable.label.useX"
                defaultMessage="use x"
              />
            </th>
            <th style={showUseFields()}>
              <FormattedMessage
                id="PointsInputTable.label.useY"
                defaultMessage="use y"
              />
            </th>
            <th style={showUseFields()}>
              <FormattedMessage
                id="PointsInputTable.label.useZ"
                defaultMessage="use z"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          { tableRows }
        </tbody>
      </table>
    </div>
  )
}

export default PointsInputTable3D6W;