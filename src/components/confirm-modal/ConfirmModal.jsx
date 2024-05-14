import css from "./ConfirmModal.module.css";
import Modal from "react-modal";

import { FaWindowClose } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

Modal.setAppElement("#root");

const ConfirmModal = ({ isOpen, closeModal, contactId }) => {
  const dispatch = useDispatch();

  const handleConfirmDelete = () => {
    closeModal();
    dispatch(deleteContact(contactId));
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Confirm modal"
      bodyOpenClassName={css.stopScrolling}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <p className={css.showingMessage}>
        Are you sure you want to delete this contact ?
      </p>
      <div className={css.modalButtons}>
        <button onClick={handleConfirmDelete} className={css.btnConfirm}>
          <FaCheckSquare size={40} color="green" />
        </button>
        <button onClick={() => closeModal()} className={css.btnClose}>
          <FaWindowClose size={40} color="red" />
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
