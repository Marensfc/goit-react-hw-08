import { useState } from "react";

export const useModal = modalName => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return { [modalName]: { isOpen, openModal, closeModal } };
};
