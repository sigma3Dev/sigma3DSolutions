import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './InfoModal.css';

const InfoModal = ({
  header,
  body,
  handleClick
}) => {
  return (
    <div className='static-modal'>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>{ header }</Modal.Title>
        </Modal.Header>

        <Modal.Body>{ body }</Modal.Body>

        <Modal.Footer>
          <Button bsStyle='primary' onClick={handleClick}>OK</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default InfoModal;