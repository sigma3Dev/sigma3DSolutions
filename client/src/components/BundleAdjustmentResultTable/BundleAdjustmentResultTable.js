import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Tabs, Tab } from 'react-bootstrap';
import './BundleAdjustmentResultTable.css';

const BundleAdjustmentResultTable = ({ result }) => {
  const stationIdsList = result[1].map(param => param.stationId);

  const tableRows = result[2].map((point, i) => {
    if (!stationIdsList.includes(point.id)) {
      return (
        <tr key={`${point.x}:${i}`}>
          <th className='pointId'>{i + 1}</th>
          <th>{point.id.toFixed(0)}</th>
          <th>{point.x.toFixed(3)}</th>
          <th>{point.y.toFixed(3)}</th>
          <th>{point.z.toFixed(3)}</th>
          <th>{point.stdev.toFixed(1)}</th>
        </tr>
      );
    }
    return false;
  });

  const paramTabs = result[1].map((param, i) => (
    <Tab key={param.stationId} eventKey={i + 1} title={param.stationId} className='bundle-tab'>
      <ul className='bundle-trafo-param-list'>
        <div className='param-list-left'>
          <li>
            <strong>Station ID:</strong> {param.stationId.toFixed(0)}
          </li>
          <li>
            <strong>M:</strong> {param.m.toFixed(1)}
          </li>
          <li>
            <strong>Tx:</strong> {param.tx.toFixed(1)}
          </li>
        </div>
        <div className='param-list-middle'>
          <li>
            <strong>Ty:</strong> {param.ty.toFixed(1)}
          </li>
          <li>
            <strong>Tz:</strong> {param.tz.toFixed(1)}
          </li>
          <li>
            <strong>Q0:</strong> {param.q0.toFixed(5)}
          </li>
        </div>
        <div className='param-list-right'>
          <li>
            <strong>Q1:</strong> {param.q1.toFixed(5)}
          </li>
          <li>
            <strong>Q2:</strong> {param.q2.toFixed(5)}
          </li>
          <li>
            <strong>Q3:</strong> {param.q3.toFixed(5)}
          </li>
        </div>
      </ul>
    </Tab>
  ));

  return (
    <div className='bundle-adjustment-result-table'>
      <div className='bundle-tabs'>
        <Tabs defaultActiveKey={1} className='bundle-trafo-params'>
          {paramTabs}
        </Tabs>
        <h2>
          <FormattedMessage
            id='BundleAdjustmentResultTable.label.baseStation'
            defaultMessage='Base Station: '
          />
          {result[0]}
        </h2>
      </div>
      <table>
        <thead>
          <tr className='caption'>
            <th className='pointId'>ID</th>
            <th>Name</th>
            <th>x</th>
            <th>y</th>
            <th>z</th>
            <th>StDev</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};

BundleAdjustmentResultTable.propTypes = {
  result: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number))])).isRequired,
};

export default BundleAdjustmentResultTable;
