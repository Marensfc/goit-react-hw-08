import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
    </nav>
  );
};

export default Navigation;
