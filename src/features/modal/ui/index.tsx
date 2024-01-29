'use client';

import { useRouter } from "next/navigation";
import { Modal } from "react-bootstrap";

const ModalWindow = ({ title, text, onCloseLink }: {
  title: string,
  text: string,
  onCloseLink?: string,
}) => {
  const router = useRouter();
  // if modal was opened by direct link - redirect to 'onCloseLink'
  const handleClose = () => {
    return !!(onCloseLink?.trim().length)
      ? router.push(onCloseLink)
      : router.back();
  };

  return (
    <Modal
      centered
      size="sm"
      show={true}
      onHide={handleClose}
    >
      <div className="bg-dark p-3 rounded" data-bs-theme="dark">
        <div className="d-flex justify-content-between g-1">
          <h2 className="mb-3">
            {title}
          </h2>

          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={handleClose}
          />
        </div>

        <p className="m-0">
          {text}
        </p>
      </div>
    </Modal>
  );
};

export default ModalWindow;
