'use client';

import { useRouter } from "next/navigation";
import { Modal } from "react-bootstrap";

const ModalWindow = ({ title, text }: {
  title: string,
  text: string,
}) => {
  const router = useRouter();
  const handleClose = () => router.back();

  return (
    <Modal
      centered
      size="sm"
      show={true}
      onHide={handleClose}
    >
      <div className="bg-dark p-3 rounded">
        <h2 className="mb-3">
          {title}
        </h2>

        <p className="m-0">
          {text}
        </p>
      </div>
    </Modal>
  );
};

export default ModalWindow;
