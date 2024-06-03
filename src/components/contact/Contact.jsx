import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({
  contact: { name, number, id },
  openModal,
  setContactId,
}) => {
  const handleDelete = () => {
    openModal();
    setContactId(id);
  };

  return (
    <li className={css.contactListItem}>
      <div className={css.contactInfo}>
        <div className={css.contactNameWrap}>
          <FaUser />
          <p>{name}</p>
        </div>

        <div className={css.contactTelWrap}>
          <BsFillTelephoneFill />
          <p>{number}</p>
        </div>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
      <button type="button">Change</button>
    </li>
  );
};

export default Contact;
