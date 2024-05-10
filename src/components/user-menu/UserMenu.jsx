import css from "./UserMenu.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { clearContacts } from "../../redux/contacts/slice";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(clearContacts([]));
    dispatch(logout());
  };

  return (
    <div className={css.userMenuWrapper}>
      <p className={css.greetingMessage}>Welcome, {user.name}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
