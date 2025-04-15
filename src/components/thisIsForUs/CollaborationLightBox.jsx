import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const CollaborationLightBox = ({ show, onHide, image }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
    <Modal.Body>
      <img src={image} alt="Lightbox" className="img-fluid" />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default CollaborationLightBox
