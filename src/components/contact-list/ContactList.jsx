import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  selectError,
  selectLoading,
} from "../../redux/contacts/selectors";
import { useModal } from "../../utils/hooks/useModal";

import Contact from "../contact/Contact";
import Loader from "../loader/Loader";
import Error from "../error/Error";
import ConfirmModal from "../confirm-modal/ConfirmModal";
import { useState } from "react";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const { isOpen, openModal, closeModal } = useModal();
  const [contactId, setContactId] = useState(null);

  return (
    <>
      {loading && <Loader />}
      {error && <Error errorMessage={error} />}
      <ul className={css.contactList}>
        {filteredContacts.map(contact => {
          return (
            <Contact
              contact={contact}
              key={contact.id}
              openModal={openModal}
              setContactId={setContactId}
            />
          );
        })}
        <ConfirmModal
          isOpen={isOpen}
          closeModal={closeModal}
          contactId={contactId}
          setContactId={setContactId}
        />
      </ul>
    </>
  );
};

export default ContactList;
