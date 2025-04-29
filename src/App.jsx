import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./layout/Header";
import { PageContent } from "./layout/PageContent";
import { getVerify } from "./store/actions/clientAction";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "./store/actions/productAction";

function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  if (token) {
    console.log("Token found:", token);
    dispatch(getVerify(token));
  }

  const { categories } = useSelector((state) => state.product);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    if (categories.length === 0) {
      await dispatch(getCategories());
    }
  }

  return (
    <>
      <PageContent />
    </>
  );
}

export default App;
