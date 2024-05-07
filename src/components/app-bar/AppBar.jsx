import css from "./AppBar.module.css";
import { Link } from "react-router-dom";

const AppBar = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <nav className={css.navigation}>
          <Link to="/" className={css.link}>
            Home
          </Link>
          <ul className={css.navList}>
            <li>
              <Link to="/register" className={css.link}>
                Register
              </Link>
            </li>
            <li>
              <Link to="/login" className={css.link}>
                Log In
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppBar;
