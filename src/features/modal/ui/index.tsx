'use client';

import { useState } from "react";
import {
  Modal,
  ModalDialog,
  ModalHeader,
  ModalTitle,
  ModalBody,
  // Button,
} from "react-bootstrap";

const ModalWindow = ({ title, text }: {
  title: string,
  text: string,
}) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>

      <Modal
        backdrop="static"
        centered
        show={show}
        onHide={handleClose}
      >
        <ModalDialog>
          <ModalHeader closeButton>
            <ModalTitle>
              {title}
            </ModalTitle>
          </ModalHeader>

          <ModalBody>
            <p>{text}</p>
          </ModalBody>
        </ModalDialog>
      </Modal>
    </div>
  );
};

export default ModalWindow;
