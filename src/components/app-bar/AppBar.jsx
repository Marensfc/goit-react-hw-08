import css from "./AppBar.module.css";

import Navigation from "../navigation/Navigation";
import AuthNav from "../auth-nav/AuthNav";

const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation />
      <AuthNav />
    </header>
  );
};

export default AppBar;
