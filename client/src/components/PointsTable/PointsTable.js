import React from 'react';
import './PointsTable.css';

const PointsTable = ({
  systemPoints,
  useWeight,
  checkboxesDisplay,
  handleChange
}) => {

  const tableRows = systemPoints.map((line, i) => {
    return (
      <tr key={ i }>
        <th className="margin-right">{ i + 1 }</th>
        <th>{ line.x.toString() }</th>
        <th>{ line.y.toString() }</th>
        <th className="margin-right">{ line.z.toString() }</th>
        <th style={checkboxesDisplay}>
          <label>
            { 'x' + i }
            <input 
              type="checkbox" 
              name={ 'x' + i } 
              id={ 'x' + i }
              onChange={handleChange}
              defaultChecked={true}
            />
          </label>
        </th>
        <th style={checkboxesDisplay}>
          <label>
            { 'y' + i }
            <input
              type="checkbox"
              name={ 'y' + i }
              id={ 'y' + i }
              onChange={handleChange}
              defaultChecked={true}
            />
          </label>
        </th>
        <th style={checkboxesDisplay}>
          <label>
            { 'z' + i }
            <input
              type="checkbox"
              name={ 'z' + i }
              id={ 'z' + i }
              onChange={handleChange}
              defaultChecked={true}
            />
          </label>
        </th>
      </tr>
    )
  });

  return(
    <div className="points-table">
      <table>
        <thead>
          <tr>
            <th className="margin-right">ID</th>
            <th>x</th>
            <th>y</th>
            <th className="margin-right">z</th>
            <th style={checkboxesDisplay}>use x</th>
            <th style={checkboxesDisplay}>use y</th>
            <th style={checkboxesDisplay}>use z</th>
          </tr>
        </thead>
        <tbody>
          { tableRows }
        </tbody>
      </table>
    </div>
  )
}

export default PointsTable;