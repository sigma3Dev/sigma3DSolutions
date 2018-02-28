import React from 'react';
import './PointsTable.css';

const PointsTable = ({
  systemPoints,
  useWeight
}) => {

  if (useWeight) {
    let onlyTarget = {
      display: 'none'
    };
  }

  const tableRows = systemPoints.map((line, i) => {
    return (
      <tr key={ i }>
        <th className="margin-right">{ i + 1 }</th>
        <th>{line.x.toString()}</th>
        <th>{line.y.toString()}</th>
        <th className="margin-right">{line.z.toString()}</th>
        <th style="onlyTarget">
          <input type="checkbox" name={'x' + i} className="only-target" />
          <label htmlFor={'x' + i} className="only-target">
            {'x' + i}
          </label>
        </th>
        <th className="only-target">
          <input type="checkbox" name={'y' + i} className="only-target" />
          <label htmlFor={'y' + i} className="only-target">
            {'y' + i}
          </label>
        </th>
        <th className="only-target">
          <input type="checkbox" name={'z' + i} className="only-target" />
          <label htmlFor={'z' + i} className="only-target">
            {'z' + i}
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
            <th className="only-target">use x</th>
            <th className="only-target">use y</th>
            <th className="only-target">use z</th>
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