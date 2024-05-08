// import css from "./App.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Layout from "../Layout";
import HomePage from "../../pages/home-page/HomePage";
import RegisterPage from "../../pages/register-page/RegisterPage";
import LoginPage from "../../pages/login-page/LoginPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
