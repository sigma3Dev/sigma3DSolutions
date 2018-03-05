import React from 'react';
import './PointsInputTable3D6W.css';

const PointsInputTable3D6W = ({
  systemPoints,
  useWeight,
  checkboxesDisplay,
  handleChange
}) => {

  const tableRows = systemPoints.map((line, i) => {
    return (
      <tr key={ i }>
        <th className={'grey'}>{ i + 1 }</th>
        <th>{ line.x.toString() }</th>
        <th>{ line.y.toString() }</th>
        <th>{ line.z.toString() }</th>
        <th style={checkboxesDisplay}>
          <input 
            type="checkbox" 
            name={ 'x' + i } 
            id={ 'x' + i }
            onChange={handleChange}
            defaultChecked={true}
          />
        </th>
        <th style={checkboxesDisplay}>
          <input
            type="checkbox"
            name={ 'y' + i }
            id={ 'y' + i }
            onChange={handleChange}
            defaultChecked={true}
          />
        </th>
        <th style={checkboxesDisplay}>
          <input
            type="checkbox"
            name={ 'z' + i }
            id={ 'z' + i }
            onChange={handleChange}
            defaultChecked={true}
          />
        </th>
      </tr>
    )
  });

  return(
    <div className="points-table">
      <table>
        <thead>
          <tr className={'grey'}>
            <th>ID</th>
            <th>x</th>
            <th>y</th>
            <th>z</th>
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

export default PointsInputTable3D6W;