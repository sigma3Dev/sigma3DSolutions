import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import InfoBtn from '../InfoBtn/InfoBtn';
import BackToInputBtn from '../BackToInputBtn/BackToInputBtn';
import './Footer.css';

const GoClippy = require('react-icons/lib/go/clippy');

const FaDownload = require('react-icons/lib/fa/download');

const ClipboardIcon = React.createElement(GoClippy, null);
const DownloadIcon = React.createElement(FaDownload, null);
const tooltip = (
  <Tooltip id='tooltip' bsClass='tooltip'>
    <FormattedMessage id='Footer.tooltip.caption' defaultMessage='Copied!' />
  </Tooltip>
);

/**
 * footer bar for buttons
 * @returns {*} Footer - .jsx Element
 */
const Footer = ({
  copyText,
  handleSubmitClick,
  handleReturnClick,
  handleInfoClick,
  handleDownloadClick,
  isReturnBtnDisplayed,
  isCopyBtnDisplayed,
  isDownloadBtnDisplayed,
  isSubmitBtnDisplayed,
  isInfoBtnDisplayed,
}) => (
  <div className='footer'>
    <BackToInputBtn handleClick={handleReturnClick} isDisplayed={isReturnBtnDisplayed} />
    <div className='footer-center'>
      <button
        onClick={handleDownloadClick}
        className='download'
        title='Download'
        style={isDownloadBtnDisplayed ? { display: 'inline-block' } : { display: 'none' }}
      >
        {DownloadIcon}
      </button>
      <InfoBtn handleClick={handleInfoClick} isDisplayed={isInfoBtnDisplayed} />
      <CopyToClipboard text={copyText}>
        <OverlayTrigger placement='top' trigger='focus' overlay={tooltip} delayShow>
          <button
            className='copy'
            title='Copy to clipboard'
            style={isCopyBtnDisplayed ? { display: 'inline-block' } : { display: 'none' }}
          >
            {ClipboardIcon}
          </button>
        </OverlayTrigger>
      </CopyToClipboard>
    </div>
    <SubmitBtn handleClick={handleSubmitClick} isDisplayed={isSubmitBtnDisplayed} />
  </div>
);

Footer.propTypes = {
  copyText: PropTypes.string,
  handleSubmitClick: PropTypes.func,
  handleReturnClick: PropTypes.func,
  handleInfoClick: PropTypes.func,
  handleDownloadClick: PropTypes.func,
  isReturnBtnDisplayed: PropTypes.bool.isRequired,
  isSubmitBtnDisplayed: PropTypes.bool.isRequired,
  isInfoBtnDisplayed: PropTypes.bool.isRequired,
  isCopyBtnDisplayed: PropTypes.bool.isRequired,
  isDownloadBtnDisplayed: PropTypes.bool.isRequired,
};

export default Footer;
