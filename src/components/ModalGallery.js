import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#___gatsby');

export default function ModalGallery({ isModalOpen, modalInnerElement, handleCloseModal }) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      closeTimeoutMS={200}
    >
      {modalInnerElement}
      <button
        className="ReactModal__Content--close"
        onClick={() => handleCloseModal()}
      >
        Close
      </button>
    </Modal>
  );
};
