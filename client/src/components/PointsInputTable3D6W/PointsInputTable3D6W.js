import React from 'react';
import {FormattedMessage} from 'react-intl';
import './PointsInputTable3D6W.css';

const PointsInputTable3D6W = ({
  systemPoints,
  useWeight,
  checkboxesDisplay,
  handleChange,
  handleDeleteDataInput,
}) => {
  const FaTrash = require('react-icons/lib/fa/trash-o');
  const trashIcon = React.createElement(FaTrash, null);

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
            <th style={checkboxesDisplay}>
              <FormattedMessage
                id="PointsInputTable.label.useX"
                defaultMessage="use x"
              />
            </th>
            <th style={checkboxesDisplay}>
              <FormattedMessage
                id="PointsInputTable.label.useY"
                defaultMessage="use y"
              />
            </th>
            <th style={checkboxesDisplay}>
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