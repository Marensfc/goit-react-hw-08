import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "../PrivateRoute";
import { RestrictedRoute } from "../RestrictedRoute";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { useSelector } from "react-redux";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { useEffect } from "react";

import Layout from "../Layout";
import HomePage from "../../pages/home-page/HomePage";
import RegisterPage from "../../pages/register-page/RegisterPage";
import LoginPage from "../../pages/login-page/LoginPage";
import ContactsPage from "../../pages/contacts-page/ContactsPage";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      {isRefreshing ? (
        <p style={{ textAlign: "center", fontSize: "30px" }}>
          Refreshing user...
        </p>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Routes>
      )}
    </Layout>
  );
}

export default App;
