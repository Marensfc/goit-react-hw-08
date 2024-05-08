import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <ul className={css.navList}>
      <li>
        <NavLink to="/register" className={css.link}>
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className={css.link}>
          Log In
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
