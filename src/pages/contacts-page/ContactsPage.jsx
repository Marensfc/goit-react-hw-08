import css from "./ContactsPage.module.css";

import ContactForm from "../../components/contact-form/ContactForm";
import SearchBox from "../../components/search-box/SearchBox";
import ContactList from "../../components/contact-list/ContactList";

const ContactsPage = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
};

export default ContactsPage;
