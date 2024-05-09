import css from "./HomePage.module.css";

import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const HomePage = () => {
  const contacts = useSelector(selectFilteredContacts);
  console.log(contacts);

  return <h1 className={css.homePageTitle}>Welcome to home page!</h1>;
};

export default HomePage;
