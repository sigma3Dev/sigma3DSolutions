import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Footer from '../Footer/Footer';
import './ApplyTrafoResult.css';

const ApplyTrafoResult = ({ result, handleReturnClick }) => {
  const tableRows = result.map((point, i) => (
    <tr key={`${point.x}:${i}`}>
      <th className='pointId'>{i + 1}</th>
      <th>{point.x.toFixed(5)}</th>
      <th>{point.y.toFixed(5)}</th>
      <th>{point.z.toFixed(5)}</th>
    </tr>
  ));

  return (
    <div className='apply-trafo-result'>
      <h1>
        <FormattedMessage
          id='ApplyTrafoResult.label.caption'
          defaultMessage='Transformation Results'
        />
      </h1>
      <div className='result-table'>
        <table>
          <thead>
            <tr className='caption'>
              <th className='pointId'>ID</th>
              <th>x</th>
              <th>y</th>
              <th>z</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
      <Footer
        handleReturnClick={handleReturnClick}
        isReturnBtnDisplayed
        isDownloadBtnDisplayed={false}
        isCopyBtnDisplayed={false}
        isInfoBtnDisplayed={false}
        isSubmitBtnDisplayed={false}
      />
    </div>
  );
};

ApplyTrafoResult.propTypes = {
  result: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)).isRequired,
  handleReturnClick: PropTypes.func.isRequired,
};

export default ApplyTrafoResult;
