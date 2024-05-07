// import css from "./App.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Layout from "../layout/Layout";
import HomePage from "../../pages/home-page/HomePage";
import AppBar from "../app-bar/AppBar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* </Layout> */}
    </>
  );
}

export default App;
