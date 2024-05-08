import css from "./UserMenu.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <button onClick={() => console.log("Logout")}>Logout</button>
    </div>
  );
};

export default UserMenu;
