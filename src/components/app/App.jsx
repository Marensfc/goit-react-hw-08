// import css from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "../PrivateRoute";
import { RestrictedRoute } from "../RestrictedRoute";

import Layout from "../Layout";
import HomePage from "../../pages/home-page/HomePage";
import RegisterPage from "../../pages/register-page/RegisterPage";
import LoginPage from "../../pages/login-page/LoginPage";
import ContactsPage from "../../pages/contacts-page/ContactsPage";

function App() {
  return (
    <Layout>
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
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
