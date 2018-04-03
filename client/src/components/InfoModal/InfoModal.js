import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import './InfoModal.css';

const InfoModal = ({ header, body, handleClick }) => (
  <div className='static-modal'>
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>{header}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{body}</Modal.Body>

      <Modal.Footer>
        <Button bsStyle='primary' onClick={handleClick}>
          OK
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
);

InfoModal.propTypes = {
  header: PropTypes.object.isRequired,
  body: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default InfoModal;
