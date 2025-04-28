import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./layout/Header";
import { PageContent } from "./layout/PageContent";
import { getVerify } from "./store/actions/clientAction";
import { useDispatch } from "react-redux";

function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  if (token) {
    console.log("Token found:", token);
    dispatch(getVerify(token));
  }

  return (
    <>
      <PageContent />
    </>
  );
}

export default App;
