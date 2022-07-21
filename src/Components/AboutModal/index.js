import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AboutModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

        {/* <button data-target="modal1" class='btn white btn-large modal-trigger' href="#modal1"><i class='fa fa-question'></i></button> */}
      {/* <Button variant="primary" className='position: absolute;' onClick={handleShow}>
        ?
      </Button> */}
      <button type="button" class="btn btn-primary btn-lg btn2" onClick={handleShow}>?</button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>HOW TO USE</Modal.Title>
        </Modal.Header>
        <Modal.Body>Instructions on how to use
            or video /demo
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default AboutModal;
